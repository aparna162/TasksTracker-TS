"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoItem_1 = require("./todoItem");
var todoCollection_1 = require("./todoCollection");
var todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
var collection = new todoCollection_1.TodoCollection("Aparna", todos);
console.log("".concat(collection.userName, "'s Todo List"));
var newId = collection.addTodo("Go for run");
console.log("ALL TASKS:");
console.log("*-----------------------*")
todos.forEach(item => item.printDetails());

console.log("COMPLETED TASKS:");
console.log("*-----------------------*");
todos.filter(item => item.complete).forEach(item => item.printDetails());
console.log("       ");

console.log("INCOMPLETE TASKS:");
console.log("*-----------------------*");
todos.filter(item => !item.complete).forEach(item => item.printDetails());