from django.http import Http404
from django.shortcuts import render

from account.views import SignupView


class HomeView(SignupView):
    template_name='home.html'

    def get(self, *args, **kwargs):
        return super(SignupView, self).get(*args, **kwargs)

    def post(self, *args, **kwargs):
        return super(SignupView, self).post(*args, **kwargs)


def category_view(request, category=None):
    return render(request, f'frontend/{category}/{category}.html')


def tutorial_view(request, category=None, id=None):
    return render(request, f'frontend/{category}/{id}.html')


def project_view(request, category=None, projects=None):
    return render(request, f'frontend/{category}/{projects}/{projects}.html')


def project_tutorial_view(request, category=None, projects=None, id=None):
    return render(request, f'frontend/{category}/{projects}/{id}.html')


def contributors(request):
    return render(request, "contributors.html")


'''
 result = None

    if projects is None and id is None:
        result = render(request, f'{category}/{category}.html')
    elif projects is not None and id is None:
        result = render(request, f'{category}/{projects}/{projects}.html')
    elif projects is not None and id is not None:
        result = render(request, f'{category}/{projects}/{id}.html')
    elif projects is None and id is not None:
        result = render(request, f'{category}/{category}/{id}.html')

    return result
'''
