import React from "react";
import {CurrentUserService} from "~/services/CurrentUserService";
import {LocalStorageCurrentUserService} from "~/services/LocalStorageCurrentUserService";

export const CurrentUserServiceContext = React.createContext<
  CurrentUserService
>(new LocalStorageCurrentUserService());
