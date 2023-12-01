import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
  const [userLogged, setUserLogged] = useState("Admin");
  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
