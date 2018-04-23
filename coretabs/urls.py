"""coretabs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from account.forms import SettingsForm
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    # path('', views.HomeView.as_view(extra_context={'settings_form': SettingsForm}), name='home'),
    path('', TemplateView.as_view(template_name='index.html'), name=''),
    # path('admin/', admin.site.urls),
    # path('account/', include('account.urls')),
    # path('lang/set/', include('django.conf.urls.i18n'), name='set_language'),
    # path('fullstack/', TemplateView.as_view(template_name='fullstack/index.html'), name='fullstack'),
    # path('frontend/', TemplateView.as_view(template_name='frontend/index.html'), name='frontend'),
    # path('frontend/<category>/', views.category_view, name='category'),
    # path('frontend/<category>/<int:id>/', views.tutorial_view, name='tutorial'),
    # path('frontend/<category>/<projects>/',views.project_view, name='projects'),
    # path('frontend/<category>/<projects>/<int:id>/',views.project_tutorial_view, name='project'),
    # path('contributors/', views.contributors, name='contributors'),
]

# handler404 = 'coretabs.views.handler404'
# handler500 = 'coretabs.views.handler500'
