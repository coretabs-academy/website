from django.utils.translation import ugettext_lazy as _
from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site

from django.http import Http404

from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters

from django.views.generic import FormView
from django.shortcuts import redirect, render

from account.models import Account, EmailAddress
from account.forms import SignupForm
import account.conf as settings


class PasswordMixin(object):
    messages = {
        "password_changed": {
            "level": messages.SUCCESS,
            "text": _("Password successfully changed.")
        }
    }

    def change_password(self, form):
        user = self.get_user()
        user.set_password(form.cleaned_data[self.form_password_field])
        user.save()
        return user

    def after_change_password(self):
        messages.add_message(
            self.request,
            self.messages["password_changed"]["level"],
            self.messages["password_changed"]["text"]
        )

    def send_password_email(self, user):
        # TODO: send email on password change
        pass


class SignupView(PasswordMixin, FormView):

    template_name = "account/signup.html"
    form_class = SignupForm

    messages = {
        "email_confirmation_sent": {
            "level": messages.INFO,
            "text": _("Confirmation email sent to {email}.")
        },
        "thanks": {
            "level": messages.INFO,
            "text": _("Thank you for registering")
        }
    }

    def __init__(self, *args, **kwargs):
        self.created_user = None
        super().__init__(*args, **kwargs)

    @method_decorator(sensitive_post_parameters())
    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        self.request = request
        return super().dispatch(request, *args, **kwargs)

    def get(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect(settings.LOGIN_REDIRECT_URL)
        return super().get(*args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["signupform"]=context["form"]
        return context

    def post(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            raise Http404()
        return super().post(*args, **kwargs)

    def form_valid(self, form):
        self.created_user = self.create_user(form, commit=False)
        self.created_user._disable_account_creation = True
        self.created_user.is_active = False
        self.created_user.save()

        email_address = self.create_email_address()
        self.create_account()

        # self.send_email_confirmation(email_address)
        self.send_thanks_email(email_address)

        # return self.confirm_response()
        return self.thanks_response(form)

    def create_user(self, form, commit=True):
        User = get_user_model()
        user = User()

        user.username = form.cleaned_data.get("username")
        user.email = form.cleaned_data["email"].strip()
        password = form.cleaned_data.get("password")

        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()
        if commit:
            user.save()
        return user

    def create_account(self):
        return Account.create(request=self.request, user=self.created_user, create_email=False)

    def create_email_address(self):
        return EmailAddress.objects.add_email(self.created_user, self.created_user.email)

    def send_email_confirmation(self, email_address):
        email_address.send_confirmation(site=get_current_site(self.request))

    # TODO: dont forget this
    def send_thanks_email(self, email_address):
        email_address.send_thanks_email()

    # TODO: edit this shit
    def confirm_response(self):
        template_name = self.template_name_email_confirmation_sent
        response_kwargs = {
            "request": self.request,
            "template": template_name,
            "context": {
                "email": self.created_user.email,
                "success_url": self.get_success_url(),
            }
        }
        return self.response_class(**response_kwargs)

    def thanks_response(self, form):
        messages.add_message(
            self.request,
            self.messages["thanks"]["level"],
            self.messages["thanks"]["text"]
        )
        return render(self.request, self.template_name, {'signupform': form})