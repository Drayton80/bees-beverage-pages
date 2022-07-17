import React from "react";
import ArrowLeftCircle from "../../public/arrow-circle-left.png";
import { BackButtonProps } from "./types";
import "./style.less";

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <div className="back-button">
      <input
        type="image"
        alt="Back Button"
        src={ArrowLeftCircle}
        onClick={onClick}
      />
      <p>Go back</p>
    </div>
  );
};

export default BackButton;
