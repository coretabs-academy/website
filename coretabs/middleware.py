from django.utils.translation import get_language

def SetLangCookie(get_response):

    def middleware(request):
        response = get_response(request)
        response.set_cookie(key='lang', value=get_language())
        return response

    return middleware