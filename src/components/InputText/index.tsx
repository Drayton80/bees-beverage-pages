import React from "react";
import { InputTextProps } from "./types";
import "./style.less";

const InputText: React.FC<InputTextProps> = ({
  label,
  warningLabel,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <>
      <p>{label}</p>
      <p className={error ? "text-error" : ""}>{warningLabel}</p>
      <input
        className={`input-text ${error ? "input-error" : ""}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default InputText;
