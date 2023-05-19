import {CurrentUserServiceContext} from "~/contexts/CurrentUserServiceContext";
import {CurrentUserService} from "~/services/CurrentUserService";
import {useContext} from "react";

export const useCurrentUserService = () =>
  useContext<CurrentUserService>(CurrentUserServiceContext);
