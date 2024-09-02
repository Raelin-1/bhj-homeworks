document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    function addTask(taskTitle) {
        const task = document.createElement('div');
        task.className = 'task';
        
        const taskTitleElement = document.createElement('div');
        taskTitleElement.className = 'task__title';
        taskTitleElement.textContent = taskTitle;

        const removeButton = document.createElement('a');
        removeButton.className = 'task__remove';
        removeButton.href = '#';
        removeButton.innerHTML = '&times;';

        // Add event listener to remove the task
        removeButton.addEventListener('click', (event) => {
            event.preventDefault();
            task.remove();
        });

        task.appendChild(taskTitleElement);
        task.appendChild(removeButton);
        tasksList.appendChild(task);
    }

    // Event listener to handle adding a task when Enter is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            event.preventDefault();
            addTask(taskInput.value.trim());
            taskInput.value = ''; 
        }
    });

    const addButton = document.getElementById('tasks__add');
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';  
        }
    });
});
