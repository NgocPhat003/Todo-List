"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

:root {
  --primary: #246488;
  --on-primary: #ffffff;
  --secondary: #4f606e;
  --surface: #ffffff;
  --surface-variant: #eff6fa;
  --on-surface: #181c20;
  --on-surface-variant: #41474d;
  --error: #ba1a1a;
  --warning: #f57c00;
  --success: #388e3c;
  --info: #0288d1;
  --border: #d7dadf;
  --border-variant: #c1c5cd;
  --shadow-1: 0 2px 4px rgba(195, 206, 213, 0.12), 0 3px 6px rgba(195, 206, 213, 0.24);
  --shadow-2: 0 10px 20px rgba(195, 206, 213, 0.16), 0 6px 6px rgba(195, 206, 213, 0.24);
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}

body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--on-surface);
  background: #f6f9fe;
  line-height: 1.6;
  padding: var(--spacing-lg);
}

/* Layout */
.container {
  max-width: 1280px;
  margin: 0 auto;
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-1);
  overflow: hidden;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border);
  gap: var(--spacing-md);
}

header h1 {
  font-weight: 600;
  font-size: 1.75rem;
}

.global-search-container {
  flex: 1;
  max-width: 500px;
}

.global-search-container .form-input {
  background: var(--surface-variant);
  border: none;
}

.app-layout {
  display: flex;
  min-height: 600px;
}

/* Sidebar */
.projects-sidebar {
  width: 300px;
  border-right: 1px solid var(--border);
  padding: var(--spacing-lg);
}

.projects-sidebar h2 {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 var(--spacing-md) 0;
}

#projects-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg) 0;
}

#projects-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

#projects-list li:hover {
  border-color: var(--border-variant);
  box-shadow: var(--shadow-1);
}

#projects-list li.active {
  background: var(--surface-variant);
  border-color: var(--primary);
  box-shadow: var(--shadow-1);
}

.project-name {
  font-weight: 500;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Buttons */
.primary-btn {
  width: 100%;
  padding: var(--spacing-sm);
  background: var(--primary);
  color: var(--on-primary);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 0.875rem;
}

.primary-btn:hover {
  background: rgb(36, 100, 136, 0.9);
  box-shadow: var(--shadow-1);
  transform: translateY(-2px);
}

/* Main content */
.todos-view {
  flex: 1;
  padding: var(--spacing-lg);
}

.todos-view h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 var(--spacing-lg) 0;
}

.todos-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--spacing-md);
}

.todos-controls .primary-btn {
  width: auto;
  min-width: 120px;
}

/* Filters */
.filters-row {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.filter-sort-bar {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

select, 
::picker(select) {
  appearance: base-select;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}

select:hover,
select:focus {
  border: 1px solid var(--border-variant);
}

select::picker-icon {
  color: var(--on-surface-variant);
  transition: 0.4s rotate;
}

select:open::picker-icon {
  rotate: 180deg;
}

option {
  display: flex;
  justify-content: flex-start;
  gap: var(--spacing-sm);
  background: var(--surface);
  padding: var(--spacing-sm);
  transition: 0.2s;
}

option:hover,
option:focus {
  background: var(--surface-variant);
}

option:checked {
  font-weight: 500;
}

option::checkmark {
  order: 1;
  margin-left: auto;
}

option:first-of-type {
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}

option:last-of-type {
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

#tag-filter-area {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: center;
  flex: 1;
}

.tag-filter-item {
  color: var(--on-surface-variant);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  cursor: pointer;
  border: 1px solid var(--border);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.tag-filter-item:hover {
  border-color: var(--border-variant);
}

.tag-filter-item.active {
  background: var(--surface-variant);
  border-color: var(--primary);
}

#tag-filter-clear-btn {
  color: var(--primary);
  cursor: pointer;
  font-size: 0.875rem;
  text-decoration: underline;
  margin-left: var(--spacing-sm);
}

/* Form inputs */
.form-input,
.form-select {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  font-size: 1rem;
  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.12);
}

.form-select {
  min-width: 160px;
}

/* Todo list */
#todos-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

#todos-list li {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

#todos-list li:hover {
  box-shadow: var(--shadow-1);
  transform: translateY(-2px);
}

.todo-preview-content {
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  gap: var(--spacing-md);
}

.todo-info {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-md);
  flex: 1;
}

.todo-checkbox {
  margin-top: 2px;
  transform: scale(1.2);
}

.todo-details {
  flex: 1;
}

.todo-title {
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: var(--spacing-xs);
  color: var(--on-surface);
}

.todo-due-date {
  font-size: 0.875rem;
  color: var(--on-surface-variant);
}

.todo-completed .todo-title {
  text-decoration: line-through;
  color: var(--on-surface-variant);
}

.todo-tags-display {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-xs);
}

.tag-label {
  background: var(--secondary);
  color: white;
  padding: 2px var(--spacing-sm);
  font-size: 0.75rem;
  border-radius: var(--radius-sm);
}

.todo-project-label {
  background: var(--surface-variant);
  color: var(--on-surface-variant);
  padding: 2px var(--spacing-sm);
  font-size: 0.75rem;
  border-radius: var(--radius-sm);
  margin-top: var(--spacing-xs);
  display: inline-block;
}

/* Priority indicators */
.priority-low {
  border-left: 4px solid var(--success);
}

.priority-medium {
  border-left: 4px solid var(--warning);
}

.priority-high {
  border-left: 4px solid var(--error);
}

.priority-text-low {
  color: var(--success);
  font-weight: 500;
}

.priority-text-medium {
  color: var(--warning);
  font-weight: 500;
}

.priority-text-high {
  color: var(--error);
  font-weight: 500;
}

/* Todo actions */
.todo-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.expand-todo-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary);
  font-size: 1.2rem;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-todo-btn:hover {
  background: var(--primary-light);
}

.edit-todo-btn,
.delete-todo-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.edit-todo-btn {
  background: var(--warning);
  color: white;
}

.edit-todo-btn:hover {
  background: #e65100;
  transform: translateY(-1px);
}

.delete-todo-btn {
  background: var(--error);
  color: white;
}

.delete-todo-btn:hover {
  background: #c62828;
  transform: translateY(-1px);
}

/* Todo details */
.todo-full-details {
  padding: var(--spacing-md);
  background: var(--surface);
  border-top: 1px solid var(--border);
}

.todo-full-details.hidden {
  display: none;
}

.todo-full-details p {
  margin: var(--spacing-sm) 0;
  font-size: 0.875rem;
  color: var(--on-surface);
  line-height: 1.5;
}

.todo-full-details p strong {
  color: var(--on-surface);
  font-weight: 600;
}

/* Modals */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
}

.modal-content {
  background: var(--surface);
  margin: 5vh auto;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  box-shadow: var(--shadow-2);
  position: relative;
  overflow: hidden;
}

.scroller {
  max-height: calc(90vh - var(--spacing-lg) * 2);
  overflow-y: auto;
  padding: var(--spacing-md);
  scrollbar-width: thin;
  scrollbar-color: var(--border) var(--surface);
}

.modal-content h3 {
  margin: 0 0 var(--spacing-lg) 0;
  color: var(--on-surface);
  font-size: 1.5rem;
  font-weight: 500;
}

.modal-content label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--on-surface);
}

.modal-content input[type="text"],
.modal-content input[type="date"],
.modal-content textarea,
.modal-content select {
  width: 100%;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-content input:focus,
.modal-content textarea:focus,
.modal-content select:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.12);
}

.modal-content textarea {
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
}

.modal-content button[type="submit"] {
  background: var(--primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-content button[type="submit"]:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-1);
}

.close-btn {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-lg);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--on-surface-variant);
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.close-btn:hover {
  color: var(--on-surface);
}

.help-message {
  font-size: 0.75rem;
  color: var(--on-surface-variant);
  margin-top: -var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.error-message {
  color: var(--error);
  font-size: 0.875rem;
  margin-top: -var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

/* Notifications */
.notification-area {
  position: fixed;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.notification {
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-sm);
  color: white;
  font-size: 0.875rem;
  box-shadow: var(--shadow-1);
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInNotification 0.3s forwards, fadeOutNotification 0.3s 4.7s forwards;
}

.notification.info {
  background: var(--info);
}

.notification.success {
  background: var(--success);
}

.notification.error {
  background: var(--error);
}

.notification.warning {
  background: var(--warning);
  color: white;
}

@keyframes slideInNotification {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeOutNotification {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  body {
    padding: var(--spacing-md);
  }

  .app-layout {
    flex-direction: column;
  }

  .projects-sidebar {
    width: 100%;
    margin-bottom: var(--spacing-lg);
  }

  header {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-md);
  }

  header h1 {
    text-align: center;
  }

  .modal-content {
    width: 95%;
    padding: var(--spacing-lg);
    margin: 2vh auto;
  }

  .filters-row,
  .filter-sort-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .form-select {
    min-width: auto;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --primary: #246488;\r\n  --on-primary: #ffffff;\r\n  --secondary: #4f606e;\r\n  --surface: #ffffff;\r\n  --surface-variant: #eff6fa;\r\n  --on-surface: #181c20;\r\n  --on-surface-variant: #41474d;\r\n  --error: #ba1a1a;\r\n  --warning: #f57c00;\r\n  --success: #388e3c;\r\n  --info: #0288d1;\r\n  --border: #d7dadf;\r\n  --border-variant: #c1c5cd;\r\n  --shadow-1: 0 2px 4px rgba(195, 206, 213, 0.12), 0 3px 6px rgba(195, 206, 213, 0.24);\r\n  --shadow-2: 0 10px 20px rgba(195, 206, 213, 0.16), 0 6px 6px rgba(195, 206, 213, 0.24);\r\n  --radius-sm: 4px;\r\n  --radius-md: 8px;\r\n  --radius-lg: 12px;\r\n  --spacing-xs: 4px;\r\n  --spacing-sm: 8px;\r\n  --spacing-md: 16px;\r\n  --spacing-lg: 24px;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n  color: var(--on-surface);\r\n  background: #f6f9fe;\r\n  line-height: 1.6;\r\n  padding: var(--spacing-lg);\r\n}\r\n\r\n/* Layout */\r\n.container {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  background: var(--surface);\r\n  border-radius: var(--radius-lg);\r\n  box-shadow: var(--shadow-1);\r\n  overflow: hidden;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: var(--spacing-lg);\r\n  border-bottom: 1px solid var(--border);\r\n  gap: var(--spacing-md);\r\n}\r\n\r\nheader h1 {\r\n  font-weight: 600;\r\n  font-size: 1.75rem;\r\n}\r\n\r\n.global-search-container {\r\n  flex: 1;\r\n  max-width: 500px;\r\n}\r\n\r\n.global-search-container .form-input {\r\n  background: var(--surface-variant);\r\n  border: none;\r\n}\r\n\r\n.app-layout {\r\n  display: flex;\r\n  min-height: 600px;\r\n}\r\n\r\n/* Sidebar */\r\n.projects-sidebar {\r\n  width: 300px;\r\n  border-right: 1px solid var(--border);\r\n  padding: var(--spacing-lg);\r\n}\r\n\r\n.projects-sidebar h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n  margin: 0 0 var(--spacing-md) 0;\r\n}\r\n\r\n#projects-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 var(--spacing-lg) 0;\r\n}\r\n\r\n#projects-list li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: var(--spacing-md);\r\n  margin-bottom: var(--spacing-sm);\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n#projects-list li:hover {\r\n  border-color: var(--border-variant);\r\n  box-shadow: var(--shadow-1);\r\n}\r\n\r\n#projects-list li.active {\r\n  background: var(--surface-variant);\r\n  border-color: var(--primary);\r\n  box-shadow: var(--shadow-1);\r\n}\r\n\r\n.project-name {\r\n  font-weight: 500;\r\n  flex: 1;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Buttons */\r\n.primary-btn {\r\n  width: 100%;\r\n  padding: var(--spacing-sm);\r\n  background: var(--primary);\r\n  color: var(--on-primary);\r\n  border: none;\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.primary-btn:hover {\r\n  background: rgb(36, 100, 136, 0.9);\r\n  box-shadow: var(--shadow-1);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n/* Main content */\r\n.todos-view {\r\n  flex: 1;\r\n  padding: var(--spacing-lg);\r\n}\r\n\r\n.todos-view h2 {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  margin: 0 0 var(--spacing-lg) 0;\r\n}\r\n\r\n.todos-controls {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: var(--spacing-md);\r\n}\r\n\r\n.todos-controls .primary-btn {\r\n  width: auto;\r\n  min-width: 120px;\r\n}\r\n\r\n/* Filters */\r\n.filters-row {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: var(--spacing-md);\r\n  gap: var(--spacing-md);\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.filter-sort-bar {\r\n  display: flex;\r\n  gap: var(--spacing-md);\r\n  margin-bottom: var(--spacing-lg);\r\n}\r\n\r\nselect, \r\n::picker(select) {\r\n  appearance: base-select;\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n}\r\n\r\nselect:hover,\r\nselect:focus {\r\n  border: 1px solid var(--border-variant);\r\n}\r\n\r\nselect::picker-icon {\r\n  color: var(--on-surface-variant);\r\n  transition: 0.4s rotate;\r\n}\r\n\r\nselect:open::picker-icon {\r\n  rotate: 180deg;\r\n}\r\n\r\noption {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: var(--spacing-sm);\r\n  background: var(--surface);\r\n  padding: var(--spacing-sm);\r\n  transition: 0.2s;\r\n}\r\n\r\noption:hover,\r\noption:focus {\r\n  background: var(--surface-variant);\r\n}\r\n\r\noption:checked {\r\n  font-weight: 500;\r\n}\r\n\r\noption::checkmark {\r\n  order: 1;\r\n  margin-left: auto;\r\n}\r\n\r\noption:first-of-type {\r\n  border-radius: var(--radius-sm) var(--radius-sm) 0 0;\r\n}\r\n\r\noption:last-of-type {\r\n  border-radius: 0 0 var(--radius-sm) var(--radius-sm);\r\n}\r\n\r\n#tag-filter-area {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: var(--spacing-sm);\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.tag-filter-item {\r\n  color: var(--on-surface-variant);\r\n  padding: var(--spacing-xs) var(--spacing-md);\r\n  border-radius: var(--radius-lg);\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  border: 1px solid var(--border);\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.tag-filter-item:hover {\r\n  border-color: var(--border-variant);\r\n}\r\n\r\n.tag-filter-item.active {\r\n  background: var(--surface-variant);\r\n  border-color: var(--primary);\r\n}\r\n\r\n#tag-filter-clear-btn {\r\n  color: var(--primary);\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n  text-decoration: underline;\r\n  margin-left: var(--spacing-sm);\r\n}\r\n\r\n/* Form inputs */\r\n.form-input,\r\n.form-select {\r\n  width: 100%;\r\n  padding: var(--spacing-md);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n  background: var(--surface);\r\n  font-size: 1rem;\r\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.form-input:focus,\r\n.form-select:focus {\r\n  outline: none;\r\n  border-color: var(--border-focus);\r\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.12);\r\n}\r\n\r\n.form-select {\r\n  min-width: 160px;\r\n}\r\n\r\n/* Todo list */\r\n#todos-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#todos-list li {\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-md);\r\n  margin-bottom: var(--spacing-md);\r\n  box-shadow: var(--shadow-1);\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  overflow: hidden;\r\n}\r\n\r\n#todos-list li:hover {\r\n  box-shadow: var(--shadow-1);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.todo-preview-content {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: var(--spacing-md);\r\n  gap: var(--spacing-md);\r\n}\r\n\r\n.todo-info {\r\n  display: flex;\r\n  align-items: baseline;\r\n  gap: var(--spacing-md);\r\n  flex: 1;\r\n}\r\n\r\n.todo-checkbox {\r\n  margin-top: 2px;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.todo-details {\r\n  flex: 1;\r\n}\r\n\r\n.todo-title {\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  margin-bottom: var(--spacing-xs);\r\n  color: var(--on-surface);\r\n}\r\n\r\n.todo-due-date {\r\n  font-size: 0.875rem;\r\n  color: var(--on-surface-variant);\r\n}\r\n\r\n.todo-completed .todo-title {\r\n  text-decoration: line-through;\r\n  color: var(--on-surface-variant);\r\n}\r\n\r\n.todo-tags-display {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: var(--spacing-xs);\r\n  margin-top: var(--spacing-xs);\r\n}\r\n\r\n.tag-label {\r\n  background: var(--secondary);\r\n  color: white;\r\n  padding: 2px var(--spacing-sm);\r\n  font-size: 0.75rem;\r\n  border-radius: var(--radius-sm);\r\n}\r\n\r\n.todo-project-label {\r\n  background: var(--surface-variant);\r\n  color: var(--on-surface-variant);\r\n  padding: 2px var(--spacing-sm);\r\n  font-size: 0.75rem;\r\n  border-radius: var(--radius-sm);\r\n  margin-top: var(--spacing-xs);\r\n  display: inline-block;\r\n}\r\n\r\n/* Priority indicators */\r\n.priority-low {\r\n  border-left: 4px solid var(--success);\r\n}\r\n\r\n.priority-medium {\r\n  border-left: 4px solid var(--warning);\r\n}\r\n\r\n.priority-high {\r\n  border-left: 4px solid var(--error);\r\n}\r\n\r\n.priority-text-low {\r\n  color: var(--success);\r\n  font-weight: 500;\r\n}\r\n\r\n.priority-text-medium {\r\n  color: var(--warning);\r\n  font-weight: 500;\r\n}\r\n\r\n.priority-text-high {\r\n  color: var(--error);\r\n  font-weight: 500;\r\n}\r\n\r\n/* Todo actions */\r\n.todo-actions {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--spacing-sm);\r\n}\r\n\r\n.expand-todo-btn {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: var(--primary);\r\n  font-size: 1.2rem;\r\n  padding: var(--spacing-xs);\r\n  border-radius: var(--radius-sm);\r\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.expand-todo-btn:hover {\r\n  background: var(--primary-light);\r\n}\r\n\r\n.edit-todo-btn,\r\n.delete-todo-btn {\r\n  padding: var(--spacing-sm) var(--spacing-md);\r\n  border: none;\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.edit-todo-btn {\r\n  background: var(--warning);\r\n  color: white;\r\n}\r\n\r\n.edit-todo-btn:hover {\r\n  background: #e65100;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.delete-todo-btn {\r\n  background: var(--error);\r\n  color: white;\r\n}\r\n\r\n.delete-todo-btn:hover {\r\n  background: #c62828;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n/* Todo details */\r\n.todo-full-details {\r\n  padding: var(--spacing-md);\r\n  background: var(--surface);\r\n  border-top: 1px solid var(--border);\r\n}\r\n\r\n.todo-full-details.hidden {\r\n  display: none;\r\n}\r\n\r\n.todo-full-details p {\r\n  margin: var(--spacing-sm) 0;\r\n  font-size: 0.875rem;\r\n  color: var(--on-surface);\r\n  line-height: 1.5;\r\n}\r\n\r\n.todo-full-details p strong {\r\n  color: var(--on-surface);\r\n  font-weight: 600;\r\n}\r\n\r\n/* Modals */\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  z-index: 1000;\r\n  \r\n}\r\n\r\n.modal-content {\r\n  background: var(--surface);\r\n  margin: 5vh auto;\r\n  padding: var(--spacing-lg);\r\n  border-radius: var(--radius-lg);\r\n  width: 90%;\r\n  max-width: 500px;\r\n  max-height: 90vh;\r\n  box-shadow: var(--shadow-2);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.scroller {\r\n  max-height: calc(90vh - var(--spacing-lg) * 2);\r\n  overflow-y: auto;\r\n  padding: var(--spacing-md);\r\n  scrollbar-width: thin;\r\n  scrollbar-color: var(--border) var(--surface);\r\n}\r\n\r\n.modal-content h3 {\r\n  margin: 0 0 var(--spacing-lg) 0;\r\n  color: var(--on-surface);\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.modal-content label {\r\n  display: block;\r\n  margin-bottom: var(--spacing-xs);\r\n  font-weight: 500;\r\n  color: var(--on-surface);\r\n}\r\n\r\n.modal-content input[type=\"text\"],\r\n.modal-content input[type=\"date\"],\r\n.modal-content textarea,\r\n.modal-content select {\r\n  width: 100%;\r\n  padding: var(--spacing-md);\r\n  margin-bottom: var(--spacing-md);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n  font-size: 1rem;\r\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.modal-content input:focus,\r\n.modal-content textarea:focus,\r\n.modal-content select:focus {\r\n  outline: none;\r\n  border-color: var(--border-focus);\r\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.12);\r\n}\r\n\r\n.modal-content textarea {\r\n  min-height: 100px;\r\n  resize: vertical;\r\n  font-family: inherit;\r\n}\r\n\r\n.modal-content button[type=\"submit\"] {\r\n  background: var(--primary);\r\n  color: white;\r\n  padding: var(--spacing-md) var(--spacing-lg);\r\n  border: none;\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.modal-content button[type=\"submit\"]:hover {\r\n  background: var(--primary-dark);\r\n  transform: translateY(-2px);\r\n  box-shadow: var(--shadow-1);\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: var(--spacing-md);\r\n  right: var(--spacing-lg);\r\n  background: none;\r\n  border: none;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: var(--on-surface-variant);\r\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.close-btn:hover {\r\n  color: var(--on-surface);\r\n}\r\n\r\n.help-message {\r\n  font-size: 0.75rem;\r\n  color: var(--on-surface-variant);\r\n  margin-top: -var(--spacing-sm);\r\n  margin-bottom: var(--spacing-md);\r\n}\r\n\r\n.error-message {\r\n  color: var(--error);\r\n  font-size: 0.875rem;\r\n  margin-top: -var(--spacing-sm);\r\n  margin-bottom: var(--spacing-md);\r\n}\r\n\r\n/* Notifications */\r\n.notification-area {\r\n  position: fixed;\r\n  top: var(--spacing-lg);\r\n  right: var(--spacing-lg);\r\n  z-index: 2000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--spacing-sm);\r\n}\r\n\r\n.notification {\r\n  padding: var(--spacing-md) var(--spacing-lg);\r\n  border-radius: var(--radius-sm);\r\n  color: white;\r\n  font-size: 0.875rem;\r\n  box-shadow: var(--shadow-1);\r\n  opacity: 0;\r\n  transform: translateX(100%);\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  animation: slideInNotification 0.3s forwards, fadeOutNotification 0.3s 4.7s forwards;\r\n}\r\n\r\n.notification.info {\r\n  background: var(--info);\r\n}\r\n\r\n.notification.success {\r\n  background: var(--success);\r\n}\r\n\r\n.notification.error {\r\n  background: var(--error);\r\n}\r\n\r\n.notification.warning {\r\n  background: var(--warning);\r\n  color: white;\r\n}\r\n\r\n@keyframes slideInNotification {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutNotification {\r\n  from {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translateX(100%);\r\n  }\r\n}\r\n\r\n/* Responsive design */\r\n@media (max-width: 768px) {\r\n  body {\r\n    padding: var(--spacing-md);\r\n  }\r\n\r\n  .app-layout {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .projects-sidebar {\r\n    width: 100%;\r\n    margin-bottom: var(--spacing-lg);\r\n  }\r\n\r\n  header {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    gap: var(--spacing-md);\r\n  }\r\n\r\n  header h1 {\r\n    text-align: center;\r\n  }\r\n\r\n  .modal-content {\r\n    width: 95%;\r\n    padding: var(--spacing-lg);\r\n    margin: 2vh auto;\r\n  }\r\n\r\n  .filters-row,\r\n  .filter-sort-bar {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .form-select {\r\n    min-width: auto;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["tagsString"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Module that handles the core logic of app




var appLogic = function () {
  var projects = [];
  var currentProject = null;
  function rehydrateProjects(plainProjects) {
    return plainProjects.map(function (plainProject) {
      var project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](plainProject.name);
      project.id = plainProject.id;
      project.todos = plainProject.todos.map(function (plainTodo) {
        var todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](plainTodo.title, plainTodo.description, plainTodo.dueDate, plainTodo.priority, plainTodo.tags || [], plainTodo.completed);
        todo.id = plainTodo.id;
        return todo;
      });
      return project;
    });
  }
  function createSampledData() {
    var workProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Work');
    workProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Finish Q2 report', 'Compile required data and finalize the conclusion.', new Date(2025, 4, 26), 'high', ['report'], false));
    workProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Team meeting prep', "Prepare agenda and slides for Monday's team meeting.", new Date(2025, 5, 6), 'medium', ['meeting'], false));
    workProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Client follow-up', 'Call John Doe regarding project Alpha.', '', 'medium', ['client', 'shopping'], true));
    var personalProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Personal');
    personalProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Grocery shopping', 'Milk, eggs, chicken, fruits.', new Date(2025, 4, 20), 'low', ['home', 'shopping'], false));
    personalProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Book doctor appointment', 'Annual check-up.', new Date(2025, 5, 10), 'high', ['health'], false));
    var learningProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Learning');
    learningProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Webpack Deep Dive', 'Understand loaders and plugins.', new Date(2025, 4, 30), 'medium', ['dev'], true));
    learningProject.addTodo(new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Read "The Pragmatic Programmer"', 'Chapter 3-5', '', 'low', ['reading', 'dev'], false));
    projects = [workProject, personalProject, learningProject];
    currentProject = workProject;
    saveProjects();
  }
  function loadProjects() {
    var loadedData = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadData();
    if (loadedData && loadedData.length > 0) {
      projects = rehydrateProjects(loadedData);
      currentProject = projects[0] || null;
    } else {
      createSampledData();
    }
  }
  function saveProjects() {
    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveData(projects);
  }

  // Management of the projects
  function addProject(name) {
    if (name && !projects.find(function (p) {
      return p.name.toLowerCase() === name.toLowerCase();
    })) {
      var newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](name);
      projects.push(newProject);
      saveProjects();
      return newProject;
    }
    return null;
  }
  function updateProject(projectId, newName) {
    var projectToUpdate = getProjectById(projectId);
    if (!projectToUpdate) {
      return null;
    }
    if (projects.some(function (p) {
      return p.id !== projectId && p.name.toLowerCase() === newName.toLowerCase();
    })) {
      return {
        error: 'duplicate',
        project: projectToUpdate
      };
    }
    projectToUpdate.name = newName;
    saveProjects();
    return projectToUpdate;
  }
  function removeProject(projectId) {
    var projectIndex = projects.findIndex(function (p) {
      return p.id === projectId;
    });
    if (projectIndex > -1) {
      if (projects.length === 1) {
        return {
          error: 'last_project'
        };
      }
      var removedProject = projects.splice(projectIndex, 1)[0];
      if (currentProject && currentProject.id === projectId) {
        currentProject = projects.length > 0 ? projects[0] : null;
      }
      saveProjects();
      return {
        success: true,
        removedProjectName: removedProject.name,
        newCurrentProject: currentProject
      };
    }
    return {
      error: 'not_found'
    };
  }
  function getProjectById(projectId) {
    return projects.find(function (p) {
      return p.id === projectId;
    });
  }
  function getAllProjects() {
    return _toConsumableArray(projects);
  }
  function getCurrentProject() {
    return currentProject;
  }
  function setCurrentProject(projectId) {
    var project = getProjectById(projectId);
    if (project) {
      currentProject = project;
      return true;
    }
    return false;
  }

  // Management of the todos
  function addTodoToProject(projectId, todoDetails) {
    var project = getProjectById(projectId);
    if (project) {
      var title = todoDetails.title,
        description = todoDetails.description,
        dueDate = todoDetails.dueDate,
        priority = todoDetails.priority,
        tagsString = todoDetails.tagsString;
      var newTodo = newTodo(title, description, dueDate, priority);
      if (tagsString) {
        newTodo.setTagFromString(tagsString);
      }
      project.addTodo(newTodo);
      saveProjects();
      return newTodo;
    }
    return null;
  }
  function removeTodoFromProject(projectId, todoId) {
    var project = getProjectById(projectId);
    if (project) {
      project.removeTodo(todoId);
      saveProjects();
      return true;
    }
    return false;
  }
  function updateTodoInProject(projectId, todoId, updatedDetails) {
    var project = getProjectById(projectId);
    if (project) {
      var todo = project.getTodoById(todoId);
      if (todo) {
        if (updatedDetails.tagsString !== undefined) {
          todo.setTagsFromString(updatedDetails.tagsString);
          var tagsString = updatedDetails.tagsString,
            otherDetails = _objectWithoutProperties(updatedDetails, _excluded);
          todo.updateDetails(otherDetails);
        } else {
          todo.updateDetails(updatedDetails);
        }
        saveProjects();
        return todo;
      }
      return null;
    }
  }
  function toggleTodoComplete(projectId, todoId) {
    var project = getProjectById(projectId);
    if (project) {
      var todo = project.getTodoById(todoId);
      if (todo) {
        todo.toggleComplete();
        saveProjects();
        return todo;
      }
    }
    return null;
  }
  function getAllTodosAcrossProjects() {
    return projects.reduce(function (acc, project) {
      return acc.concat(project.getAllTodos());
    }, []);
  }
  function getAllTodosWithProjectInfo() {
    var allTodosWithProjectInfo = [];
    projects.forEach(function (project) {
      project.getAllTodos().forEach(function (todo) {
        allTodosWithProjectInfo.push(_objectSpread(_objectSpread({}, todo), {}, {
          orginalProjectId: project.id,
          projectName: project.name
        }));
      });
    });
    return allTodosWithProjectInfo;
  }
  function searchTodosInList(todos, searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
      return todos;
    }
    var lowerSearchTerm = searchTerm.toLowerCase();
    return todos.filter(function (todo) {
      return todo.tilte.toLowerCase().includes(lowerSearchTerm) || todo.description.toLowerCase().includes(lowerSearchTerm);
    });
  }
  function getAllTagsAcrossProjects() {
    var allTags = new Set();
    projects.forEach(function (project) {
      project.getUniqueTags().forEach(function (tag) {
        return allTags.add(tag);
      });
    });
    return Array.from(allTags).sort();
  }
  function filterTodosByTagAcrossProjects(tag) {
    var allTodos = getAllTodosAcrossProjects();
    var trimmedTag = tag.trim().toLowerCase();
    if (!trimmedTag) return allTodos;
    return allTodos.filter(function (todo) {
      return todo.tags.some(function (t) {
        return t.toLowerCase() === trimmedTag;
      });
    });
  }
  function filterTodosByPriorityAcrossProjects(priorityLevel) {
    var allTodos = getAllTodosAcrossProjects();
    return allTodos.filter(function (todo) {
      return todo.priority === priorityLevel;
    });
  }
  var priorityOrder = {
    'high': 1,
    'medium': 2,
    'low': 3
  };
  function sortTodos(todos, sortField) {
    var sortDirection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
    var sorted = _toConsumableArray(todos);
    sorted.sort(function (a, b) {
      var valA, valB;
      switch (sortField) {
        case 'title':
          valA = a.title.toLowerCase();
          valB = b.titie.toLowerCase();
          break;
        case 'dueDate':
          // If due date is NULL, sort them to the end
          if (a.dueDate === null && b.dueDate === null) return 0;
          if (a.dueDate === null) return 1; //a comes after b
          if (b.dueDate === null) return -1; // a comes before b
          valA = a.dueDate;
          valB = b.dueDate;
          break;
        case 'priority':
          valA = priorityOrder[a.priority];
          valB = priorityOrder[b.priority];
          break;
        default:
          return 0;
        // no sorting for unknown fields
      }
      var comparison = 0;
      if (valA > valB) {
        comparison = 1;
      } else if (valA < valB) {
        comparison = -1;
      }
      return sortDirection === 'desc' ? comparison * -1 : comparison;
    });
    return sorted;
  }
  loadProjects();
  return {
    addProject: addProject,
    updateProject: updateProject,
    removeProject: removeProject,
    getProjectById: getProjectById,
    getAllProjects: getAllProjects,
    setCurrentProject: setCurrentProject,
    getCurrentProject: getCurrentProject,
    addTodoToProject: addTodoToProject,
    removeTodoFromProject: removeTodoFromProject,
    updateTodoInProject: updateTodoInProject,
    toggleTodoComplete: toggleTodoComplete,
    getAllTodosAcrossProjects: getAllTodosAcrossProjects,
    getAllTodosWithProjectInfo: getAllTodosWithProjectInfo,
    searchTodosInList: searchTodosInList,
    getAllTagsAcrossProjects: getAllTagsAcrossProjects,
    filterTodosByTagAcrossProjects: filterTodosByTagAcrossProjects,
    filterTodosByPriorityAcrossProjects: filterTodosByPriorityAcrossProjects,
    sortTodos: sortTodos
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appLogic);

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
// Module that handles the DOM manipulation


var domController = function () {
  // DOM element selectors
  var projectsListUL = document.getElementById('projects-list');
  var addProjectBtn = document.getElementById('add-project-btn');
  var currentProjectTitle = document.getElementById('current-project-title');
  var addTodoBtn = document.getElementById('add-todo-btn');
  var todosListUL = document.getElementById('todos-list');
  var tagFilterArea = document.getElementById('tag-filter-area');
  var tagFilterClearBtn = document.getElementById('tag-filter-clear-btn');
  var notificationArea = document.getElementById('notification-area');

  // Project modal
  var projectModal = document.getElementById('project-modal');
  var projectForm = document.getElementById('project-form');
  var projectIdInput = document.getElementById('project-id');
  var projectNameInput = document.getElementById('project-name-input');
  var saveProjectBtn = document.getElementById('save-project-btn');
  var closeProjectModalBtn = document.getElementById('close-project-modal-btn');

  // Todo modal
  var todoModal = document.getElementById('todo-modal');
  var todoForm = document.getElementById('todo-form');
  var todoIdInput = document.getElementById('todo-id');
  var todoTitleInput = document.getElementById('todo-title-input');
  var todoDescriptionInput = document.getElementById('todo-description-input');
  var todoDueDateInput = document.getElementById('todo-dueDate-input');
  var todoPriorityInput = document.getElementById('todo-priority-input');
  var todoTagsInput = document.getElementById('todo-tags-input');
  var closeTodoModalBtn = document.getElementById('close-todo-modal-btn');

  // Functions to remove all child nodes
  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  function formatDateForDisplay(date) {
    if (date instanceof Date && (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isValid)(date)) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'MMM dd, yyyy');
    }
    return 'No date set';
  }

  // Project renderer
  function renderProjects(projects, currentProjectId) {
    clearElement(projectsListUL);
    if (!projects || projects.length === 0) {
      var li = document.createElement('li');
      li.textContent = 'No projects yet';
      li.classList.add('no-items');
      projectsListUL.appendChild(li);
    }
    projects.forEach(function (project) {
      var li = document.createElement('li');
      li.dataset.projectId = project.id;
      var nameSpan = document.createElement('span');
      nameSpan.classList.add('project-name');
      nameSpan.textContent = project.name;
      li.appendChild(nameSpan);
      var actionsDiv = document.createElement('div');
      actionsDiv.classList.add('project-actions');
      var editBtn = document.createElement('button');
      editBtn.innerHTML = 'Edit';
      editBtn.classList.add('edit-project-btn');
      editBtn.dataset.projectId = project.id;
      editBtn.title = 'Edit project';
      var deleteBtn = document.createElement('button');
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
    var isGlobalSearch = projectOrSearchResults && projectOrSearchResults.isGlobalSearch === true;
    var todos = projectOrSearchResults ? projectOrSearchResults.todos : [];
    var displayName = projectOrSearchResults ? projectOrSearchResults.name : 'Select a Project';
    updateProjectTitle(displayName);
    if (!todos || todos.length === 0) {
      var li = document.createElement('li');
      if (isGlobalSearch) {
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
    todos.forEach(function (todo) {
      var li = document.createElement('li');
      li.dataset.todoId = todo.id;
      if (isGlobalSearch && todo.originalProjectId) {
        li.dataset.originalProjectId = todo.originalProjectId;
      }
      li.classList.add("priority-".concat(todo.priority));
      if (todo.completed) {
        li.classList.add('todo-completed');
      }
      var todoPreviewContent = document.createElement('div');
      todoPreviewContent.classList.add('todo-preview-content');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.classList.add('todo-checkbox');
      checkbox.dataset.todoId = todo.id;
      var todoInfoDiv = document.createElement('div');
      todoInfoDiv.classList.add('todo-info');
      var titleSpan = document.createElement('span');
      titleSpan.classList.add('todo-title');
      titleSpan.textContent = todo.title;
      var dueDateSpan = document.createElement('span');
      dueDateSpan.classList.add('todo-due-date');
      dueDateSpan.textContent = "Due: ".concat(formatDateForDisplay(todo.dueDate));
      todoInfoDiv.appendChild(checkbox);
      todoInfoDiv.appendChild(titleSpan);
      todoInfoDiv.appendChild(dueDateSpan);

      // Project name that is displayed in global search result
      if (isGlobalSearch && todo.project.name) {
        var projectLabelSpan = document.createElement('span');
        projectLabelSpan.classList.add('todo-project-label');
        projectLabelSpan.textContent = "(Project: ".concat(todo.projectName, ")");
        todoInfoDiv.appendChild(projectLabelSpan);
      }

      // Tags display
      if (todo.tags && todo.tags.length > 0) {
        var tagsDiv = document.createElement('div');
        tagsDiv.classList.add('todos-tags-display');
        todo.tags.forEach(function (tag) {
          var tagSpan = document.createElement('span');
          tagSpan.classList.add('tag-label');
          tagSpan.textContent = tag;
          tagsDiv.appendChild(tagSpan);
        });
        todoInfoDiv.appendChild(tagsDiv);
      }
      var actionsDiv = document.createElement('div');
      actionsDiv.classList.add('todo-actions');
      var expandBtn = document.createElement('button');
      expandBtn.classList.add('expand-todo-btn');
      expandBtn.innerHTML = '&#43'; // Plus sign
      expandBtn.title = 'Show details';
      expandBtn.dataset.todoId = todo.id;
      actionsDiv.appendChild(expandBtn);
      var editBtn = document.createElement('button');
      editBtn.classList.add('edit-todo-btn');
      editBtn.textContent = 'Edit';
      editBtn.dataset.todoId = todo.id;
      var deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-todo-btn');
      deleteBtn.textContent = 'Delete';
      deleteBtn.dataset.todoId = todo.id;
      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(deleteBtn);
      todoPreviewContent.appendChild(todoInfoDiv);
      todoPreviewContent.appendChild(actionsDiv);
      li.appendChild(todoPreviewContent);
      var fullDetailsDiv = document.createElement('div');
      fullDetailsDiv.classList.add('todo-full-details', 'hidden');
      var descriptionP = document.createElement('p');
      descriptionP.innerHTML = 'Description: ';
      var descriptionText = document.createTextNode(todo.description || 'No description');
      descriptionP.appendChild(descriptionText);
      var priorityP = document.createElement('p');
      var priorityText = todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1);
      priorityP.innerHTML = "Priority: <span class=\"priority-text-".concat(todo.priority, "\">").concat(priorityText, "</span>");
      fullDetailsDiv.appendChild(descriptionP);
      fullDetailsDiv.appendChild(priorityP);
      li.appendChild(fullDetailsDiv);
      todosListUL.append(li);
    });
  }

  // Modal handling
  function openProjectModal() {
    var projectToEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    clearFormErrors(projectForm);
    projectForm.reset();
    projectIdInput.value = ''; // Clear hidden ID field
    saveProjectBtn.textContent = 'Save';
    if (projectToEdit) {
      projectIdInput.value = projectToEdit.id;
      projectNameInput.value = projectToEdit.name;
    }
    projectModal.style.display = 'block';
    projectNameInput.focus();
  }
  function closeProjectModal() {
    projectModal.style.display = 'none';
  }
  function openTodoModal() {
    var todoToEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var currentProjectId = arguments.length > 1 ? arguments[1] : undefined;
    clearFormErrors(todoForm);
    todoForm.reset();
    todoIdInput.value = ''; // Clear hidden ID field

    if (todoToEdit) {
      todoIdInput.value = todoToEdit.id;
      todoTitleInput.value = todoToEdit.title;
      todoDescriptionInput.value = todoToEdit.description;
      todoDueDateInput.value = todoToEdit.dueDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isValid)(todoToEdit.dueDate) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(todoToEdit.dueDate, 'yyyy-MM-dd') // Format date obj for input
      : ''; // Empty string for null or invalid date
      todoPriorityInput.value = todoToEdit.priority;
      todoTagsInput.value = todoToEdit.tags ? todoToEdit.getTagsString() : '';
    }
    todoForm.dataset.currentProjectId = currentProjectId;
    todoModal.style.display = 'block';
    todoTitleInput.focus();
  }
  function closeTodoModal() {
    todoModal.style.display = 'none';
  }

  // Getting form data
  function getProjectFormData() {
    clearFormErrors(projectForm);
    var isValid = true;
    var name = projectNameInput.value.trim();
    var id = projectIdInput.value;
    if (projectNameInput.validity.valueMissing) {
      showFieldError(projectNameInput, 'Project name is required');
      isValid = false;
    }
    return isValid ? {
      id: id,
      name: name
    } : null;
  }
  function getTodoFormData() {
    clearFormErrors(todoForm);
    var isValid = true;
    var title = todoTitleInput.value.trim();
    var description = todoDescriptionInput.value.trim();
    var dueDate = todoDueDateInput.value;
    var priority = todoPriorityInput.value;
    var tagsString = todoTagsInput.value.trim(); // Comma-separated string
    var id = todoIdInput.value;
    var currentProjectId = todoForm.dataset.currentProjectId;
    if (todoTitleInput.validity.valueMissing) {
      showFieldError(todoTitleInput, 'Task name is required!');
      isValid = false;
    }
    return isValid ? {
      id: id,
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      tagsString: tagsString,
      currentProjectId: currentProjectId
    } : null;
  }

  // Form validation
  function clearFormErrors(formElement) {
    formElement.querySelectorAll('.form-input, .form-select').forEach(function (input) {
      input.setCustomValidity('');
    });
    formElement.querySelectorAll('.error-message').forEach(function (span) {
      span.textContent = '';
    });
  }
  function showFieldError(inputElement, message) {
    var helpSpan = inputElement.parentElement.querySelector('.help-message');
    var errorSpan = inputElement.parentElement.querySelector('.error-message');
    inputElement.setCustomValidity(message);
    errorSpan.textContent = message;
    if (helpSpan) {
      helpSpan.remove();
    }
  }
  function showNotification(message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    // Types include: info, success, error, warning
    var notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    notificationArea.appendChild(notification);

    // Remove notification from DOM after animation is complete
    notification.addEventListener('animationend', function (e) {
      if (e.animationName = 'fadeOutNotification') {
        notification.remove();
      }
    });
  }
  function renderTagCloud(tags, activeTags) {
    if (!tagFilterArea) return;
    clearElement(tagFilterArea);
    if (tags && tags.length > 0) {
      tags.forEach(function (tag) {
        var tagElement = document.createElement('span');
        tagElement.classList.add('tag-filter-item');
        tagElement.textContent = tag;
        tagElement.dataset.tag = tag;
        if (tag === activeTags) {
          tagElement.classList.add('active');
        }
        tagFilterArea.appendChild(tagElement);
      });
    } else {
      var noTagMsg = document.createElement('span');
      noTagMsg.textContent = 'No tags available for filtering.';
      noTagMsg.style.fontSize = '0.9 em';
      noTagMsg.style.color = '#666';
      tagFilterArea.appendChild(noTagMsg);
    }
    if (tagFilterClearBtn) {
      tagFilterClearBtn.style.display = activeTags ? 'inline' : 'none';
    }
    if (tagFilterClearBtn && !tagFilterArea.contains(tagFilterClearBtn) && tags.length > 0) {
      tagFilterArea.appendChild(tagFilterClearBtn);
    }
  }

  // Initial state
  function initializeUI() {
    updateProjectTitle('Loading projects...');
    clearElement(todosListUL);
    var li = document.createElement('li');
    li.textContent = 'Select or add a project to see your tasks.';
    todosListUL.appendChild(li);
    addTodoBtn.style.display = 'none';
  }
  return {
    renderProjects: renderProjects,
    renderTodos: renderTodos,
    updateProjectTitle: updateProjectTitle,
    openProjectModal: openProjectModal,
    closeProjectModal: closeProjectModal,
    openTodoModal: openTodoModal,
    closeTodoModal: closeTodoModal,
    getProjectFormData: getProjectFormData,
    getTodoFormData: getTodoFormData,
    clearElement: clearElement,
    showNotification: showNotification,
    renderTagCloud: renderTagCloud,
    initializeUI: initializeUI,
    elements: {
      projectModal: projectModal,
      todoModal: todoModal,
      projectsListUL: projectsListUL,
      todosListUL: todosListUL,
      addProjectBtn: addProjectBtn,
      addTodoBtn: addTodoBtn,
      projectForm: projectForm,
      todoForm: todoForm,
      closeProjectModalBtn: closeProjectModalBtn,
      closeTodoModalBtn: closeTodoModalBtn,
      tagFilterClearBtn: tagFilterClearBtn
    }
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic.js */ "./src/appLogic.js");
/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController.js */ "./src/domController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



document.addEventListener('DOMContentLoaded', function () {
  var currentSearchTerm = '';
  var currentPriorityFilter = 'all';
  var currentTagFilter = null;
  var currentSortCriteria = {
    field: 'dueDate',
    direction: 'asc'
  };
  var searchInput = document.getElementById('search-todos-input');
  var priorityFilterSelect = document.getElementById('priority-filter');
  var tagFilterArea = document.getElementById('tag-filter-area');
  var tagFilterClearBtn = document.getElementById('tag-filter-clear-btn');
  var sortTodosSelect = document.getElementById('sort-todos');
  function refreshTagCloud() {
    var tagsForCloud = [];
    var currentProject = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
    var isGlobalMode = currentSearchTerm && currentSearchTerm.trim() !== '';
    if (isGlobalMode) {
      tagsForCloud = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllTagsAcrossProjects();
    } else if (currentProject) {
      var projectData = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProject.id);
      tagsForCloud = projectData ? projectData.getUniqueTags() : [];
    } else {
      tagsForCloud.renderTagCloud(tagsForCloud, currentTagFilter);
    }
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderTagCloud(tagsForCloud, currentTagFilter);
  }
  function updateAndRenderTodos() {
    var todosToDisplay = [];
    var viewTitle = '';
    var isGlobalMode = currentSearchTerm && currentSearchTerm !== '';
    var currentProjectFromSideBar = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
    if (isGlobalMode) {
      // Active global search
      viewTitle = "Search results for '".concat(currentSearchTerm, "'");
      var allTodosWithProjectInfo = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllTodosWithProjectInfo();
      todosToDisplay = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].searchTodosInList(allTodosWithProjectInfo, currentSearchTerm);
    } else if (currentProjectFromSideBar) {
      var projectData = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectFromSideBar.id);
      if (projectData) {
        viewTitle = projectData.name;
        todosToDisplay = projectData.getAllTodos();
      } else {
        viewTitle = 'Project not found';
        todosToDisplay = [];
      }
    } else {
      viewTitle = 'Select a project from the sidebar or search for one.';
      todosToDisplay = [];
    }
    refreshTagCloud();
    var filteredTodos = _toConsumableArray(todosToDisplay);
    if (currentPriorityFilter !== 'all') {
      filteredTodos = filteredTodos.filter(function (todo) {
        return todo.priority === currentPriorityFilter;
      });
    }
    if (currentTagFilter) {
      var lowerTagFilter = currentTagFilter.toLowerCase();
      filteredTodos = filteredTodos.filter(function (todo) {
        return todo.tags.some(function (t) {
          return t.toLowerCase() === lowerTagFilter;
        });
      });
    }
    var sortedTodos = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].sortTodos(filteredTodos, currentSortCriteria.field, currentSortCriteria.direction);
    var renderData = {
      name: viewTitle,
      todos: sortedTodos,
      isGlobalSearch: isGlobalMode
    };
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderTodos(renderData);
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectTitle(viewTitle);
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.addTodoBtn.style.display = currentProjectFromSideBar ? 'block' : 'none';
  }
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      currentSearchTerm = e.target.value;
      updateAndRenderTodos();
    });
  }
  if (tagFilterArea) {
    tagFilterArea.addEventListener('click', function (e) {
      if (e.target.classList.contains('tag-filter-item')) {
        var clickedTag = e.target.dataset.tag;
        if (currentTagFilter === clickedTag) {
          currentTagFilter = null; // Toggle of tag
        } else {
          currentTagFilter = clickedTag;
        }
        updateAndRenderTodos();
      }
    });
  }
  if (tagFilterClearBtn) {
    tagFilterClearBtn.addEventListener('click', function () {
      if (currentTagFilter !== null) {
        currentTagFilter = null;
        updateAndRenderTodos();
      }
    });
  }

  // Project event listeners
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.addProjectBtn.addEventListener('click', function () {
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].openProjectModal();
  });
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.closeProjectModalBtn.addEventListener('click', function () {
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeProjectModal();
  });

  // Project form submission
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.projectForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var projectData = _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectFormData();
    if (projectData) {
      var result;
      var action = 'added';
      if (projectData.id) {
        // Editing an existing project
        result = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(projectData.id, projectData.name);
        action = 'updated';
        if (result && result.error === 'duplicate') {
          _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification("Project name \"".concat(projectData.name, "\" already exists"), 'error');
          return;
        }
      } else {
        // Adding new project
        result = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectData.name);
      }
      if (result && !result.error) {
        if (action === 'added') _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentProject(result.id);
        refreshProjectsList();
        updateAndRenderTodos();
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeProjectModal();
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification("Project \"".concat(result.name, "\" ").concat(action, "."), 'success');
      } else if (action === 'added') {
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification('Unable to add project. Name might be invalid.', 'error');
      }
    }
  });
  if (sortTodosSelect) {
    sortTodosSelect.addEventListener('change', function (e) {
      var _e$target$value$split = e.target.value.split('_'),
        _e$target$value$split2 = _slicedToArray(_e$target$value$split, 2),
        field = _e$target$value$split2[0],
        direction = _e$target$value$split2[1];
      currentSortCriteria = {
        field: field,
        direction: direction
      };
      updateAndRenderTodos();
    });
  }

  // Actions on a project
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.projectsListUL.addEventListener('click', function (e) {
    var projectLi = e.target.closest('li[data-project-id]');
    if (!projectLi) return;
    var projectId = projectLi.dataset.projectId;
    if (e.target.classList.contains('edit-project-btn')) {
      var projectToEdit = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(projectId);
      if (projectToEdit) {
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].openProjectModal(projectToEdit);
      }
    } else if (e.target.classList.contains('delete-project-btn')) {
      var projectToDelete = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(projectId);
      if (projectToDelete && confirm("You will permanently delete project: \"".concat(projectToDelete.name, "\" and all its taks!!"))) {
        var result = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(projectId);
        if (result.success) {
          _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification("Project: \"".concat(result.removedProjectName, "\" deleted."));
          refreshProjectsList();
          // Update and render todos will handle things if current project is deleted
          updateAndRenderTodos();
        } else if (result.error === 'last_project') {
          _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification('Unable to delete the last project.', 'error');
        } else {
          _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification('Unable to delete project.', 'error');
        }
      }
    } else if (e.target.closest('.project-name') || e.target === projectLi) {
      var _appLogic$getCurrentP;
      // User clicked on a name or li itself
      if (((_appLogic$getCurrentP = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject()) === null || _appLogic$getCurrentP === void 0 ? void 0 : _appLogic$getCurrentP.id) !== projectId) {
        _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentProject(projectId);
        refreshProjectsList();
        currentSearchTerm = '';
        if (searchInput) searchInput.value = '';
        currentPriorityFilter = 'all'; // Reset priority filter
        if (priorityFilterSelect) priorityFilterSelect.value = 'all';
        currentTagFilter = null;
        currentSortCriteria = {
          field: 'dueDate',
          direction: 'asc'
        }; // Reset sort
        if (sortTodosSelect) sortTodosSelect.value = 'dueDate_asc';
        currentTagFilter = null;
        updateAndRenderTodos();
      }
    }
  });

  // To-do event listeners
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.addTodoBtn.addEventListener('click', function () {
    var currentProject = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
    if (currentProject) {
      _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].openTodoModal(null, currentProject.id);
    } else {
      _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification('Please select a project to add task.', 'warning');
    }
  });
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.closeTodoModalBtn.addEventListener('click', function () {
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeTodoModal();
  });

  // To-do form 
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var todoData = _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoFormData();
    if (todoData) {
      var success = false;
      if (todoData.id) {
        // Editing existing todo
        if (_appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodoInProject(todoData.currentProjectId, todoData.id, todoData)) {
          success = true;
        }
      } else {
        // Adding new todo
        if (_appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoToProject(todoData.currentProjectId, todoData)) {
          success = true;
        }
      }
      if (success) {
        updateAndRenderTodos();
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeTodoModal();
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification(todoData.id ? 'Task updated' : 'Task added.', 'success');
      } else {
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification('Unable to update task', 'error');
      }
    }
  });

  // Actions on todo items
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.todosListUL.addEventListener('click', function (e) {
    var target = e.target;
    var todoLi = target.closest('li[data-todo-id]');
    if (!todoLi) return;
    var todoId = todoLi.dataset.todoId;
    // Determine the project ID
    var projectIdForAction = todoLi.dataset.originalProjectId; // From global search
    if (!projectIdForAction) {
      var currentProject = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
      if (currentProject) {
        projectIdForAction = currentProject.id;
      }
    }
    if (!todoId || !projectIdForAction) return;
    if (target.classList.contains('delete-todo-btn')) {
      var project = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(projectIdForAction);
      var todoToDelete = project.getTodoById(todoId);
      if (confirm("You will permanently delete task \"".concat(todoToDelete.title, "\"."))) {
        _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodoFromProject(projectIdForAction, todoId);
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].showNotification('Task deleted.', 'success');
        updateAndRenderTodos();
      }
    } else if (target.classList.contains('edit-todo-btn')) {
      var _appLogic$getProjectB;
      var todoToEdit = (_appLogic$getProjectB = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(projectIdForAction)) === null || _appLogic$getProjectB === void 0 ? void 0 : _appLogic$getProjectB.getTodoById(todoId);
      if (todoToEdit) {
        _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].openTodoModal(todoToEdit, projectIdForAction);
      }
    } else if (target.classList.contains('todo-checkbox')) {
      _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleTodoComplete(projectIdForAction, todoId);
      updateAndRenderTodos();
    } else if (target.classList.contains('expand-todo-btn')) {
      var detailsDiv = todoLi.querySelector('.todo-full-details');
      if (detailsDiv) {
        var isHidden = detailsDiv.classList.contains('hidden');
        if (isHidden) {
          detailsDiv.classList.remove('hidden');
          detailsDiv.classList.add('visible');
          target.innerHtml = "&#8722;"; // Minus sign (Minimize)
          target.title = 'Hide details';
        } else {
          detailsDiv.classList.add('hidden');
          detailsDiv.classList.remove('visible');
          target.innerHTML = '&#43;'; // Plus sign (show)
          target.title = "Show details";
          todoLi.classList.remove('details-expanded');
        }
      }
    }
  });

  // Close modal if user clicks outside
  window.addEventListener('click', function (e) {
    if (e.target === _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.projectModal) {
      _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeProjectModal();
    }
    if (e.target === _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].elements.todoModal) {
      _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeTodoModal();
    }
  });

  // Initial render based on loaded data
  if (_appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject()) {
    updateAndRenderTodos();
  } else if (_appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects().length > 0) {
    // If no current project but projects exist, select the first one
    var firstProject = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects()[0];
    _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentProject(firstProject.id);
    refreshProjectsList();
    updateAndRenderTodos();
  } else {
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectTitle('Add a project');
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderTodos(null);
  }

  // Helper function to refresh project list
  function refreshProjectsList() {
    var projects = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllProjects();
    var currentProject = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
    _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderProjects(projects, currentProject ? currentProject.id : null);
  }

  // Initial setup
  _domController_js__WEBPACK_IMPORTED_MODULE_1__["default"].initializeUI();
  refreshProjectsList();
  updateAndRenderTodos();
});

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Module that manages the project objects


var Project = /*#__PURE__*/function () {
  function Project(name) {
    _classCallCheck(this, Project);
    this.id = "project-".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 11)); // Generate random unique ID
    this.name = name;
    this.todos = [];
  }
  return _createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todoItem) {
      if (!(todoItem instanceof _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])) return false;
      if (this.todos.some(function (todo) {
        return todo.id === todoItem.id;
      })) return false; // Check if the todo is already in the project's todos

      this.todos.push(todoItem);
      return true;
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(todoID) {
      this.todos = this.todos.filter(function (todo) {
        return todo.id !== todoID;
      });
    }
  }, {
    key: "getTodoById",
    value: function getTodoById(todoID) {
      return this.todos.find(function (todo) {
        return todo.id === todoID;
      });
    }
  }, {
    key: "getAllTodos",
    value: function getAllTodos() {
      return _toConsumableArray(this.todos); // Return a copy to prevent unwanted modifications
    }
  }, {
    key: "getTodoByPriority",
    value: function getTodoByPriority(priorityLevel) {
      return this.todos.filter(function (todo) {
        return todo.priority === priorityLevel;
      });
    }
  }, {
    key: "getTodoByCompletion",
    value: function getTodoByCompletion(completionStatus) {
      return this.todos.filter(function (todo) {
        return todo.completed === completionStatus;
      });
    }
  }, {
    key: "getTodoByTag",
    value: function getTodoByTag(tag) {
      var trimmedTag = tag.trim().toLowerCase();
      if (!trimmedTag) return this.getAllTodos(); //When tag is empty, return all todos

      return this.todos.filter(function (todo) {
        return todo.tags.some(function (t) {
          return t.toLowerCase() === trimmedTag;
        });
      });
    }
  }, {
    key: "getUniqueTags",
    value: function getUniqueTags() {
      var allTags = new Set();
      this.todos.forEach(function (todo) {
        todo.tags.forEach(function (tag) {
          return allTags.add(tag.trim());
        });
      });
      return Array.from(allTags).sort();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module to store data using localStorage

var STORAGE_KEY = 'todoAppProjects';
var storage = {
  saveData: function saveData(data) {
    try {
      var serializedData = JSON.stringify(data);
      localStorage.setItem(STORAGE_KEY, serializedData);
    } catch (error) {
      console.error('Error when trying to save data to localStorage');
    }
  },
  loadData: function loadData() {
    try {
      var serializedData = localStorage.getItem(STORAGE_KEY);
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error when trying to load data from localStorage');
      return undefined;
    }
  },
  clearData: function clearData() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error when trying to clear data from localStorage');
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Module that manages todo objects
var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority) {
    var tags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var completed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    _classCallCheck(this, Todo);
    this.id = "todo-".concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 11)); // Unique ID
    this.title = title;
    this.description = description;
    this.dueDate = null;
    if (dueDate instanceof Date && !isNaN(dueDate.valueOf())) {
      // For sample data using Date objects
      this.dueDate = dueDate;
    } else if (typeof dueDate === 'string' && dueDate.trim() !== '') {
      // For the HTML form inputs
      var parsedDate = new Date(dueDate.trim());
      this.dueDate = !isNaN(parsedDate.valueOf()) ? parsedDate : null;
    } else {
      this.dueDate = null;
    }
    this.priority = priority;
    this.tags = Array.isArray(tags) ? tags : [];
    this.completed = completed;
  }
  return _createClass(Todo, [{
    key: "toggleComplete",
    value: function toggleComplete() {
      this.completed = !this.completed;
    }
  }, {
    key: "updateDetails",
    value: function updateDetails(details) {
      if (details.title !== undefined) this.title = details.title;
      if (details.description !== undefined) this.description = details.description;
      if (details.dueDate !== undefined) {
        if (details.dueDate instanceof Date && !isNaN(details.dueDate.valueOf())) {
          var parsedDate = new Date(details.dueDate.trim());
          this.dueDate = !isNaN(parsedDate.valueOf()) ? parsedDate : null;
        } else {
          this.dueDate = null;
        }
      }
      if (details.tags && Array.isArray(details.tags)) {
        this.tags = details.tags.map(function (tag) {
          return tag.trim();
        }).filter(function (tag) {
          return tag.length > 0;
        });
      } else if (details.tagsString !== undefined) {
        this.setTagsFromString(details.tagsString);
      }
    }
  }, {
    key: "addTag",
    value: function addTag(tag) {
      var trimmedTag = tag.trim();
      if (trimmedTag && !this.tags.includes(trimmedTag)) {
        this.tags.push(trimmedTag);
      }
    }
  }, {
    key: "removeTag",
    value: function removeTag(tagToRemove) {
      var trimmedTagToRemove = tagToRemove.trim();
      this.tags = this.tags.filter(function (tag) {
        return tag !== trimmedTagToRemove;
      });
    }

    // Function to get a string representation of tags
  }, {
    key: "getTagsString",
    value: function getTagsString() {
      return this.tags.join(', ');
    }

    // Help setting tags from a comma-separated string 
  }, {
    key: "setTagsFromString",
    value: function setTagsFromString(tagsString) {
      if (typeof tagsString === 'string') {
        this.tags = tagsString.split(',').map(function (tag) {
          return tag.trim();
        }).filter(function (tag) {
          return tag.length > 0;
        });
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-9920da"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NmY3NmNkOTUzZDUxNDI3NTg3My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFB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LENBQUNwRSxNQUFNLEdBQUcsQ0FBQztRQUFBLENBQUMsQ0FBQztNQUMxQztJQUNKO0VBQUM7QUFBQTtBQUVMLGlFQUFlL0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tcHJpbWFyeTogIzI0NjQ4ODtcclxuICAtLW9uLXByaW1hcnk6ICNmZmZmZmY7XHJcbiAgLS1zZWNvbmRhcnk6ICM0ZjYwNmU7XHJcbiAgLS1zdXJmYWNlOiAjZmZmZmZmO1xyXG4gIC0tc3VyZmFjZS12YXJpYW50OiAjZWZmNmZhO1xyXG4gIC0tb24tc3VyZmFjZTogIzE4MWMyMDtcclxuICAtLW9uLXN1cmZhY2UtdmFyaWFudDogIzQxNDc0ZDtcclxuICAtLWVycm9yOiAjYmExYTFhO1xyXG4gIC0td2FybmluZzogI2Y1N2MwMDtcclxuICAtLXN1Y2Nlc3M6ICMzODhlM2M7XHJcbiAgLS1pbmZvOiAjMDI4OGQxO1xyXG4gIC0tYm9yZGVyOiAjZDdkYWRmO1xyXG4gIC0tYm9yZGVyLXZhcmlhbnQ6ICNjMWM1Y2Q7XHJcbiAgLS1zaGFkb3ctMTogMCAycHggNHB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4xMiksIDAgM3B4IDZweCByZ2JhKDE5NSwgMjA2LCAyMTMsIDAuMjQpO1xyXG4gIC0tc2hhZG93LTI6IDAgMTBweCAyMHB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4xNiksIDAgNnB4IDZweCByZ2JhKDE5NSwgMjA2LCAyMTMsIDAuMjQpO1xyXG4gIC0tcmFkaXVzLXNtOiA0cHg7XHJcbiAgLS1yYWRpdXMtbWQ6IDhweDtcclxuICAtLXJhZGl1cy1sZzogMTJweDtcclxuICAtLXNwYWNpbmcteHM6IDRweDtcclxuICAtLXNwYWNpbmctc206IDhweDtcclxuICAtLXNwYWNpbmctbWQ6IDE2cHg7XHJcbiAgLS1zcGFjaW5nLWxnOiAyNHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG4gIGJhY2tncm91bmQ6ICNmNmY5ZmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLyogTGF5b3V0ICovXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcblxyXG4uZ2xvYmFsLXNlYXJjaC1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmdsb2JhbC1zZWFyY2gtY29udGFpbmVyIC5mb3JtLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXZhcmlhbnQpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmFwcC1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi8qIFNpZGViYXIgKi9cclxuLnByb2plY3RzLXNpZGViYXIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG59XHJcblxyXG4ucHJvamVjdHMtc2lkZWJhciBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2luZy1tZCkgMDtcclxufVxyXG5cclxuI3Byb2plY3RzLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLWxnKSAwO1xyXG59XHJcblxyXG4jcHJvamVjdHMtbGlzdCBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1saXN0IGxpOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci12YXJpYW50KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1saXN0IGxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogQnV0dG9ucyAqL1xyXG4ucHJpbWFyeS1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnByaW1hcnktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDEwMCwgMTM2LCAwLjkpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi8qIE1haW4gY29udGVudCAqL1xyXG4udG9kb3MtdmlldyB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLnRvZG9zLXZpZXcgaDIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2luZy1sZykgMDtcclxufVxyXG5cclxuLnRvZG9zLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbn1cclxuXHJcbi50b2Rvcy1jb250cm9scyAucHJpbWFyeS1idG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi8qIEZpbHRlcnMgKi9cclxuLmZpbHRlcnMtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5maWx0ZXItc29ydC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuc2VsZWN0LCBcclxuOjpwaWNrZXIoc2VsZWN0KSB7XHJcbiAgYXBwZWFyYW5jZTogYmFzZS1zZWxlY3Q7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG59XHJcblxyXG5zZWxlY3Q6aG92ZXIsXHJcbnNlbGVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXZhcmlhbnQpO1xyXG59XHJcblxyXG5zZWxlY3Q6OnBpY2tlci1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIHJvdGF0ZTtcclxufVxyXG5cclxuc2VsZWN0Om9wZW46OnBpY2tlci1pY29uIHtcclxuICByb3RhdGU6IDE4MGRlZztcclxufVxyXG5cclxub3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbm9wdGlvbjpob3Zlcixcclxub3B0aW9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXZhcmlhbnQpO1xyXG59XHJcblxyXG5vcHRpb246Y2hlY2tlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxub3B0aW9uOjpjaGVja21hcmsge1xyXG4gIG9yZGVyOiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5vcHRpb246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKSB2YXIoLS1yYWRpdXMtc20pIDAgMDtcclxufVxyXG5cclxub3B0aW9uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZGl1cy1zbSkgdmFyKC0tcmFkaXVzLXNtKTtcclxufVxyXG5cclxuI3RhZy1maWx0ZXItYXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50YWctZmlsdGVyLWl0ZW0ge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4udGFnLWZpbHRlci1pdGVtOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci12YXJpYW50KTtcclxufVxyXG5cclxuLnRhZy1maWx0ZXItaXRlbS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuI3RhZy1maWx0ZXItY2xlYXItYnRuIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmctc20pO1xyXG59XHJcblxyXG4vKiBGb3JtIGlucHV0cyAqL1xyXG4uZm9ybS1pbnB1dCxcclxuLmZvcm0tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0OmZvY3VzLFxyXG4uZm9ybS1zZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZm9jdXMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI1LCAxMTgsIDIxMCwgMC4xMik7XHJcbn1cclxuXHJcbi5mb3JtLXNlbGVjdCB7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLyogVG9kbyBsaXN0ICovXHJcbiN0b2Rvcy1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jdG9kb3MtbGlzdCBsaSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiN0b2Rvcy1saXN0IGxpOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4udG9kby1wcmV2aWV3LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG59XHJcblxyXG4udG9kby1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b2RvLWNoZWNrYm94IHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4udG9kby1kZXRhaWxzIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udG9kby10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG59XHJcblxyXG4udG9kby1kdWUtZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcclxufVxyXG5cclxuLnRvZG8tY29tcGxldGVkIC50b2RvLXRpdGxlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcclxufVxyXG5cclxuLnRvZG8tdGFncy1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xyXG59XHJcblxyXG4udGFnLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycHggdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbn1cclxuXHJcbi50b2RvLXByb2plY3QtbGFiZWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XHJcbiAgcGFkZGluZzogMnB4IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogUHJpb3JpdHkgaW5kaWNhdG9ycyAqL1xyXG4ucHJpb3JpdHktbG93IHtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbWVkaXVtIHtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXdhcm5pbmcpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktaGlnaCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1lcnJvcik7XHJcbn1cclxuXHJcbi5wcmlvcml0eS10ZXh0LWxvdyB7XHJcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS10ZXh0LW1lZGl1bSB7XHJcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS10ZXh0LWhpZ2gge1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogVG9kbyBhY3Rpb25zICovXHJcbi50b2RvLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG59XHJcblxyXG4uZXhwYW5kLXRvZG8tYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leHBhbmQtdG9kby1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWJ0bixcclxuLmRlbGV0ZS10b2RvLWJ0biB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2U2NTEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5kZWxldGUtdG9kby1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjNjI4Mjg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiBUb2RvIGRldGFpbHMgKi9cclxuLnRvZG8tZnVsbC1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxufVxyXG5cclxuLnRvZG8tZnVsbC1kZXRhaWxzLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tZnVsbC1kZXRhaWxzIHAge1xyXG4gIG1hcmdpbjogdmFyKC0tc3BhY2luZy1zbSkgMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4udG9kby1mdWxsLWRldGFpbHMgcCBzdHJvbmcge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBNb2RhbHMgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgXHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBtYXJnaW46IDV2aCBhdXRvO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2Nyb2xsZXIge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoOTB2aCAtIHZhcigtLXNwYWNpbmctbGcpICogMik7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1ib3JkZXIpIHZhcigtLXN1cmZhY2UpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBoMyB7XHJcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2luZy1sZykgMDtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLm1vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbi5tb2RhbC1jb250ZW50IHRleHRhcmVhLFxyXG4ubW9kYWwtY29udGVudCBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgaW5wdXQ6Zm9jdXMsXHJcbi5tb2RhbC1jb250ZW50IHRleHRhcmVhOmZvY3VzLFxyXG4ubW9kYWwtY29udGVudCBzZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZm9jdXMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI1LCAxMTgsIDIxMCwgMC4xMik7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHRleHRhcmVhIHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICByaWdodDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcclxufVxyXG5cclxuLmhlbHAtbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xyXG4gIG1hcmdpbi10b3A6IC12YXIoLS1zcGFjaW5nLXNtKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBtYXJnaW4tdG9wOiAtdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbn1cclxuXHJcbi8qIE5vdGlmaWNhdGlvbnMgKi9cclxuLm5vdGlmaWNhdGlvbi1hcmVhIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICByaWdodDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICBhbmltYXRpb246IHNsaWRlSW5Ob3RpZmljYXRpb24gMC4zcyBmb3J3YXJkcywgZmFkZU91dE5vdGlmaWNhdGlvbiAwLjNzIDQuN3MgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24uaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24uc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24uZXJyb3Ige1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi53YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJbk5vdGlmaWNhdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dE5vdGlmaWNhdGlvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICB9XHJcblxyXG4gIC5hcHAtbGF5b3V0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucHJvamVjdHMtc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gICAgbWFyZ2luOiAydmggYXV0bztcclxuICB9XHJcblxyXG4gIC5maWx0ZXJzLXJvdyxcclxuICAuZmlsdGVyLXNvcnQtYmFyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5mb3JtLXNlbGVjdCB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0ZBQW9GO0VBQ3BGLHNGQUFzRjtFQUN0RixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvSEFBb0g7RUFDcEgsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLFlBQVk7QUFDWjtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsMEJBQTBCO0FB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QkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsaURBQWlEO0VBQ2pELG9GQUFvRjtBQUN0Rjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5OiAjMjQ2NDg4O1xcclxcbiAgLS1vbi1wcmltYXJ5OiAjZmZmZmZmO1xcclxcbiAgLS1zZWNvbmRhcnk6ICM0ZjYwNmU7XFxyXFxuICAtLXN1cmZhY2U6ICNmZmZmZmY7XFxyXFxuICAtLXN1cmZhY2UtdmFyaWFudDogI2VmZjZmYTtcXHJcXG4gIC0tb24tc3VyZmFjZTogIzE4MWMyMDtcXHJcXG4gIC0tb24tc3VyZmFjZS12YXJpYW50OiAjNDE0NzRkO1xcclxcbiAgLS1lcnJvcjogI2JhMWExYTtcXHJcXG4gIC0td2FybmluZzogI2Y1N2MwMDtcXHJcXG4gIC0tc3VjY2VzczogIzM4OGUzYztcXHJcXG4gIC0taW5mbzogIzAyODhkMTtcXHJcXG4gIC0tYm9yZGVyOiAjZDdkYWRmO1xcclxcbiAgLS1ib3JkZXItdmFyaWFudDogI2MxYzVjZDtcXHJcXG4gIC0tc2hhZG93LTE6IDAgMnB4IDRweCByZ2JhKDE5NSwgMjA2LCAyMTMsIDAuMTIpLCAwIDNweCA2cHggcmdiYSgxOTUsIDIwNiwgMjEzLCAwLjI0KTtcXHJcXG4gIC0tc2hhZG93LTI6IDAgMTBweCAyMHB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4xNiksIDAgNnB4IDZweCByZ2JhKDE5NSwgMjA2LCAyMTMsIDAuMjQpO1xcclxcbiAgLS1yYWRpdXMtc206IDRweDtcXHJcXG4gIC0tcmFkaXVzLW1kOiA4cHg7XFxyXFxuICAtLXJhZGl1cy1sZzogMTJweDtcXHJcXG4gIC0tc3BhY2luZy14czogNHB4O1xcclxcbiAgLS1zcGFjaW5nLXNtOiA4cHg7XFxyXFxuICAtLXNwYWNpbmctbWQ6IDE2cHg7XFxyXFxuICAtLXNwYWNpbmctbGc6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmOWZlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXlvdXQgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5nbG9iYWwtc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdsb2JhbC1zZWFyY2gtY29udGFpbmVyIC5mb3JtLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcHAtbGF5b3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcbi5wcm9qZWN0cy1zaWRlYmFyIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLXNpZGViYXIgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmctbWQpIDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2luZy1sZykgMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0IGxpOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXZhcmlhbnQpO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdCBsaS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCAxMDAsIDEzNiwgMC45KTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBjb250ZW50ICovXFxyXFxuLnRvZG9zLXZpZXcge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtdmlldyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLWxnKSAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtY29udHJvbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zLWNvbnRyb2xzIC5wcmltYXJ5LWJ0biB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZpbHRlcnMgKi9cXHJcXG4uZmlsdGVycy1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc29ydC1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0LCBcXHJcXG46OnBpY2tlcihzZWxlY3QpIHtcXHJcXG4gIGFwcGVhcmFuY2U6IGJhc2Utc2VsZWN0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlcixcXHJcXG5zZWxlY3Q6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXZhcmlhbnQpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6OnBpY2tlci1pY29uIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cyByb3RhdGU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpvcGVuOjpwaWNrZXItaWNvbiB7XFxyXFxuICByb3RhdGU6IDE4MGRlZztcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbm9wdGlvbjpob3ZlcixcXHJcXG5vcHRpb246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uOmNoZWNrZWQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uOjpjaGVja21hcmsge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKSB2YXIoLS1yYWRpdXMtc20pIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkaXVzLXNtKSB2YXIoLS1yYWRpdXMtc20pO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFnLWZpbHRlci1hcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YWctZmlsdGVyLWl0ZW0ge1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKSB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi50YWctZmlsdGVyLWl0ZW06aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItdmFyaWFudCk7XFxyXFxufVxcclxcblxcclxcbi50YWctZmlsdGVyLWl0ZW0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFnLWZpbHRlci1jbGVhci1idG4ge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtIGlucHV0cyAqL1xcclxcbi5mb3JtLWlucHV0LFxcclxcbi5mb3JtLXNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWlucHV0OmZvY3VzLFxcclxcbi5mb3JtLXNlbGVjdDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZm9jdXMpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjUsIDExOCwgMjEwLCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc2VsZWN0IHtcXHJcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRvZG8gbGlzdCAqL1xcclxcbiN0b2Rvcy1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb3MtbGlzdCBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9zLWxpc3QgbGk6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmV2aWV3LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVja2JveCB7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRldGFpbHMge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kdWUtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbXBsZXRlZCAudG9kby10aXRsZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10YWdzLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XFxyXFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy1sYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMnB4IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJvamVjdC1sYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXZhcmlhbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICBwYWRkaW5nOiAycHggdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy14cyk7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFByaW9yaXR5IGluZGljYXRvcnMgKi9cXHJcXG4ucHJpb3JpdHktbG93IHtcXHJcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWRpdW0ge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS13YXJuaW5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWhpZ2gge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1lcnJvcik7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS10ZXh0LWxvdyB7XFxyXFxuICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktdGV4dC1tZWRpdW0ge1xcclxcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXRleHQtaGlnaCB7XFxyXFxuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9kbyBhY3Rpb25zICovXFxyXFxuLnRvZG8tYWN0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtdG9kby1idG4ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtdG9kby1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRvZG8tYnRuLFxcclxcbi5kZWxldGUtdG9kby1idG4ge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kby1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2U2NTEwMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2M2MjgyODtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9kbyBkZXRhaWxzICovXFxyXFxuLnRvZG8tZnVsbC1kZXRhaWxzIHtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZnVsbC1kZXRhaWxzLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mdWxsLWRldGFpbHMgcCB7XFxyXFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctc20pIDA7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZnVsbC1kZXRhaWxzIHAgc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFscyAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIG1hcmdpbjogNXZoIGF1dG87XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwdmg7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Nyb2xsZXIge1xcclxcbiAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gdmFyKC0tc3BhY2luZy1sZykgKiAyKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tYm9yZGVyKSB2YXIoLS1zdXJmYWNlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgaDMge1xcclxcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2luZy1sZykgMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG4ubW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxyXFxuLm1vZGFsLWNvbnRlbnQgdGV4dGFyZWEsXFxyXFxuLm1vZGFsLWNvbnRlbnQgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgaW5wdXQ6Zm9jdXMsXFxyXFxuLm1vZGFsLWNvbnRlbnQgdGV4dGFyZWE6Zm9jdXMsXFxyXFxuLm1vZGFsLWNvbnRlbnQgc2VsZWN0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1mb2N1cyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyNSwgMTE4LCAyMTAsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB0ZXh0YXJlYSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICByaWdodDogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVscC1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xcclxcbiAgbWFyZ2luLXRvcDogLXZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1tZXNzYWdlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogLXZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxufVxcclxcblxcclxcbi8qIE5vdGlmaWNhdGlvbnMgKi9cXHJcXG4ubm90aWZpY2F0aW9uLWFyZWEge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZmljYXRpb24ge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZUluTm90aWZpY2F0aW9uIDAuM3MgZm9yd2FyZHMsIGZhZGVPdXROb3RpZmljYXRpb24gMC4zcyA0LjdzIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90aWZpY2F0aW9uLmluZm8ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZmljYXRpb24uc3VjY2VzcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbi5lcnJvciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZmljYXRpb24ud2FybmluZyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluTm90aWZpY2F0aW9uIHtcXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVPdXROb3RpZmljYXRpb24ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFwcC1sYXlvdXQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3RzLXNpZGViYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICAgIG1hcmdpbjogMnZoIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlsdGVycy1yb3csXFxyXFxuICAuZmlsdGVyLXNvcnQtYmFyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1zZWxlY3Qge1xcclxcbiAgICBtaW4td2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBNb2R1bGUgdGhhdCBoYW5kbGVzIHRoZSBjb3JlIGxvZ2ljIG9mIGFwcFxyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcclxuXHJcbmNvbnN0IGFwcExvZ2ljID0gKCgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiByZWh5ZHJhdGVQcm9qZWN0cyhwbGFpblByb2plY3RzKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsYWluUHJvamVjdHMubWFwKChwbGFpblByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHBsYWluUHJvamVjdC5uYW1lKTtcclxuICAgICAgICAgICAgcHJvamVjdC5pZCA9IHBsYWluUHJvamVjdC5pZDtcclxuICAgICAgICAgICAgcHJvamVjdC50b2RvcyAgPSBwbGFpblByb2plY3QudG9kb3MubWFwKChwbGFpblRvZG8pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcclxuICAgICAgICAgICAgICAgICAgICBwbGFpblRvZG8udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhaW5Ub2RvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWluVG9kby5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWluVG9kby5wcmlvcml0eSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFpblRvZG8udGFncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFpblRvZG8uY29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRvZG8uaWQgPSBwbGFpblRvZG8uaWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbzsgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2FtcGxlZERhdGEoKSB7XHJcbiAgICAgICAgY29uc3Qgd29ya1Byb2plY3QgPSBuZXcgUHJvamVjdCgnV29yaycpO1xyXG4gICAgICAgIHdvcmtQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ0ZpbmlzaCBRMiByZXBvcnQnLCAnQ29tcGlsZSByZXF1aXJlZCBkYXRhIGFuZCBmaW5hbGl6ZSB0aGUgY29uY2x1c2lvbi4nLCBuZXcgRGF0ZSgyMDI1LCA0LCAyNiksICdoaWdoJywgWydyZXBvcnQnXSwgZmFsc2UpKTtcclxuICAgICAgICB3b3JrUHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdUZWFtIG1lZXRpbmcgcHJlcCcsIGBQcmVwYXJlIGFnZW5kYSBhbmQgc2xpZGVzIGZvciBNb25kYXkncyB0ZWFtIG1lZXRpbmcuYCwgbmV3IERhdGUoMjAyNSwgNSwgNiksICdtZWRpdW0nLCBbJ21lZXRpbmcnXSwgZmFsc2UpKTtcclxuICAgICAgICB3b3JrUHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdDbGllbnQgZm9sbG93LXVwJywgJ0NhbGwgSm9obiBEb2UgcmVnYXJkaW5nIHByb2plY3QgQWxwaGEuJywgJycsICdtZWRpdW0nLCBbJ2NsaWVudCcsICdzaG9wcGluZyddLCB0cnVlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcnNvbmFsUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdQZXJzb25hbCcpO1xyXG4gICAgICAgIHBlcnNvbmFsUHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdHcm9jZXJ5IHNob3BwaW5nJywgJ01pbGssIGVnZ3MsIGNoaWNrZW4sIGZydWl0cy4nLCBuZXcgRGF0ZSgyMDI1LCA0LCAyMCksICdsb3cnLCBbJ2hvbWUnLCAnc2hvcHBpbmcnXSwgZmFsc2UpKTtcclxuICAgICAgICBwZXJzb25hbFByb2plY3QuYWRkVG9kbyhuZXcgVG9kbygnQm9vayBkb2N0b3IgYXBwb2ludG1lbnQnLCAnQW5udWFsIGNoZWNrLXVwLicsIG5ldyBEYXRlKDIwMjUsIDUsIDEwKSwgJ2hpZ2gnLCBbJ2hlYWx0aCddLCBmYWxzZSkpO1xyXG5cclxuICAgICAgICBjb25zdCBsZWFybmluZ1Byb2plY3QgPSBuZXcgUHJvamVjdCgnTGVhcm5pbmcnKTtcclxuICAgICAgICBsZWFybmluZ1Byb2plY3QuYWRkVG9kbyhuZXcgVG9kbygnV2VicGFjayBEZWVwIERpdmUnLCAnVW5kZXJzdGFuZCBsb2FkZXJzIGFuZCBwbHVnaW5zLicsIG5ldyBEYXRlKDIwMjUsIDQsIDMwKSwgJ21lZGl1bScsIFsnZGV2J10sIHRydWUpKTtcclxuICAgICAgICBsZWFybmluZ1Byb2plY3QuYWRkVG9kbyhuZXcgVG9kbygnUmVhZCBcIlRoZSBQcmFnbWF0aWMgUHJvZ3JhbW1lclwiJywgJ0NoYXB0ZXIgMy01JywgJycsICdsb3cnLCBbJ3JlYWRpbmcnLCAnZGV2J10sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIHByb2plY3RzID0gW3dvcmtQcm9qZWN0LCBwZXJzb25hbFByb2plY3QsIGxlYXJuaW5nUHJvamVjdF07XHJcbiAgICAgICAgY3VycmVudFByb2plY3QgPSB3b3JrUHJvamVjdDtcclxuICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVkRGF0YSA9IHN0b3JhZ2UubG9hZERhdGEoKTtcclxuICAgICAgICBpZihsb2FkZWREYXRhICYmIGxvYWRlZERhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0cyA9IHJlaHlkcmF0ZVByb2plY3RzKGxvYWRlZERhdGEpO1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzWzBdIHx8IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3JlYXRlU2FtcGxlZERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVByb2plY3RzKCkge1xyXG4gICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEocHJvamVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hbmFnZW1lbnQgb2YgdGhlIHByb2plY3RzXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5hbWUgJiZcclxuICAgICAgICAgICAgIXByb2plY3RzLmZpbmQoKHApID0+IHAubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICAgICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHByb2plY3RJZCwgbmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RUb1VwZGF0ZSA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgaWYoIXByb2plY3RUb1VwZGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9qZWN0cy5zb21lKHAgPT4gcC5pZCAhPT0gcHJvamVjdElkICYmIHAubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuZXdOYW1lLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6ICdkdXBsaWNhdGUnLCBwcm9qZWN0OiBwcm9qZWN0VG9VcGRhdGV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9qZWN0VG9VcGRhdGUubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RUb1VwZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHByb2plY3RJZCk7XHJcbiAgICAgICAgaWYocHJvamVjdEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgaWYocHJvamVjdHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2Vycm9yOiAnbGFzdF9wcm9qZWN0J307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFByb2plY3QgPSBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LDEpWzBdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QgJiYgY3VycmVudFByb2plY3QuaWQgPT09IHByb2plY3RJZCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5sZW5ndGggPiAwID8gcHJvamVjdHNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCByZW1vdmVkUHJvamVjdE5hbWU6IHJlbW92ZWRQcm9qZWN0Lm5hbWUsIG5ld0N1cnJlbnRQcm9qZWN0OiBjdXJyZW50UHJvamVjdH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7ZXJyb3I6ICdub3RfZm91bmQnfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpe1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwKSA9PiBwLmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4ucHJvamVjdHNdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcclxuICAgICAgICBpZihwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYW5hZ2VtZW50IG9mIHRoZSB0b2Rvc1xyXG4gICAgZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0SWQsIHRvZG9EZXRhaWxzKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgaWYocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhZ3NTdHJpbmd9ID0gdG9kb0RldGFpbHM7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXdUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICBpZiAodGFnc1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgbmV3VG9kby5zZXRUYWdGcm9tU3RyaW5nKCh0YWdzU3RyaW5nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1RvZG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvZG9Gcm9tUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xyXG4gICAgICAgIGlmKHByb2plY3QpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9JZCk7XHJcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG9JblByb2plY3QocHJvamVjdElkLCB0b2RvSWQsIHVwZGF0ZWREZXRhaWxzKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgaWYocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdC5nZXRUb2RvQnlJZCh0b2RvSWQpIFxyXG4gICAgICAgICAgICBpZih0b2RvKSB7XHJcbiAgICAgICAgICAgICAgICBpZih1cGRhdGVkRGV0YWlscy50YWdzU3RyaW5nICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLnNldFRhZ3NGcm9tU3RyaW5nKHVwZGF0ZWREZXRhaWxzLnRhZ3NTdHJpbmcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3RhZ3NTdHJpbmcsIC4uLm90aGVyRGV0YWlscyB9ID0gdXBkYXRlZERldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby51cGRhdGVEZXRhaWxzKG90aGVyRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8udXBkYXRlRGV0YWlscyh1cGRhdGVkRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlVG9kb0NvbXBsZXRlKHByb2plY3RJZCwgdG9kb0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gcHJvamVjdC5nZXRUb2RvQnlJZCh0b2RvSWQpO1xyXG4gICAgICAgICAgICAgICAgaWYodG9kbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8udG9nZ2xlQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsVG9kb3NBY3Jvc3NQcm9qZWN0cygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzLnJlZHVjZShcclxuICAgICAgICAgICAgICAgIChhY2MsIHByb2plY3QpID0+IGFjYy5jb25jYXQocHJvamVjdC5nZXRBbGxUb2RvcygpKSxcclxuICAgICAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsVG9kb3NXaXRoUHJvamVjdEluZm8oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zV2l0aFByb2plY3RJbmZvID0gW107XHJcbiAgICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXRBbGxUb2RvcygpLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9kb3NXaXRoUHJvamVjdEluZm8ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRvZG8sIG9yZ2luYWxQcm9qZWN0SWQ6IHByb2plY3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0Lm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICByZXR1cm4gYWxsVG9kb3NXaXRoUHJvamVjdEluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZWFyY2hUb2Rvc0luTGlzdCh0b2Rvcywgc2VhcmNoVGVybSkge1xyXG4gICAgICAgICAgICBpZighc2VhcmNoVGVybSB8fCBzZWFyY2hUZXJtLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsb3dlclNlYXJjaFRlcm0gPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PlxyXG4gICAgICAgICAgICAgICAgdG9kby50aWx0ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyU2VhcmNoVGVybSkgfHxcclxuICAgICAgICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaFRlcm0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsVGFnc0Fjcm9zc1Byb2plY3RzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUYWdzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFVuaXF1ZVRhZ3MoKS5mb3JFYWNoKCh0YWcpID0+IGFsbFRhZ3MuYWRkKHRhZykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsVGFncykuc29ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmlsdGVyVG9kb3NCeVRhZ0Fjcm9zc1Byb2plY3RzKHRhZykge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IGdldEFsbFRvZG9zQWNyb3NzUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJpbW1lZFRhZyA9IHRhZy50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYoIXRyaW1tZWRUYWcpIHJldHVybiBhbGxUb2RvcztcclxuICAgICAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcigodG9kbykgPT5cclxuICAgICAgICAgICAgICAgIHRvZG8udGFncy5zb21lKCh0KSA9PiB0LnRvTG93ZXJDYXNlKCkgPT09IHRyaW1tZWRUYWcpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmlsdGVyVG9kb3NCeVByaW9yaXR5QWNyb3NzUHJvamVjdHMocHJpb3JpdHlMZXZlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUb2RvcyA9IGdldEFsbFRvZG9zQWNyb3NzUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbFRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5wcmlvcml0eSA9PT0gcHJpb3JpdHlMZXZlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmlvcml0eU9yZGVyID0geyAnaGlnaCc6IDEsICdtZWRpdW0nOiAyLCAnbG93JzogMyB9OyBcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc29ydFRvZG9zKHRvZG9zLCBzb3J0RmllbGQsIHNvcnREaXJlY3Rpb24gPSAnYXNjJykge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBbLi4udG9kb3NdO1xyXG5cclxuICAgICAgICAgICAgc29ydGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWxBLCB2YWxCO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaChzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbEEgPSBhLnRpdGxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbEIgPSBiLnRpdGllLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2R1ZURhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBkdWUgZGF0ZSBpcyBOVUxMLCBzb3J0IHRoZW0gdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhLmR1ZURhdGUgPT09IG51bGwgJiYgYi5kdWVEYXRlID09PSBudWxsKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYS5kdWVEYXRlID09PSBudWxsKSByZXR1cm4gMTsgLy9hIGNvbWVzIGFmdGVyIGJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYi5kdWVEYXRlID09PSBudWxsKSByZXR1cm4gLTE7IC8vIGEgY29tZXMgYmVmb3JlIGJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsQSA9IGEuZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsQiA9IGIuZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJpb3JpdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxBID0gcHJpb3JpdHlPcmRlclthLnByaW9yaXR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsQiA9IHByaW9yaXR5T3JkZXJbYi5wcmlvcml0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOyAvLyBubyBzb3J0aW5nIGZvciB1bmtub3duIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb21wYXJpc29uID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxBID4gdmFsQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxBIDwgdmFsQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzb24gPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0RGlyZWN0aW9uID09PSAnZGVzYycgPyBjb21wYXJpc29uICogLTEgOiBjb21wYXJpc29uO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhZGRQcm9qZWN0LFxyXG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0LFxyXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0LFxyXG4gICAgICAgICAgICBnZXRQcm9qZWN0QnlJZCxcclxuICAgICAgICAgICAgZ2V0QWxsUHJvamVjdHMsXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0LFxyXG4gICAgICAgICAgICBnZXRDdXJyZW50UHJvamVjdCxcclxuICAgICAgICAgICAgYWRkVG9kb1RvUHJvamVjdCxcclxuICAgICAgICAgICAgcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0LFxyXG4gICAgICAgICAgICB1cGRhdGVUb2RvSW5Qcm9qZWN0LFxyXG4gICAgICAgICAgICB0b2dnbGVUb2RvQ29tcGxldGUsXHJcbiAgICAgICAgICAgIGdldEFsbFRvZG9zQWNyb3NzUHJvamVjdHMsXHJcbiAgICAgICAgICAgIGdldEFsbFRvZG9zV2l0aFByb2plY3RJbmZvLFxyXG4gICAgICAgICAgICBzZWFyY2hUb2Rvc0luTGlzdCxcclxuICAgICAgICAgICAgZ2V0QWxsVGFnc0Fjcm9zc1Byb2plY3RzLFxyXG4gICAgICAgICAgICBmaWx0ZXJUb2Rvc0J5VGFnQWNyb3NzUHJvamVjdHMsXHJcbiAgICAgICAgICAgIGZpbHRlclRvZG9zQnlQcmlvcml0eUFjcm9zc1Byb2plY3RzLFxyXG4gICAgICAgICAgICBzb3J0VG9kb3MsXHJcbiAgICAgICAgICB9O1xyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcExvZ2ljOyIsIi8vIE1vZHVsZSB0aGF0IGhhbmRsZXMgdGhlIERPTSBtYW5pcHVsYXRpb25cclxuXHJcbmltcG9ydCB7IGZvcm1hdCwgaXNWYWxpZCBhcyBpc1ZhbGlkRGF0ZX0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuY29uc3QgZG9tQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcbiAgICAvLyBET00gZWxlbWVudCBzZWxlY3RvcnNcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtcHJvamVjdC10aXRsZScpO1xyXG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1idG4nKTtcclxuICAgIGNvbnN0IHRvZG9zTGlzdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zLWxpc3QnKTtcclxuICAgIGNvbnN0IHRhZ0ZpbHRlckFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWZpbHRlci1hcmVhJyk7XHJcbiAgICBjb25zdCB0YWdGaWx0ZXJDbGVhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctZmlsdGVyLWNsZWFyLWJ0bicpO1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tYXJlYScpO1xyXG5cclxuICAgIC8vIFByb2plY3QgbW9kYWxcclxuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW1vZGFsJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICAgIGNvbnN0IHByb2plY3RJZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaWQnKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lLWlucHV0Jyk7XHJcbiAgICBjb25zdCBzYXZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXByb2plY3QtYnRuJyk7XHJcbiAgICBjb25zdCBjbG9zZVByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qZWN0LW1vZGFsLWJ0bicpO1xyXG5cclxuICAgIC8vIFRvZG8gbW9kYWxcclxuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW1vZGFsJyk7XHJcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcclxuICAgIGNvbnN0IHRvZG9JZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8taWQnKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUtaW5wdXQnKTtcclxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24taW5wdXQnKTtcclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlLWlucHV0Jyk7XHJcbiAgICBjb25zdCB0b2RvUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICBjb25zdCB0b2RvVGFnc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGFncy1pbnB1dCcpO1xyXG4gICAgY29uc3QgY2xvc2VUb2RvTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdG9kby1tb2RhbC1idG4nKTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbnMgdG8gcmVtb3ZlIGFsbCBjaGlsZCBub2Rlc1xyXG4gICAgZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICB3aGlsZShlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlRm9yRGlzcGxheShkYXRlKSB7XHJcbiAgICAgICAgaWYoIGRhdGUgaW5zdGFuY2VvZiBEYXRlICAmJiBpc1ZhbGlkRGF0ZShkYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdNTU0gZGQsIHl5eXknKSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnTm8gZGF0ZSBzZXQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3QgcmVuZGVyZXJcclxuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKSB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50KHByb2plY3RzTGlzdFVMKTtcclxuICAgICAgICBpZighcHJvamVjdHMgfHwgcHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSAnTm8gcHJvamVjdHMgeWV0JztcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnbm8taXRlbXMnKTtcclxuICAgICAgICAgICAgcHJvamVjdHNMaXN0VUwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcclxuICAgICAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYWN0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFjdGlvbnMnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZWRpdEJ0bi5pbm5lckhUTUwgPSAnRWRpdCc7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LWJ0bicpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICAgICAgICAgICAgZWRpdEJ0bi50aXRsZSA9ICdFZGl0IHByb2plY3QnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnRGVsZXRlJztcclxuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4udGl0bGUgPSAnRGVsZXRlIHByb2plY3QnO1xyXG5cclxuICAgICAgICAgICAgYWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgICAgICAgICAgYWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhY3Rpb25zRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBjdXJyZW50UHJvamVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3RVTC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgY3VycmVudFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlIHx8ICdObyBwcm9qZWN0IHNlbGVjdGVkJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2RvIHJlbmRlcmVyXHJcbiAgICBmdW5jdGlvbiByZW5kZXJUb2Rvcyhwcm9qZWN0T3JTZWFyY2hSZXN1bHRzKSB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50KHRvZG9zTGlzdFVMKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNHbG9iYWxTZWFyY2ggPSBwcm9qZWN0T3JTZWFyY2hSZXN1bHRzICYmIHByb2plY3RPclNlYXJjaFJlc3VsdHMuaXNHbG9iYWxTZWFyY2ggPT09IHRydWU7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0T3JTZWFyY2hSZXN1bHRzID8gcHJvamVjdE9yU2VhcmNoUmVzdWx0cy50b2RvcyA6IFtdO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gcHJvamVjdE9yU2VhcmNoUmVzdWx0cyA/IHByb2plY3RPclNlYXJjaFJlc3VsdHMubmFtZSA6ICdTZWxlY3QgYSBQcm9qZWN0JztcclxuXHJcbiAgICAgICAgdXBkYXRlUHJvamVjdFRpdGxlKGRpc3BsYXlOYW1lKTtcclxuXHJcbiAgICAgICAgaWYoIXRvZG9zIHx8IHRvZG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGlmKGlzR2xvYmFsU2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdObyB0YXNrcyBmb3VuZCB0aGF0IG1hdGNoIHlvdXIgc2VhcmNoLic7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE9yU2VhcmNoUmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSAnTm8gdGFza3MgaW4gdGhpcyBwcm9qZWN0IHlldC4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSAnU2VsZWN0IGEgcHJvamVjdCBvciBlbnRlciBhIHNlYXJjaCB0ZXJtLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnbm8taXRlbXMnKTtcclxuICAgICAgICAgICAgdG9kb3NMaXN0VUwuYXBwZW5kQ2hpbGQobGkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpLmRhdGFzZXQudG9kb0lkID0gdG9kby5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmKGlzR2xvYmFsU2VhcmNoICYmIHRvZG8ub3JpZ2luYWxQcm9qZWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGxpLmRhdGFzZXQub3JpZ2luYWxQcm9qZWN0SWQgPSB0b2RvLm9yaWdpbmFsUHJvamVjdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7dG9kby5wcmlvcml0eX1gKTtcclxuICAgICAgICAgICAgaWYodG9kby5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9QcmV2aWV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b2RvUHJldmlld0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby1wcmV2aWV3LWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndG9kby1jaGVja2JveCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveC5kYXRhc2V0LnRvZG9JZCA9IHRvZG8uaWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b2RvSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b2RvSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWluZm8nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBkdWVEYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZS1kYXRlJyk7XHJcbiAgICAgICAgICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gYER1ZTogJHtmb3JtYXREYXRlRm9yRGlzcGxheSh0b2RvLmR1ZURhdGUpfWA7XHJcblxyXG4gICAgICAgICAgICB0b2RvSW5mb0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgIHRvZG9JbmZvRGl2LmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgICAgIHRvZG9JbmZvRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVTcGFuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2plY3QgbmFtZSB0aGF0IGlzIGRpc3BsYXllZCBpbiBnbG9iYWwgc2VhcmNoIHJlc3VsdFxyXG4gICAgICAgICAgICBpZiAoaXNHbG9iYWxTZWFyY2ggJiYgdG9kby5wcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGFiZWxTcGFuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdExhYmVsU3Bhbi50ZXh0Q29udGVudCA9IGAoUHJvamVjdDogJHt0b2RvLnByb2plY3ROYW1lfSlgO1xyXG4gICAgICAgICAgICAgICAgdG9kb0luZm9EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsU3Bhbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRhZ3MgZGlzcGxheVxyXG4gICAgICAgICAgICBpZiAodG9kby50YWdzICYmIHRvZG8udGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0YWdzRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9zLXRhZ3MtZGlzcGxheScpO1xyXG4gICAgICAgICAgICAgICAgdG9kby50YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnU3Bhbi5jbGFzc0xpc3QuYWRkKCd0YWctbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YWdTcGFuLnRleHRDb250ZW50ID0gdGFnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3NEaXYuYXBwZW5kQ2hpbGQodGFnU3Bhbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRvZG9JbmZvRGl2LmFwcGVuZENoaWxkKHRhZ3NEaXYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFjdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1hY3Rpb25zJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleHBhbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10b2RvLWJ0bicpO1xyXG4gICAgICAgICAgICBleHBhbmRCdG4uaW5uZXJIVE1MID0gJyYjNDMnOyAvLyBQbHVzIHNpZ25cclxuICAgICAgICAgICAgZXhwYW5kQnRuLnRpdGxlID0gJ1Nob3cgZGV0YWlscyc7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ0bi5kYXRhc2V0LnRvZG9JZCA9IHRvZG8uaWQ7XHJcbiAgICAgICAgICAgIGFjdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZXhwYW5kQnRuKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8tYnRuJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdG9kby1idG4nKTtcclxuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5kYXRhc2V0LnRvZG9JZCA9IHRvZG8uaWQ7XHJcblxyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgICAgICAgICB0b2RvUHJldmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0luZm9EaXYpO1xyXG4gICAgICAgICAgICB0b2RvUHJldmlld0NvbnRlbnQuYXBwZW5kQ2hpbGQoYWN0aW9uc0Rpdik7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHRvZG9QcmV2aWV3Q29udGVudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmdWxsRGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmdWxsRGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWZ1bGwtZGV0YWlscycsICdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25QLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbjogJztcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9kby5kZXNjcmlwdGlvbiB8fCAnTm8gZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25QLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IHRvZG8ucHJpb3JpdHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0b2RvLnByaW9yaXR5LnNsaWNlKDEpO1xyXG4gICAgICAgICAgICBwcmlvcml0eVAuaW5uZXJIVE1MID0gYFByaW9yaXR5OiA8c3BhbiBjbGFzcz1cInByaW9yaXR5LXRleHQtJHt0b2RvLnByaW9yaXR5fVwiPiR7cHJpb3JpdHlUZXh0fTwvc3Bhbj5gO1xyXG5cclxuICAgICAgICAgICAgZnVsbERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QKTtcclxuICAgICAgICAgICAgZnVsbERldGFpbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlQKTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZnVsbERldGFpbHNEaXYpO1xyXG4gICAgICAgICAgICB0b2Rvc0xpc3RVTC5hcHBlbmQobGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vZGFsIGhhbmRsaW5nXHJcbiAgICBmdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKHByb2plY3RUb0VkaXQgPSBudWxsKSB7XHJcbiAgICAgICAgY2xlYXJGb3JtRXJyb3JzKHByb2plY3RGb3JtKTtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgICAgIHByb2plY3RJZElucHV0LnZhbHVlID0gJyc7IC8vIENsZWFyIGhpZGRlbiBJRCBmaWVsZFxyXG4gICAgICAgIHNhdmVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xyXG5cclxuICAgICAgICBpZihwcm9qZWN0VG9FZGl0KSB7XHJcbiAgICAgICAgICAgIHByb2plY3RJZElucHV0LnZhbHVlID0gcHJvamVjdFRvRWRpdC5pZDtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3RUb0VkaXQubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVByb2plY3RNb2RhbCgpIHtcclxuICAgICAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuVG9kb01vZGFsKHRvZG9Ub0VkaXQgPSBudWxsLCBjdXJyZW50UHJvamVjdElkKSB7XHJcbiAgICAgICAgY2xlYXJGb3JtRXJyb3JzKHRvZG9Gb3JtKTtcclxuICAgICAgICB0b2RvRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIHRvZG9JZElucHV0LnZhbHVlID0gJyc7IC8vIENsZWFyIGhpZGRlbiBJRCBmaWVsZFxyXG5cclxuICAgICAgICBpZiAodG9kb1RvRWRpdCkge1xyXG4gICAgICAgICAgICB0b2RvSWRJbnB1dC52YWx1ZSA9IHRvZG9Ub0VkaXQuaWQ7XHJcbiAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnZhbHVlID0gdG9kb1RvRWRpdC50aXRsZTtcclxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvVG9FZGl0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0b2RvRHVlRGF0ZUlucHV0LnZhbHVlID0gKHRvZG9Ub0VkaXQuZHVlRGF0ZSAmJiBpc1ZhbGlkRGF0ZSh0b2RvVG9FZGl0LmR1ZURhdGUpKVxyXG4gICAgICAgICAgICAgICAgPyBmb3JtYXQodG9kb1RvRWRpdC5kdWVEYXRlLCAneXl5eS1NTS1kZCcpIC8vIEZvcm1hdCBkYXRlIG9iaiBmb3IgaW5wdXRcclxuICAgICAgICAgICAgICAgIDogJyc7IC8vIEVtcHR5IHN0cmluZyBmb3IgbnVsbCBvciBpbnZhbGlkIGRhdGVcclxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvVG9FZGl0LnByaW9yaXR5O1xyXG4gICAgICAgICAgICB0b2RvVGFnc0lucHV0LnZhbHVlID0gdG9kb1RvRWRpdC50YWdzID8gdG9kb1RvRWRpdC5nZXRUYWdzU3RyaW5nKCkgOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb0Zvcm0uZGF0YXNldC5jdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3RJZDtcclxuICAgICAgICB0b2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVRvZG9Nb2RhbCgpIHtcclxuICAgICAgICB0b2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXR0aW5nIGZvcm0gZGF0YVxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdEZvcm1EYXRhKCkge1xyXG4gICAgICAgIGNsZWFyRm9ybUVycm9ycyhwcm9qZWN0Rm9ybSk7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBpZCA9IHByb2plY3RJZElucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgICAgICAgc2hvd0ZpZWxkRXJyb3IocHJvamVjdE5hbWVJbnB1dCwgJ1Byb2plY3QgbmFtZSBpcyByZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc1ZhbGlkID8ge2lkLCBuYW1lfSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VG9kb0Zvcm1EYXRhKCkge1xyXG4gICAgICAgIGNsZWFyRm9ybUVycm9ycyh0b2RvRm9ybSk7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdG9kb1RpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0b2RvRHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFnc1N0cmluZyAgPSB0b2RvVGFnc0lucHV0LnZhbHVlLnRyaW0oKTsgLy8gQ29tbWEtc2VwYXJhdGVkIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGlkID0gdG9kb0lkSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHRvZG9Gb3JtLmRhdGFzZXQuY3VycmVudFByb2plY3RJZDtcclxuICAgIFxyXG5cclxuICAgICAgICBpZiAodG9kb1RpdGxlSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgc2hvd0ZpZWxkRXJyb3IodG9kb1RpdGxlSW5wdXQsICdUYXNrIG5hbWUgaXMgcmVxdWlyZWQhJyk7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXNWYWxpZCBcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgICAgIHRhZ3NTdHJpbmcsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SWRcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm0gdmFsaWRhdGlvblxyXG4gICAgZnVuY3Rpb24gY2xlYXJGb3JtRXJyb3JzKGZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taW5wdXQsIC5mb3JtLXNlbGVjdCcpLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLW1lc3NhZ2UnKS5mb3JFYWNoKHNwYW4gPT4ge1xyXG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0ZpZWxkRXJyb3IoaW5wdXRFbGVtZW50LCBtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgaGVscFNwYW4gPSBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC1tZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JTcGFuID0gaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpO1xyXG4gICAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgaWYoaGVscFNwYW4pIHtcclxuICAgICAgICAgICAgaGVscFNwYW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykgeyAvLyBUeXBlcyBpbmNsdWRlOiBpbmZvLCBzdWNjZXNzLCBlcnJvciwgd2FybmluZ1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24nLCB0eXBlKTtcclxuICAgICAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgICA9IG1lc3NhZ2U7XHJcblxyXG4gICAgICAgIG5vdGlmaWNhdGlvbkFyZWEuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG5vdGlmaWNhdGlvbiBmcm9tIERPTSBhZnRlciBhbmltYXRpb24gaXMgY29tcGxldGVcclxuICAgICAgICBub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuYW5pbWF0aW9uTmFtZSA9ICdmYWRlT3V0Tm90aWZpY2F0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFnQ2xvdWQodGFncywgYWN0aXZlVGFncykge1xyXG4gICAgICAgIGlmICghdGFnRmlsdGVyQXJlYSkgcmV0dXJuO1xyXG4gICAgICAgIGNsZWFyRWxlbWVudCh0YWdGaWx0ZXJBcmVhKTtcclxuXHJcbiAgICAgICAgaWYgKHRhZ3MgJiYgdGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCggdGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICB0YWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhZy1maWx0ZXItaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWxlbWVudC50ZXh0Q29udGVudCA9IHRhZztcclxuICAgICAgICAgICAgICAgIHRhZ0VsZW1lbnQuZGF0YXNldC50YWcgPSB0YWc7XHJcbiAgICAgICAgICAgICAgICBpZih0YWcgPT09IGFjdGl2ZVRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFnRmlsdGVyQXJlYS5hcHBlbmRDaGlsZCh0YWdFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9UYWdNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIG5vVGFnTXNnLnRleHRDb250ZW50ID0gJ05vIHRhZ3MgYXZhaWxhYmxlIGZvciBmaWx0ZXJpbmcuJztcclxuICAgICAgICAgICAgbm9UYWdNc2cuc3R5bGUuZm9udFNpemUgPSAnMC45IGVtJztcclxuICAgICAgICAgICAgbm9UYWdNc2cuc3R5bGUuY29sb3IgPSAnIzY2Nic7XHJcbiAgICAgICAgICAgIHRhZ0ZpbHRlckFyZWEuYXBwZW5kQ2hpbGQobm9UYWdNc2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhZ0ZpbHRlckNsZWFyQnRuKSB7XHJcbiAgICAgICAgICAgIHRhZ0ZpbHRlckNsZWFyQnRuLnN0eWxlLmRpc3BsYXkgPSBhY3RpdmVUYWdzID8gJ2lubGluZScgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggdGFnRmlsdGVyQ2xlYXJCdG4gJiYgIXRhZ0ZpbHRlckFyZWEuY29udGFpbnModGFnRmlsdGVyQ2xlYXJCdG4pICYmIHRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YWdGaWx0ZXJBcmVhLmFwcGVuZENoaWxkKHRhZ0ZpbHRlckNsZWFyQnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbCBzdGF0ZVxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZVVJKCkge1xyXG4gICAgICAgIHVwZGF0ZVByb2plY3RUaXRsZSgnTG9hZGluZyBwcm9qZWN0cy4uLicpO1xyXG4gICAgICAgIGNsZWFyRWxlbWVudCh0b2Rvc0xpc3RVTCk7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gJ1NlbGVjdCBvciBhZGQgYSBwcm9qZWN0IHRvIHNlZSB5b3VyIHRhc2tzLidcclxuICAgICAgICB0b2Rvc0xpc3RVTC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgYWRkVG9kb0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlclByb2plY3RzLFxyXG4gICAgICAgIHJlbmRlclRvZG9zLFxyXG4gICAgICAgIHVwZGF0ZVByb2plY3RUaXRsZSxcclxuICAgICAgICBvcGVuUHJvamVjdE1vZGFsLFxyXG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsLFxyXG4gICAgICAgIG9wZW5Ub2RvTW9kYWwsXHJcbiAgICAgICAgY2xvc2VUb2RvTW9kYWwsXHJcbiAgICAgICAgZ2V0UHJvamVjdEZvcm1EYXRhLFxyXG4gICAgICAgIGdldFRvZG9Gb3JtRGF0YSxcclxuICAgICAgICBjbGVhckVsZW1lbnQsXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbixcclxuICAgICAgICByZW5kZXJUYWdDbG91ZCxcclxuICAgICAgICBpbml0aWFsaXplVUksXHJcbiAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLFxyXG4gICAgICAgICAgICB0b2RvTW9kYWwsXHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdFVMLFxyXG4gICAgICAgICAgICB0b2Rvc0xpc3RVTCxcclxuICAgICAgICAgICAgYWRkUHJvamVjdEJ0bixcclxuICAgICAgICAgICAgYWRkVG9kb0J0bixcclxuICAgICAgICAgICAgcHJvamVjdEZvcm0sXHJcbiAgICAgICAgICAgIHRvZG9Gb3JtLFxyXG4gICAgICAgICAgICBjbG9zZVByb2plY3RNb2RhbEJ0bixcclxuICAgICAgICAgICAgY2xvc2VUb2RvTW9kYWxCdG4sXHJcbiAgICAgICAgICAgIHRhZ0ZpbHRlckNsZWFyQnRuLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuIH0pKCk7XHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgZG9tQ29udHJvbGxlcjsiLCJpbXBvcnQgYXBwTG9naWMgZnJvbSAnLi9hcHBMb2dpYy5qcyc7XHJcbmltcG9ydCBkb21Db250cm9sbGVyIGZyb20gJy4vZG9tQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxldCBjdXJyZW50U2VhcmNoVGVybSA9ICcnO1xyXG4gICAgbGV0IGN1cnJlbnRQcmlvcml0eUZpbHRlciA9ICdhbGwnO1xyXG4gICAgbGV0IGN1cnJlbnRUYWdGaWx0ZXIgPSBudWxsO1xyXG4gICAgbGV0IGN1cnJlbnRTb3J0Q3JpdGVyaWEgPSB7IGZpZWxkOiAnZHVlRGF0ZScsIGRpcmVjdGlvbjogJ2FzYyd9O1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2Rvcy1pbnB1dCcpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlGaWx0ZXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktZmlsdGVyJyk7XHJcbiAgICBjb25zdCB0YWdGaWx0ZXJBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1maWx0ZXItYXJlYScpO1xyXG4gICAgY29uc3QgdGFnRmlsdGVyQ2xlYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWZpbHRlci1jbGVhci1idG4nKTtcclxuICAgIGNvbnN0IHNvcnRUb2Rvc1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LXRvZG9zJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFRhZ0Nsb3VkKCkge1xyXG4gICAgICAgIGxldCB0YWdzRm9yQ2xvdWQgPSBbXTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFwcExvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc3QgaXNHbG9iYWxNb2RlID0gY3VycmVudFNlYXJjaFRlcm0gJiYgY3VycmVudFNlYXJjaFRlcm0udHJpbSgpICE9PSAnJztcclxuXHJcbiAgICAgICAgaWYoaXNHbG9iYWxNb2RlKSB7XHJcbiAgICAgICAgICAgIHRhZ3NGb3JDbG91ZCA9IGFwcExvZ2ljLmdldEFsbFRhZ3NBY3Jvc3NQcm9qZWN0cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBhcHBMb2dpYy5nZXRQcm9qZWN0QnlJZChjdXJyZW50UHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIHRhZ3NGb3JDbG91ZCA9IHByb2plY3REYXRhID8gcHJvamVjdERhdGEuZ2V0VW5pcXVlVGFncygpIDogW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFnc0ZvckNsb3VkLnJlbmRlclRhZ0Nsb3VkKHRhZ3NGb3JDbG91ZCwgY3VycmVudFRhZ0ZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIucmVuZGVyVGFnQ2xvdWQodGFnc0ZvckNsb3VkLCBjdXJyZW50VGFnRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVBbmRSZW5kZXJUb2RvcygpIHtcclxuICAgICAgICBsZXQgdG9kb3NUb0Rpc3BsYXkgPSBbXTtcclxuICAgICAgICBsZXQgdmlld1RpdGxlID0gJyc7XHJcbiAgICAgICAgY29uc3QgaXNHbG9iYWxNb2RlICAgPSBjdXJyZW50U2VhcmNoVGVybSAmJiBjdXJyZW50U2VhcmNoVGVybSAhPT0gJyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RGcm9tU2lkZUJhciA9IGFwcExvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgICAgIGlmKGlzR2xvYmFsTW9kZSkge1xyXG4gICAgICAgICAgICAvLyBBY3RpdmUgZ2xvYmFsIHNlYXJjaFxyXG4gICAgICAgICAgICB2aWV3VGl0bGUgPSBgU2VhcmNoIHJlc3VsdHMgZm9yICcke2N1cnJlbnRTZWFyY2hUZXJtfSdgO1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUb2Rvc1dpdGhQcm9qZWN0SW5mbyA9IGFwcExvZ2ljLmdldEFsbFRvZG9zV2l0aFByb2plY3RJbmZvKCk7XHJcbiAgICAgICAgICAgIHRvZG9zVG9EaXNwbGF5ID0gYXBwTG9naWMuc2VhcmNoVG9kb3NJbkxpc3QoYWxsVG9kb3NXaXRoUHJvamVjdEluZm8sIGN1cnJlbnRTZWFyY2hUZXJtKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0RnJvbVNpZGVCYXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBhcHBMb2dpYy5nZXRQcm9qZWN0QnlJZChjdXJyZW50UHJvamVjdEZyb21TaWRlQmFyLmlkKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3REYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3VGl0bGUgPSBwcm9qZWN0RGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdG9kb3NUb0Rpc3BsYXkgPSBwcm9qZWN0RGF0YS5nZXRBbGxUb2RvcygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmlld1RpdGxlID0gJ1Byb2plY3Qgbm90IGZvdW5kJztcclxuICAgICAgICAgICAgICAgIHRvZG9zVG9EaXNwbGF5ID0gW107XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld1RpdGxlID0gJ1NlbGVjdCBhIHByb2plY3QgZnJvbSB0aGUgc2lkZWJhciBvciBzZWFyY2ggZm9yIG9uZS4nO1xyXG4gICAgICAgICAgICB0b2Rvc1RvRGlzcGxheSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVmcmVzaFRhZ0Nsb3VkKCk7XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJlZFRvZG9zID0gWy4uLnRvZG9zVG9EaXNwbGF5XTtcclxuICAgICAgICBpZiAoY3VycmVudFByaW9yaXR5RmlsdGVyICE9PSAnYWxsJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFRvZG9zID0gZmlsdGVyZWRUb2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnByaW9yaXR5ID09PSBjdXJyZW50UHJpb3JpdHlGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYWdGaWx0ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbG93ZXJUYWdGaWx0ZXIgPSBjdXJyZW50VGFnRmlsdGVyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkVG9kb3MgPSBmaWx0ZXJlZFRvZG9zLmZpbHRlcih0b2RvID0+XHJcbiAgICAgICAgICAgICAgICB0b2RvLnRhZ3Muc29tZSh0ID0+IHQudG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJUYWdGaWx0ZXIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc29ydGVkVG9kb3MgPSBhcHBMb2dpYy5zb3J0VG9kb3MoZmlsdGVyZWRUb2RvcywgY3VycmVudFNvcnRDcml0ZXJpYS5maWVsZCwgY3VycmVudFNvcnRDcml0ZXJpYS5kaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlbmRlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHZpZXdUaXRsZSxcclxuICAgICAgICAgICAgdG9kb3M6IHNvcnRlZFRvZG9zLFxyXG4gICAgICAgICAgICBpc0dsb2JhbFNlYXJjaDogaXNHbG9iYWxNb2RlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb21Db250cm9sbGVyLnJlbmRlclRvZG9zKHJlbmRlckRhdGEpO1xyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdFRpdGxlKHZpZXdUaXRsZSk7XHJcbiAgICAgICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5hZGRUb2RvQnRuLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50UHJvamVjdEZyb21TaWRlQmFyID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcgLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50U2VhcmNoVGVybSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhZ0ZpbHRlckFyZWEpIHtcclxuICAgICAgICB0YWdGaWx0ZXJBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFnLWZpbHRlci1pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRUYWcgPSBlLnRhcmdldC5kYXRhc2V0LnRhZztcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGFnRmlsdGVyID09PSBjbGlja2VkVGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhZ0ZpbHRlciA9IG51bGw7IC8vIFRvZ2dsZSBvZiB0YWdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhZ0ZpbHRlciA9IGNsaWNrZWRUYWc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFnRmlsdGVyQ2xlYXJCdG4pIHtcclxuICAgICAgICB0YWdGaWx0ZXJDbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYWdGaWx0ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdGaWx0ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3QgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBkb21Db250cm9sbGVyLmVsZW1lbnRzLmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIub3BlblByb2plY3RNb2RhbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5jbG9zZVByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb21Db250cm9sbGVyLmNsb3NlUHJvamVjdE1vZGFsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IGZvcm0gc3VibWlzc2lvblxyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRvbUNvbnRyb2xsZXIuZ2V0UHJvamVjdEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYgKHByb2plY3REYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAnYWRkZWQnO1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdERhdGEuaWQpIHsgLy8gRWRpdGluZyBhbiBleGlzdGluZyBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgIGFwcExvZ2ljLnVwZGF0ZVByb2plY3QocHJvamVjdERhdGEuaWQsIHByb2plY3REYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uPSAndXBkYXRlZCc7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5lcnJvciA9PT0gJ2R1cGxpY2F0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24oYFByb2plY3QgbmFtZSBcIiR7cHJvamVjdERhdGEubmFtZX1cIiBhbHJlYWR5IGV4aXN0c2AsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gQWRkaW5nIG5ldyBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhcHBMb2dpYy5hZGRQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdhZGRlZCcpIGFwcExvZ2ljLnNldEN1cnJlbnRQcm9qZWN0KHJlc3VsdC5pZCk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUHJvamVjdHNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5jbG9zZVByb2plY3RNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5zaG93Tm90aWZpY2F0aW9uKGBQcm9qZWN0IFwiJHtyZXN1bHQubmFtZX1cIiAke2FjdGlvbn0uYCwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdhZGRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuc2hvd05vdGlmaWNhdGlvbiAgKCdVbmFibGUgdG8gYWRkIHByb2plY3QuIE5hbWUgbWlnaHQgYmUgaW52YWxpZC4nLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzb3J0VG9kb3NTZWxlY3QpIHtcclxuICAgICAgICBzb3J0VG9kb3NTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW2ZpZWxkLCBkaXJlY3Rpb25dID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJ18nKTtcclxuICAgICAgICAgICAgY3VycmVudFNvcnRDcml0ZXJpYSA9IHtmaWVsZCwgZGlyZWN0aW9ufTtcclxuICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3Rpb25zIG9uIGEgcHJvamVjdFxyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5wcm9qZWN0c0xpc3RVTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdExpID0gZS50YXJnZXQuY2xvc2VzdCgnbGlbZGF0YS1wcm9qZWN0LWlkXScpO1xyXG4gICAgICAgIGlmKCFwcm9qZWN0TGkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdExpLmRhdGFzZXQucHJvamVjdElkO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdC1idG4nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9FZGl0ID0gYXBwTG9naWMuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3RUb0VkaXQpIHtcclxuICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIub3BlblByb2plY3RNb2RhbChwcm9qZWN0VG9FZGl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdC1idG4nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBhcHBMb2dpYy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdFRvRGVsZXRlICYmIGNvbmZpcm0oYFlvdSB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSBwcm9qZWN0OiBcIiR7cHJvamVjdFRvRGVsZXRlLm5hbWV9XCIgYW5kIGFsbCBpdHMgdGFrcyEhYCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFwcExvZ2ljLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuc2hvd05vdGlmaWNhdGlvbihgUHJvamVjdDogXCIke3Jlc3VsdC5yZW1vdmVkUHJvamVjdE5hbWV9XCIgZGVsZXRlZC5gKTtcclxuICAgICAgICAgICAgICAgICAgICByZWZyZXNoUHJvamVjdHNMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFuZCByZW5kZXIgdG9kb3Mgd2lsbCBoYW5kbGUgdGhpbmdzIGlmIGN1cnJlbnQgcHJvamVjdCBpcyBkZWxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyZXN1bHQuZXJyb3IgPT09ICdsYXN0X3Byb2plY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5zaG93Tm90aWZpY2F0aW9uKCdVbmFibGUgdG8gZGVsZXRlIHRoZSBsYXN0IHByb2plY3QuJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuc2hvd05vdGlmaWNhdGlvbignVW5hYmxlIHRvIGRlbGV0ZSBwcm9qZWN0LicsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1uYW1lJykgfHwgZS50YXJnZXQgPT09IHByb2plY3RMaSl7IC8vIFVzZXIgY2xpY2tlZCBvbiBhIG5hbWUgb3IgbGkgaXRzZWxmXHJcbiAgICAgICAgICAgIGlmIChhcHBMb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpPy5pZCAhPT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBMb2dpYy5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlYXJjaFRlcm0gPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQpIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpb3JpdHlGaWx0ZXIgPSAnYWxsJzsgLy8gUmVzZXQgcHJpb3JpdHkgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBpZiAocHJpb3JpdHlGaWx0ZXJTZWxlY3QpIHByaW9yaXR5RmlsdGVyU2VsZWN0LnZhbHVlID0gJ2FsbCc7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnRmlsdGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTb3J0Q3JpdGVyaWEgPSB7ZmllbGQ6ICdkdWVEYXRlJywgZGlyZWN0aW9uOiAnYXNjJ307IC8vIFJlc2V0IHNvcnRcclxuICAgICAgICAgICAgICAgIGlmIChzb3J0VG9kb3NTZWxlY3QpIHNvcnRUb2Rvc1NlbGVjdC52YWx1ZSA9ICdkdWVEYXRlX2FzYyc7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnRmlsdGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVG8tZG8gZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBkb21Db250cm9sbGVyLmVsZW1lbnRzLmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBhcHBMb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICBkb21Db250cm9sbGVyLm9wZW5Ub2RvTW9kYWwobnVsbCwgY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuc2hvd05vdGlmaWNhdGlvbignUGxlYXNlIHNlbGVjdCBhIHByb2plY3QgdG8gYWRkIHRhc2suJywgJ3dhcm5pbmcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb21Db250cm9sbGVyLmVsZW1lbnRzLmNsb3NlVG9kb01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIuY2xvc2VUb2RvTW9kYWwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRvLWRvIGZvcm0gXHJcbiAgICBkb21Db250cm9sbGVyLmVsZW1lbnRzLnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9EYXRhID0gZG9tQ29udHJvbGxlci5nZXRUb2RvRm9ybURhdGEoKTtcclxuICAgICAgICBpZiAodG9kb0RhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRvZG9EYXRhLmlkKSB7IC8vIEVkaXRpbmcgZXhpc3RpbmcgdG9kb1xyXG4gICAgICAgICAgICAgICAgaWYgKGFwcExvZ2ljLnVwZGF0ZVRvZG9JblByb2plY3QodG9kb0RhdGEuY3VycmVudFByb2plY3RJZCwgdG9kb0RhdGEuaWQsIHRvZG9EYXRhKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEFkZGluZyBuZXcgdG9kb1xyXG4gICAgICAgICAgICAgICAgaWYoYXBwTG9naWMuYWRkVG9kb1RvUHJvamVjdCh0b2RvRGF0YS5jdXJyZW50UHJvamVjdElkLCB0b2RvRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLmNsb3NlVG9kb01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24odG9kb0RhdGEuaWQgPyAnVGFzayB1cGRhdGVkJyA6ICdUYXNrIGFkZGVkLicsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24oJ1VuYWJsZSB0byB1cGRhdGUgdGFzaycsICdlcnJvcicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBY3Rpb25zIG9uIHRvZG8gaXRlbXNcclxuICAgIGRvbUNvbnRyb2xsZXIuZWxlbWVudHMudG9kb3NMaXN0VUwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaSA9IHRhcmdldC5jbG9zZXN0KCdsaVtkYXRhLXRvZG8taWRdJyk7XHJcbiAgICAgICAgaWYgKCF0b2RvTGkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0lkID0gdG9kb0xpLmRhdGFzZXQudG9kb0lkO1xyXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgcHJvamVjdCBJRFxyXG4gICAgICAgIGxldCBwcm9qZWN0SWRGb3JBY3Rpb24gPSB0b2RvTGkuZGF0YXNldC5vcmlnaW5hbFByb2plY3RJZDsgLy8gRnJvbSBnbG9iYWwgc2VhcmNoXHJcbiAgICAgICAgaWYgKCFwcm9qZWN0SWRGb3JBY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBhcHBMb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RJZEZvckFjdGlvbiA9IGN1cnJlbnRQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKCF0b2RvSWQgfHwgIXByb2plY3RJZEZvckFjdGlvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRvZG8tYnRuJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGFwcExvZ2ljLmdldFByb2plY3RCeUlkKHByb2plY3RJZEZvckFjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub0RlbGV0ZSA9IHByb2plY3QuZ2V0VG9kb0J5SWQodG9kb0lkKTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oYFlvdSB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSB0YXNrIFwiJHt0b2RvVG9EZWxldGUudGl0bGV9XCIuYCkpIHtcclxuICAgICAgICAgICAgICAgIGFwcExvZ2ljLnJlbW92ZVRvZG9Gcm9tUHJvamVjdChwcm9qZWN0SWRGb3JBY3Rpb24sIHRvZG9JZCk7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24oJ1Rhc2sgZGVsZXRlZC4nLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10b2RvLWJ0bicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub0VkaXQgPSBhcHBMb2dpY1xyXG4gICAgICAgICAgICAgICAgLmdldFByb2plY3RCeUlkKHByb2plY3RJZEZvckFjdGlvbilcclxuICAgICAgICAgICAgICAgID8uZ2V0VG9kb0J5SWQodG9kb0lkKTtcclxuICAgICAgICAgICAgaWYgKHRvZG9Ub0VkaXQpIHtcclxuICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIub3BlblRvZG9Nb2RhbCh0b2RvVG9FZGl0LCBwcm9qZWN0SWRGb3JBY3Rpb24pO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1jaGVja2JveCcpKSB7XHJcbiAgICAgICAgICAgIGFwcExvZ2ljLnRvZ2dsZVRvZG9Db21wbGV0ZShwcm9qZWN0SWRGb3JBY3Rpb24sIHRvZG9JZCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQtdG9kby1idG4nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gdG9kb0xpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZ1bGwtZGV0YWlscycpO1xyXG4gICAgICAgICAgICBpZiAoZGV0YWlsc0Rpdikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNIaWRkZW4gPSBkZXRhaWxzRGl2LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNIaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckh0bWwgPSBcIiYjODcyMjtcIjsgLy8gTWludXMgc2lnbiAoTWluaW1pemUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnRpdGxlICAgICA9ICdIaWRlIGRldGFpbHMnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnJiM0MzsnOyAvLyBQbHVzIHNpZ24gKHNob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnRpdGxlID0gXCJTaG93IGRldGFpbHNcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvTGkuY2xhc3NMaXN0LnJlbW92ZSgnZGV0YWlscy1leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgbW9kYWwgaWYgdXNlciBjbGlja3Mgb3V0c2lkZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNvbnRyb2xsZXIuZWxlbWVudHMucHJvamVjdE1vZGFsKSB7XHJcbiAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuY2xvc2VQcm9qZWN0TW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21Db250cm9sbGVyLmVsZW1lbnRzLnRvZG9Nb2RhbCkge1xyXG4gICAgICAgICAgICBkb21Db250cm9sbGVyLmNsb3NlVG9kb01vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCByZW5kZXIgYmFzZWQgb24gbG9hZGVkIGRhdGFcclxuICAgIGlmIChhcHBMb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpKSB7XHJcbiAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgIH0gZWxzZSBpZiAoYXBwTG9naWMuZ2V0QWxsUHJvamVjdHMoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gSWYgbm8gY3VycmVudCBwcm9qZWN0IGJ1dCBwcm9qZWN0cyBleGlzdCwgc2VsZWN0IHRoZSBmaXJzdCBvbmVcclxuICAgICAgICBjb25zdCBmaXJzdFByb2plY3QgPSBhcHBMb2dpYy5nZXRBbGxQcm9qZWN0cygpWzBdO1xyXG4gICAgICAgIGFwcExvZ2ljLnNldEN1cnJlbnRQcm9qZWN0KGZpcnN0UHJvamVjdC5pZCk7XHJcbiAgICAgICAgcmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG4gICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdFRpdGxlKCdBZGQgYSBwcm9qZWN0Jyk7XHJcbiAgICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJUb2RvcyhudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcmVmcmVzaCBwcm9qZWN0IGxpc3RcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0c0xpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBhcHBMb2dpYy5nZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXBwTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBkb21Db250cm9sbGVyLnJlbmRlclByb2plY3RzKFxyXG4gICAgICAgICAgICBwcm9qZWN0cyxcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPyBjdXJyZW50UHJvamVjdC5pZCA6IG51bGwsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsIHNldHVwXHJcbiAgICBkb21Db250cm9sbGVyLmluaXRpYWxpemVVSSgpO1xyXG4gICAgcmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG4gICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxufSk7IiwiLy8gTW9kdWxlIHRoYXQgbWFuYWdlcyB0aGUgcHJvamVjdCBvYmplY3RzXHJcblxyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGBwcm9qZWN0LSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDExKX1gOyAvLyBHZW5lcmF0ZSByYW5kb20gdW5pcXVlIElEXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9kbyh0b2RvSXRlbSkge1xyXG4gICAgICAgIGlmKCEodG9kb0l0ZW0gaW5zdGFuY2VvZiBUb2RvKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMudG9kb3Muc29tZSgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0l0ZW0uaWQpKSByZXR1cm4gZmFsc2U7IC8vIENoZWNrIGlmIHRoZSB0b2RvIGlzIGFscmVhZHkgaW4gdGhlIHByb2plY3QncyB0b2Rvc1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9kbyh0b2RvSUQpIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IHRvZG9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kb0J5SWQodG9kb0lEKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMudG9kb3NdOyAvLyBSZXR1cm4gYSBjb3B5IHRvIHByZXZlbnQgdW53YW50ZWQgbW9kaWZpY2F0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG9CeVByaW9yaXR5KHByaW9yaXR5TGV2ZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8ucHJpb3JpdHkgPT09IHByaW9yaXR5TGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG9CeUNvbXBsZXRpb24oY29tcGxldGlvblN0YXR1cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5jb21wbGV0ZWQgPT09IGNvbXBsZXRpb25TdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG9CeVRhZyh0YWcpIHtcclxuICAgICAgICBjb25zdCB0cmltbWVkVGFnID0gdGFnLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmKCF0cmltbWVkVGFnKSByZXR1cm4gdGhpcy5nZXRBbGxUb2RvcygpOyAvL1doZW4gdGFnIGlzIGVtcHR5LCByZXR1cm4gYWxsIHRvZG9zXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT5cclxuICAgICAgICAgICAgdG9kby50YWdzLnNvbWUoKHQpID0+IHQudG9Mb3dlckNhc2UoKSA9PT0gdHJpbW1lZFRhZylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVuaXF1ZVRhZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsVGFncyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgdG9kby50YWdzLmZvckVhY2goKHRhZykgPT4gYWxsVGFncy5hZGQodGFnLnRyaW0oKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbFRhZ3MpLnNvcnQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiLy8gTW9kdWxlIHRvIHN0b3JlIGRhdGEgdXNpbmcgbG9jYWxTdG9yYWdlXHJcblxyXG5jb25zdCBTVE9SQUdFX0tFWSA9ICd0b2RvQXBwUHJvamVjdHMnO1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IHtcclxuICAgIHNhdmVEYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID1KU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIHNlcmlhbGl6ZWREYXRhKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hlbiB0cnlpbmcgdG8gc2F2ZSBkYXRhIHRvIGxvY2FsU3RvcmFnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZERhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWREYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWREYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGVuIHRyeWluZyB0byBsb2FkIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsZWFyRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU1RPUkFHRV9LRVkpO1xyXG4gICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hlbiB0cnlpbmcgdG8gY2xlYXIgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBNb2R1bGUgdGhhdCBtYW5hZ2VzIHRvZG8gb2JqZWN0c1xyXG5cclxuY2xhc3MgVG9kb3tcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgdGFncyA9IFtdLFxyXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGB0b2RvLSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDExKX1gOyAvLyBVbmlxdWUgSURcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbnVsbDtcclxuICAgICAgICBpZihkdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oZHVlRGF0ZS52YWx1ZU9mKCkpKXtcclxuICAgICAgICAgICAgLy8gRm9yIHNhbXBsZSBkYXRhIHVzaW5nIERhdGUgb2JqZWN0c1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YgZHVlRGF0ZSA9PT0gJ3N0cmluZycgJiYgZHVlRGF0ZS50cmltKCkgIT09ICcnKXtcclxuICAgICAgICAgICAgLy8gRm9yIHRoZSBIVE1MIGZvcm0gaW5wdXRzXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkdWVEYXRlLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9ICFpc05hTihwYXJzZWREYXRlLnZhbHVlT2YoKSkgPyBwYXJzZWREYXRlIDogbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMudGFncyA9IEFycmF5LmlzQXJyYXkodGFncykgPyB0YWdzIDogW107XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGV0YWlscyhkZXRhaWxzKSB7XHJcbiAgICAgICAgaWYoZGV0YWlscy50aXRsZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnRpdGxlID0gZGV0YWlscy50aXRsZTtcclxuICAgICAgICBpZihkZXRhaWxzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHRoaXMuZGVzY3JpcHRpb24gPSBkZXRhaWxzLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBpZihkZXRhaWxzLmR1ZURhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZihkZXRhaWxzLmR1ZURhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkZXRhaWxzLmR1ZURhdGUudmFsdWVPZigpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRldGFpbHMuZHVlRGF0ZS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gIWlzTmFOKHBhcnNlZERhdGUudmFsdWVPZigpKSA/IHBhcnNlZERhdGUgOiBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRldGFpbHMudGFncyAmJiBBcnJheS5pc0FycmF5KGRldGFpbHMudGFncykpIHtcclxuICAgICAgICAgICAgdGhpcy50YWdzID0gZGV0YWlscy50YWdzXHJcbiAgICAgICAgICAgICAgICAubWFwKCh0YWcpID0+IHRhZy50cmltKCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh0YWcpID0+IHRhZy5sZW5ndGggPiAwKTtcclxuICAgICAgICB9IGVsc2UgaWYoIGRldGFpbHMudGFnc1N0cmluZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGFnc0Zyb21TdHJpbmcoZGV0YWlscy50YWdzU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFnKHRhZykge1xyXG4gICAgICAgIGNvbnN0IHRyaW1tZWRUYWcgPSB0YWcudHJpbSgpO1xyXG4gICAgICAgIGlmICh0cmltbWVkVGFnICYmICF0aGlzLnRhZ3MuaW5jbHVkZXModHJpbW1lZFRhZykpe1xyXG4gICAgICAgICAgICB0aGlzLnRhZ3MucHVzaCh0cmltbWVkVGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFnKHRhZ1RvUmVtb3ZlKSB7XHJcbiAgICAgICAgY29uc3QgdHJpbW1lZFRhZ1RvUmVtb3ZlID0gdGFnVG9SZW1vdmUudHJpbSgpO1xyXG4gICAgICAgIHRoaXMudGFncyA9IHRoaXMudGFncy5maWx0ZXIoKHRhZykgPT4gdGFnICE9PSB0cmltbWVkVGFnVG9SZW1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGdldCBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0YWdzXHJcbiAgICBnZXRUYWdzU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3Muam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwIHNldHRpbmcgdGFncyBmcm9tIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZyBcclxuICAgIHNldFRhZ3NGcm9tU3RyaW5nKHRhZ3NTdHJpbmcpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGFnc1N0cmluZyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy50YWdzID0gdGFnc1N0cmluZ1xyXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcsJylcclxuICAgICAgICAgICAgICAgIC5tYXAoKHRhZykgPT4gdGFnLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKCh0YWcpID0+IHRhZy5sZW5ndGggPiAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvZG87Il0sIm5hbWVzIjpbIlByb2plY3QiLCJUb2RvIiwic3RvcmFnZSIsImFwcExvZ2ljIiwicHJvamVjdHMiLCJjdXJyZW50UHJvamVjdCIsInJlaHlkcmF0ZVByb2plY3RzIiwicGxhaW5Qcm9qZWN0cyIsIm1hcCIsInBsYWluUHJvamVjdCIsInByb2plY3QiLCJuYW1lIiwiaWQiLCJ0b2RvcyIsInBsYWluVG9kbyIsInRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGFncyIsImNvbXBsZXRlZCIsImNyZWF0ZVNhbXBsZWREYXRhIiwid29ya1Byb2plY3QiLCJhZGRUb2RvIiwiRGF0ZSIsInBlcnNvbmFsUHJvamVjdCIsImxlYXJuaW5nUHJvamVjdCIsInNhdmVQcm9qZWN0cyIsImxvYWRQcm9qZWN0cyIsImxvYWRlZERhdGEiLCJsb2FkRGF0YSIsImxlbmd0aCIsInNhdmVEYXRhIiwiYWRkUHJvamVjdCIsImZpbmQiLCJwIiwidG9Mb3dlckNhc2UiLCJuZXdQcm9qZWN0IiwicHVzaCIsInVwZGF0ZVByb2plY3QiLCJwcm9qZWN0SWQiLCJuZXdOYW1lIiwicHJvamVjdFRvVXBkYXRlIiwiZ2V0UHJvamVjdEJ5SWQiLCJzb21lIiwiZXJyb3IiLCJyZW1vdmVQcm9qZWN0IiwicHJvamVjdEluZGV4IiwiZmluZEluZGV4IiwicmVtb3ZlZFByb2plY3QiLCJzcGxpY2UiLCJzdWNjZXNzIiwicmVtb3ZlZFByb2plY3ROYW1lIiwibmV3Q3VycmVudFByb2plY3QiLCJnZXRBbGxQcm9qZWN0cyIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldEN1cnJlbnRQcm9qZWN0Iiwic2V0Q3VycmVudFByb2plY3QiLCJhZGRUb2RvVG9Qcm9qZWN0IiwidG9kb0RldGFpbHMiLCJ0YWdzU3RyaW5nIiwibmV3VG9kbyIsInNldFRhZ0Zyb21TdHJpbmciLCJyZW1vdmVUb2RvRnJvbVByb2plY3QiLCJ0b2RvSWQiLCJyZW1vdmVUb2RvIiwidXBkYXRlVG9kb0luUHJvamVjdCIsInVwZGF0ZWREZXRhaWxzIiwiZ2V0VG9kb0J5SWQiLCJ1bmRlZmluZWQiLCJzZXRUYWdzRnJvbVN0cmluZyIsIm90aGVyRGV0YWlscyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsInVwZGF0ZURldGFpbHMiLCJ0b2dnbGVUb2RvQ29tcGxldGUiLCJ0b2dnbGVDb21wbGV0ZSIsImdldEFsbFRvZG9zQWNyb3NzUHJvamVjdHMiLCJyZWR1Y2UiLCJhY2MiLCJjb25jYXQiLCJnZXRBbGxUb2RvcyIsImdldEFsbFRvZG9zV2l0aFByb2plY3RJbmZvIiwiYWxsVG9kb3NXaXRoUHJvamVjdEluZm8iLCJmb3JFYWNoIiwiX29iamVjdFNwcmVhZCIsIm9yZ2luYWxQcm9qZWN0SWQiLCJwcm9qZWN0TmFtZSIsInNlYXJjaFRvZG9zSW5MaXN0Iiwic2VhcmNoVGVybSIsInRyaW0iLCJsb3dlclNlYXJjaFRlcm0iLCJmaWx0ZXIiLCJ0aWx0ZSIsImluY2x1ZGVzIiwiZ2V0QWxsVGFnc0Fjcm9zc1Byb2plY3RzIiwiYWxsVGFncyIsIlNldCIsImdldFVuaXF1ZVRhZ3MiLCJ0YWciLCJhZGQiLCJBcnJheSIsImZyb20iLCJzb3J0IiwiZmlsdGVyVG9kb3NCeVRhZ0Fjcm9zc1Byb2plY3RzIiwiYWxsVG9kb3MiLCJ0cmltbWVkVGFnIiwidCIsImZpbHRlclRvZG9zQnlQcmlvcml0eUFjcm9zc1Byb2plY3RzIiwicHJpb3JpdHlMZXZlbCIsInByaW9yaXR5T3JkZXIiLCJzb3J0VG9kb3MiLCJzb3J0RmllbGQiLCJzb3J0RGlyZWN0aW9uIiwiYXJndW1lbnRzIiwic29ydGVkIiwiYSIsImIiLCJ2YWxBIiwidmFsQiIsInRpdGllIiwiY29tcGFyaXNvbiIsImZvcm1hdCIsImlzVmFsaWQiLCJpc1ZhbGlkRGF0ZSIsImRvbUNvbnRyb2xsZXIiLCJwcm9qZWN0c0xpc3RVTCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0QnRuIiwiY3VycmVudFByb2plY3RUaXRsZSIsImFkZFRvZG9CdG4iLCJ0b2Rvc0xpc3RVTCIsInRhZ0ZpbHRlckFyZWEiLCJ0YWdGaWx0ZXJDbGVhckJ0biIsIm5vdGlmaWNhdGlvbkFyZWEiLCJwcm9qZWN0TW9kYWwiLCJwcm9qZWN0Rm9ybSIsInByb2plY3RJZElucHV0IiwicHJvamVjdE5hbWVJbnB1dCIsInNhdmVQcm9qZWN0QnRuIiwiY2xvc2VQcm9qZWN0TW9kYWxCdG4iLCJ0b2RvTW9kYWwiLCJ0b2RvRm9ybSIsInRvZG9JZElucHV0IiwidG9kb1RpdGxlSW5wdXQiLCJ0b2RvRGVzY3JpcHRpb25JbnB1dCIsInRvZG9EdWVEYXRlSW5wdXQiLCJ0b2RvUHJpb3JpdHlJbnB1dCIsInRvZG9UYWdzSW5wdXQiLCJjbG9zZVRvZG9Nb2RhbEJ0biIsImNsZWFyRWxlbWVudCIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJmb3JtYXREYXRlRm9yRGlzcGxheSIsImRhdGUiLCJyZW5kZXJQcm9qZWN0cyIsImN1cnJlbnRQcm9qZWN0SWQiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFwcGVuZENoaWxkIiwiZGF0YXNldCIsIm5hbWVTcGFuIiwiYWN0aW9uc0RpdiIsImVkaXRCdG4iLCJpbm5lckhUTUwiLCJkZWxldGVCdG4iLCJ1cGRhdGVQcm9qZWN0VGl0bGUiLCJyZW5kZXJUb2RvcyIsInByb2plY3RPclNlYXJjaFJlc3VsdHMiLCJpc0dsb2JhbFNlYXJjaCIsImRpc3BsYXlOYW1lIiwib3JpZ2luYWxQcm9qZWN0SWQiLCJ0b2RvUHJldmlld0NvbnRlbnQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwidG9kb0luZm9EaXYiLCJ0aXRsZVNwYW4iLCJkdWVEYXRlU3BhbiIsInByb2plY3RMYWJlbFNwYW4iLCJ0YWdzRGl2IiwidGFnU3BhbiIsImV4cGFuZEJ0biIsImZ1bGxEZXRhaWxzRGl2IiwiZGVzY3JpcHRpb25QIiwiZGVzY3JpcHRpb25UZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJwcmlvcml0eVAiLCJwcmlvcml0eVRleHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiYXBwZW5kIiwib3BlblByb2plY3RNb2RhbCIsInByb2plY3RUb0VkaXQiLCJjbGVhckZvcm1FcnJvcnMiLCJyZXNldCIsInZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9jdXMiLCJjbG9zZVByb2plY3RNb2RhbCIsIm9wZW5Ub2RvTW9kYWwiLCJ0b2RvVG9FZGl0IiwiZ2V0VGFnc1N0cmluZyIsImNsb3NlVG9kb01vZGFsIiwiZ2V0UHJvamVjdEZvcm1EYXRhIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJzaG93RmllbGRFcnJvciIsImdldFRvZG9Gb3JtRGF0YSIsImZvcm1FbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0Iiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJzcGFuIiwiaW5wdXRFbGVtZW50IiwibWVzc2FnZSIsImhlbHBTcGFuIiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlcnJvclNwYW4iLCJyZW1vdmUiLCJzaG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhbmltYXRpb25OYW1lIiwicmVuZGVyVGFnQ2xvdWQiLCJhY3RpdmVUYWdzIiwidGFnRWxlbWVudCIsIm5vVGFnTXNnIiwiZm9udFNpemUiLCJjb2xvciIsImNvbnRhaW5zIiwiaW5pdGlhbGl6ZVVJIiwiZWxlbWVudHMiLCJjdXJyZW50U2VhcmNoVGVybSIsImN1cnJlbnRQcmlvcml0eUZpbHRlciIsImN1cnJlbnRUYWdGaWx0ZXIiLCJjdXJyZW50U29ydENyaXRlcmlhIiwiZmllbGQiLCJkaXJlY3Rpb24iLCJzZWFyY2hJbnB1dCIsInByaW9yaXR5RmlsdGVyU2VsZWN0Iiwic29ydFRvZG9zU2VsZWN0IiwicmVmcmVzaFRhZ0Nsb3VkIiwidGFnc0ZvckNsb3VkIiwiaXNHbG9iYWxNb2RlIiwicHJvamVjdERhdGEiLCJ1cGRhdGVBbmRSZW5kZXJUb2RvcyIsInRvZG9zVG9EaXNwbGF5Iiwidmlld1RpdGxlIiwiY3VycmVudFByb2plY3RGcm9tU2lkZUJhciIsImZpbHRlcmVkVG9kb3MiLCJsb3dlclRhZ0ZpbHRlciIsInNvcnRlZFRvZG9zIiwicmVuZGVyRGF0YSIsInRhcmdldCIsImNsaWNrZWRUYWciLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImFjdGlvbiIsInJlZnJlc2hQcm9qZWN0c0xpc3QiLCJfZSR0YXJnZXQkdmFsdWUkc3BsaXQiLCJzcGxpdCIsIl9lJHRhcmdldCR2YWx1ZSRzcGxpdDIiLCJfc2xpY2VkVG9BcnJheSIsInByb2plY3RMaSIsImNsb3Nlc3QiLCJwcm9qZWN0VG9EZWxldGUiLCJjb25maXJtIiwiX2FwcExvZ2ljJGdldEN1cnJlbnRQIiwidG9kb0RhdGEiLCJ0b2RvTGkiLCJwcm9qZWN0SWRGb3JBY3Rpb24iLCJ0b2RvVG9EZWxldGUiLCJfYXBwTG9naWMkZ2V0UHJvamVjdEIiLCJkZXRhaWxzRGl2IiwiaXNIaWRkZW4iLCJpbm5lckh0bWwiLCJ3aW5kb3ciLCJmaXJzdFByb2plY3QiLCJfY2xhc3NDYWxsQ2hlY2siLCJub3ciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ0b2RvSXRlbSIsInRvZG9JRCIsImdldFRvZG9CeVByaW9yaXR5IiwiZ2V0VG9kb0J5Q29tcGxldGlvbiIsImNvbXBsZXRpb25TdGF0dXMiLCJnZXRUb2RvQnlUYWciLCJTVE9SQUdFX0tFWSIsImRhdGEiLCJzZXJpYWxpemVkRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29uc29sZSIsImdldEl0ZW0iLCJwYXJzZSIsImNsZWFyRGF0YSIsInJlbW92ZUl0ZW0iLCJpc05hTiIsInZhbHVlT2YiLCJwYXJzZWREYXRlIiwiaXNBcnJheSIsImRldGFpbHMiLCJhZGRUYWciLCJyZW1vdmVUYWciLCJ0YWdUb1JlbW92ZSIsInRyaW1tZWRUYWdUb1JlbW92ZSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9