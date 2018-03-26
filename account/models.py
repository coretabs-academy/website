import datetime

from django.db import models, transaction
from django.contrib.auth import get_user_model
from django.contrib.sites.models import Site

from django.utils import timezone
from django.shortcuts import reverse

from django.db.models.signals import post_save
from django.dispatch import receiver

from django.utils.translation import ugettext_lazy as _

from account.managers import EmailAddressManager, EmailConfirmationManager
import account.hooks as hookset
import account.conf as settings


User = get_user_model()


class Account(models.Model):

    user = models.OneToOneField(User, related_name="account", verbose_name=_("user"), on_delete=models.CASCADE)

    @classmethod
    def create(cls, request=None, **kwargs):
        create_email = kwargs.pop("create_email", True)
        account = cls(**kwargs)
        account.save()

        # if create_email and account.user.email:
        #     EmailAddress.objects.add_email(account.user, account.user.email, **kwargs)
        return account

    def __str__(self):
        return str(self.user)


# @receiver(post_save, sender=User)
# def user_post_save(sender, **kwargs):
#
#     # Disable post_save during manage.py loaddata
#     if kwargs.get("raw", False):
#         return False
#
#     user, created = kwargs["instance"], kwargs["created"]
#     if created:
#         Account.create(user=user)


class EmailAddress(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, unique=True)
    verified = models.BooleanField(_("verified"), default=False)

    objects = EmailAddressManager()

    class Meta:
        verbose_name = _("email address")
        verbose_name_plural = _("email addresses")

    def __str__(self):
        return "{0} ({1})".format(self.email, self.user)

    def send_confirmation(self, **kwargs):
        confirmation = EmailConfirmation.create(self)
        confirmation.send(**kwargs)
        return confirmation

    def send_thanks_email(self):
        ctx = {
            "email_address": self.email,
            "user": self.user.username,
        }
        hookset.send_thanks_email([self.email], ctx)

    def change(self, new_email, confirm=True):
        with transaction.atomic():
            self.user.email = new_email
            self.user.save()
            self.email = new_email
            self.verified = False
            self.save()
            if confirm:
                self.send_confirmation()


class EmailConfirmation(models.Model):

    email_address = models.ForeignKey(EmailAddress, on_delete=models.CASCADE)
    created = models.DateTimeField(default=timezone.now)
    sent = models.DateTimeField(null=True)
    key = models.CharField(max_length=64, unique=True)

    objects = EmailConfirmationManager()

    class Meta:
        verbose_name = _("email confirmation")
        verbose_name_plural = _("email confirmations")

    def __str__(self):
        return "confirmation for {0}".format(self.email_address)

    @classmethod
    def create(cls, email_address):
        key = hookset.generate_email_confirmation_token(email_address.email)
        return cls._default_manager.create(email_address=email_address, key=key)

    def key_expired(self):
        expiration_date = self.sent + datetime.timedelta(days=settings.CONFIRMATION_EXPIRE_DAYS)
        return expiration_date <= timezone.now()
    key_expired.boolean = True

    def confirm(self):
        if not self.key_expired() and not self.email_address.verified:
            email_address = self.email_address
            email_address.verified = True
            email_address.save()
            return email_address

    def send(self, **kwargs):
        current_site = kwargs["site"] if "site" in kwargs else Site.objects.get_current()
        protocol = getattr(settings, "DEFAULT_HTTP_PROTOCOL", "http")
        activate_url = "{0}://{1}{2}".format(
            protocol,
            current_site.domain,
            reverse(settings.EMAIL_CONFIRMATION_URL, args=[self.key])
        )
        ctx = {
            "email_address": self.email_address,
            "user": self.email_address.user,
            "activate_url": activate_url,
            "current_site": current_site,
            "key": self.key,
        }
        hookset.send_confirmation_email([self.email_address.email], ctx)
        self.sent = timezone.now()
        self.save()
