from django.urls import path, include

from . import api


api_urls = [
    path('lessons/',
         api.LessonListCreateAPIView.as_view(),
         name='lesson_list_create_api'),

    path('lessons/<int:pk>/',
         api.LessonRetrieveUpdateDestroyAPIView.as_view(),
         name='lesson_retrieve_update_destroy_api'),

    path('courses/',
         api.CourseListCreateAPIView.as_view(),
         name='course_list_create_api'),

    path('courses/<int:pk>/',
         api.CourseRetrieveUpdateDestroyAPIView.as_view(),
         name='course_retrieve_update_destroy_api'),

    path('courses_lessons/',
         api.CourseLessonListCreateAPIView.as_view(),
         name='course_lesson_list_create_api'),

    path('courses_lessons/<int:pk>/',
         api.CourseLessonRetrieveUpdateDestroyAPIView.as_view(),
         name='course_lesson_retrieve_update_destroy_api'),

    path('tracks/',
         api.TrackListCreateAPIView.as_view(),
         name='tracks_list_create_api'),

    path('tracks/<int:pk>/',
         api.TrackRetrieveUpdateDestroyAPIView.as_view(),
         name='tracks_retrieve_update_destroy_api'),

    path('tracks_courses/',
         api.TrackCourseListCreateAPIView.as_view(),
         name='track_course_list_create_api'),

    path('tracks_courses/<int:pk>/',
         api.TrackCourseRetrieveUpdateDestroyAPIView.as_view(),
         name='track_course_retrieve_update_destroy_api'),
]

urlpatterns = [
    path('v1/', include(api_urls))
]
