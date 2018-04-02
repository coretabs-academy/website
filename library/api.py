from rest_framework import generics

from . import serializers
from . import models


class LessonListAPIView(generics.ListAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class LessonAddAPIView(generics.CreateAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class LessonShowAPIView(generics.RetrieveAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class LessonEditAPIView(generics.UpdateAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class LessonDeleteAPIView(generics.DestroyAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class CourseListAPIView(generics.ListAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseAddAPIView(generics.CreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseShowAPIView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseEditAPIView(generics.UpdateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseDeleteAPIView(generics.DestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseLessonListAPIView(generics.ListAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class CourseLessonAddAPIView(generics.CreateAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class CourseLessonShowAPIView(generics.RetrieveAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class CourseLessonEditAPIView(generics.UpdateAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class CourseLessonDeleteAPIView(generics.DestroyAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class TrackListAPIView(generics.ListAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackAddAPIView(generics.CreateAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackShowAPIView(generics.RetrieveAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackEditAPIView(generics.UpdateAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackDeleteAPIView(generics.DestroyAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackCourseListAPIView(generics.ListAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer


class TrackCourseAddAPIView(generics.CreateAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer


class TrackCourseShowAPIView(generics.RetrieveAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer


class TrackCourseEditAPIView(generics.UpdateAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer


class TrackCourseDeleteAPIView(generics.DestroyAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer
