"use strict";
//1
class TodoList {
    constructor() {
      this.todos = [];
    }
  
    #show() {
      console.log("Список нотаток:");
      this.todos.forEach((todo, index) => {
        console.log(
          `${index + 1}. ${todo.task} - ${todo.completed ? "Виконано" : "Невиконано"}`
        );
      });
      console.log("==============");
    }
  
    addTask(task) {
      if (task.trim() === "") {
        console.log("Нотатка не повинна бути порожньою!");
        return;
      }
      this.todos.push({ task, completed: false });
      this.#show();
    }
  
    removeTask(task) {
      const index = this.todos.findIndex(todo => todo.task === task);
      if (index !== -1) {
        this.todos.splice(index, 1);
        this.#show();
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    editTask(oldTask, newTask) {
      if (newTask.trim() === "") {
        console.log("Нова нотатка не повинна бути порожньою!");
        return;
      }
      const index = this.todos.findIndex(todo => todo.task === oldTask);
      if (index !== -1) {
        this.todos[index].task = newTask;
        this.#show();
      } else {
        console.log(`Нотатку "${oldTask}" не знайдено!`);
      }
    }
  
    getTaskInfo(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        console.log(`Нотатка: ${todo.task}, Стан: ${todo.completed ? "Виконано" : "Невиконано"}`);
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    getAllTasks() {
      this.#show();
    }
  
    markCompleted(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        todo.completed = true;
        this.#show();
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    getRemainingTasks() {
      const remaining = this.todos.filter(todo => !todo.completed).length;
      console.log(`Невиконаних завдань: ${remaining}`);
      return remaining;
    }
  
    getTotalTasks() {
      console.log(`Всього завдань: ${this.todos.length}`);
      return this.todos.length;
    }
  }
  
  let myTodoList = new TodoList();
  
  myTodoList.addTask("Виконати домашнє завдання");
  myTodoList.addTask("Купити продукти");
  myTodoList.addTask("Зателефонувати клієнту");
  
  myTodoList.removeTask("Купити продукти");
  
  myTodoList.editTask("Зателефонувати клієнту", "Зателефонувати менеджеру");
  
  myTodoList.markCompleted("Виконати домашнє завдання");
  
  myTodoList.getTaskInfo("Зателефонувати менеджеру");
  
  myTodoList.getTotalTasks();
  myTodoList.getRemainingTasks();
  myTodoList.getAllTasks();

  //2

  class TodoList {
    constructor() {
      this.todos = [];
    }
  
    #show() {
      console.log("Список нотаток:");
      this.todos.forEach((todo, index) => {
        console.log(
          `${index + 1}. ${todo.task} - ${todo.completed ? "Виконано" : "Невиконано"}`
        );
      });
      console.log("==============");
    }
  
    addTask(task) {
      if (task.trim() === "") {
        console.log("Нотатка не повинна бути порожньою!");
        return;
      }
      this.todos.push({ task, completed: false });
      this.#show();
    }
  
    removeTask(task) {
      const index = this.todos.findIndex(todo => todo.task === task);
      if (index !== -1) {
        this.todos.splice(index, 1);
        this.#show();
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    editTask(oldTask, newTask) {
      if (newTask.trim() === "") {
        console.log("Нова нотатка не повинна бути порожньою!");
        return;
      }
      const index = this.todos.findIndex(todo => todo.task === oldTask);
      if (index !== -1) {
        this.todos[index].task = newTask;
        this.#show();
      } else {
        console.log(`Нотатку "${oldTask}" не знайдено!`);
      }
    }
  
    getTaskInfo(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        console.log(`Нотатка: ${todo.task}, Стан: ${todo.completed ? "Виконано" : "Невиконано"}`);
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    getAllTasks() {
      this.#show();
    }
  
    markCompleted(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        todo.completed = true;
        this.#show();
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    getRemainingTasks() {
      const remaining = this.todos.filter(todo => !todo.completed).length;
      console.log(`Невиконаних завдань: ${remaining}`);
      return remaining;
    }
  
    getTotalTasks() {
      console.log(`Всього завдань: ${this.todos.length}`);
      return this.todos.length;
    }
  
    findTaskByName(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        console.log(`Знайдено нотатку: ${todo.task}, Стан: ${todo.completed ? "Виконано" : "Невиконано"}`);
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    sortTasksByStatus() {
      this.todos.sort((a, b) => a.completed - b.completed);
      console.log("Нотатки відсортовані за статусом (невиконані перші):");
      this.#show();
    }
  
    sortTasksByIncompleteFirst() {
      this.todos.sort((a, b) => b.completed - a.completed);
      console.log("Нотатки відсортовані за статусом (виконані перші):");
      this.#show();
    }
  }
  
  let myTodoList = new TodoList();
  
  myTodoList.addTask("Виконати домашнє завдання");
  myTodoList.addTask("Купити продукти");
  myTodoList.addTask("Зателефонувати клієнту");
  
  myTodoList.markCompleted("Купити продукти");
  
  myTodoList.findTaskByName("Зателефонувати клієнту");
  
  myTodoList.sortTasksByStatus();
  myTodoList.sortTasksByIncompleteFirst();

  //3

  class TodoList {
    constructor() {
      this.todos = [];
    }
  
    #show() {
      console.log("Список нотаток:");
      this.todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.task} - ${todo.completed ? "Виконано" : "Невиконано"}`);
        console.log(`  Дата створення: ${todo.createdAt}`);
        console.log(`  Останнє редагування: ${todo.updatedAt}`);
      });
      console.log("==============");
    }
  
    addTask(task) {
      if (task.trim() === "") {
        console.log("Нотатка не повинна бути порожньою!");
        return;
      }
      const now = new Date();
      this.todos.push({
        task,
        completed: false,
        createdAt: now.toLocaleString(),
        updatedAt: now.toLocaleString(),
      });
      this.#show();
    }
  
    removeTask(task) {
      const index = this.todos.findIndex(todo => todo.task === task);
      if (index !== -1) {
        this.todos.splice(index, 1);
        this.#show();
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    editTask(oldTask, newTask) {
      if (newTask.trim() === "") {
        console.log("Нова нотатка не повинна бути порожньою!");
        return;
      }
      const index = this.todos.findIndex(todo => todo.task === oldTask);
      if (index !== -1) {
        this.todos[index].task = newTask;
        this.todos[index].updatedAt = new Date().toLocaleString();
        this.#show();
      } else {
        console.log(`Нотатку "${oldTask}" не знайдено!`);
      }
    }
  
    getTaskInfo(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        console.log(`
          Нотатка: ${todo.task}
          Стан: ${todo.completed ? "Виконано" : "Невиконано"}
          Дата створення: ${todo.createdAt}
          Останнє редагування: ${todo.updatedAt}
        `);
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    markCompleted(task) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        todo.completed = true;
        todo.updatedAt = new Date().toLocaleString();
        this.#show();
      } else {
        console.log(`Нотатку "${task}" не знайдено!`);
      }
    }
  
    sortTasksByCreationDate() {
      this.todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      console.log("Нотатки відсортовані за датою створення (новіші перші):");
      this.#show();
    }
  
    sortTasksByEditDate() {
      this.todos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      console.log("Нотатки відсортовані за датою редагування (новіші перші):");
      this.#show();
    }
  
    findTasksByCreationDate(date) {
      const tasks = this.todos.filter(todo => todo.createdAt.includes(date));
      if (tasks.length > 0) {
        tasks.forEach(todo => {
          console.log(`Знайдено нотатку: ${todo.task}, Дата створення: ${todo.createdAt}`);
        });
      } else {
        console.log(`Нотаток, створених на ${date}, не знайдено.`);
      }
    }
  
    findTasksByEditDate(date) {
      const tasks = this.todos.filter(todo => todo.updatedAt.includes(date));
      if (tasks.length > 0) {
        tasks.forEach(todo => {
          console.log(`Знайдено нотатку: ${todo.task}, Останнє редагування: ${todo.updatedAt}`);
        });
      } else {
        console.log(`Нотаток, відредагованих на ${date}, не знайдено.`);
      }
    }
  }
  
  let myTodoList = new TodoList();
  
  myTodoList.addTask("Купити молоко");
  myTodoList.addTask("Зробити домашнє завдання");
  
  myTodoList.markCompleted("Купити молоко");
  
  myTodoList.editTask("Зробити домашнє завдання", "Виконати ДЗ");
  
  myTodoList.findTasksByCreationDate("2024");
  myTodoList.findTasksByEditDate("2024");     
  
  myTodoList.sortTasksByCreationDate();
  myTodoList.sortTasksByEditDate();
  
  