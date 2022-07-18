import { action, observable, runInAction } from "mobx";
import { BreweryInfo } from "services/Breweries/types";
import { User, UserStore } from "./types";

export const createUserStore = (): UserStore => {
  const state: User = observable({
    name: "",
    breweries: [],
  });

  return {
    user: state,
    set(user: User) {
      this.user = { ...user };
    },
    setName: action((state: User, name: string) => {
      state.name = name;
    }),
    setBreweries: action((state: User, breweries: BreweryInfo[]) => {
      state.breweries =
        breweries.map((brewery) => ({
          ...brewery,
          customTags: ["add more"],
        })) ?? [];
    }),
    deleteBrewery: action((state: User, breweryId: string) => {
      const breweryIndex = state.breweries
        .map((brewery) => brewery.id)
        .indexOf(breweryId);
      state.breweries.splice(breweryIndex, 1);
    }),
    pushCustomTag: action((state: User, breweryId: string, tag: string) => {
      const breweryIndex = state.breweries
        .map((brewery) => brewery.id)
        .indexOf(breweryId);
      state.breweries[breweryIndex]?.customTags?.push(tag);
    }),
    editCustomTag: action(
      (
        state: User,
        breweryId: string,
        tagIndex: number,
        tagNewText: string
      ) => {
        const breweryIndex = state.breweries
          .map((brewery) => brewery.id)
          .indexOf(breweryId);

        if (tagNewText === "") state.breweries.splice(breweryIndex, 1);

        if (
          tagNewText !== "" &&
          state?.breweries[breweryIndex]?.customTags[tagIndex]
        )
          state.breweries[breweryIndex].customTags[tagIndex] = tagNewText;
      }
    ),
  };
};
