// Module that handles the core logic of app

import Project from './project.js';
import Todo from './todo.js';
import storage from './storage.js';

const appLogic = (() => {
    let projects = [];
    let currentProject = null;

    function rehydrateProjects(plainProjects) {
        return plainProjects.map((plainProjects) => {
            const project = new Project(plainProjects.name);
            project.id = plainProject.id;
            project.todos  =plainProjects.todos.map((plainTodo) => {
                const todo = new Todo(
                    plainTodo.title,
                    plainTodo.description,
                    plainTodo.dueDate,
                    plainTodo.tags || [],
                    plainTodo.completed,
                )  ;
                todo.id = plainTodo.id;
                return todo;  
            });
            return project;
        });
    }

    function createSampledData() {
        const workProject = new Project('Work');
        workProject.addTodo(new Todo('Finish report','Report must include all necessary information and sources', new Date(2025, 6, 6), 'high' , ['report'], false));
        workProject.addTodo(new Todo('Team meeting','Must be on time!!!', new Date(2025, 6, 10), 'medium' , ['report'], false));

        const personalProject = new Project('Personal');
    personalProject.addTodo(new Todo('Grocery shopping', 'Milk, eggs, chicken, fruits.', new Date(2025, 4, 20), 'low', ['home', 'shopping'], false));
    personalProject.addTodo(new Todo('Book doctor appointment', 'Annual check-up.', new Date(2025, 5, 10), 'high', ['health'], false));

    const learningProject = new Project('Learning');
    learningProject.addTodo(new Todo('Webpack Deep Dive', 'Understand loaders and plugins.', new Date(2025, 4, 30), 'medium', ['dev'], true));
    learningProject.addTodo(new Todo('Read "The Pragmatic Programmer"', 'Chapter 3-5', '', 'low', ['reading', 'dev'], false));

    projects = [workProject, personalProject, learningProject];
    currentProject = workProject;
    saveProjects();
    }

    function loadProject() {
        const loadedData = storage.loadData();
        if(loadedData && loadedData.length > 0) {
            projects = rehydrateProjects(loadedData);
            currentProject = projects[0] || null;
        } else {
            createSampledData();
        }
    }

    function saveProjects() {
        storage.saveData(projects);
    }

    // Management of the projects
    function addProject(name) {
        if (
            name &&
            !projects.find((p) => p.name.toLowerCase() === name.toLowerCase())
        ) {
            const newProject = new Project(name);
            projects.push(newProject);
            saveProjects();
            return newProject;
        }
        return null;
    }

    function updateProject(projectId, newName) {
        const projectToUpdate = getProjectById(projectId);
        if(!projectToUpdate){
            return null;
        }
        if(projects.some(p => p.id !== projectId && p.name.toLowerCase() === newName.toLowerCase())){
            return { error: 'duplicate', project: projectToUpdate};
        }
        projectToUpdate.name = newName;
        saveProjects();
        return projectToUpdate;
    }

    function removeProject(projectId) {
        const projectIndex = projects.findIndex(p => p.id = projectId);
        if(projectIndex > -1) {
            if(projects.length === 1) {
                return {error: 'last_project'};
            }
            const removedProject = project.splice(projectIndex,1)[0];
            if (currentProject && currentProject.id === projectId) {
                currentProject = projects.length > 0 ? project[0] : null;
            }
            saveProjects();
            return { success: true, removedProjectName: removedProject.name, newCurrentProject: currentProject};
        }
        return {error: 'not_found'};
    }

    function getProjectById(projectId){
        return projects.find((p) => p.id === projectId);
    }

    function getAllProjects() {
        return [...projects];
    }

    function getCurrentProject() {
        return currentProject;
    }

    function setCurrentProject(projectId) {
        const project = getProjectById(projectId);
        if(project) {
            currentProject = project;
            return true;
        }
        return false;
    }

    // Management of the todos
    function addTodoToProject(projectId, todoDetails) {
        const project = getProjectById(projectId);
        if(project) {
            const { title, description, dueDate, priority, tagsString} = todoDetails;
            const newTodo = newTodo(title, description, dueDate, priority);
            if (tagsString) {
                newTodo.setTagFromString((tagsString));
            }
            project.addTodo(newTodo);
            saveProjects();
            return newTodo;
        }
        return null;
    }

    function removeTodoFromProject(projectId, todoId) {
        const project = getProjectById(projectId);
        if(project) {
            project.removeTodo(todoId);
            saveProjects();
            return true;
        }
        return false;
    }

    function updateTodoInProject(projectId, todoId, updatedDetails) {
        const project = getProjectById(projectId);
        if(project) {
            const todo = project.getTodoById(todoId) 
            if(todo) {
                if(updatedDetails.tagsString !== undefined) {
                    todo.setTagFromString(updatedDetails.tagsString);


                    const {tagsString, ...otherDetails } = updatedDetails;
                    todo.updateDetails(otherDetails);
                } else {
                    todo.updateDetails(updatedDetails);
                }
                saveProjects();
                return todo;
            }
            return null;
        }
        
        function getAllTodosAcrossProjects() {
            return projects.reduce(
                (acc, project) => acc.concat(project.getAllTodos()),
                [],
            );
        }

        function getAllTodosWithProjectInfo() {
            const allTodosWithProjectInfo = [];
             projects.forEach(project => {
                project.getAllTodos().forEach(todo => {
                    allTodosWithProjectInfo.push({
                        ...todo, orginalProjectId: project.id,
                        projectName: project.name
                    });
                });
             });
             return allTodosWithProjectInfo;
        }

        function searchTodosInList(todos, searchTerm) {
            if(!searchTerm || searchTerm.trim() === '') {
                return todos;
            }
            const lowerSearchTerm = searchTerm.toLowerCase();
            return todos.filter(todo =>
                todo.tilte.toLowerCase().includes(lowerSearchTerm) ||
                todo.description.toLowerCase().includes(lowerSearchTerm)
                );
        }

        function getAllTagsAcrossProjects() {
            const allTags = new Set();
            projects.forEach((project) => {
                project.getUniqueTags().forEach((tag) => allTags.add(tag));
            });
            return Array.from(allTags).sort();
        }

        function filterTodosByPriorityAcrossProjects(priorityLevel) {
            const allTodos = getAllTodosAcrossProjects();
            return allTodos.filter((todo) => todo.priority === priorityLevel);
        }

        const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 }; 
    }

});