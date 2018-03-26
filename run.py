import os

venv_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "venv")
is_venv_exist = os.path.isdir(venv_path) & os.path.exists(venv_path)

print(venv_path)

if not is_venv_exist:
    print("creating virtual environment...")
    os.system("virtualenv venv")

    print("installing requirements...")
    os.system(r"venv\scripts\pip install -r requirements.txt")


command = r"python manage.py runserver"

run_script = fr"""call venv\scripts\activate.bat & {command} & pause"""

os.system(run_script)
