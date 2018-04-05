from django.db import models
from django.utils.translation import ugettext_lazy as _
from library.utils import get_unique_slug
from django.contrib.auth.models import User


class Lesson(models.Model):
    YT_VIDEO = 'YT_VIDEO'
    MARKDOWN = 'MARKDOWN'
    QUIZ = 'QUIZ'

    TYPE_CHOICES = (
        (YT_VIDEO, 'yt-video'),
        (MARKDOWN, 'markdown'),
        (QUIZ, 'quiz'),
    )

    title = models.CharField(max_length=60, verbose_name=_('Title'))
    slug = models.SlugField(max_length=140, unique=True, blank=True, allow_unicode=True, verbose_name=_('Slug'))
    type = models.CharField(max_length=10, choices=TYPE_CHOICES, default=MARKDOWN, verbose_name=_('Type'))
    url = models.URLField(verbose_name=_('URL'))
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, verbose_name=_('User'))

    class Meta:
        verbose_name = _('Lesson')
        verbose_name_plural = _('Lessons')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super().save()

    def __str__(self):
        return f'{self.title}'


class Course(models.Model):
    title = models.CharField(max_length=60, verbose_name=_('Title'))
    slug = models.SlugField(max_length=140, unique=True, blank=True, allow_unicode=True, verbose_name=_('Slug'))
    lessons = models.ManyToManyField(Lesson, through='CourseLesson', related_name='courses', verbose_name=_('Lessons'))
    pub_date = models.DateTimeField(auto_now=True, verbose_name=_('Publication Date'))

    class Meta:
        verbose_name = _('Course')
        verbose_name_plural = _('Courses')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super().save()

    def __str__(self):
        return f'{self.title}'


class CourseLesson(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.DO_NOTHING, verbose_name=_('Lesson'))
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING, verbose_name=_('Course'))
    order = models.IntegerField(verbose_name=_('Order'))

    class Meta:
        verbose_name = _('Course and Lesson')
        verbose_name_plural = _('Courses and Lessons')


class Track(models.Model):
    title = models.CharField(max_length=60, verbose_name=_('Title'))
    slug = models.SlugField(max_length=140, unique=True, blank=True, allow_unicode=True, verbose_name=_('Slug'))
    courses = models.ManyToManyField(Course, through='TrackCourse', related_name='tracks', verbose_name=_('Courses'))

    class Meta:
        verbose_name = _('Track')
        verbose_name_plural = _('Tracks')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super().save()

    def __str__(self):
        return f'{self.title}'


class TrackCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING, verbose_name=_('Course'))
    track = models.ForeignKey(Track, on_delete=models.DO_NOTHING, verbose_name=_('Track'))
    order = models.IntegerField(verbose_name=_('Order'))

    class Meta:
        verbose_name = _('Track and Course')
        verbose_name_plural = _('Tracks and Courses')
