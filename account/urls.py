from django.urls import path
from django.conf.urls import url

from account.views import SignupView
from django.views.generic import TemplateView

urlpatterns = [
    # path("signup/", SignupView.as_view(), name="account_signup"),
    url(r"^confirm_email/(?P<key>\w+)/$", TemplateView.as_view(), name="account_confirm_email"),
]
