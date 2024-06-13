# TasksTracker-TS
This project is a simple Todo List application built with TypeScript. It allows users to manage their tasks by adding, viewing, and filtering tasks based on their completion status.

## Features

- **Add Todo**: Add new tasks to the todo list.
- **View All Tasks**: View all tasks in a tabular format.
- **View Completed Tasks**: Filter and view only completed tasks.

## Classes

### TodoItem

The `TodoItem` class represents an individual task.

#### Properties

- `id`: The unique identifier for the task.
- `task`: The description of the task.
- `complete`: The completion status of the task.

#### Methods

- `printDetails()`: Prints the details of the task in a tabular format.

### TodoCollection

The `TodoCollection` class manages a collection of `TodoItem` objects.

#### Properties

- `userName`: The name of the user managing the todo list.
- `todos`: An array of `TodoItem` objects.

#### Methods

- `addTodo()`: Adds a new task to the collection.
- `getTodoById()`: Retrieves a task by its ID.
- Other methods to manage the collection of tasks.
