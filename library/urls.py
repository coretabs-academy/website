from django.urls import path, include

from . import api


api_urls = [
    path('lessons/', api.LessonListAPIView.as_view(), name='lesson_list_api'),
    path('lessons/add/', api.LessonAddAPIView.as_view(), name='lesson_add_api'),
    path('lessons/edit/<int:pk>/', api.LessonEditAPIView.as_view(), name='lesson_edit_api'),
    path('lessons/delete/<int:pk>/', api.LessonDeleteAPIView.as_view(), name='lesson_delete_api'),
    path('lessons/show/<int:pk>/', api.LessonShowAPIView.as_view(), name='lesson_show_api'),
    path('courses/', api.CourseListAPIView.as_view(), name='course_list_api'),
    path('courses/add/', api.CourseAddAPIView.as_view(), name='course_add_api'),
    path('courses/edit/<int:pk>/', api.CourseEditAPIView.as_view(), name='course_edit_api'),
    path('courses/delete/<int:pk>/', api.CourseDeleteAPIView.as_view(), name='course_delete_api'),
    path('courses/show/<int:pk>/', api.CourseShowAPIView.as_view(), name='course_show_api'),
    path('courses_lessons/', api.CourseLessonListAPIView.as_view(), name='course_lesson_list_api'),
    path('courses_lessons/add/', api.CourseLessonAddAPIView.as_view(), name='course_lesson_add_api'),
    path('courses_lessons/edit/<int:pk>/', api.CourseLessonEditAPIView.as_view(), name='course_lesson_edit_api'),
    path('courses_lessons/delete/<int:pk>/', api.CourseLessonDeleteAPIView.as_view(), name='course_lesson_delete_api'),
    path('courses_lessons/show/<int:pk>/', api.CourseLessonShowAPIView.as_view(), name='course_lesson_show_api'),
    path('tracks/', api.TrackListAPIView.as_view(), name='tracks_list_api'),
    path('tracks/add/', api.TrackAddAPIView.as_view(), name='tracks_add_api'),
    path('tracks/edit/<int:pk>/', api.TrackEditAPIView.as_view(), name='tracks_edit_api'),
    path('tracks/delete/<int:pk>/', api.TrackDeleteAPIView.as_view(), name='tracks_delete_api'),
    path('tracks/show/<int:pk>/', api.TrackShowAPIView.as_view(), name='tracks_show_api'),
    path('tracks_courses/', api.TrackCourseListAPIView.as_view(), name='track_course_list_api'),
    path('tracks_courses/add/', api.TrackCourseAddAPIView.as_view(), name='track_course_add_api'),
    path('tracks_courses/edit/<int:pk>/', api.TrackCourseEditAPIView.as_view(), name='track_course_edit_api'),
    path('tracks_courses/delete/<int:pk>/', api.TrackCourseDeleteAPIView.as_view(), name='track_course_delete_api'),
    path('tracks_courses/show/<int:pk>/', api.TrackCourseShowAPIView.as_view(), name='track_course_show_api'),
]

urlpatterns = [
    path('v1/', include(api_urls))
]
