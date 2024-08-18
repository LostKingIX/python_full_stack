/*
    Author: Kuldeep M
    Description: Testing a basic Vue.js Front End
*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Todo App</title>
    <!-- Include Vue 3 from CDN -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>

<body>
    <!-- Root element for Vue app -->
    <div id="app">
        <!-- Title of the app, using Vue's template syntax -->
        <h1>{{ title }}</h1>

        <!-- Unordered list to display tasks -->
        <ul>
            <!-- List item for each task, using v-for directive -->
            <!-- :key is a special attribute used by Vue for efficient list rendering -->
            <li v-for="task in tasks" :key="task.id">
                {{ task.text }}
            </li>
        </ul>

        <!-- Form for adding new tasks -->
        <!-- @submit.prevent is a Vue event handler with modifier to prevent default form submission -->
        <form @submit.prevent="addTask">
            <!-- Input field for new task, v-model creates two-way binding with newTask data property -->
            <input v-model="newTask" placeholder="Add a new task">
            <!-- Submit button for the form -->
            <button type="submit">Add Task</button>
        </form>
    </div>

    <!-- Script tag for Vue app logic -->
    <script>
        const { createApp, ref } = Vue

        createApp({
            setup() {
                const title = ref('My Todo List')
                const tasks = ref([
                    { id: 1, text: 'Learn Vue' },
                    { id: 2, text: 'Build a todo app' },
                    { id: 3, text: 'Learn Python backend' }
                ])
                const newTask = ref('')

                function addTask()
                {
                    if (newTask.value.trim()) {
                        tasks.value.push({
                            id: tasks.value.length + 1,
                            text: newTask.value
                        })
                        newTask.value = ''
                    }
                }

                return {
                    title,
                    tasks,
                    newTask,
                    addTask
                }
            }
        }).mount('#app')
    </script>
</body>
</html>