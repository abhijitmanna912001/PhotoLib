import { useContext } from "react";
import { UserAuthContext } from "./userAuthContext";

export function useUserAuth() {
  return useContext(UserAuthContext);
}
