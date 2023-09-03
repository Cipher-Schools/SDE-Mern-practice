import React, { useState } from "react";

import TodoForm from "./partials/TodoForm";
import TodoList from "./partials/TodoList";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <main className="container">
      <header className="header">
        <h1>TO-DO Application</h1>
      </header>
      <TodoForm
        handleAddTask={(task) => setTasks((prev) => [...prev, { title: task, completed: false }])}
      />
      <section className="app-list-cont">
        <h2 className="title">Todo List</h2>
        <TodoList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />
      </section>
    </main>
  );
}

export default TodoApp;
