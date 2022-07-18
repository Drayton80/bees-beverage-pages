import React from "react";

export type TagProps = {
  id: string;
  icon: string;
  iconEditing?: string;
  label?: string | number | null;
  editable?: boolean;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  onChange?: (
    event: React.FormEvent<HTMLInputElement>,
    breweryId: string
  ) => void;
};
