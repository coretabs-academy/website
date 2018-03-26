from django.db import models


class EmailAddressManager(models.Manager):

    def add_email(self, user, email, **kwargs):
        confirm = kwargs.pop("confirm", False)
        email_address = self.create(user=user, email=email, **kwargs)
        if confirm and not email_address.verified:
            email_address.send_confirmation()
        return email_address


class EmailConfirmationManager(models.Manager):

    def delete_expired_confirmations(self):
        for confirmation in self.all():
            if confirmation.key_expired():
                confirmation.delete()
