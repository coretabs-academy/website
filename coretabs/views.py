from django.http import Http404
from django.shortcuts import render


def home(request):
    return render(request,'home.html')


def tutorial_view(request, category=None, project=None, id=None):
    result = None

    if project is None and id is None:
        result = render(request, f'{category}.html')
    elif project is not None and id is None:
        result = render(request, f'{category}/{project}.html')
    elif project is not None and id is not None:
        result = render(request, f'{category}/{project}/{id}.html')
    elif project is None and id is not None:
        result = render(request, f'{category}/{id}.html')

    return result
