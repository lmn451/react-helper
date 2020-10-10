import { createContext, useContext, useState, useMemo } from "react";

const defaultState = {
  user: null,
  setUser: (user: any) => {},
};

const UserContext = createContext(defaultState);

const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  console.log("provider was rendered?");

  const [user, setUser] = useState("Username");

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, useUserContext };
