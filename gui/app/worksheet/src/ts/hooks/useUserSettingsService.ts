import {UserSettingsServiceContext} from "~/contexts/UserSettingsServiceContext";
import {UserSettingsService} from "~/services/UserSettingsService";
import {useContext} from "react";

export const useUserSettingsService = () =>
  useContext<UserSettingsService>(UserSettingsServiceContext);
