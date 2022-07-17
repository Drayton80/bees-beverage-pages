import React from "react";
import { CheckboxProps } from "./types";
import "./style.less";

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  return (
    <div className="row">
      <input type={"checkbox"} onChange={onChange} />
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
