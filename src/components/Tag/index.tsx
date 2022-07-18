import React, { useState } from "react";
import { TagProps } from "./types";
import "./style.less";

const Tag: React.FC<TagProps> = ({
  id,
  icon,
  iconEditing,
  label,
  editable,
  onClick,
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleButtonOnClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setIsEditing(true);
    onClick && onClick(event);
  };

  const handleEditFinished = (event: React.FormEvent<HTMLButtonElement>) =>
    setIsEditing(false);

  const handleInputOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange && onChange(event, id);
  };

  return (
    <button
      className="tag"
      disabled={!editable}
      onMouseDown={handleButtonOnClick}
      onBlur={handleEditFinished}
    >
      <button onClick={handleEditFinished}>
        <img
          src={isEditing ? iconEditing ?? icon : icon}
          alt={"Image" + label}
        />
      </button>
      {isEditing ? (
        <input value={label?.toString()} onChange={handleInputOnChange} />
      ) : (
        <p>{label}</p>
      )}
    </button>
  );
};

export default Tag;
