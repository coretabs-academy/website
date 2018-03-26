import hashlib
import random

from django.core.mail import send_mail
from django.template.loader import render_to_string

import account.conf as settings


def send_thanks_email(to, ctx):
    subject = render_to_string("account/email/thanks_subject.txt", ctx)
    message = render_to_string("account/email/thanks_message.txt", ctx)
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, to)

def send_invitation_email(to, ctx):
    subject = render_to_string("account/email/invite_user_subject.txt", ctx)
    message = render_to_string("account/email/invite_user.txt", ctx)
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, to)


def send_confirmation_email(to, ctx):
    subject = render_to_string("account/email/email_confirmation_subject.txt", ctx)
    subject = "".join(subject.splitlines())  # remove superfluous line breaks
    message = render_to_string("account/email/email_confirmation_message.txt", ctx)
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, to)


def send_password_change_email(to, ctx):
    subject = render_to_string("account/email/password_change_subject.txt", ctx)
    subject = "".join(subject.splitlines())
    message = render_to_string("account/email/password_change.txt", ctx)
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, to)


def send_password_reset_email(to, ctx):
    subject = render_to_string("account/email/password_reset_subject.txt", ctx)
    subject = "".join(subject.splitlines())
    message = render_to_string("account/email/password_reset.txt", ctx)
    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, to)


def generate_random_token(extra=None, hash_func=hashlib.sha256):
    if extra is None:
        extra = []
    bits = extra + [str(random.SystemRandom().getrandbits(512))]
    return hash_func("".join(bits).encode("utf-8")).hexdigest()


def generate_email_confirmation_token(email):
    return generate_random_token([email])


def get_user_credentials(form, identifier_field):
    return {
        "username": form.cleaned_data[identifier_field],
        "password": form.cleaned_data["password"],
    }
