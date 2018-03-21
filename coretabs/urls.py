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
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html')),
    path('admin/', admin.site.urls),
    path('fullstack/', TemplateView.as_view(template_name='fullstack/index.html')),
    path('git/', TemplateView.as_view(template_name='git/git.html')),
    path('html_css/', TemplateView.as_view(template_name='html_css/html_css.html')),
    path('javascript/', TemplateView.as_view(template_name='javascript/javascript.html')),
    path('projects/', TemplateView.as_view(template_name='projects/projects.html')),
    path('projects/facebook_project/', TemplateView.as_view(template_name='projects/facebook_project/facebook-project.html')),
    path('projects/one_mac_project/', TemplateView.as_view(template_name='projects/one_mac_project/one-mac-project.html')),
]

    path('account/', include('account.urls')),