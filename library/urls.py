from django.urls import path, include

from . import api


api_urls = [
    path('lessons/',
         api.LessonListAPIView.as_view(),
         name='lesson_list_create_api'),

    path('lessons/<int:pk>/',
         api.LessonRetrieveAPIView.as_view(),
         name='lesson_retrieve_update_destroy_api'),

    path('courses/',
         api.CourseListAPIView.as_view(),
         name='course_list_create_api'),

    path('courses/<int:pk>/',
         api.CourseRetrieveAPIView.as_view(),
         name='course_retrieve_update_destroy_api'),

    path('courses_lessons/',
         api.CourseLessonListAPIView.as_view(),
         name='course_lesson_list_create_api'),

    path('courses_lessons/<int:pk>/',
         api.CourseLessonRetrieveAPIView.as_view(),
         name='course_lesson_retrieve_update_destroy_api'),

    path('tracks/',
         api.TrackListAPIView.as_view(),
         name='tracks_list_create_api'),

    path('tracks/<int:pk>/',
         api.TrackRetrieveAPIView.as_view(),
         name='tracks_retrieve_update_destroy_api'),

    path('tracks_courses/',
         api.TrackCourseListAPIView.as_view(),
         name='track_course_list_create_api'),

    path('tracks_courses/<int:pk>/',
         api.TrackCourseRetrieveAPIView.as_view(),
         name='track_course_retrieve_update_destroy_api'),
]

urlpatterns = [
    path('v1/', include(api_urls))
]
