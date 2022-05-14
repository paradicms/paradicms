import {UserSettings} from "~/models/UserSettings";

export interface UserSettingsService {
  getUserSettings(userId: string): Promise<UserSettings>;

  putUserSettings(kwds: {
    userId: string;
    userSettings: UserSettings;
  }): Promise<void>;
}
