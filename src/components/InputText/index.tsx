import React from "react";
import { InputTextProps } from "./types";
import "./style.less";

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  error,
  onChange,
}) => {
  return (
    <>
      <p>Please, enter your full name bellow</p>
      <p className={error ? "text-error" : ""}>
        Only alphabetical characters are accepted
      </p>
      <input
        className={`input-text ${error ? "input-error" : ""}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default InputText;
