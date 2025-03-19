import { createContext } from "react";
import { UserDetails } from "../interfaces";

export const defaultUser: UserDetails = {
  name: "",
};

interface UserContextProps {
  user: UserDetails;
  hasEmployer: boolean;
  setUser: (user: UserDetails) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: defaultUser,
  hasEmployer: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_user) => {},
});
