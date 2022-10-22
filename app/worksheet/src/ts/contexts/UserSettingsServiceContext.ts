import React = require("react");
import {UserSettingsService} from "~/services/UserSettingsService";
import {LocalStorageUserSettingsService} from "~/services/LocalStorageUserSettingsService";

export const UserSettingsServiceContext =
  React.createContext<UserSettingsService>(
    new LocalStorageUserSettingsService()
  );
