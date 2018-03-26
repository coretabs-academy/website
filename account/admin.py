from django.contrib import admin

from account.models import (
    Account,
    EmailAddress,
)


class AccountAdmin(admin.ModelAdmin):

    raw_id_fields = ["user"]


class EmailAddressAdmin(AccountAdmin):

    list_display = ["user", "email", "verified"]
    search_fields = ["email", "user__username"]


admin.site.register(Account, AccountAdmin)
admin.site.register(EmailAddress, EmailAddressAdmin)