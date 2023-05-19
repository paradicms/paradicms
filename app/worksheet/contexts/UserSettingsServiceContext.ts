import {UserSettingsService} from "~/services/UserSettingsService";
import {LocalStorageUserSettingsService} from "~/services/LocalStorageUserSettingsService";
import React from "react";

export const UserSettingsServiceContext = React.createContext<
  UserSettingsService
>(new LocalStorageUserSettingsService());
