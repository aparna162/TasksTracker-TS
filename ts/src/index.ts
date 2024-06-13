import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem [] = [
    new TodoItem(1, "Buy Flowers"), 
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Walk the dog"), 
    new TodoItem(4, "Call Joe", true)];

let collection: TodoCollection = new TodoCollection("Aparna", todos);

console.log(`${collection.userName}'s Todo List`);

let newId:number = collection.addTodo("Go for run");
console.log("Printing all todo items:");
todos.forEach(item => item.printDetails());

console.log("COMPLETED TASKS:");
console.log("*-----------------------*");
todos.filter(item => item.complete).forEach(item => item.printDetails());
console.log("       ");

console.log("INCOMPLETE TASKS:");
console.log("*-----------------------*");
todos.filter(item => !item.complete).forEach(item => item.printDetails());
