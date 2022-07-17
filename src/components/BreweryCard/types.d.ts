import { BreweryInfo } from "../../services/Breweries/types";

export type BreweryCardProps = {
  brewery: BreweryInfo;
  onDeleteClick: MouseEvent<HTMLButtonElement>;
};
