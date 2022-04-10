import {UserSettings} from "~/models/UserSettings";
import {NoSuchUserSettingsException} from "~/services/NoSuchUserSettingsException";
import {UserSettingsQueryService} from "~/services/UserSettingsQueryService";

export class LocalStorageUserSettingsQueryService
  implements UserSettingsQueryService
{
  private static readonly USER_SETTINGS_ITEM_KEY_PREFIX = "userSettings";

  getUserSettings(kwds: {id: string}): Promise<UserSettings> {
    const key = LocalStorageUserSettingsQueryService.getUserSettingsItemKey(
      kwds.id
    );
    const value = localStorage.getItem(key);
    // console.info("read user settings from key=%s: %s (%s)", key, value);
    if (!value) {
      return Promise.reject(new NoSuchUserSettingsException(kwds.id));
    }
    return Promise.resolve(JSON.parse(value));
  }

  static getUserSettingsItemKey(id: string): string {
    return (
      LocalStorageUserSettingsQueryService.USER_SETTINGS_ITEM_KEY_PREFIX +
      id.toString()
    );
  }
}
