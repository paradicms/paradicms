import {UserSettings} from "~/models/UserSettings";
import {UserSettingsService} from "~/services/UserSettingsService";
import {NoSuchUserSettingsException} from "~/services/NoSuchUserSettingsException";

export class LocalStorageUserSettingsService implements UserSettingsService {
  private static readonly USER_SETTINGS_ITEM_KEY_PREFIX = "userSettings";

  getUserSettings(userId: string): Promise<UserSettings> {
    return new Promise((resolve, reject) => {
      const key = LocalStorageUserSettingsService.getUserSettingsItemKey(
        userId
      );
      const value = localStorage.getItem(key);
      // log.info("read user settings from key=%s: %s (%s)", key, value);
      if (!value) {
        reject(new NoSuchUserSettingsException(userId));
        return;
      }
      resolve(JSON.parse(value));
    });
  }

  private static getUserSettingsItemKey(userId: string): string {
    return (
      LocalStorageUserSettingsService.USER_SETTINGS_ITEM_KEY_PREFIX + userId
    );
  }

  putUserSettings(kwds: {
    userId: string;
    userSettings: UserSettings;
  }): Promise<void> {
    const key = LocalStorageUserSettingsService.getUserSettingsItemKey(
      kwds.userId
    );
    const value = JSON.stringify(kwds.userSettings);
    localStorage.setItem(key, value);
    // log.info("wrote user settings to key=%s, value=%s", key, value);
    return Promise.resolve();
  }
}
