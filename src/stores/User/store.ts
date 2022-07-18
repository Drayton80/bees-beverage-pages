import { action, observable } from "mobx";
import { BreweryInfo } from "services/Breweries/types";
import { BreweryWithCustomTag, User, UserStore } from "./types";

const USER_NAME_ID = "user/name";
const USER_BREWERIES_ID = "user/breweries";

export const createUserStore = (): UserStore => {
  const state: User = observable({
    name: localStorage.getItem(USER_NAME_ID)!,
    breweries: JSON.parse(localStorage.getItem(USER_BREWERIES_ID)!),
  });

  const formatBreweriesToHaveCustomTag = (
    breweries: BreweryInfo[]
  ): BreweryWithCustomTag[] =>
    breweries.map((brewery) => ({
      ...brewery,
      customTags: ["add more"],
    }));

  return {
    user: state,
    getName: () => state.name ?? localStorage.getItem(USER_NAME_ID) ?? "",
    getBreweries: () =>
      state.breweries ??
      JSON.parse(localStorage.getItem(USER_BREWERIES_ID)!) ??
      [],
    setName: action((state: User, name: string) => {
      state.name = name;
      localStorage.setItem(USER_NAME_ID, name);
    }),
    setBreweries: action((state: User, breweries: BreweryInfo[]) => {
      const breweriesWithCustomTag = formatBreweriesToHaveCustomTag(breweries);
      state.breweries = breweriesWithCustomTag;
      localStorage.setItem(
        USER_BREWERIES_ID,
        JSON.stringify(breweriesWithCustomTag)
      );
    }),
    deleteBrewery: action((state: User, breweryId: string) => {
      const breweryIndex = state.breweries
        .map((brewery) => brewery.id)
        .indexOf(breweryId);
      state.breweries.splice(breweryIndex, 1);
      localStorage.setItem(USER_BREWERIES_ID, JSON.stringify(state.breweries));
    }),
    pushCustomTag: action((state: User, breweryId: string, tag: string) => {
      const breweryIndex = state.breweries
        .map((brewery) => brewery.id)
        .indexOf(breweryId);
      state.breweries[breweryIndex]?.customTags?.push(tag);
      localStorage.setItem(USER_BREWERIES_ID, JSON.stringify(state.breweries));
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

        localStorage.setItem(
          USER_BREWERIES_ID,
          JSON.stringify(state.breweries)
        );
      }
    ),
  };
};
