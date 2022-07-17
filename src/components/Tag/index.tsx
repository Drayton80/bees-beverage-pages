import React from "react";
import { TagProps } from "./types";
import "./style.less";

const Tag: React.FC<TagProps> = ({ icon, label, onClick }) => {
  return (
    <button className="tag" disabled={!onClick}>
      <img src={icon} alt={"Image" + label} />
      <p>{label}</p>
    </button>
  );
};

export default Tag;
