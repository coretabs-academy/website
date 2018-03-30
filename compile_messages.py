import os


print("Compiling...")

command = "django-admin compilemessages"

run_script = fr"""call venv\scripts\activate.bat & {command} & pause"""

os.system(run_script)
