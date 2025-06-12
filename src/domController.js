// Module that handles the DOM manipulation

import { format, isValid as isValidDate} from 'date-fns';

const domController = (() => {
    // DOM element selectors
    const projectsListUL = document.getElementById('project-list');
    const addProjectBtn = document.getElementById('add-project-btn');
    const currentProjectTitle = document.getElementById('current-project-title');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todosListUL = document.getElementById('todos-list');
    const tagFilterArea = document.getElementById('tag-filter-area');
    const tagFilterClearBtn = document.getElementById('tag-filter-clear-btn');
    const notificationArea = document.getElementById('notification-area');

    // Project modal
    const projectModal = document.getElementById('project-modal');
    const projectForm = document.getElementById('project-form');
    const projectIdInput = document.getElementById('project-id');
    const projectNameInput = document.getElementById('project-name-input');
    const saveProjectBtn = document.getElementById('save-project-btn');
    const closeProjectModalBtn = document.getElementById('closes-project-modal-btn');

    // Todo modal
    const todoModal = document.getElementById('todo-modal');
    const todoForm = document.getElementById('todo-form');
    const todoIdInput = document.getElementById('todo-id');
    const todoTitleInput = document.getElementById('todo-title-input');
    const todoDescriptionInput = document.getElementById('todo-description-input');
    const todoDueDateInput = document.getElementById('todo-dueDate-input');
    const todoPriorityInput = document.getElementById('todo-priority-input');
    const todoTagsInput = document.getElementById('todo-tags-input');
    const closeTodoModalBtn = document.getElementById('close-todo-modal');

    // Functions to remove all child nodes
    function clearElement(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    function formatDateForDisplay(date) {
        if( date instanceof Date  && isValidDate(date)) {
            return format(date, 'MMM dd, YYY') ;
        }
        return 'No date set';
    }

    // Project renderer
    function renderProjects(projects, currentProjectId) {
        clearElement(projectsListUL);
        if(!projects || projects.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No projects yet';
            li.classList.add('no-items');
            projectsListUL.appendChild(li);
        }

        projects.foreach((project) => {
            const li = document.createElement('li');
            li.dataset.projectId = project.id;

            const namespan = document.createElement('span');
            nameSpan.classList.add('project-name');
            nameSpan.textContent = project.name;
            li.appendChild(nameSpan);

            const actionsDiv = document.createElement('div');
            actiosnDiv.classList.add('project-actions');

            const editBtn = document.createElement('button');
            editBtn.innerHTML = 'Edit';
            editBtn.classList.add('edit-project-btn');
            editBtn.dataset.projectId = project.id;
            editBtn.title = 'Edit project';

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Delete';
            deleteBtn.classList.add('delete-project-btn');
            deleteBtn.dataset.projectId = project.id;
            deleteBtn.title = 'Delete project';

            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(deleteBtn);
            li.appendChild(actionsDiv);

            if (project.id === currentProjectId) {
                li.classList.add('active');
            }
            projectsListUL.appendChild(li);
        });
    }

    function updateProjectTitle(title) {
        currentProjectTitle.textContent = title || 'No project selected';
    }

    // Todo renderer
    function renderTodos(projectOrSearchResults) {
        clearElement(todosListUL);

        const isGlobalSearch = projectOrSearchResults && projectOrSearchResults.isGlobalSearch === true;
        const todos = projectOrSearchResults ? projectOrSearchResults.todos : [];
        const displayName = projectOrSearchResults ? projectOrSearchResults.name : 'Select a Project';

        updateProjectTitle(displayName);

        if(!todos || todos.length === 0) {
            const li = document.createElement('li');
            if(isGlobalSearch) {
                li.textContent = 'No tasks found that match your search.';
            } else if (projectOrSearchResults) {
                li.textContent = 'No tasks in this project yet.';
            } else {
                li.textContent = 'Select a project or enter a search term.';
            }
            li.classList.add('no-items');
            todosListUL.appendChild(li);

            return;
        }

        todos.forEach((todo) => {
            const li = document.createElement('li');
            li.dataset.todoId = todo.id;

            if(isGlobalSearch && todo.originalProjectId) {
                li.dataset.originalProjectId = todo.originalProjectId;
            }
            li.classList.add(`priority-${todo.priority}`);
            if(todo.completed) {
                li.classList.add('todo-completed');
            }

            const todoPreviewContent = document.createElement('div');
            todoPreviewContent.classList.add('todo-preview-content');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.classList.add('todo-checkbox');
            checkbox.dataset.todoId = todo.id;

            const todoInfoDiv = document.createElement('div');
            todoInfoDiv.classList.add('todo-info');

            const titleSpan = document.createElement('span');
            titleSpan.classList.add('todo-title');
            titleSpan.textContent = todo.title;

            const dueDateSpan = document.createElement('span');
            dueDateSpan.classList.add('todo-due-date');
            dueDateSpan.textContent = `Due: ${formatDateForDisplay(todo.dueDate)}`;

            
        });
    }
});