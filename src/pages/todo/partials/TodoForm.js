import React, { useState } from "react";

import InputField from "../../../components/input/InputField";
import "./index.css";
import Button from "../../../components/button/Button";

function TodoForm(props) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    props.handleAddTask(task);
    setTask("");
  };
  return (
    <section className="form-container">
      <InputField
        type="text"
        placeholder="Add Task"
        className="task-input"
        value={task}
        setValue={setTask}
      />
      <Button title="submit" handleSubmit={handleSubmit} className="submitBtn" />
    </section>
  );
}

export default TodoForm;
