import { FC, useState, type PropsWithChildren } from "react";
import { UserDetails } from "../interfaces";
import { UserContext, defaultUser } from "./UserContext";

interface UserContextProviderProps {
  userDetails?: UserDetails;
}

export const UserContextProvider: FC<
  PropsWithChildren<UserContextProviderProps>
> = ({ children, userDetails }) => {
  const [user, setUser] = useState<UserDetails>(userDetails || defaultUser);

  return (
    <UserContext.Provider
      value={{ user, setUser, hasEmployer: !!user.employer }}
    >
      {children}
    </UserContext.Provider>
  );
};
