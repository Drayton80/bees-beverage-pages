import React from "react";
import { useLocalStore } from "mobx-react";
import { createUserStore } from "./store";
import { UserStore } from "./types";

const UserContext = React.createContext<UserStore | null>(null);

export const UserProvider = ({ children }) => {
  const userStore = useLocalStore(createUserStore);

  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
};

export const useUserStore = () => React.useContext(UserContext);
