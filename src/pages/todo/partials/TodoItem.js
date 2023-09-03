import React from "react";
import Button from "../../../components/button/Button";

import "./index.css";

function TodoItem(props) {
  const itemClassName = props.task.completed ? "strike" : "non-striked";
  return (
    <article className="item-cont">
      <div className="item-field">
        <h3 className={itemClassName}>{props.task.title}</h3>
      </div>
      <Button
        title={props.task.completed ? "Un-Done" : "Done"}
        handleSubmit={props.handleComplete}
        className="done-btn"
      />
      <Button title="Delete" handleSubmit={props.handleDelete} className="delete-btn" />
    </article>
  );
}

export default TodoItem;
