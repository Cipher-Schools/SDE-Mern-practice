import React from "react";

import "./InputField.css";

function InputField(props) {
  const { type = "text", placeholder, value, setValue, className } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`inputField ${className}`}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default InputField;
