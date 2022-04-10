import {UserSettings} from "~/models/UserSettings";

export interface UserSettingsQueryService {
  getUserSettings(kwds: {id: string}): Promise<UserSettings>;
}
