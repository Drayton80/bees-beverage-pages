import { observable, runInAction } from "mobx";
import { BreweryInfo } from "services/Breweries/types";
import { User, UserStore } from "./types";

export const createUserStore = (): UserStore => {
  const state = observable({
    name: "",
    breweries: [],
  });

  return {
    user: state,
    set(user: User) {
      this.user = { ...user };
    },
    setName(name: string) {
      runInAction(() => {
        this.user.name = name;
      });
    },
    setBreweries(breweries: BreweryInfo[]) {
      runInAction(() => {
        this.user.breweries = breweries;
      });
    },
  };
};
