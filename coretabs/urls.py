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
from django.views.generic import TemplateView

# from account.forms import LoginUsernameForm
from . import views

urlpatterns = [
    # path('', TemplateView.as_view(template_name='home.html', extra_context={'form': LoginUsernameForm}), name='home'),
    path('', views.HomeView.as_view(), name='home'),
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
    path('lang/set/', include('django.conf.urls.i18n'), name='set_language'),
    path('<category>/', views.category_view, name='category'),
    path('<category>/<int:id>/', views.tutorial_view, name='tutorial'),
    path('<category>/<projects>/',views.project_view, name='projects'),
    path('<category>/<projects>/<int:id>/',views.project_tutorial_view, name='project')
]

