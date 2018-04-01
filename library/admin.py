from django.contrib import admin
from . import models


admin.site.register(models.Lesson)
admin.site.register(models.CourseLesson)
admin.site.register(models.Course)
admin.site.register(models.Track)
admin.site.register(models.TrackCourse)
