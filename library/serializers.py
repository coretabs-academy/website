from rest_framework import serializers
from . import models


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Lesson
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = '__all__'


class CourseLessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseLesson
        fields = '__all__'


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Track
        fields = '__all__'


class TrackCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TrackCourse
        fields = '__all__'

