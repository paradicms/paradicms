import {UserSettings} from "~/models/UserSettings";
import {UserSettingsCommandService} from "~/services/UserSettingsCommandService";
import {LocalStorageUserSettingsQueryService} from "~/services/LocalStorageUserSettingsQueryService";

export class LocalStorageUserSettingsCommandService
  implements UserSettingsCommandService
{
  putUserSettings(kwds: {
    id: string;
    userSettings: UserSettings;
  }): Promise<void> {
    const key = LocalStorageUserSettingsQueryService.getUserSettingsItemKey(
      kwds.id
    );
    const value = JSON.stringify(kwds.userSettings);
    localStorage.setItem(key, value);
    // console.info("wrote user settings to key=%s, value=%s", key, value);
    return Promise.resolve();
  }
}
