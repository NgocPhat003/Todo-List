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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,kBAAkB;EAClB,0BAA0B;EAC1B,qBAAqB;EACrB,6BAA6B;EAC7B,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,oFAAoF;EACpF,sFAAsF;EACtF,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,oHAAoH;EACpH,wBAAwB;EACxB,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA,WAAW;AACX;EACE,iBAAiB;EACjB,cAAc;EACd,0BAA0B;EAC1B,+BAA+B;EAC/B,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,0BAA0B;EAC1B,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,YAAY;AACZ;EACE,YAAY;EACZ,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;EAC1B,gCAAgC;EAChC,0BAA0B;EAC1B,+BAA+B;EAC/B,+BAA+B;EAC/B,eAAe;EACf,iDAAiD;AACnD;;AAEA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,0BAA0B;EAC1B,0BAA0B;EAC1B,wBAAwB;EACxB,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,iDAAiD;EACjD,oHAAoH;EACpH,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,mBAAmB;EACnB,gCAAgC;EAChC,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;;EAEE,uBAAuB;EACvB,+BAA+B;EAC/B,+BAA+B;AACjC;;AAEA;;EAEE,uCAAuC;AACzC;;AAEA;EACE,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,gCAAgC;EAChC,4CAA4C;EAC5C,+BAA+B;EAC/B,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,iDAAiD;AACnD;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA,gBAAgB;AAChB;;EAEE,WAAW;EACX,0BAA0B;EAC1B,+BAA+B;EAC/B,+BAA+B;EAC/B,0BAA0B;EAC1B,eAAe;EACf,0DAA0D;AAC5D;;AAEA;;EAEE,aAAa;EACb,iCAAiC;EACjC,8CAA8C;AAChD;;AAEA;EACE,gBAAgB;AAClB;;AAEA,cAAc;AACd;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,+BAA+B;EAC/B,+BAA+B;EAC/B,gCAAgC;EAChC,2BAA2B;EAC3B,iDAAiD;EACjD,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,gCAAgC;EAChC,8BAA8B;EAC9B,kBAAkB;EAClB,+BAA+B;EAC/B,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA,wBAAwB;AACxB;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,0BAA0B;EAC1B,+BAA+B;EAC/B,8DAA8D;AAChE;;AAEA;EACE,gCAAgC;AAClC;;AAEA;;EAEE,4CAA4C;EAC5C,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iDAAiD;AACnD;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA,iBAAiB;AACjB;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,aAAa;;AAEf;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,0BAA0B;EAC1B,+BAA+B;EAC/B,UAAU;EACV,gBAAgB;EAChB,gBAAgB;EAChB,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;EAC9C,gBAAgB;EAChB,0BAA0B;EAC1B,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,+BAA+B;EAC/B,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gCAAgC;EAChC,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;;;;EAIE,WAAW;EACX,0BAA0B;EAC1B,gCAAgC;EAChC,+BAA+B;EAC/B,+BAA+B;EAC/B,eAAe;EACf,0DAA0D;AAC5D;;AAEA;;;EAGE,aAAa;EACb,iCAAiC;EACjC,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,4CAA4C;EAC5C,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iDAAiD;AACnD;;AAEA;EACE,+BAA+B;EAC/B,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,gCAAgC;EAChC,mDAAmD;AACrD;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,4CAA4C;EAC5C,+BAA+B;EAC/B,YAAY;EACZ,mBAAmB;EACnB,2BAA2B;EAC3B,UAAU;EACV,2BAA2B;EAC3B,iDAAiD;EACjD,oFAAoF;AACtF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,2BAA2B;EAC7B;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,gCAAgC;EAClC;;EAEA;IACE,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,UAAU;IACV,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;;IAEE,sBAAsB;IACtB,oBAAoB;EACtB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --primary: #246488;\r\n  --on-primary: #ffffff;\r\n  --secondary: #4f606e;\r\n  --surface: #ffffff;\r\n  --surface-variant: #eff6fa;\r\n  --on-surface: #181c20;\r\n  --on-surface-variant: #41474d;\r\n  --error: #ba1a1a;\r\n  --warning: #f57c00;\r\n  --success: #388e3c;\r\n  --info: #0288d1;\r\n  --border: #d7dadf;\r\n  --border-variant: #c1c5cd;\r\n  --shadow-1: 0 2px 4px rgba(195, 206, 213, 0.12), 0 3px 6px rgba(195, 206, 213, 0.24);\r\n  --shadow-2: 0 10px 20px rgba(195, 206, 213, 0.16), 0 6px 6px rgba(195, 206, 213, 0.24);\r\n  --radius-sm: 4px;\r\n  --radius-md: 8px;\r\n  --radius-lg: 12px;\r\n  --spacing-xs: 4px;\r\n  --spacing-sm: 8px;\r\n  --spacing-md: 16px;\r\n  --spacing-lg: 24px;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n  color: var(--on-surface);\r\n  background: #f6f9fe;\r\n  line-height: 1.6;\r\n  padding: var(--spacing-lg);\r\n}\r\n\r\n/* Layout */\r\n.container {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  background: var(--surface);\r\n  border-radius: var(--radius-lg);\r\n  box-shadow: var(--shadow-1);\r\n  overflow: hidden;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: var(--spacing-lg);\r\n  border-bottom: 1px solid var(--border);\r\n  gap: var(--spacing-md);\r\n}\r\n\r\nheader h1 {\r\n  font-weight: 600;\r\n  font-size: 1.75rem;\r\n}\r\n\r\n.global-search-container {\r\n  flex: 1;\r\n  max-width: 500px;\r\n}\r\n\r\n.global-search-container .form-input {\r\n  background: var(--surface-variant);\r\n  border: none;\r\n}\r\n\r\n.app-layout {\r\n  display: flex;\r\n  min-height: 600px;\r\n}\r\n\r\n/* Sidebar */\r\n.projects-sidebar {\r\n  width: 300px;\r\n  border-right: 1px solid var(--border);\r\n  padding: var(--spacing-lg);\r\n}\r\n\r\n.projects-sidebar h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n  margin: 0 0 var(--spacing-md) 0;\r\n}\r\n\r\n#projects-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 var(--spacing-lg) 0;\r\n}\r\n\r\n#projects-list li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: var(--spacing-md);\r\n  margin-bottom: var(--spacing-sm);\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n#projects-list li:hover {\r\n  border-color: var(--border-variant);\r\n  box-shadow: var(--shadow-1);\r\n}\r\n\r\n#projects-list li.active {\r\n  background: var(--surface-variant);\r\n  border-color: var(--primary);\r\n  box-shadow: var(--shadow-1);\r\n}\r\n\r\n.project-name {\r\n  font-weight: 500;\r\n  flex: 1;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Buttons */\r\n.primary-btn {\r\n  width: 100%;\r\n  padding: var(--spacing-sm);\r\n  background: var(--primary);\r\n  color: var(--on-primary);\r\n  border: none;\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.primary-btn:hover {\r\n  background: rgb(36, 100, 136, 0.9);\r\n  box-shadow: var(--shadow-1);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n/* Main content */\r\n.todos-view {\r\n  flex: 1;\r\n  padding: var(--spacing-lg);\r\n}\r\n\r\n.todos-view h2 {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  margin: 0 0 var(--spacing-lg) 0;\r\n}\r\n\r\n.todos-controls {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: var(--spacing-md);\r\n}\r\n\r\n.todos-controls .primary-btn {\r\n  width: auto;\r\n  min-width: 120px;\r\n}\r\n\r\n/* Filters */\r\n.filters-row {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: var(--spacing-md);\r\n  gap: var(--spacing-md);\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.filter-sort-bar {\r\n  display: flex;\r\n  gap: var(--spacing-md);\r\n  margin-bottom: var(--spacing-lg);\r\n}\r\n\r\nselect, \r\n::picker(select) {\r\n  appearance: base-select;\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n}\r\n\r\nselect:hover,\r\nselect:focus {\r\n  border: 1px solid var(--border-variant);\r\n}\r\n\r\nselect::picker-icon {\r\n  color: var(--on-surface-variant);\r\n  transition: 0.4s rotate;\r\n}\r\n\r\nselect:open::picker-icon {\r\n  rotate: 180deg;\r\n}\r\n\r\noption {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: var(--spacing-sm);\r\n  background: var(--surface);\r\n  padding: var(--spacing-sm);\r\n  transition: 0.2s;\r\n}\r\n\r\noption:hover,\r\noption:focus {\r\n  background: var(--surface-variant);\r\n}\r\n\r\noption:checked {\r\n  font-weight: 500;\r\n}\r\n\r\noption::checkmark {\r\n  order: 1;\r\n  margin-left: auto;\r\n}\r\n\r\noption:first-of-type {\r\n  border-radius: var(--radius-sm) var(--radius-sm) 0 0;\r\n}\r\n\r\noption:last-of-type {\r\n  border-radius: 0 0 var(--radius-sm) var(--radius-sm);\r\n}\r\n\r\n#tag-filter-area {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: var(--spacing-sm);\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.tag-filter-item {\r\n  color: var(--on-surface-variant);\r\n  padding: var(--spacing-xs) var(--spacing-md);\r\n  border-radius: var(--radius-lg);\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  border: 1px solid var(--border);\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.tag-filter-item:hover {\r\n  border-color: var(--border-variant);\r\n}\r\n\r\n.tag-filter-item.active {\r\n  background: var(--surface-variant);\r\n  border-color: var(--primary);\r\n}\r\n\r\n#tag-filter-clear-btn {\r\n  color: var(--primary);\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n  text-decoration: underline;\r\n  margin-left: var(--spacing-sm);\r\n}\r\n\r\n/* Form inputs */\r\n.form-input,\r\n.form-select {\r\n  width: 100%;\r\n  padding: var(--spacing-md);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n  background: var(--surface);\r\n  font-size: 1rem;\r\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.form-input:focus,\r\n.form-select:focus {\r\n  outline: none;\r\n  border-color: var(--border-focus);\r\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.12);\r\n}\r\n\r\n.form-select {\r\n  min-width: 160px;\r\n}\r\n\r\n/* Todo list */\r\n#todos-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#todos-list li {\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-md);\r\n  margin-bottom: var(--spacing-md);\r\n  box-shadow: var(--shadow-1);\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n  overflow: hidden;\r\n}\r\n\r\n#todos-list li:hover {\r\n  box-shadow: var(--shadow-1);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.todo-preview-content {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: var(--spacing-md);\r\n  gap: var(--spacing-md);\r\n}\r\n\r\n.todo-info {\r\n  display: flex;\r\n  align-items: baseline;\r\n  gap: var(--spacing-md);\r\n  flex: 1;\r\n}\r\n\r\n.todo-checkbox {\r\n  margin-top: 2px;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.todo-details {\r\n  flex: 1;\r\n}\r\n\r\n.todo-title {\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  margin-bottom: var(--spacing-xs);\r\n  color: var(--on-surface);\r\n}\r\n\r\n.todo-due-date {\r\n  font-size: 0.875rem;\r\n  color: var(--on-surface-variant);\r\n}\r\n\r\n.todo-completed .todo-title {\r\n  text-decoration: line-through;\r\n  color: var(--on-surface-variant);\r\n}\r\n\r\n.todo-tags-display {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: var(--spacing-xs);\r\n  margin-top: var(--spacing-xs);\r\n}\r\n\r\n.tag-label {\r\n  background: var(--secondary);\r\n  color: white;\r\n  padding: 2px var(--spacing-sm);\r\n  font-size: 0.75rem;\r\n  border-radius: var(--radius-sm);\r\n}\r\n\r\n.todo-project-label {\r\n  background: var(--surface-variant);\r\n  color: var(--on-surface-variant);\r\n  padding: 2px var(--spacing-sm);\r\n  font-size: 0.75rem;\r\n  border-radius: var(--radius-sm);\r\n  margin-top: var(--spacing-xs);\r\n  display: inline-block;\r\n}\r\n\r\n/* Priority indicators */\r\n.priority-low {\r\n  border-left: 4px solid var(--success);\r\n}\r\n\r\n.priority-medium {\r\n  border-left: 4px solid var(--warning);\r\n}\r\n\r\n.priority-high {\r\n  border-left: 4px solid var(--error);\r\n}\r\n\r\n.priority-text-low {\r\n  color: var(--success);\r\n  font-weight: 500;\r\n}\r\n\r\n.priority-text-medium {\r\n  color: var(--warning);\r\n  font-weight: 500;\r\n}\r\n\r\n.priority-text-high {\r\n  color: var(--error);\r\n  font-weight: 500;\r\n}\r\n\r\n/* Todo actions */\r\n.todo-actions {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--spacing-sm);\r\n}\r\n\r\n.expand-todo-btn {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: var(--primary);\r\n  font-size: 1.2rem;\r\n  padding: var(--spacing-xs);\r\n  border-radius: var(--radius-sm);\r\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.expand-todo-btn:hover {\r\n  background: var(--primary-light);\r\n}\r\n\r\n.edit-todo-btn,\r\n.delete-todo-btn {\r\n  padding: var(--spacing-sm) var(--spacing-md);\r\n  border: none;\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.edit-todo-btn {\r\n  background: var(--warning);\r\n  color: white;\r\n}\r\n\r\n.edit-todo-btn:hover {\r\n  background: #e65100;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.delete-todo-btn {\r\n  background: var(--error);\r\n  color: white;\r\n}\r\n\r\n.delete-todo-btn:hover {\r\n  background: #c62828;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n/* Todo details */\r\n.todo-full-details {\r\n  padding: var(--spacing-md);\r\n  background: var(--surface);\r\n  border-top: 1px solid var(--border);\r\n}\r\n\r\n.todo-full-details.hidden {\r\n  display: none;\r\n}\r\n\r\n.todo-full-details p {\r\n  margin: var(--spacing-sm) 0;\r\n  font-size: 0.875rem;\r\n  color: var(--on-surface);\r\n  line-height: 1.5;\r\n}\r\n\r\n.todo-full-details p strong {\r\n  color: var(--on-surface);\r\n  font-weight: 600;\r\n}\r\n\r\n/* Modals */\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  z-index: 1000;\r\n  \r\n}\r\n\r\n.modal-content {\r\n  background: var(--surface);\r\n  margin: 5vh auto;\r\n  padding: var(--spacing-lg);\r\n  border-radius: var(--radius-lg);\r\n  width: 90%;\r\n  max-width: 500px;\r\n  max-height: 90vh;\r\n  box-shadow: var(--shadow-2);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.scroller {\r\n  max-height: calc(90vh - var(--spacing-lg) * 2);\r\n  overflow-y: auto;\r\n  padding: var(--spacing-md);\r\n  scrollbar-width: thin;\r\n  scrollbar-color: var(--border) var(--surface);\r\n}\r\n\r\n.modal-content h3 {\r\n  margin: 0 0 var(--spacing-lg) 0;\r\n  color: var(--on-surface);\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.modal-content label {\r\n  display: block;\r\n  margin-bottom: var(--spacing-xs);\r\n  font-weight: 500;\r\n  color: var(--on-surface);\r\n}\r\n\r\n.modal-content input[type=\"text\"],\r\n.modal-content input[type=\"date\"],\r\n.modal-content textarea,\r\n.modal-content select {\r\n  width: 100%;\r\n  padding: var(--spacing-md);\r\n  margin-bottom: var(--spacing-md);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius-sm);\r\n  font-size: 1rem;\r\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.modal-content input:focus,\r\n.modal-content textarea:focus,\r\n.modal-content select:focus {\r\n  outline: none;\r\n  border-color: var(--border-focus);\r\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.12);\r\n}\r\n\r\n.modal-content textarea {\r\n  min-height: 100px;\r\n  resize: vertical;\r\n  font-family: inherit;\r\n}\r\n\r\n.modal-content button[type=\"submit\"] {\r\n  background: var(--primary);\r\n  color: white;\r\n  padding: var(--spacing-md) var(--spacing-lg);\r\n  border: none;\r\n  border-radius: var(--radius-sm);\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n  font-size: 1rem;\r\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.modal-content button[type=\"submit\"]:hover {\r\n  background: var(--primary-dark);\r\n  transform: translateY(-2px);\r\n  box-shadow: var(--shadow-1);\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: var(--spacing-md);\r\n  right: var(--spacing-lg);\r\n  background: none;\r\n  border: none;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  color: var(--on-surface-variant);\r\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.close-btn:hover {\r\n  color: var(--on-surface);\r\n}\r\n\r\n.help-message {\r\n  font-size: 0.75rem;\r\n  color: var(--on-surface-variant);\r\n  margin-top: -var(--spacing-sm);\r\n  margin-bottom: var(--spacing-md);\r\n}\r\n\r\n.error-message {\r\n  color: var(--error);\r\n  font-size: 0.875rem;\r\n  margin-top: -var(--spacing-sm);\r\n  margin-bottom: var(--spacing-md);\r\n}\r\n\r\n/* Notifications */\r\n.notification-area {\r\n  position: fixed;\r\n  top: var(--spacing-lg);\r\n  right: var(--spacing-lg);\r\n  z-index: 2000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--spacing-sm);\r\n}\r\n\r\n.notification {\r\n  padding: var(--spacing-md) var(--spacing-lg);\r\n  border-radius: var(--radius-sm);\r\n  color: white;\r\n  font-size: 0.875rem;\r\n  box-shadow: var(--shadow-1);\r\n  opacity: 0;\r\n  transform: translateX(100%);\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  animation: slideInNotification 0.3s forwards, fadeOutNotification 0.3s 4.7s forwards;\r\n}\r\n\r\n.notification.info {\r\n  background: var(--info);\r\n}\r\n\r\n.notification.success {\r\n  background: var(--success);\r\n}\r\n\r\n.notification.error {\r\n  background: var(--error);\r\n}\r\n\r\n.notification.warning {\r\n  background: var(--warning);\r\n  color: white;\r\n}\r\n\r\n@keyframes slideInNotification {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutNotification {\r\n  from {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translateX(100%);\r\n  }\r\n}\r\n\r\n/* Responsive design */\r\n@media (max-width: 768px) {\r\n  body {\r\n    padding: var(--spacing-md);\r\n  }\r\n\r\n  .app-layout {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .projects-sidebar {\r\n    width: 100%;\r\n    margin-bottom: var(--spacing-lg);\r\n  }\r\n\r\n  header {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    gap: var(--spacing-md);\r\n  }\r\n\r\n  header h1 {\r\n    text-align: center;\r\n  }\r\n\r\n  .modal-content {\r\n    width: 95%;\r\n    padding: var(--spacing-lg);\r\n    margin: 2vh auto;\r\n  }\r\n\r\n  .filters-row,\r\n  .filter-sort-bar {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .form-select {\r\n    min-width: auto;\r\n  }\r\n}"],"sourceRoot":""}]);
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
      var newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority);
      if (tagsString) {
        newTodo.setTagsFromString(tagsString);
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
      return todo.title.toLowerCase().includes(lowerSearchTerm) || todo.description.toLowerCase().includes(lowerSearchTerm);
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
      if (isGlobalSearch && todo.projectName) {
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
    var isGlobalMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var tagsForCloud = [];
    var currentProject = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentProject();
    if (isGlobalMode) {
      // True if date filter or global search is active
      tagsForCloud = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllTagsAcrossProjects();
    } else if (currentProject) {
      var projectData = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProject.id);
      tagsForCloud = projectData ? projectData.getUniqueTags() : [];
    } else {
      tagsForCloud = _appLogic_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAllTagsAcrossProjects();
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
    refreshTagCloud(isGlobalMode || !currentProjectFromSideBar);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mODRlZjM4YTc2Mzk4YWU5ZGRlZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFB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LENBQUUsVUFBQ00sR0FBRztVQUFBLE9BQUtBLEdBQUcsQ0FBQ2xFLE1BQU0sR0FBRyxDQUFDO1FBQUEsQ0FBQyxDQUFDO01BQzFDO0lBQ0o7RUFBQztBQUFBO0FBRUwsaUVBQWUvQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1wcmltYXJ5OiAjMjQ2NDg4O1xyXG4gIC0tb24tcHJpbWFyeTogI2ZmZmZmZjtcclxuICAtLXNlY29uZGFyeTogIzRmNjA2ZTtcclxuICAtLXN1cmZhY2U6ICNmZmZmZmY7XHJcbiAgLS1zdXJmYWNlLXZhcmlhbnQ6ICNlZmY2ZmE7XHJcbiAgLS1vbi1zdXJmYWNlOiAjMTgxYzIwO1xyXG4gIC0tb24tc3VyZmFjZS12YXJpYW50OiAjNDE0NzRkO1xyXG4gIC0tZXJyb3I6ICNiYTFhMWE7XHJcbiAgLS13YXJuaW5nOiAjZjU3YzAwO1xyXG4gIC0tc3VjY2VzczogIzM4OGUzYztcclxuICAtLWluZm86ICMwMjg4ZDE7XHJcbiAgLS1ib3JkZXI6ICNkN2RhZGY7XHJcbiAgLS1ib3JkZXItdmFyaWFudDogI2MxYzVjZDtcclxuICAtLXNoYWRvdy0xOiAwIDJweCA0cHggcmdiYSgxOTUsIDIwNiwgMjEzLCAwLjEyKSwgMCAzcHggNnB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4yNCk7XHJcbiAgLS1zaGFkb3ctMjogMCAxMHB4IDIwcHggcmdiYSgxOTUsIDIwNiwgMjEzLCAwLjE2KSwgMCA2cHggNnB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4yNCk7XHJcbiAgLS1yYWRpdXMtc206IDRweDtcclxuICAtLXJhZGl1cy1tZDogOHB4O1xyXG4gIC0tcmFkaXVzLWxnOiAxMnB4O1xyXG4gIC0tc3BhY2luZy14czogNHB4O1xyXG4gIC0tc3BhY2luZy1zbTogOHB4O1xyXG4gIC0tc3BhY2luZy1tZDogMTZweDtcclxuICAtLXNwYWNpbmctbGc6IDI0cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjlmZTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG59XHJcblxyXG4vKiBMYXlvdXQgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbn1cclxuXHJcbi5nbG9iYWwtc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZ2xvYmFsLXNlYXJjaC1jb250YWluZXIgLmZvcm0taW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYXBwLWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLyogU2lkZWJhciAqL1xyXG4ucHJvamVjdHMtc2lkZWJhciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1zaWRlYmFyIGgyIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLW1kKSAwO1xyXG59XHJcblxyXG4jcHJvamVjdHMtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmctbGcpIDA7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1saXN0IGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuI3Byb2plY3RzLWxpc3QgbGk6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXZhcmlhbnQpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcclxufVxyXG5cclxuI3Byb2plY3RzLWxpc3QgbGkuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXZhcmlhbnQpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKiBCdXR0b25zICovXHJcbi5wcmltYXJ5LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgMTAwLCAxMzYsIDAuOSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLyogTWFpbiBjb250ZW50ICovXHJcbi50b2Rvcy12aWV3IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG59XHJcblxyXG4udG9kb3MtdmlldyBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLWxnKSAwO1xyXG59XHJcblxyXG4udG9kb3MtY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxufVxyXG5cclxuLnRvZG9zLWNvbnRyb2xzIC5wcmltYXJ5LWJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLyogRmlsdGVycyAqL1xyXG4uZmlsdGVycy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZpbHRlci1zb3J0LWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xyXG59XHJcblxyXG5zZWxlY3QsIFxyXG46OnBpY2tlcihzZWxlY3QpIHtcclxuICBhcHBlYXJhbmNlOiBiYXNlLXNlbGVjdDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbn1cclxuXHJcbnNlbGVjdDpob3Zlcixcclxuc2VsZWN0OmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItdmFyaWFudCk7XHJcbn1cclxuXHJcbnNlbGVjdDo6cGlja2VyLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgcm90YXRlO1xyXG59XHJcblxyXG5zZWxlY3Q6b3Blbjo6cGlja2VyLWljb24ge1xyXG4gIHJvdGF0ZTogMTgwZGVnO1xyXG59XHJcblxyXG5vcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxub3B0aW9uOmhvdmVyLFxyXG5vcHRpb246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XHJcbn1cclxuXHJcbm9wdGlvbjpjaGVja2VkIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5vcHRpb246OmNoZWNrbWFyayB7XHJcbiAgb3JkZXI6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbm9wdGlvbjpmaXJzdC1vZi10eXBlIHtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pIHZhcigtLXJhZGl1cy1zbSkgMCAwO1xyXG59XHJcblxyXG5vcHRpb246bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkaXVzLXNtKSB2YXIoLS1yYWRpdXMtc20pO1xyXG59XHJcblxyXG4jdGFnLWZpbHRlci1hcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRhZy1maWx0ZXItaXRlbSB7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cykgdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi50YWctZmlsdGVyLWl0ZW06aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXZhcmlhbnQpO1xyXG59XHJcblxyXG4udGFnLWZpbHRlci1pdGVtLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4jdGFnLWZpbHRlci1jbGVhci1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1zbSk7XHJcbn1cclxuXHJcbi8qIEZvcm0gaW5wdXRzICovXHJcbi5mb3JtLWlucHV0LFxyXG4uZm9ybS1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMsXHJcbi5mb3JtLXNlbGVjdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1mb2N1cyk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjUsIDExOCwgMjEwLCAwLjEyKTtcclxufVxyXG5cclxuLmZvcm0tc2VsZWN0IHtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4vKiBUb2RvIGxpc3QgKi9cclxuI3RvZG9zLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiN0b2Rvcy1saXN0IGxpIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3RvZG9zLWxpc3QgbGk6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi50b2RvLXByZXZpZXctY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbn1cclxuXHJcbi50b2RvLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRvZG8tY2hlY2tib3gge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi50b2RvLWRldGFpbHMge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b2RvLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XHJcbn1cclxuXHJcbi50b2RvLWR1ZS1kYXRlIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xyXG59XHJcblxyXG4udG9kby1jb21wbGV0ZWQgLnRvZG8tdGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xyXG59XHJcblxyXG4udG9kby10YWdzLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy14cyk7XHJcbn1cclxuXHJcbi50YWctbGFiZWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweCB2YXIoLS1zcGFjaW5nLXNtKTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxufVxyXG5cclxuLnRvZG8tcHJvamVjdC1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcclxuICBwYWRkaW5nOiAycHggdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBQcmlvcml0eSBpbmRpY2F0b3JzICovXHJcbi5wcmlvcml0eS1sb3cge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1tZWRpdW0ge1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0td2FybmluZyk7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1oaWdoIHtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWVycm9yKTtcclxufVxyXG5cclxuLnByaW9yaXR5LXRleHQtbG93IHtcclxuICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LXRleHQtbWVkaXVtIHtcclxuICBjb2xvcjogdmFyKC0td2FybmluZyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LXRleHQtaGlnaCB7XHJcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBUb2RvIGFjdGlvbnMgKi9cclxuLnRvZG8tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XHJcbn1cclxuXHJcbi5leHBhbmQtdG9kby1idG4ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4cGFuZC10b2RvLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbn1cclxuXHJcbi5lZGl0LXRvZG8tYnRuLFxyXG4uZGVsZXRlLXRvZG8tYnRuIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKSB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5lZGl0LXRvZG8tYnRuIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lZGl0LXRvZG8tYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTY1MTAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmRlbGV0ZS10b2RvLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2M2MjgyODtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi8qIFRvZG8gZGV0YWlscyAqL1xyXG4udG9kby1mdWxsLWRldGFpbHMge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG59XHJcblxyXG4udG9kby1mdWxsLWRldGFpbHMuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9kby1mdWxsLWRldGFpbHMgcCB7XHJcbiAgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLXNtKSAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi50b2RvLWZ1bGwtZGV0YWlscyBwIHN0cm9uZyB7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIE1vZGFscyAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIG1hcmdpbjogNXZoIGF1dG87XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zY3JvbGxlciB7XHJcbiAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gdmFyKC0tc3BhY2luZy1sZykgKiAyKTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLWJvcmRlcikgdmFyKC0tc3VyZmFjZSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IGgzIHtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLWxnKSAwO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4ubW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuLm1vZGFsLWNvbnRlbnQgdGV4dGFyZWEsXHJcbi5tb2RhbC1jb250ZW50IHNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBpbnB1dDpmb2N1cyxcclxuLm1vZGFsLWNvbnRlbnQgdGV4dGFyZWE6Zm9jdXMsXHJcbi5tb2RhbC1jb250ZW50IHNlbGVjdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1mb2N1cyk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjUsIDExOCwgMjEwLCAwLjEyKTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIHJpZ2h0OiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlLXZhcmlhbnQpO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmNsb3NlLWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xyXG59XHJcblxyXG4uaGVscC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XHJcbiAgbWFyZ2luLXRvcDogLXZhcigtLXNwYWNpbmctc20pO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIG1hcmdpbi10b3A6IC12YXIoLS1zcGFjaW5nLXNtKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxufVxyXG5cclxuLyogTm90aWZpY2F0aW9ucyAqL1xyXG4ubm90aWZpY2F0aW9uLWFyZWEge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIHJpZ2h0OiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVJbk5vdGlmaWNhdGlvbiAwLjNzIGZvcndhcmRzLCBmYWRlT3V0Tm90aWZpY2F0aW9uIDAuM3MgNC43cyBmb3J3YXJkcztcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi5pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3IpO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluTm90aWZpY2F0aW9uIHtcclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0Tm90aWZpY2F0aW9uIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGRlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1sYXlvdXQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cy1zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICB9XHJcblxyXG4gIGhlYWRlciBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgICBtYXJnaW46IDJ2aCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlcnMtcm93LFxyXG4gIC5maWx0ZXItc29ydC1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tc2VsZWN0IHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvRkFBb0Y7RUFDcEYsc0ZBQXNGO0VBQ3RGLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9IQUFvSDtFQUNwSCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsWUFBWTtBQUNaO0VBQ0Us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QztFQUM1QywrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixpREFBaUQ7RUFDakQsb0ZBQW9GO0FBQ3RGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXByaW1hcnk6ICMyNDY0ODg7XFxyXFxuICAtLW9uLXByaW1hcnk6ICNmZmZmZmY7XFxyXFxuICAtLXNlY29uZGFyeTogIzRmNjA2ZTtcXHJcXG4gIC0tc3VyZmFjZTogI2ZmZmZmZjtcXHJcXG4gIC0tc3VyZmFjZS12YXJpYW50OiAjZWZmNmZhO1xcclxcbiAgLS1vbi1zdXJmYWNlOiAjMTgxYzIwO1xcclxcbiAgLS1vbi1zdXJmYWNlLXZhcmlhbnQ6ICM0MTQ3NGQ7XFxyXFxuICAtLWVycm9yOiAjYmExYTFhO1xcclxcbiAgLS13YXJuaW5nOiAjZjU3YzAwO1xcclxcbiAgLS1zdWNjZXNzOiAjMzg4ZTNjO1xcclxcbiAgLS1pbmZvOiAjMDI4OGQxO1xcclxcbiAgLS1ib3JkZXI6ICNkN2RhZGY7XFxyXFxuICAtLWJvcmRlci12YXJpYW50OiAjYzFjNWNkO1xcclxcbiAgLS1zaGFkb3ctMTogMCAycHggNHB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4xMiksIDAgM3B4IDZweCByZ2JhKDE5NSwgMjA2LCAyMTMsIDAuMjQpO1xcclxcbiAgLS1zaGFkb3ctMjogMCAxMHB4IDIwcHggcmdiYSgxOTUsIDIwNiwgMjEzLCAwLjE2KSwgMCA2cHggNnB4IHJnYmEoMTk1LCAyMDYsIDIxMywgMC4yNCk7XFxyXFxuICAtLXJhZGl1cy1zbTogNHB4O1xcclxcbiAgLS1yYWRpdXMtbWQ6IDhweDtcXHJcXG4gIC0tcmFkaXVzLWxnOiAxMnB4O1xcclxcbiAgLS1zcGFjaW5nLXhzOiA0cHg7XFxyXFxuICAtLXNwYWNpbmctc206IDhweDtcXHJcXG4gIC0tc3BhY2luZy1tZDogMTZweDtcXHJcXG4gIC0tc3BhY2luZy1sZzogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNmY5ZmU7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxufVxcclxcblxcclxcbi8qIExheW91dCAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsb2JhbC1zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2xvYmFsLXNlYXJjaC1jb250YWluZXIgLmZvcm0taW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1sYXlvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYmFyICovXFxyXFxuLnByb2plY3RzLXNpZGViYXIge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtc2lkZWJhciBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2luZy1tZCkgMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLWxnKSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtbGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3QgbGk6aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItdmFyaWFudCk7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1saXN0IGxpLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXZhcmlhbnQpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi8qIEJ1dHRvbnMgKi9cXHJcXG4ucHJpbWFyeS1idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDEwMCwgMTM2LCAwLjkpO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIGNvbnRlbnQgKi9cXHJcXG4udG9kb3MtdmlldyB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy12aWV3IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmctbGcpIDA7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1jb250cm9scyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3MtY29udHJvbHMgLnByaW1hcnktYnRuIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRmlsdGVycyAqL1xcclxcbi5maWx0ZXJzLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zb3J0LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3QsIFxcclxcbjo6cGlja2VyKHNlbGVjdCkge1xcclxcbiAgYXBwZWFyYW5jZTogYmFzZS1zZWxlY3Q7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyLFxcclxcbnNlbGVjdDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItdmFyaWFudCk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDo6cGlja2VyLWljb24ge1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzIHJvdGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0Om9wZW46OnBpY2tlci1pY29uIHtcXHJcXG4gIHJvdGF0ZTogMTgwZGVnO1xcclxcbn1cXHJcXG5cXHJcXG5vcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxub3B0aW9uOmhvdmVyLFxcclxcbm9wdGlvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXZhcmlhbnQpO1xcclxcbn1cXHJcXG5cXHJcXG5vcHRpb246Y2hlY2tlZCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5vcHRpb246OmNoZWNrbWFyayB7XFxyXFxuICBvcmRlcjogMTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5vcHRpb246Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pIHZhcigtLXJhZGl1cy1zbSkgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5vcHRpb246bGFzdC1vZi10eXBlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtc20pIHZhcigtLXJhZGl1cy1zbSk7XFxyXFxufVxcclxcblxcclxcbiN0YWctZmlsdGVyLWFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy1maWx0ZXItaXRlbSB7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy1maWx0ZXItaXRlbTpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci12YXJpYW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZy1maWx0ZXItaXRlbS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS12YXJpYW50KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiN0YWctZmlsdGVyLWNsZWFyLWJ0biB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm0gaW5wdXRzICovXFxyXFxuLmZvcm0taW5wdXQsXFxyXFxuLmZvcm0tc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXQ6Zm9jdXMsXFxyXFxuLmZvcm0tc2VsZWN0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1mb2N1cyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyNSwgMTE4LCAyMTAsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zZWxlY3Qge1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9kbyBsaXN0ICovXFxyXFxuI3RvZG9zLWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiN0b2Rvcy1saXN0IGxpIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb3MtbGlzdCBsaTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByZXZpZXctY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94IHtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGV0YWlscyB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWR1ZS1kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29tcGxldGVkIC50b2RvLXRpdGxlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRhZ3MtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnLWxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAycHggdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcm9qZWN0LWxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcXHJcXG4gIHBhZGRpbmc6IDJweCB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJpb3JpdHkgaW5kaWNhdG9ycyAqL1xcclxcbi5wcmlvcml0eS1sb3cge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1zdWNjZXNzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxyXFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXdhcm5pbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaGlnaCB7XFxyXFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWVycm9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXRleHQtbG93IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS10ZXh0LW1lZGl1bSB7XFxyXFxuICBjb2xvcjogdmFyKC0td2FybmluZyk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktdGV4dC1oaWdoIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1lcnJvcik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb2RvIGFjdGlvbnMgKi9cXHJcXG4udG9kby1hY3Rpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC10b2RvLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC10b2RvLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kby1idG4sXFxyXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKSB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRvZG8tYnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTY1MTAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRvZG8tYnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYzYyODI4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb2RvIGRldGFpbHMgKi9cXHJcXG4udG9kby1mdWxsLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mdWxsLWRldGFpbHMuaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZ1bGwtZGV0YWlscyBwIHtcXHJcXG4gIG1hcmdpbjogdmFyKC0tc3BhY2luZy1zbSkgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mdWxsLWRldGFpbHMgcCBzdHJvbmcge1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWxzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xcclxcbiAgbWFyZ2luOiA1dmggYXV0bztcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWF4LWhlaWdodDogOTB2aDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGxlciB7XFxyXFxuICBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSB2YXIoLS1zcGFjaW5nLWxnKSAqIDIpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1ib3JkZXIpIHZhcigtLXN1cmZhY2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCBoMyB7XFxyXFxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLWxnKSAwO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vbi1zdXJmYWNlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbi5tb2RhbC1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXHJcXG4ubW9kYWwtY29udGVudCB0ZXh0YXJlYSxcXHJcXG4ubW9kYWwtY29udGVudCBzZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCBpbnB1dDpmb2N1cyxcXHJcXG4ubW9kYWwtY29udGVudCB0ZXh0YXJlYTpmb2N1cyxcXHJcXG4ubW9kYWwtY29udGVudCBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWZvY3VzKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI1LCAxMTgsIDIxMCwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHRleHRhcmVhIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS12YXJpYW50KTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XFxyXFxufVxcclxcblxcclxcbi5oZWxwLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UtdmFyaWFudCk7XFxyXFxuICBtYXJnaW4tdG9wOiAtdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAtdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTm90aWZpY2F0aW9ucyAqL1xcclxcbi5ub3RpZmljYXRpb24tYXJlYSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgcmlnaHQ6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbiB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICBhbmltYXRpb246IHNsaWRlSW5Ob3RpZmljYXRpb24gMC4zcyBmb3J3YXJkcywgZmFkZU91dE5vdGlmaWNhdGlvbiAwLjNzIDQuN3MgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZmljYXRpb24uaW5mbyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbi5zdWNjZXNzIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90aWZpY2F0aW9uLmVycm9yIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbi53YXJuaW5nIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Ob3RpZmljYXRpb24ge1xcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dE5vdGlmaWNhdGlvbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFJlc3BvbnNpdmUgZGVzaWduICovXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXBwLWxheW91dCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdHMtc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gICAgbWFyZ2luOiAydmggYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWx0ZXJzLXJvdyxcXHJcXG4gIC5maWx0ZXItc29ydC1iYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLXNlbGVjdCB7XFxyXFxuICAgIG1pbi13aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIE1vZHVsZSB0aGF0IGhhbmRsZXMgdGhlIGNvcmUgbG9naWMgb2YgYXBwXHJcblxyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgYXBwTG9naWMgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHByb2plY3RzID0gW107XHJcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlaHlkcmF0ZVByb2plY3RzKHBsYWluUHJvamVjdHMpIHtcclxuICAgICAgICByZXR1cm4gcGxhaW5Qcm9qZWN0cy5tYXAoKHBsYWluUHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocGxhaW5Qcm9qZWN0Lm5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmlkID0gcGxhaW5Qcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zICA9IHBsYWluUHJvamVjdC50b2Rvcy5tYXAoKHBsYWluVG9kbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWluVG9kby50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBwbGFpblRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhaW5Ub2RvLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhaW5Ub2RvLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWluVG9kby50YWdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWluVG9kby5jb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdG9kby5pZCA9IHBsYWluVG9kby5pZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvOyAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTYW1wbGVkRGF0YSgpIHtcclxuICAgICAgICBjb25zdCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdXb3JrJyk7XHJcbiAgICAgICAgd29ya1Byb2plY3QuYWRkVG9kbyhuZXcgVG9kbygnRmluaXNoIFEyIHJlcG9ydCcsICdDb21waWxlIHJlcXVpcmVkIGRhdGEgYW5kIGZpbmFsaXplIHRoZSBjb25jbHVzaW9uLicsIG5ldyBEYXRlKDIwMjUsIDQsIDI2KSwgJ2hpZ2gnLCBbJ3JlcG9ydCddLCBmYWxzZSkpO1xyXG4gICAgICAgIHdvcmtQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ1RlYW0gbWVldGluZyBwcmVwJywgYFByZXBhcmUgYWdlbmRhIGFuZCBzbGlkZXMgZm9yIE1vbmRheSdzIHRlYW0gbWVldGluZy5gLCBuZXcgRGF0ZSgyMDI1LCA1LCA2KSwgJ21lZGl1bScsIFsnbWVldGluZyddLCBmYWxzZSkpO1xyXG4gICAgICAgIHdvcmtQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ0NsaWVudCBmb2xsb3ctdXAnLCAnQ2FsbCBKb2huIERvZSByZWdhcmRpbmcgcHJvamVjdCBBbHBoYS4nLCAnJywgJ21lZGl1bScsIFsnY2xpZW50JywgJ3Nob3BwaW5nJ10sIHRydWUpKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGVyc29uYWxQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1BlcnNvbmFsJyk7XHJcbiAgICAgICAgcGVyc29uYWxQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8oJ0dyb2Nlcnkgc2hvcHBpbmcnLCAnTWlsaywgZWdncywgY2hpY2tlbiwgZnJ1aXRzLicsIG5ldyBEYXRlKDIwMjUsIDQsIDIwKSwgJ2xvdycsIFsnaG9tZScsICdzaG9wcGluZyddLCBmYWxzZSkpO1xyXG4gICAgICAgIHBlcnNvbmFsUHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdCb29rIGRvY3RvciBhcHBvaW50bWVudCcsICdBbm51YWwgY2hlY2stdXAuJywgbmV3IERhdGUoMjAyNSwgNSwgMTApLCAnaGlnaCcsIFsnaGVhbHRoJ10sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlYXJuaW5nUHJvamVjdCA9IG5ldyBQcm9qZWN0KCdMZWFybmluZycpO1xyXG4gICAgICAgIGxlYXJuaW5nUHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdXZWJwYWNrIERlZXAgRGl2ZScsICdVbmRlcnN0YW5kIGxvYWRlcnMgYW5kIHBsdWdpbnMuJywgbmV3IERhdGUoMjAyNSwgNCwgMzApLCAnbWVkaXVtJywgWydkZXYnXSwgdHJ1ZSkpO1xyXG4gICAgICAgIGxlYXJuaW5nUHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKCdSZWFkIFwiVGhlIFByYWdtYXRpYyBQcm9ncmFtbWVyXCInLCAnQ2hhcHRlciAzLTUnLCAnJywgJ2xvdycsIFsncmVhZGluZycsICdkZXYnXSwgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgcHJvamVjdHMgPSBbd29ya1Byb2plY3QsIHBlcnNvbmFsUHJvamVjdCwgbGVhcm5pbmdQcm9qZWN0XTtcclxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHdvcmtQcm9qZWN0O1xyXG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICAgICAgICBjb25zdCBsb2FkZWREYXRhID0gc3RvcmFnZS5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmKGxvYWRlZERhdGEgJiYgbG9hZGVkRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzID0gcmVoeWRyYXRlUHJvamVjdHMobG9hZGVkRGF0YSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF0gfHwgbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjcmVhdGVTYW1wbGVkRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlUHJvamVjdHMoKSB7XHJcbiAgICAgICAgc3RvcmFnZS5zYXZlRGF0YShwcm9qZWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFuYWdlbWVudCBvZiB0aGUgcHJvamVjdHNcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QobmFtZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAhcHJvamVjdHMuZmluZCgocCkgPT4gcC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdElkLCBuZXdOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRvVXBkYXRlID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcclxuICAgICAgICBpZighcHJvamVjdFRvVXBkYXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByb2plY3RzLnNvbWUocCA9PiBwLmlkICE9PSBwcm9qZWN0SWQgJiYgcC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5ld05hbWUudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogJ2R1cGxpY2F0ZScsIHByb2plY3Q6IHByb2plY3RUb1VwZGF0ZX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3RUb1VwZGF0ZS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdFRvVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdElkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgICAgICBpZihwcm9qZWN0SW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ZXJyb3I6ICdsYXN0X3Byb2plY3QnfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVkUHJvamVjdCA9IHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsMSlbMF07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdCAmJiBjdXJyZW50UHJvamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmxlbmd0aCA+IDAgPyBwcm9qZWN0c1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHJlbW92ZWRQcm9qZWN0TmFtZTogcmVtb3ZlZFByb2plY3QubmFtZSwgbmV3Q3VycmVudFByb2plY3Q6IGN1cnJlbnRQcm9qZWN0fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtlcnJvcjogJ25vdF9mb3VuZCd9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RCeUlkKHByb2plY3RJZCl7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHByb2plY3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5wcm9qZWN0c107XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xyXG4gICAgICAgIGlmKHByb2plY3QpIHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hbmFnZW1lbnQgb2YgdGhlIHRvZG9zXHJcbiAgICBmdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KHByb2plY3RJZCwgdG9kb0RldGFpbHMpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcclxuICAgICAgICBpZihwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFnc1N0cmluZ30gPSB0b2RvRGV0YWlscztcclxuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICBpZiAodGFnc1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgbmV3VG9kby5zZXRUYWdzRnJvbVN0cmluZyh0YWdzU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3VG9kbztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0KHByb2plY3RJZCwgdG9kb0lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgaWYocHJvamVjdCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb0lkKTtcclxuICAgICAgICAgICAgc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVG9kb0luUHJvamVjdChwcm9qZWN0SWQsIHRvZG9JZCwgdXBkYXRlZERldGFpbHMpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcclxuICAgICAgICBpZihwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9JZCkgXHJcbiAgICAgICAgICAgIGlmKHRvZG8pIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZWREZXRhaWxzLnRhZ3NTdHJpbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc2V0VGFnc0Zyb21TdHJpbmcodXBkYXRlZERldGFpbHMudGFnc1N0cmluZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7dGFnc1N0cmluZywgLi4ub3RoZXJEZXRhaWxzIH0gPSB1cGRhdGVkRGV0YWlscztcclxuICAgICAgICAgICAgICAgICAgICB0b2RvLnVwZGF0ZURldGFpbHMob3RoZXJEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby51cGRhdGVEZXRhaWxzKHVwZGF0ZWREZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVUb2RvQ29tcGxldGUocHJvamVjdElkLCB0b2RvSWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9JZCk7XHJcbiAgICAgICAgICAgICAgICBpZih0b2RvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kby50b2dnbGVDb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBnZXRBbGxUb2Rvc0Fjcm9zc1Byb2plY3RzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHMucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKGFjYywgcHJvamVjdCkgPT4gYWNjLmNvbmNhdChwcm9qZWN0LmdldEFsbFRvZG9zKCkpLFxyXG4gICAgICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRBbGxUb2Rvc1dpdGhQcm9qZWN0SW5mbygpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3NXaXRoUHJvamVjdEluZm8gPSBbXTtcclxuICAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldEFsbFRvZG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxUb2Rvc1dpdGhQcm9qZWN0SW5mby5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udG9kbywgb3JnaW5hbFByb2plY3RJZDogcHJvamVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHJldHVybiBhbGxUb2Rvc1dpdGhQcm9qZWN0SW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlYXJjaFRvZG9zSW5MaXN0KHRvZG9zLCBzZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgICAgIGlmKCFzZWFyY2hUZXJtIHx8IHNlYXJjaFRlcm0udHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyU2VhcmNoVGVybSA9IHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+XHJcbiAgICAgICAgICAgICAgICB0b2RvLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJTZWFyY2hUZXJtKSB8fFxyXG4gICAgICAgICAgICAgICAgdG9kby5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyU2VhcmNoVGVybSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRBbGxUYWdzQWNyb3NzUHJvamVjdHMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFRhZ3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0VW5pcXVlVGFncygpLmZvckVhY2goKHRhZykgPT4gYWxsVGFncy5hZGQodGFnKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxUYWdzKS5zb3J0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJUb2Rvc0J5VGFnQWNyb3NzUHJvamVjdHModGFnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gZ2V0QWxsVG9kb3NBY3Jvc3NQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmltbWVkVGFnID0gdGFnLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZighdHJpbW1lZFRhZykgcmV0dXJuIGFsbFRvZG9zO1xyXG4gICAgICAgICAgICByZXR1cm4gYWxsVG9kb3MuZmlsdGVyKCh0b2RvKSA9PlxyXG4gICAgICAgICAgICAgICAgdG9kby50YWdzLnNvbWUoKHQpID0+IHQudG9Mb3dlckNhc2UoKSA9PT0gdHJpbW1lZFRhZyksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJUb2Rvc0J5UHJpb3JpdHlBY3Jvc3NQcm9qZWN0cyhwcmlvcml0eUxldmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFRvZG9zID0gZ2V0QWxsVG9kb3NBY3Jvc3NQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWxsVG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnByaW9yaXR5ID09PSBwcmlvcml0eUxldmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5T3JkZXIgPSB7ICdoaWdoJzogMSwgJ21lZGl1bSc6IDIsICdsb3cnOiAzIH07IFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzb3J0VG9kb3ModG9kb3MsIHNvcnRGaWVsZCwgc29ydERpcmVjdGlvbiA9ICdhc2MnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IFsuLi50b2Rvc107XHJcblxyXG4gICAgICAgICAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbEEsIHZhbEI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHNvcnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpdGxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsQSA9IGEudGl0bGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsQiA9IGIudGl0aWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZHVlRGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGR1ZSBkYXRlIGlzIE5VTEwsIHNvcnQgdGhlbSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGEuZHVlRGF0ZSA9PT0gbnVsbCAmJiBiLmR1ZURhdGUgPT09IG51bGwpIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhLmR1ZURhdGUgPT09IG51bGwpIHJldHVybiAxOyAvL2EgY29tZXMgYWZ0ZXIgYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiLmR1ZURhdGUgPT09IG51bGwpIHJldHVybiAtMTsgLy8gYSBjb21lcyBiZWZvcmUgYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxBID0gYS5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxCID0gYi5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmlvcml0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbEEgPSBwcmlvcml0eU9yZGVyW2EucHJpb3JpdHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxCID0gcHJpb3JpdHlPcmRlcltiLnByaW9yaXR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIG5vIHNvcnRpbmcgZm9yIHVua25vd24gZmllbGRzXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhcmlzb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbEEgPiB2YWxCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbEEgPCB2YWxCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbiA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnREaXJlY3Rpb24gPT09ICdkZXNjJyA/IGNvbXBhcmlzb24gKiAtMSA6IGNvbXBhcmlzb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gc29ydGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3QsXHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3QsXHJcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QsXHJcbiAgICAgICAgICAgIGdldFByb2plY3RCeUlkLFxyXG4gICAgICAgICAgICBnZXRBbGxQcm9qZWN0cyxcclxuICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QsXHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRQcm9qZWN0LFxyXG4gICAgICAgICAgICBhZGRUb2RvVG9Qcm9qZWN0LFxyXG4gICAgICAgICAgICByZW1vdmVUb2RvRnJvbVByb2plY3QsXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9JblByb2plY3QsXHJcbiAgICAgICAgICAgIHRvZ2dsZVRvZG9Db21wbGV0ZSxcclxuICAgICAgICAgICAgZ2V0QWxsVG9kb3NBY3Jvc3NQcm9qZWN0cyxcclxuICAgICAgICAgICAgZ2V0QWxsVG9kb3NXaXRoUHJvamVjdEluZm8sXHJcbiAgICAgICAgICAgIHNlYXJjaFRvZG9zSW5MaXN0LFxyXG4gICAgICAgICAgICBnZXRBbGxUYWdzQWNyb3NzUHJvamVjdHMsXHJcbiAgICAgICAgICAgIGZpbHRlclRvZG9zQnlUYWdBY3Jvc3NQcm9qZWN0cyxcclxuICAgICAgICAgICAgZmlsdGVyVG9kb3NCeVByaW9yaXR5QWNyb3NzUHJvamVjdHMsXHJcbiAgICAgICAgICAgIHNvcnRUb2RvcyxcclxuICAgICAgICAgIH07XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwTG9naWM7IiwiLy8gTW9kdWxlIHRoYXQgaGFuZGxlcyB0aGUgRE9NIG1hbmlwdWxhdGlvblxyXG5cclxuaW1wb3J0IHsgZm9ybWF0LCBpc1ZhbGlkIGFzIGlzVmFsaWREYXRlfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5jb25zdCBkb21Db250cm9sbGVyID0gKCgpID0+IHtcclxuICAgIC8vIERPTSBlbGVtZW50IHNlbGVjdG9yc1xyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpO1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1wcm9qZWN0LXRpdGxlJyk7XHJcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWJ0bicpO1xyXG4gICAgY29uc3QgdG9kb3NMaXN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MtbGlzdCcpO1xyXG4gICAgY29uc3QgdGFnRmlsdGVyQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctZmlsdGVyLWFyZWEnKTtcclxuICAgIGNvbnN0IHRhZ0ZpbHRlckNsZWFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1maWx0ZXItY2xlYXItYnRuJyk7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbi1hcmVhJyk7XHJcblxyXG4gICAgLy8gUHJvamVjdCBtb2RhbFxyXG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwnKTtcclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xyXG4gICAgY29uc3QgcHJvamVjdElkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pZCcpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcclxuICAgIGNvbnN0IHNhdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtcHJvamVjdC1idG4nKTtcclxuICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXByb2plY3QtbW9kYWwtYnRuJyk7XHJcblxyXG4gICAgLy8gVG9kbyBtb2RhbFxyXG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbW9kYWwnKTtcclxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xyXG4gICAgY29uc3QgdG9kb0lkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1pZCcpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZS1pbnB1dCcpO1xyXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG4gICAgY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUtaW5wdXQnKTtcclxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHktaW5wdXQnKTtcclxuICAgIGNvbnN0IHRvZG9UYWdzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10YWdzLWlucHV0Jyk7XHJcbiAgICBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS10b2RvLW1vZGFsLWJ0bicpO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9ucyB0byByZW1vdmUgYWxsIGNoaWxkIG5vZGVzXHJcbiAgICBmdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGVGb3JEaXNwbGF5KGRhdGUpIHtcclxuICAgICAgICBpZiggZGF0ZSBpbnN0YW5jZW9mIERhdGUgICYmIGlzVmFsaWREYXRlKGRhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ01NTSBkZCwgeXl5eScpIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdObyBkYXRlIHNldCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvamVjdCByZW5kZXJlclxyXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpIHtcclxuICAgICAgICBjbGVhckVsZW1lbnQocHJvamVjdHNMaXN0VUwpO1xyXG4gICAgICAgIGlmKCFwcm9qZWN0cyB8fCBwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdObyBwcm9qZWN0cyB5ZXQnO1xyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCduby1pdGVtcycpO1xyXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3RVTC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGkuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgICAgICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQobmFtZVNwYW4pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWN0aW9ucycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QtYnRuJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnRpdGxlID0gJ0VkaXQgcHJvamVjdCc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICdEZWxldGUnO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QtYnRuJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50aXRsZSA9ICdEZWxldGUgcHJvamVjdCc7XHJcblxyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGFjdGlvbnNEaXYpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qZWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2plY3RzTGlzdFVMLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGUgfHwgJ05vIHByb2plY3Qgc2VsZWN0ZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvZG8gcmVuZGVyZXJcclxuICAgIGZ1bmN0aW9uIHJlbmRlclRvZG9zKHByb2plY3RPclNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICBjbGVhckVsZW1lbnQodG9kb3NMaXN0VUwpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0dsb2JhbFNlYXJjaCA9IHByb2plY3RPclNlYXJjaFJlc3VsdHMgJiYgcHJvamVjdE9yU2VhcmNoUmVzdWx0cy5pc0dsb2JhbFNlYXJjaCA9PT0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3RPclNlYXJjaFJlc3VsdHMgPyBwcm9qZWN0T3JTZWFyY2hSZXN1bHRzLnRvZG9zIDogW107XHJcbiAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSBwcm9qZWN0T3JTZWFyY2hSZXN1bHRzID8gcHJvamVjdE9yU2VhcmNoUmVzdWx0cy5uYW1lIDogJ1NlbGVjdCBhIFByb2plY3QnO1xyXG5cclxuICAgICAgICB1cGRhdGVQcm9qZWN0VGl0bGUoZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICBpZighdG9kb3MgfHwgdG9kb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgaWYoaXNHbG9iYWxTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gJ05vIHRhc2tzIGZvdW5kIHRoYXQgbWF0Y2ggeW91ciBzZWFyY2guJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0T3JTZWFyY2hSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdObyB0YXNrcyBpbiB0aGlzIHByb2plY3QgeWV0Lic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdTZWxlY3QgYSBwcm9qZWN0IG9yIGVudGVyIGEgc2VhcmNoIHRlcm0uJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCduby1pdGVtcycpO1xyXG4gICAgICAgICAgICB0b2Rvc0xpc3RVTC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGkuZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNHbG9iYWxTZWFyY2ggJiYgdG9kby5vcmlnaW5hbFByb2plY3RJZCkge1xyXG4gICAgICAgICAgICAgICAgbGkuZGF0YXNldC5vcmlnaW5hbFByb2plY3RJZCA9IHRvZG8ub3JpZ2luYWxQcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0b2RvLnByaW9yaXR5fWApO1xyXG4gICAgICAgICAgICBpZih0b2RvLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9kby1jb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9kb1ByZXZpZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRvZG9QcmV2aWV3Q29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLXByZXZpZXctY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGVkO1xyXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmRhdGFzZXQudG9kb0lkID0gdG9kby5pZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRvZG9JbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5mbycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGR1ZURhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKTtcclxuICAgICAgICAgICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSBgRHVlOiAke2Zvcm1hdERhdGVGb3JEaXNwbGF5KHRvZG8uZHVlRGF0ZSl9YDtcclxuXHJcbiAgICAgICAgICAgIHRvZG9JbmZvRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgdG9kb0luZm9EaXYuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICAgICAgdG9kb0luZm9EaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvamVjdCBuYW1lIHRoYXQgaXMgZGlzcGxheWVkIGluIGdsb2JhbCBzZWFyY2ggcmVzdWx0XHJcbiAgICAgICAgICAgIGlmIChpc0dsb2JhbFNlYXJjaCAmJiB0b2RvLnByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdExhYmVsU3Bhbi5jbGFzc0xpc3QuYWRkKCd0b2RvLXByb2plY3QtbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RMYWJlbFNwYW4udGV4dENvbnRlbnQgPSBgKFByb2plY3Q6ICR7dG9kby5wcm9qZWN0TmFtZX0pYDtcclxuICAgICAgICAgICAgICAgIHRvZG9JbmZvRGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbFNwYW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUYWdzIGRpc3BsYXlcclxuICAgICAgICAgICAgaWYgKHRvZG8udGFncyAmJiB0b2RvLnRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFnc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdGFnc0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2Rvcy10YWdzLWRpc3BsYXknKTtcclxuICAgICAgICAgICAgICAgIHRvZG8udGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ1NwYW4uY2xhc3NMaXN0LmFkZCgndGFnLWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnU3Bhbi50ZXh0Q29udGVudCA9IHRhZztcclxuICAgICAgICAgICAgICAgICAgICB0YWdzRGl2LmFwcGVuZENoaWxkKHRhZ1NwYW4pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0b2RvSW5mb0Rpdi5hcHBlbmRDaGlsZCh0YWdzRGl2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYWN0aW9ucycpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ0bi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtdG9kby1idG4nKTtcclxuICAgICAgICAgICAgZXhwYW5kQnRuLmlubmVySFRNTCA9ICcmIzQzJzsgLy8gUGx1cyBzaWduXHJcbiAgICAgICAgICAgIGV4cGFuZEJ0bi50aXRsZSA9ICdTaG93IGRldGFpbHMnO1xyXG4gICAgICAgICAgICBleHBhbmRCdG4uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xyXG4gICAgICAgICAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGV4cGFuZEJ0bik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvLWJ0bicpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmRhdGFzZXQudG9kb0lkID0gdG9kby5pZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8tYnRuJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xyXG5cclxuICAgICAgICAgICAgYWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgICAgICAgICAgYWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgICAgICAgICAgdG9kb1ByZXZpZXdDb250ZW50LmFwcGVuZENoaWxkKHRvZG9JbmZvRGl2KTtcclxuICAgICAgICAgICAgdG9kb1ByZXZpZXdDb250ZW50LmFwcGVuZENoaWxkKGFjdGlvbnNEaXYpO1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0b2RvUHJldmlld0NvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnVsbERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZnVsbERldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1mdWxsLWRldGFpbHMnLCAnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uUC5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb246ICc7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRvZG8uZGVzY3JpcHRpb24gfHwgJ05vIGRlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uUC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVRleHQgPSB0b2RvLnByaW9yaXR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdG9kby5wcmlvcml0eS5zbGljZSgxKTtcclxuICAgICAgICAgICAgcHJpb3JpdHlQLmlubmVySFRNTCA9IGBQcmlvcml0eTogPHNwYW4gY2xhc3M9XCJwcmlvcml0eS10ZXh0LSR7dG9kby5wcmlvcml0eX1cIj4ke3ByaW9yaXR5VGV4dH08L3NwYW4+YDtcclxuXHJcbiAgICAgICAgICAgIGZ1bGxEZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XHJcbiAgICAgICAgICAgIGZ1bGxEZXRhaWxzRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5UCk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGZ1bGxEZXRhaWxzRGl2KTtcclxuICAgICAgICAgICAgdG9kb3NMaXN0VUwuYXBwZW5kKGxpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb2RhbCBoYW5kbGluZ1xyXG4gICAgZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbChwcm9qZWN0VG9FZGl0ID0gbnVsbCkge1xyXG4gICAgICAgIGNsZWFyRm9ybUVycm9ycyhwcm9qZWN0Rm9ybSk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcclxuICAgICAgICBwcm9qZWN0SWRJbnB1dC52YWx1ZSA9ICcnOyAvLyBDbGVhciBoaWRkZW4gSUQgZmllbGRcclxuICAgICAgICBzYXZlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuXHJcbiAgICAgICAgaWYocHJvamVjdFRvRWRpdCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0SWRJbnB1dC52YWx1ZSA9IHByb2plY3RUb0VkaXQuaWQ7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0VG9FZGl0Lm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XHJcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlblRvZG9Nb2RhbCh0b2RvVG9FZGl0ID0gbnVsbCwgY3VycmVudFByb2plY3RJZCkge1xyXG4gICAgICAgIGNsZWFyRm9ybUVycm9ycyh0b2RvRm9ybSk7XHJcbiAgICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcclxuICAgICAgICB0b2RvSWRJbnB1dC52YWx1ZSA9ICcnOyAvLyBDbGVhciBoaWRkZW4gSUQgZmllbGRcclxuXHJcbiAgICAgICAgaWYgKHRvZG9Ub0VkaXQpIHtcclxuICAgICAgICAgICAgdG9kb0lkSW5wdXQudmFsdWUgPSB0b2RvVG9FZGl0LmlkO1xyXG4gICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC52YWx1ZSA9IHRvZG9Ub0VkaXQudGl0bGU7XHJcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kb1RvRWRpdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdG9kb0R1ZURhdGVJbnB1dC52YWx1ZSA9ICh0b2RvVG9FZGl0LmR1ZURhdGUgJiYgaXNWYWxpZERhdGUodG9kb1RvRWRpdC5kdWVEYXRlKSlcclxuICAgICAgICAgICAgICAgID8gZm9ybWF0KHRvZG9Ub0VkaXQuZHVlRGF0ZSwgJ3l5eXktTU0tZGQnKSAvLyBGb3JtYXQgZGF0ZSBvYmogZm9yIGlucHV0XHJcbiAgICAgICAgICAgICAgICA6ICcnOyAvLyBFbXB0eSBzdHJpbmcgZm9yIG51bGwgb3IgaW52YWxpZCBkYXRlXHJcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eUlucHV0LnZhbHVlID0gdG9kb1RvRWRpdC5wcmlvcml0eTtcclxuICAgICAgICAgICAgdG9kb1RhZ3NJbnB1dC52YWx1ZSA9IHRvZG9Ub0VkaXQudGFncyA/IHRvZG9Ub0VkaXQuZ2V0VGFnc1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZG9Gb3JtLmRhdGFzZXQuY3VycmVudFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0SWQ7XHJcbiAgICAgICAgdG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRvZG9UaXRsZUlucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VUb2RvTW9kYWwoKSB7XHJcbiAgICAgICAgdG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0dGluZyBmb3JtIGRhdGFcclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RGb3JtRGF0YSgpIHtcclxuICAgICAgICBjbGVhckZvcm1FcnJvcnMocHJvamVjdEZvcm0pO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBuYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBwcm9qZWN0SWRJbnB1dC52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHNob3dGaWVsZEVycm9yKHByb2plY3ROYW1lSW5wdXQsICdQcm9qZWN0IG5hbWUgaXMgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNWYWxpZCA/IHtpZCwgbmFtZX0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRvZG9Gb3JtRGF0YSgpIHtcclxuICAgICAgICBjbGVhckZvcm1FcnJvcnModG9kb0Zvcm0pO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gdG9kb0R1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRvZG9Qcmlvcml0eUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhZ3NTdHJpbmcgID0gdG9kb1RhZ3NJbnB1dC52YWx1ZS50cmltKCk7IC8vIENvbW1hLXNlcGFyYXRlZCBzdHJpbmdcclxuICAgICAgICBjb25zdCBpZCA9IHRvZG9JZElucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSB0b2RvRm9ybS5kYXRhc2V0LmN1cnJlbnRQcm9qZWN0SWQ7XHJcbiAgICBcclxuXHJcbiAgICAgICAgaWYgKHRvZG9UaXRsZUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICAgIHNob3dGaWVsZEVycm9yKHRvZG9UaXRsZUlucHV0LCAnVGFzayBuYW1lIGlzIHJlcXVpcmVkIScpO1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQgXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgICAgICB0YWdzU3RyaW5nLFxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdElkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3JtIHZhbGlkYXRpb25cclxuICAgIGZ1bmN0aW9uIGNsZWFyRm9ybUVycm9ycyhmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWlucHV0LCAuZm9ybS1zZWxlY3QnKS5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1tZXNzYWdlJykuZm9yRWFjaChzcGFuID0+IHtcclxuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dGaWVsZEVycm9yKGlucHV0RWxlbWVudCwgbWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IGhlbHBTcGFuID0gaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtbWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yU3BhbiA9IGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIGlucHV0RWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcclxuICAgICAgICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgIGlmKGhlbHBTcGFuKSB7XHJcbiAgICAgICAgICAgIGhlbHBTcGFuLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHsgLy8gVHlwZXMgaW5jbHVkZTogaW5mbywgc3VjY2VzcywgZXJyb3IsIHdhcm5pbmdcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uJywgdHlwZSk7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ICAgPSBtZXNzYWdlO1xyXG5cclxuICAgICAgICBub3RpZmljYXRpb25BcmVhLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBub3RpZmljYXRpb24gZnJvbSBET00gYWZ0ZXIgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmFuaW1hdGlvbk5hbWUgPSAnZmFkZU91dE5vdGlmaWNhdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlclRhZ0Nsb3VkKHRhZ3MsIGFjdGl2ZVRhZ3MpIHtcclxuICAgICAgICBpZiAoIXRhZ0ZpbHRlckFyZWEpIHJldHVybjtcclxuICAgICAgICBjbGVhckVsZW1lbnQodGFnRmlsdGVyQXJlYSk7XHJcblxyXG4gICAgICAgIGlmICh0YWdzICYmIHRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YWdzLmZvckVhY2goIHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWctZmlsdGVyLWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIHRhZ0VsZW1lbnQudGV4dENvbnRlbnQgPSB0YWc7XHJcbiAgICAgICAgICAgICAgICB0YWdFbGVtZW50LmRhdGFzZXQudGFnID0gdGFnO1xyXG4gICAgICAgICAgICAgICAgaWYodGFnID09PSBhY3RpdmVUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhZ0ZpbHRlckFyZWEuYXBwZW5kQ2hpbGQodGFnRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vVGFnTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBub1RhZ01zZy50ZXh0Q29udGVudCA9ICdObyB0YWdzIGF2YWlsYWJsZSBmb3IgZmlsdGVyaW5nLic7XHJcbiAgICAgICAgICAgIG5vVGFnTXNnLnN0eWxlLmZvbnRTaXplID0gJzAuOSBlbSc7XHJcbiAgICAgICAgICAgIG5vVGFnTXNnLnN0eWxlLmNvbG9yID0gJyM2NjYnO1xyXG4gICAgICAgICAgICB0YWdGaWx0ZXJBcmVhLmFwcGVuZENoaWxkKG5vVGFnTXNnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YWdGaWx0ZXJDbGVhckJ0bikge1xyXG4gICAgICAgICAgICB0YWdGaWx0ZXJDbGVhckJ0bi5zdHlsZS5kaXNwbGF5ID0gYWN0aXZlVGFncyA/ICdpbmxpbmUnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHRhZ0ZpbHRlckNsZWFyQnRuICYmICF0YWdGaWx0ZXJBcmVhLmNvbnRhaW5zKHRhZ0ZpbHRlckNsZWFyQnRuKSAmJiB0YWdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGFnRmlsdGVyQXJlYS5hcHBlbmRDaGlsZCh0YWdGaWx0ZXJDbGVhckJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWwgc3RhdGVcclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVVSSgpIHtcclxuICAgICAgICB1cGRhdGVQcm9qZWN0VGl0bGUoJ0xvYWRpbmcgcHJvamVjdHMuLi4nKTtcclxuICAgICAgICBjbGVhckVsZW1lbnQodG9kb3NMaXN0VUwpO1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdTZWxlY3Qgb3IgYWRkIGEgcHJvamVjdCB0byBzZWUgeW91ciB0YXNrcy4nXHJcbiAgICAgICAgdG9kb3NMaXN0VUwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIGFkZFRvZG9CdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW5kZXJQcm9qZWN0cyxcclxuICAgICAgICByZW5kZXJUb2RvcyxcclxuICAgICAgICB1cGRhdGVQcm9qZWN0VGl0bGUsXHJcbiAgICAgICAgb3BlblByb2plY3RNb2RhbCxcclxuICAgICAgICBjbG9zZVByb2plY3RNb2RhbCxcclxuICAgICAgICBvcGVuVG9kb01vZGFsLFxyXG4gICAgICAgIGNsb3NlVG9kb01vZGFsLFxyXG4gICAgICAgIGdldFByb2plY3RGb3JtRGF0YSxcclxuICAgICAgICBnZXRUb2RvRm9ybURhdGEsXHJcbiAgICAgICAgY2xlYXJFbGVtZW50LFxyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24sXHJcbiAgICAgICAgcmVuZGVyVGFnQ2xvdWQsXHJcbiAgICAgICAgaW5pdGlhbGl6ZVVJLFxyXG4gICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHByb2plY3RNb2RhbCxcclxuICAgICAgICAgICAgdG9kb01vZGFsLFxyXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3RVTCxcclxuICAgICAgICAgICAgdG9kb3NMaXN0VUwsXHJcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4sXHJcbiAgICAgICAgICAgIGFkZFRvZG9CdG4sXHJcbiAgICAgICAgICAgIHByb2plY3RGb3JtLFxyXG4gICAgICAgICAgICB0b2RvRm9ybSxcclxuICAgICAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWxCdG4sXHJcbiAgICAgICAgICAgIGNsb3NlVG9kb01vZGFsQnRuLFxyXG4gICAgICAgICAgICB0YWdGaWx0ZXJDbGVhckJ0bixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiB9KSgpO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGRvbUNvbnRyb2xsZXI7IiwiaW1wb3J0IGFwcExvZ2ljIGZyb20gJy4vYXBwTG9naWMuanMnO1xyXG5pbXBvcnQgZG9tQ29udHJvbGxlciBmcm9tICcuL2RvbUNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFNlYXJjaFRlcm0gPSAnJztcclxuICAgIGxldCBjdXJyZW50UHJpb3JpdHlGaWx0ZXIgPSAnYWxsJztcclxuICAgIGxldCBjdXJyZW50VGFnRmlsdGVyID0gbnVsbDtcclxuICAgIGxldCBjdXJyZW50U29ydENyaXRlcmlhID0geyBmaWVsZDogJ2R1ZURhdGUnLCBkaXJlY3Rpb246ICdhc2MnfTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdG9kb3MtaW5wdXQnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5RmlsdGVyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWZpbHRlcicpO1xyXG4gICAgY29uc3QgdGFnRmlsdGVyQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctZmlsdGVyLWFyZWEnKTtcclxuICAgIGNvbnN0IHRhZ0ZpbHRlckNsZWFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1maWx0ZXItY2xlYXItYnRuJyk7XHJcbiAgICBjb25zdCBzb3J0VG9kb3NTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC10b2RvcycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hUYWdDbG91ZChpc0dsb2JhbE1vZGUgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB0YWdzRm9yQ2xvdWQgPSBbXTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFwcExvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgICAgIGlmIChpc0dsb2JhbE1vZGUpIHsgLy8gVHJ1ZSBpZiBkYXRlIGZpbHRlciBvciBnbG9iYWwgc2VhcmNoIGlzIGFjdGl2ZVxyXG4gICAgICAgICAgICB0YWdzRm9yQ2xvdWQgPSBhcHBMb2dpYy5nZXRBbGxUYWdzQWNyb3NzUHJvamVjdHMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gYXBwTG9naWMuZ2V0UHJvamVjdEJ5SWQoY3VycmVudFByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB0YWdzRm9yQ2xvdWQgPSBwcm9qZWN0RGF0YSA/IHByb2plY3REYXRhLmdldFVuaXF1ZVRhZ3MoKSA6IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhZ3NGb3JDbG91ZCA9IGFwcExvZ2ljLmdldEFsbFRhZ3NBY3Jvc3NQcm9qZWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb21Db250cm9sbGVyLnJlbmRlclRhZ0Nsb3VkKHRhZ3NGb3JDbG91ZCwgY3VycmVudFRhZ0ZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQW5kUmVuZGVyVG9kb3MoKSB7XHJcbiAgICAgICAgbGV0IHRvZG9zVG9EaXNwbGF5ID0gW107XHJcbiAgICAgICAgbGV0IHZpZXdUaXRsZSA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGlzR2xvYmFsTW9kZSAgID0gY3VycmVudFNlYXJjaFRlcm0gJiYgY3VycmVudFNlYXJjaFRlcm0gIT09ICcnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0RnJvbVNpZGVCYXIgPSBhcHBMb2dpYy5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG5cclxuICAgICAgICBpZihpc0dsb2JhbE1vZGUpIHtcclxuICAgICAgICAgICAgLy8gQWN0aXZlIGdsb2JhbCBzZWFyY2hcclxuICAgICAgICAgICAgdmlld1RpdGxlID0gYFNlYXJjaCByZXN1bHRzIGZvciAnJHtjdXJyZW50U2VhcmNoVGVybX0nYDtcclxuICAgICAgICAgICAgY29uc3QgYWxsVG9kb3NXaXRoUHJvamVjdEluZm8gPSBhcHBMb2dpYy5nZXRBbGxUb2Rvc1dpdGhQcm9qZWN0SW5mbygpO1xyXG4gICAgICAgICAgICB0b2Rvc1RvRGlzcGxheSA9IGFwcExvZ2ljLnNlYXJjaFRvZG9zSW5MaXN0KGFsbFRvZG9zV2l0aFByb2plY3RJbmZvLCBjdXJyZW50U2VhcmNoVGVybSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UHJvamVjdEZyb21TaWRlQmFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REYXRhID0gYXBwTG9naWMuZ2V0UHJvamVjdEJ5SWQoY3VycmVudFByb2plY3RGcm9tU2lkZUJhci5pZCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmlld1RpdGxlID0gcHJvamVjdERhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgIHRvZG9zVG9EaXNwbGF5ID0gcHJvamVjdERhdGEuZ2V0QWxsVG9kb3MoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpZXdUaXRsZSA9ICdQcm9qZWN0IG5vdCBmb3VuZCc7XHJcbiAgICAgICAgICAgICAgICB0b2Rvc1RvRGlzcGxheSA9IFtdO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdUaXRsZSA9ICdTZWxlY3QgYSBwcm9qZWN0IGZyb20gdGhlIHNpZGViYXIgb3Igc2VhcmNoIGZvciBvbmUuJztcclxuICAgICAgICAgICAgdG9kb3NUb0Rpc3BsYXkgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZnJlc2hUYWdDbG91ZChpc0dsb2JhbE1vZGUgfHwgIWN1cnJlbnRQcm9qZWN0RnJvbVNpZGVCYXIpO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyZWRUb2RvcyA9IFsuLi50b2Rvc1RvRGlzcGxheV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcmlvcml0eUZpbHRlciAhPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRUb2RvcyA9IGZpbHRlcmVkVG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5wcmlvcml0eSA9PT0gY3VycmVudFByaW9yaXR5RmlsdGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50VGFnRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyVGFnRmlsdGVyID0gY3VycmVudFRhZ0ZpbHRlci50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFRvZG9zID0gZmlsdGVyZWRUb2Rvcy5maWx0ZXIodG9kbyA9PlxyXG4gICAgICAgICAgICAgICAgdG9kby50YWdzLnNvbWUodCA9PiB0LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyVGFnRmlsdGVyKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZFRvZG9zID0gYXBwTG9naWMuc29ydFRvZG9zKGZpbHRlcmVkVG9kb3MsIGN1cnJlbnRTb3J0Q3JpdGVyaWEuZmllbGQsIGN1cnJlbnRTb3J0Q3JpdGVyaWEuZGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZW5kZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB2aWV3VGl0bGUsXHJcbiAgICAgICAgICAgIHRvZG9zOiBzb3J0ZWRUb2RvcyxcclxuICAgICAgICAgICAgaXNHbG9iYWxTZWFyY2g6IGlzR2xvYmFsTW9kZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJUb2RvcyhyZW5kZXJEYXRhKTtcclxuICAgICAgICBkb21Db250cm9sbGVyLnVwZGF0ZVByb2plY3RUaXRsZSh2aWV3VGl0bGUpO1xyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIuZWxlbWVudHMuYWRkVG9kb0J0bi5zdHlsZS5kaXNwbGF5ID0gY3VycmVudFByb2plY3RGcm9tU2lkZUJhciA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnICwgKGUpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudFNlYXJjaFRlcm0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0YWdGaWx0ZXJBcmVhKSB7XHJcbiAgICAgICAgdGFnRmlsdGVyQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhZy1maWx0ZXItaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkVGFnID0gZS50YXJnZXQuZGF0YXNldC50YWc7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRhZ0ZpbHRlciA9PT0gY2xpY2tlZFRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdGaWx0ZXIgPSBudWxsOyAvLyBUb2dnbGUgb2YgdGFnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdGaWx0ZXIgPSBjbGlja2VkVGFnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhZ0ZpbHRlckNsZWFyQnRuKSB7XHJcbiAgICAgICAgdGFnRmlsdGVyQ2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFnRmlsdGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnRmlsdGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9qZWN0IGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcclxuICAgICAgICBkb21Db250cm9sbGVyLm9wZW5Qcm9qZWN0TW9kYWwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbUNvbnRyb2xsZXIuZWxlbWVudHMuY2xvc2VQcm9qZWN0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9tQ29udHJvbGxlci5jbG9zZVByb2plY3RNb2RhbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUHJvamVjdCBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGRvbUNvbnRyb2xsZXIuZWxlbWVudHMucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBkb21Db250cm9sbGVyLmdldFByb2plY3RGb3JtRGF0YSgpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0RGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gJ2FkZGVkJztcclxuICAgICAgICAgICAgaWYgKHByb2plY3REYXRhLmlkKSB7IC8vIEVkaXRpbmcgYW4gZXhpc3RpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gICBhcHBMb2dpYy51cGRhdGVQcm9qZWN0KHByb2plY3REYXRhLmlkLCBwcm9qZWN0RGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbj0gJ3VwZGF0ZWQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IgPT09ICdkdXBsaWNhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5zaG93Tm90aWZpY2F0aW9uKGBQcm9qZWN0IG5hbWUgXCIke3Byb2plY3REYXRhLm5hbWV9XCIgYWxyZWFkeSBleGlzdHNgLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEFkZGluZyBuZXcgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXBwTG9naWMuYWRkUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnYWRkZWQnKSBhcHBMb2dpYy5zZXRDdXJyZW50UHJvamVjdChyZXN1bHQuaWQpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQW5kUmVuZGVyVG9kb3MoKTtcclxuICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuY2xvc2VQcm9qZWN0TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuc2hvd05vdGlmaWNhdGlvbihgUHJvamVjdCBcIiR7cmVzdWx0Lm5hbWV9XCIgJHthY3Rpb259LmAsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnYWRkZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24gICgnVW5hYmxlIHRvIGFkZCBwcm9qZWN0LiBOYW1lIG1pZ2h0IGJlIGludmFsaWQuJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc29ydFRvZG9zU2VsZWN0KSB7XHJcbiAgICAgICAgc29ydFRvZG9zU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtmaWVsZCwgZGlyZWN0aW9uXSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCdfJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTb3J0Q3JpdGVyaWEgPSB7ZmllbGQsIGRpcmVjdGlvbn07XHJcbiAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9ucyBvbiBhIHByb2plY3RcclxuICAgIGRvbUNvbnRyb2xsZXIuZWxlbWVudHMucHJvamVjdHNMaXN0VUwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RMaSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpW2RhdGEtcHJvamVjdC1pZF0nKTtcclxuICAgICAgICBpZighcHJvamVjdExpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RMaS5kYXRhc2V0LnByb2plY3RJZDtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QtYnRuJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvRWRpdCA9IGFwcExvZ2ljLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0VG9FZGl0KSB7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLm9wZW5Qcm9qZWN0TW9kYWwocHJvamVjdFRvRWRpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXByb2plY3QtYnRuJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gYXBwTG9naWMuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3RUb0RlbGV0ZSAmJiBjb25maXJtKGBZb3Ugd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgcHJvamVjdDogXCIke3Byb2plY3RUb0RlbGV0ZS5uYW1lfVwiIGFuZCBhbGwgaXRzIHRha3MhIWApKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHBMb2dpYy5yZW1vdmVQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24oYFByb2plY3Q6IFwiJHtyZXN1bHQucmVtb3ZlZFByb2plY3ROYW1lfVwiIGRlbGV0ZWQuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhbmQgcmVuZGVyIHRvZG9zIHdpbGwgaGFuZGxlIHRoaW5ncyBpZiBjdXJyZW50IHByb2plY3QgaXMgZGVsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYocmVzdWx0LmVycm9yID09PSAnbGFzdF9wcm9qZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIuc2hvd05vdGlmaWNhdGlvbignVW5hYmxlIHRvIGRlbGV0ZSB0aGUgbGFzdCBwcm9qZWN0LicsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24oJ1VuYWJsZSB0byBkZWxldGUgcHJvamVjdC4nLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtbmFtZScpIHx8IGUudGFyZ2V0ID09PSBwcm9qZWN0TGkpeyAvLyBVc2VyIGNsaWNrZWQgb24gYSBuYW1lIG9yIGxpIGl0c2VsZlxyXG4gICAgICAgICAgICBpZiAoYXBwTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKT8uaWQgIT09IHByb2plY3RJZCkge1xyXG4gICAgICAgICAgICAgICAgYXBwTG9naWMuc2V0Q3VycmVudFByb2plY3QocHJvamVjdElkKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hQcm9qZWN0c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hUZXJtID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0KSBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByaW9yaXR5RmlsdGVyID0gJ2FsbCc7IC8vIFJlc2V0IHByaW9yaXR5IGZpbHRlclxyXG4gICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5RmlsdGVyU2VsZWN0KSBwcmlvcml0eUZpbHRlclNlbGVjdC52YWx1ZSA9ICdhbGwnO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhZ0ZpbHRlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U29ydENyaXRlcmlhID0ge2ZpZWxkOiAnZHVlRGF0ZScsIGRpcmVjdGlvbjogJ2FzYyd9OyAvLyBSZXNldCBzb3J0XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydFRvZG9zU2VsZWN0KSBzb3J0VG9kb3NTZWxlY3QudmFsdWUgPSAnZHVlRGF0ZV9hc2MnO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhZ0ZpbHRlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRvLWRvIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXBwTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgZG9tQ29udHJvbGxlci5vcGVuVG9kb01vZGFsKG51bGwsIGN1cnJlbnRQcm9qZWN0LmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb21Db250cm9sbGVyLnNob3dOb3RpZmljYXRpb24oJ1BsZWFzZSBzZWxlY3QgYSBwcm9qZWN0IHRvIGFkZCB0YXNrLicsICd3YXJuaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy5jbG9zZVRvZG9Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb21Db250cm9sbGVyLmNsb3NlVG9kb01vZGFsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUby1kbyBmb3JtIFxyXG4gICAgZG9tQ29udHJvbGxlci5lbGVtZW50cy50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB0b2RvRGF0YSA9IGRvbUNvbnRyb2xsZXIuZ2V0VG9kb0Zvcm1EYXRhKCk7XHJcbiAgICAgICAgaWYgKHRvZG9EYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0b2RvRGF0YS5pZCkgeyAvLyBFZGl0aW5nIGV4aXN0aW5nIHRvZG9cclxuICAgICAgICAgICAgICAgIGlmIChhcHBMb2dpYy51cGRhdGVUb2RvSW5Qcm9qZWN0KHRvZG9EYXRhLmN1cnJlbnRQcm9qZWN0SWQsIHRvZG9EYXRhLmlkLCB0b2RvRGF0YSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBBZGRpbmcgbmV3IHRvZG9cclxuICAgICAgICAgICAgICAgIGlmKGFwcExvZ2ljLmFkZFRvZG9Ub1Byb2plY3QodG9kb0RhdGEuY3VycmVudFByb2plY3RJZCwgdG9kb0RhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpO1xyXG4gICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5jbG9zZVRvZG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5zaG93Tm90aWZpY2F0aW9uKHRvZG9EYXRhLmlkID8gJ1Rhc2sgdXBkYXRlZCcgOiAnVGFzayBhZGRlZC4nLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5zaG93Tm90aWZpY2F0aW9uKCdVbmFibGUgdG8gdXBkYXRlIHRhc2snLCAnZXJyb3InKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWN0aW9ucyBvbiB0b2RvIGl0ZW1zXHJcbiAgICBkb21Db250cm9sbGVyLmVsZW1lbnRzLnRvZG9zTGlzdFVMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB0b2RvTGkgPSB0YXJnZXQuY2xvc2VzdCgnbGlbZGF0YS10b2RvLWlkXScpO1xyXG4gICAgICAgIGlmICghdG9kb0xpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9JZCA9IHRvZG9MaS5kYXRhc2V0LnRvZG9JZDtcclxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHByb2plY3QgSURcclxuICAgICAgICBsZXQgcHJvamVjdElkRm9yQWN0aW9uID0gdG9kb0xpLmRhdGFzZXQub3JpZ2luYWxQcm9qZWN0SWQ7IC8vIEZyb20gZ2xvYmFsIHNlYXJjaFxyXG4gICAgICAgIGlmICghcHJvamVjdElkRm9yQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYXBwTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWRGb3JBY3Rpb24gPSBjdXJyZW50UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGlmICghdG9kb0lkIHx8ICFwcm9qZWN0SWRGb3JBY3Rpb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10b2RvLWJ0bicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBhcHBMb2dpYy5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWRGb3JBY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9EZWxldGUgPSBwcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9JZCk7XHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKGBZb3Ugd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgdGFzayBcIiR7dG9kb1RvRGVsZXRlLnRpdGxlfVwiLmApKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBMb2dpYy5yZW1vdmVUb2RvRnJvbVByb2plY3QocHJvamVjdElkRm9yQWN0aW9uLCB0b2RvSWQpO1xyXG4gICAgICAgICAgICAgICAgZG9tQ29udHJvbGxlci5zaG93Tm90aWZpY2F0aW9uKCdUYXNrIGRlbGV0ZWQuJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kby1idG4nKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9FZGl0ID0gYXBwTG9naWNcclxuICAgICAgICAgICAgICAgIC5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWRGb3JBY3Rpb24pXHJcbiAgICAgICAgICAgICAgICA/LmdldFRvZG9CeUlkKHRvZG9JZCk7XHJcbiAgICAgICAgICAgIGlmICh0b2RvVG9FZGl0KSB7XHJcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLm9wZW5Ub2RvTW9kYWwodG9kb1RvRWRpdCwgcHJvamVjdElkRm9yQWN0aW9uKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gnKSkge1xyXG4gICAgICAgICAgICBhcHBMb2dpYy50b2dnbGVUb2RvQ29tcGxldGUocHJvamVjdElkRm9yQWN0aW9uLCB0b2RvSWQpO1xyXG4gICAgICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kLXRvZG8tYnRuJykpIHtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsc0RpdiA9IHRvZG9MaS5xdWVyeVNlbGVjdG9yKCcudG9kby1mdWxsLWRldGFpbHMnKTtcclxuICAgICAgICAgICAgaWYgKGRldGFpbHNEaXYpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSGlkZGVuID0gZGV0YWlsc0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIdG1sID0gXCImIzg3MjI7XCI7IC8vIE1pbnVzIHNpZ24gKE1pbmltaXplKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC50aXRsZSAgICAgPSAnSGlkZSBkZXRhaWxzJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gJyYjNDM7JzsgLy8gUGx1cyBzaWduIChzaG93KVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC50aXRsZSA9IFwiU2hvdyBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5yZW1vdmUoJ2RldGFpbHMtZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlIG1vZGFsIGlmIHVzZXIgY2xpY2tzIG91dHNpZGVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21Db250cm9sbGVyLmVsZW1lbnRzLnByb2plY3RNb2RhbCkge1xyXG4gICAgICAgICAgICBkb21Db250cm9sbGVyLmNsb3NlUHJvamVjdE1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ29udHJvbGxlci5lbGVtZW50cy50b2RvTW9kYWwpIHtcclxuICAgICAgICAgICAgZG9tQ29udHJvbGxlci5jbG9zZVRvZG9Nb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluaXRpYWwgcmVuZGVyIGJhc2VkIG9uIGxvYWRlZCBkYXRhXHJcbiAgICBpZiAoYXBwTG9naWMuZ2V0Q3VycmVudFByb2plY3QoKSkge1xyXG4gICAgICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbiAgICB9IGVsc2UgaWYgKGFwcExvZ2ljLmdldEFsbFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIElmIG5vIGN1cnJlbnQgcHJvamVjdCBidXQgcHJvamVjdHMgZXhpc3QsIHNlbGVjdCB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgY29uc3QgZmlyc3RQcm9qZWN0ID0gYXBwTG9naWMuZ2V0QWxsUHJvamVjdHMoKVswXTtcclxuICAgICAgICBhcHBMb2dpYy5zZXRDdXJyZW50UHJvamVjdChmaXJzdFByb2plY3QuaWQpO1xyXG4gICAgICAgIHJlZnJlc2hQcm9qZWN0c0xpc3QoKTtcclxuICAgICAgICB1cGRhdGVBbmRSZW5kZXJUb2RvcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb21Db250cm9sbGVyLnVwZGF0ZVByb2plY3RUaXRsZSgnQWRkIGEgcHJvamVjdCcpO1xyXG4gICAgICAgIGRvbUNvbnRyb2xsZXIucmVuZGVyVG9kb3MobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJlZnJlc2ggcHJvamVjdCBsaXN0XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUHJvamVjdHNMaXN0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gYXBwTG9naWMuZ2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGFwcExvZ2ljLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJQcm9qZWN0cyhcclxuICAgICAgICAgICAgcHJvamVjdHMsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID8gY3VycmVudFByb2plY3QuaWQgOiBudWxsLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbCBzZXR1cFxyXG4gICAgZG9tQ29udHJvbGxlci5pbml0aWFsaXplVUkoKTtcclxuICAgIHJlZnJlc2hQcm9qZWN0c0xpc3QoKTtcclxuICAgIHVwZGF0ZUFuZFJlbmRlclRvZG9zKCk7XHJcbn0pOyIsIi8vIE1vZHVsZSB0aGF0IG1hbmFnZXMgdGhlIHByb2plY3Qgb2JqZWN0c1xyXG5cclxuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBgcHJvamVjdC0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMSl9YDsgLy8gR2VuZXJhdGUgcmFuZG9tIHVuaXF1ZSBJRFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8odG9kb0l0ZW0pIHtcclxuICAgICAgICBpZighKHRvZG9JdGVtIGluc3RhbmNlb2YgVG9kbykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLnRvZG9zLnNvbWUoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JdGVtLmlkKSkgcmV0dXJuIGZhbHNlOyAvLyBDaGVjayBpZiB0aGUgdG9kbyBpcyBhbHJlYWR5IGluIHRoZSBwcm9qZWN0J3MgdG9kb3NcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvZG8odG9kb0lEKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSB0b2RvSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG9CeUlkKHRvZG9JRCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsVG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnRvZG9zXTsgLy8gUmV0dXJuIGEgY29weSB0byBwcmV2ZW50IHVud2FudGVkIG1vZGlmaWNhdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvQnlQcmlvcml0eShwcmlvcml0eUxldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnByaW9yaXR5ID09PSBwcmlvcml0eUxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvQnlDb21wbGV0aW9uKGNvbXBsZXRpb25TdGF0dXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY29tcGxldGVkID09PSBjb21wbGV0aW9uU3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvQnlUYWcodGFnKSB7XHJcbiAgICAgICAgY29uc3QgdHJpbW1lZFRhZyA9IHRhZy50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZighdHJpbW1lZFRhZykgcmV0dXJuIHRoaXMuZ2V0QWxsVG9kb3MoKTsgLy9XaGVuIHRhZyBpcyBlbXB0eSwgcmV0dXJuIGFsbCB0b2Rvc1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIoKHRvZG8pID0+XHJcbiAgICAgICAgICAgIHRvZG8udGFncy5zb21lKCh0KSA9PiB0LnRvTG93ZXJDYXNlKCkgPT09IHRyaW1tZWRUYWcpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVbmlxdWVUYWdzKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbFRhZ3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG8udGFncy5mb3JFYWNoKCh0YWcpID0+IGFsbFRhZ3MuYWRkKHRhZy50cmltKCkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxUYWdzKS5zb3J0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XHJcbiIsIi8vIE1vZHVsZSB0byBzdG9yZSBkYXRhIHVzaW5nIGxvY2FsU3RvcmFnZVxyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSAndG9kb0FwcFByb2plY3RzJztcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSB7XHJcbiAgICBzYXZlRGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9SlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBzZXJpYWxpemVkRGF0YSk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoZW4gdHJ5aW5nIHRvIHNhdmUgZGF0YSB0byBsb2NhbFN0b3JhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWREYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XHJcbiAgICAgICAgICAgIGlmIChzZXJpYWxpemVkRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkRGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hlbiB0cnlpbmcgdG8gbG9hZCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhckRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoZW4gdHJ5aW5nIHRvIGNsZWFyIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gTW9kdWxlIHRoYXQgbWFuYWdlcyB0b2RvIG9iamVjdHNcclxuXHJcbmNsYXNzIFRvZG97XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHRhZ3MgPSBbXSxcclxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBgdG9kby0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwxMSl9YDsgLy8gVW5pcXVlIElEXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG51bGw7XHJcbiAgICAgICAgaWYoZHVlRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGR1ZURhdGUudmFsdWVPZigpKSl7XHJcbiAgICAgICAgICAgIC8vIEZvciBzYW1wbGUgZGF0YSB1c2luZyBEYXRlIG9iamVjdHNcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB9IGVsc2UgaWYodHlwZW9mIGR1ZURhdGUgPT09ICdzdHJpbmcnICYmIGR1ZURhdGUudHJpbSgpICE9PSAnJyl7XHJcbiAgICAgICAgICAgIC8vIEZvciB0aGUgSFRNTCBmb3JtIGlucHV0c1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUoZHVlRGF0ZS50cmltKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSAhaXNOYU4ocGFyc2VkRGF0ZS52YWx1ZU9mKCkpID8gcGFyc2VkRGF0ZSA6IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSBBcnJheS5pc0FycmF5KHRhZ3MpID8gdGFncyA6IFtdO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURldGFpbHMoZGV0YWlscykge1xyXG4gICAgICAgIGlmKGRldGFpbHMudGl0bGUgIT09IHVuZGVmaW5lZCkgdGhpcy50aXRsZSA9IGRldGFpbHMudGl0bGU7XHJcbiAgICAgICAgaWYoZGV0YWlscy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB0aGlzLmRlc2NyaXB0aW9uID0gZGV0YWlscy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgaWYoZGV0YWlscy5kdWVEYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYoZGV0YWlscy5kdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oZGV0YWlscy5kdWVEYXRlLnZhbHVlT2YoKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkZXRhaWxzLmR1ZURhdGUudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9ICFpc05hTihwYXJzZWREYXRlLnZhbHVlT2YoKSkgPyBwYXJzZWREYXRlIDogbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZXRhaWxzLnRhZ3MgJiYgQXJyYXkuaXNBcnJheShkZXRhaWxzLnRhZ3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFncyA9IGRldGFpbHMudGFnc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgodGFnKSA9PiB0YWcudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodGFnKSA9PiB0YWcubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCBkZXRhaWxzLnRhZ3NTdHJpbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRhZ3NGcm9tU3RyaW5nKGRldGFpbHMudGFnc1N0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhZyh0YWcpIHtcclxuICAgICAgICBjb25zdCB0cmltbWVkVGFnID0gdGFnLnRyaW0oKTtcclxuICAgICAgICBpZiAodHJpbW1lZFRhZyAmJiAhdGhpcy50YWdzLmluY2x1ZGVzKHRyaW1tZWRUYWcpKXtcclxuICAgICAgICAgICAgdGhpcy50YWdzLnB1c2godHJpbW1lZFRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhZyh0YWdUb1JlbW92ZSkge1xyXG4gICAgICAgIGNvbnN0IHRyaW1tZWRUYWdUb1JlbW92ZSA9IHRhZ1RvUmVtb3ZlLnRyaW0oKTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB0aGlzLnRhZ3MuZmlsdGVyKCh0YWcpID0+IHRhZyAhPT0gdHJpbW1lZFRhZ1RvUmVtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBnZXQgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGFnc1xyXG4gICAgZ2V0VGFnc1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWdzLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscCBzZXR0aW5nIHRhZ3MgZnJvbSBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcgXHJcbiAgICBzZXRUYWdzRnJvbVN0cmluZyh0YWdzU3RyaW5nKXtcclxuICAgICAgICBpZiAodHlwZW9mIHRhZ3NTdHJpbmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFncyA9IHRhZ3NTdHJpbmdcclxuICAgICAgICAgICAgICAgIC5zcGxpdCgnLCcpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh0YWcpID0+IHRhZy50cmltKCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCgodGFnKSA9PiB0YWcubGVuZ3RoID4gMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb2RvOyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiVG9kbyIsInN0b3JhZ2UiLCJhcHBMb2dpYyIsInByb2plY3RzIiwiY3VycmVudFByb2plY3QiLCJyZWh5ZHJhdGVQcm9qZWN0cyIsInBsYWluUHJvamVjdHMiLCJtYXAiLCJwbGFpblByb2plY3QiLCJwcm9qZWN0IiwibmFtZSIsImlkIiwidG9kb3MiLCJwbGFpblRvZG8iLCJ0b2RvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInRhZ3MiLCJjb21wbGV0ZWQiLCJjcmVhdGVTYW1wbGVkRGF0YSIsIndvcmtQcm9qZWN0IiwiYWRkVG9kbyIsIkRhdGUiLCJwZXJzb25hbFByb2plY3QiLCJsZWFybmluZ1Byb2plY3QiLCJzYXZlUHJvamVjdHMiLCJsb2FkUHJvamVjdHMiLCJsb2FkZWREYXRhIiwibG9hZERhdGEiLCJsZW5ndGgiLCJzYXZlRGF0YSIsImFkZFByb2plY3QiLCJmaW5kIiwicCIsInRvTG93ZXJDYXNlIiwibmV3UHJvamVjdCIsInB1c2giLCJ1cGRhdGVQcm9qZWN0IiwicHJvamVjdElkIiwibmV3TmFtZSIsInByb2plY3RUb1VwZGF0ZSIsImdldFByb2plY3RCeUlkIiwic29tZSIsImVycm9yIiwicmVtb3ZlUHJvamVjdCIsInByb2plY3RJbmRleCIsImZpbmRJbmRleCIsInJlbW92ZWRQcm9qZWN0Iiwic3BsaWNlIiwic3VjY2VzcyIsInJlbW92ZWRQcm9qZWN0TmFtZSIsIm5ld0N1cnJlbnRQcm9qZWN0IiwiZ2V0QWxsUHJvamVjdHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRDdXJyZW50UHJvamVjdCIsInNldEN1cnJlbnRQcm9qZWN0IiwiYWRkVG9kb1RvUHJvamVjdCIsInRvZG9EZXRhaWxzIiwidGFnc1N0cmluZyIsIm5ld1RvZG8iLCJzZXRUYWdzRnJvbVN0cmluZyIsInJlbW92ZVRvZG9Gcm9tUHJvamVjdCIsInRvZG9JZCIsInJlbW92ZVRvZG8iLCJ1cGRhdGVUb2RvSW5Qcm9qZWN0IiwidXBkYXRlZERldGFpbHMiLCJnZXRUb2RvQnlJZCIsInVuZGVmaW5lZCIsIm90aGVyRGV0YWlscyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsInVwZGF0ZURldGFpbHMiLCJ0b2dnbGVUb2RvQ29tcGxldGUiLCJ0b2dnbGVDb21wbGV0ZSIsImdldEFsbFRvZG9zQWNyb3NzUHJvamVjdHMiLCJyZWR1Y2UiLCJhY2MiLCJjb25jYXQiLCJnZXRBbGxUb2RvcyIsImdldEFsbFRvZG9zV2l0aFByb2plY3RJbmZvIiwiYWxsVG9kb3NXaXRoUHJvamVjdEluZm8iLCJmb3JFYWNoIiwiX29iamVjdFNwcmVhZCIsIm9yZ2luYWxQcm9qZWN0SWQiLCJwcm9qZWN0TmFtZSIsInNlYXJjaFRvZG9zSW5MaXN0Iiwic2VhcmNoVGVybSIsInRyaW0iLCJsb3dlclNlYXJjaFRlcm0iLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImdldEFsbFRhZ3NBY3Jvc3NQcm9qZWN0cyIsImFsbFRhZ3MiLCJTZXQiLCJnZXRVbmlxdWVUYWdzIiwidGFnIiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwic29ydCIsImZpbHRlclRvZG9zQnlUYWdBY3Jvc3NQcm9qZWN0cyIsImFsbFRvZG9zIiwidHJpbW1lZFRhZyIsInQiLCJmaWx0ZXJUb2Rvc0J5UHJpb3JpdHlBY3Jvc3NQcm9qZWN0cyIsInByaW9yaXR5TGV2ZWwiLCJwcmlvcml0eU9yZGVyIiwic29ydFRvZG9zIiwic29ydEZpZWxkIiwic29ydERpcmVjdGlvbiIsImFyZ3VtZW50cyIsInNvcnRlZCIsImEiLCJiIiwidmFsQSIsInZhbEIiLCJ0aXRpZSIsImNvbXBhcmlzb24iLCJmb3JtYXQiLCJpc1ZhbGlkIiwiaXNWYWxpZERhdGUiLCJkb21Db250cm9sbGVyIiwicHJvamVjdHNMaXN0VUwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUHJvamVjdEJ0biIsImN1cnJlbnRQcm9qZWN0VGl0bGUiLCJhZGRUb2RvQnRuIiwidG9kb3NMaXN0VUwiLCJ0YWdGaWx0ZXJBcmVhIiwidGFnRmlsdGVyQ2xlYXJCdG4iLCJub3RpZmljYXRpb25BcmVhIiwicHJvamVjdE1vZGFsIiwicHJvamVjdEZvcm0iLCJwcm9qZWN0SWRJbnB1dCIsInByb2plY3ROYW1lSW5wdXQiLCJzYXZlUHJvamVjdEJ0biIsImNsb3NlUHJvamVjdE1vZGFsQnRuIiwidG9kb01vZGFsIiwidG9kb0Zvcm0iLCJ0b2RvSWRJbnB1dCIsInRvZG9UaXRsZUlucHV0IiwidG9kb0Rlc2NyaXB0aW9uSW5wdXQiLCJ0b2RvRHVlRGF0ZUlucHV0IiwidG9kb1ByaW9yaXR5SW5wdXQiLCJ0b2RvVGFnc0lucHV0IiwiY2xvc2VUb2RvTW9kYWxCdG4iLCJjbGVhckVsZW1lbnQiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZm9ybWF0RGF0ZUZvckRpc3BsYXkiLCJkYXRlIiwicmVuZGVyUHJvamVjdHMiLCJjdXJyZW50UHJvamVjdElkIiwibGkiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhcHBlbmRDaGlsZCIsImRhdGFzZXQiLCJuYW1lU3BhbiIsImFjdGlvbnNEaXYiLCJlZGl0QnRuIiwiaW5uZXJIVE1MIiwiZGVsZXRlQnRuIiwidXBkYXRlUHJvamVjdFRpdGxlIiwicmVuZGVyVG9kb3MiLCJwcm9qZWN0T3JTZWFyY2hSZXN1bHRzIiwiaXNHbG9iYWxTZWFyY2giLCJkaXNwbGF5TmFtZSIsIm9yaWdpbmFsUHJvamVjdElkIiwidG9kb1ByZXZpZXdDb250ZW50IiwiY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsInRvZG9JbmZvRGl2IiwidGl0bGVTcGFuIiwiZHVlRGF0ZVNwYW4iLCJwcm9qZWN0TGFiZWxTcGFuIiwidGFnc0RpdiIsInRhZ1NwYW4iLCJleHBhbmRCdG4iLCJmdWxsRGV0YWlsc0RpdiIsImRlc2NyaXB0aW9uUCIsImRlc2NyaXB0aW9uVGV4dCIsImNyZWF0ZVRleHROb2RlIiwicHJpb3JpdHlQIiwicHJpb3JpdHlUZXh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImFwcGVuZCIsIm9wZW5Qcm9qZWN0TW9kYWwiLCJwcm9qZWN0VG9FZGl0IiwiY2xlYXJGb3JtRXJyb3JzIiwicmVzZXQiLCJ2YWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsImZvY3VzIiwiY2xvc2VQcm9qZWN0TW9kYWwiLCJvcGVuVG9kb01vZGFsIiwidG9kb1RvRWRpdCIsImdldFRhZ3NTdHJpbmciLCJjbG9zZVRvZG9Nb2RhbCIsImdldFByb2plY3RGb3JtRGF0YSIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwic2hvd0ZpZWxkRXJyb3IiLCJnZXRUb2RvRm9ybURhdGEiLCJmb3JtRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsInNldEN1c3RvbVZhbGlkaXR5Iiwic3BhbiIsImlucHV0RWxlbWVudCIsIm1lc3NhZ2UiLCJoZWxwU3BhbiIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3JTcGFuIiwicmVtb3ZlIiwic2hvd05vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYW5pbWF0aW9uTmFtZSIsInJlbmRlclRhZ0Nsb3VkIiwiYWN0aXZlVGFncyIsInRhZ0VsZW1lbnQiLCJub1RhZ01zZyIsImZvbnRTaXplIiwiY29sb3IiLCJjb250YWlucyIsImluaXRpYWxpemVVSSIsImVsZW1lbnRzIiwiY3VycmVudFNlYXJjaFRlcm0iLCJjdXJyZW50UHJpb3JpdHlGaWx0ZXIiLCJjdXJyZW50VGFnRmlsdGVyIiwiY3VycmVudFNvcnRDcml0ZXJpYSIsImZpZWxkIiwiZGlyZWN0aW9uIiwic2VhcmNoSW5wdXQiLCJwcmlvcml0eUZpbHRlclNlbGVjdCIsInNvcnRUb2Rvc1NlbGVjdCIsInJlZnJlc2hUYWdDbG91ZCIsImlzR2xvYmFsTW9kZSIsInRhZ3NGb3JDbG91ZCIsInByb2plY3REYXRhIiwidXBkYXRlQW5kUmVuZGVyVG9kb3MiLCJ0b2Rvc1RvRGlzcGxheSIsInZpZXdUaXRsZSIsImN1cnJlbnRQcm9qZWN0RnJvbVNpZGVCYXIiLCJmaWx0ZXJlZFRvZG9zIiwibG93ZXJUYWdGaWx0ZXIiLCJzb3J0ZWRUb2RvcyIsInJlbmRlckRhdGEiLCJ0YXJnZXQiLCJjbGlja2VkVGFnIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJhY3Rpb24iLCJyZWZyZXNoUHJvamVjdHNMaXN0IiwiX2UkdGFyZ2V0JHZhbHVlJHNwbGl0Iiwic3BsaXQiLCJfZSR0YXJnZXQkdmFsdWUkc3BsaXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcm9qZWN0TGkiLCJjbG9zZXN0IiwicHJvamVjdFRvRGVsZXRlIiwiY29uZmlybSIsIl9hcHBMb2dpYyRnZXRDdXJyZW50UCIsInRvZG9EYXRhIiwidG9kb0xpIiwicHJvamVjdElkRm9yQWN0aW9uIiwidG9kb1RvRGVsZXRlIiwiX2FwcExvZ2ljJGdldFByb2plY3RCIiwiZGV0YWlsc0RpdiIsImlzSGlkZGVuIiwiaW5uZXJIdG1sIiwid2luZG93IiwiZmlyc3RQcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwibm93IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidG9kb0l0ZW0iLCJ0b2RvSUQiLCJnZXRUb2RvQnlQcmlvcml0eSIsImdldFRvZG9CeUNvbXBsZXRpb24iLCJjb21wbGV0aW9uU3RhdHVzIiwiZ2V0VG9kb0J5VGFnIiwiU1RPUkFHRV9LRVkiLCJkYXRhIiwic2VyaWFsaXplZERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNvbnNvbGUiLCJnZXRJdGVtIiwicGFyc2UiLCJjbGVhckRhdGEiLCJyZW1vdmVJdGVtIiwiaXNOYU4iLCJ2YWx1ZU9mIiwicGFyc2VkRGF0ZSIsImlzQXJyYXkiLCJkZXRhaWxzIiwiYWRkVGFnIiwicmVtb3ZlVGFnIiwidGFnVG9SZW1vdmUiLCJ0cmltbWVkVGFnVG9SZW1vdmUiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==