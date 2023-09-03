import React from "react";
import TodoItem from "./TodoItem";
import "./index.css";

function TodoList(props) {
  return (
    <section className="list-cont">
      {props.tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          handleDelete={() => props.handleDelete(index)}
          handleComplete={() => props.handleComplete(index)}
        />
      ))}
    </section>
  );
}

export default TodoList;
