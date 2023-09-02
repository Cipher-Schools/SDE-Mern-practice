import React from "react";
import "./Button.css";

function Button(props) {
  const { title, handleSubmit, className } = props;
  return (
    <button onClick={handleSubmit} className={`button ${className}`}>
      {title}
    </button>
  );
}

export default Button;
