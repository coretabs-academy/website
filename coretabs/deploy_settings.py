from coretabs.settings import *
import dj_database_url


DEBUG = False

ALLOWED_HOSTS = [
    'localhost',
    '.herokuapp.com',
]

DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL')
    )
}

MIDDLEWARE += [
    # Simplified static file serving.
    # https://warehouse.python.org/project/whitenoise/
    'whitenoise.middleware.WhiteNoiseMiddleware']