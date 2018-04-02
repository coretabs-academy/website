from rest_framework import generics

from . import serializers
from . import models


class LessonListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class LessonRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Lesson.objects.all()
    serializer_class = serializers.LessonSerializer


class CourseListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer


class CourseLessonListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class CourseLessonRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CourseLesson.objects.all()
    serializer_class = serializers.CourseLessonSerializer


class TrackListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Track.objects.all()
    serializer_class = serializers.TrackSerializer


class TrackCourseListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer


class TrackCourseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.TrackCourse.objects.all()
    serializer_class = serializers.TrackCourseSerializer
