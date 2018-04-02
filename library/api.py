from rest_framework import generics

from . import serializers
from . import models


class LessonListAPIView(generics.ListAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class LessonRetrieveAPIView(generics.RetrieveAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class CourseListAPIView(generics.ListAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseRetrieveAPIView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseLessonListAPIView(generics.ListAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class CourseLessonRetrieveAPIView(generics.RetrieveAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class TrackListAPIView(generics.ListAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackRetrieveAPIView(generics.RetrieveAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackCourseListAPIView(generics.ListAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer


class TrackCourseRetrieveAPIView(generics.RetrieveAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer
