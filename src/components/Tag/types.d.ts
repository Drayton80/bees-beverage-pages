import React from "react";

export type TagProps = {
  icon: string;
  label?: string | number | null;
  onClick?: (event: React.FormEvent<HTMLInputElement>) => void;
};
