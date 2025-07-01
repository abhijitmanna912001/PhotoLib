import { type User } from "firebase/auth";
import { createContext } from "react";

export type AuthContextData = {
  user: User | null;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
};

export const UserAuthContext = createContext<AuthContextData>({
  user: null,
  logIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
  googleSignIn: async () => {},
});
