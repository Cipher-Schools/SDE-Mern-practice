import React, { useState } from "react";

import InputField from "../../../components/input/InputField";
import "./index.css";
import Button from "../../../components/button/Button";

function TodoForm() {
  const [task, setTask] = useState("");
  return (
    <section className="form-container">
      <InputField
        type="text"
        placeholder="Add Task"
        className="task-input"
        value={task}
        setValue={setTask}
      />
      <Button title="submit" handleSubmit={() => console.log("clicked")} className="submitBtn" />
    </section>
  );
}

export default TodoForm;
