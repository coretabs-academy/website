from django.http import Http404
from django.shortcuts import render


def home(request):
    return render(request,'home.html')


def tutorial_view(request, category=None, id=None):
    return render(request, f'{category}/{id}.html')
