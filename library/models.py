from django.db import models
from django.utils.translation import ugettext_lazy as _


class Book(models.Model):
    title = models.CharField(max_length=50, verbose_name=_('Title'))
    pub_date = models.DateTimeField(auto_now=True, verbose_name=_('Publication Date'))

    class Meta:
        verbose_name = _('Book')
        verbose_name_plural = _('Books')
