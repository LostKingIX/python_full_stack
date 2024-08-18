import os
import sys


def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")


def create_file(path, content=""):
    with open(path, 'w') as file:
        file.write(content)
    print(f"Created file: {path}")


def setup_project(python_fullstack):
    base_dir = os.path.join(os.getcwd(), python_fullstack)

    # Create main project directory
    create_directory(base_dir)

    # Frontend structure
    frontend_dir = os.path.join(base_dir, 'frontend')
    create_directory(frontend_dir)
    create_directory(os.path.join(frontend_dir, 'src'))
    create_directory(os.path.join(frontend_dir, 'public'))
    create_file(os.path.join(frontend_dir, 'src', 'main.js'))
    create_file(os.path.join(frontend_dir, 'src', 'App.vue'))
    create_file(os.path.join(frontend_dir, 'public', 'index.html'))

    # Backend structure
    backend_dir = os.path.join(base_dir, 'backend')
    create_directory(backend_dir)
    create_directory(os.path.join(backend_dir, 'app'))
    create_file(os.path.join(backend_dir, 'app', '__init__.py'))
    create_file(os.path.join(backend_dir, 'app', 'models.py'))
    create_file(os.path.join(backend_dir, 'app', 'views.py'))
    create_file(os.path.join(backend_dir, 'manage.py'))

    # Create README
    readme_content = f"# {project_name}\n\nThis is a web project using Vue.js for frontend and Python for backend."
    create_file(os.path.join(base_dir, 'README.md'), readme_content)

    print(f"\nProject '{project_name}' has been set up successfully!")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python setup_project.py <project_name>")
        sys.exit(1)

    project_name = sys.argv[1]
    setup_project(project_name)
