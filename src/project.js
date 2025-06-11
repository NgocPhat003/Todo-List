// Module that manages the project objects

import Todo from './todo.js';

class Project {
    constructor(name) {
        this.id = `project-${Date.now()}-${Math.random().toString(36).slice(2,11)}`; // Generate random unique ID
        this.name = name;
        this.todos = [];
    }

    addToDo(todoItem) {
        if(!(todoItem instanceof Todo)) return false;
        if(this.todos.some((todo) => todo.id === todoItem.id)) return false; // Check if the todo is already in the project's todos
        
        this.todos.push(todoItem);
        return true;
    }

    removeTodo(todoID) {
        this.todos = this.todos.filter((todo) => todo.id !== todoID);
    }

    getTodoByID(todoID) {
        return this.todos.find((todo) => todo.id === todoID);
    }

    getAllTodos() {
        return [...this.todos]; // Return a copy to prevent unwanted modifications
    }

    getTodoByPriorit(priorityLevel) {
        return this.todos.filter((todo) => todo.priority === priorityLevel);
    }

    getTodoByCompletion(completionStatus) {
        return this.todos.filter((todo) => todo.completed === completionStatus);
    }

    getTodoByTag(tag) {
        const trimmedTag = tag.trim().toLowerCase();
        if(!trimmedTag) return this.getAllTodos(); //When tag is empty, return all todos

        return this.todos.filter((todo) =>
            todo.tags.some((t) => t.toLowerCase() === trimmedTag)
        );
    }

    getUniqueTags() {
        const allTags = new Set();
        this.todos.forEach((todo) => {
            todo.tags.forEach((tag) => allTags.add(tag.trim()));
        });
        return Array.from(allTags).sort();
    }
}
