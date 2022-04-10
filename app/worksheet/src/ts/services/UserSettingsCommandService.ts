import {UserSettings} from "~/models/UserSettings";

export interface UserSettingsCommandService {
  putUserSettings(kwds: {
    id: string;
    userSettings: UserSettings;
  }): Promise<void>;
}
