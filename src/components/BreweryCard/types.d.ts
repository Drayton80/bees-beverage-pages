import { BreweryWithCustomTag } from "../../stores/User/types";

export type BreweryCardProps = {
  brewery: BreweryWithCustomTag;
  onDeleteClick: MouseEvent<HTMLButtonElement>;
};
