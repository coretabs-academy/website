from django.db import models

from library.utils import get_unique_slug


class Lesson(models.Model):
    YT_VIDEO = 'YT_VIDEO'
    MARKDOWN = 'MARKDOWN'
    QUIZ = 'QUIZ'

    TYPE_CHOICES = (
        (YT_VIDEO, 'yt-video'),
        (MARKDOWN, 'markdown'),
        (QUIZ, 'quiz'),
    )

    title = models.CharField(max_length=60)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES, default=MARKDOWN)
    url = models.URLField()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super().save()

    def __str__(self):
        return f'{self.title}'


class Course(models.Model):
    title = models.CharField(max_length=60)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    lessons = models.ManyToManyField(Lesson, through='CourseLesson', related_name='courses')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super().save()

    def __str__(self):
        return f'{self.title}'


class CourseLesson(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.DO_NOTHING)
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING)
    order = models.IntegerField()


class Track(models.Model):
    title = models.CharField(max_length=60)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    courses = models.ManyToManyField(Course, through='TrackCourse', related_name='tracks')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = get_unique_slug(self, 'title', 'slug')
        super().save()

    def __str__(self):
        return f'{self.title}'


class TrackCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING)
    track = models.ForeignKey(Track, on_delete=models.DO_NOTHING)
    order = models.IntegerField()

