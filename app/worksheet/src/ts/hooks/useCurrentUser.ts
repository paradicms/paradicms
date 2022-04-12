import {CurrentUser} from "~/models/CurrentUser";
import {CurrentUserContext} from "~/contexts/CurrentUserContext";
import {useContext} from "react";

export const useCurrentUser = () =>
  useContext<CurrentUser | null>(CurrentUserContext);
