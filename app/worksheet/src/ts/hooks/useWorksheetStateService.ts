import {useUserSettingsService} from "~/hooks/useUserSettingsService";
import {useCurrentUser} from "~/hooks/useCurrentUser";
import {useEffect, useState} from "react";
import {WorksheetStateService} from "~/services/WorksheetStateService";
import {GoogleSheetsWorksheetStateService} from "~/services/GoogleSheetsWorksheetStateService";
import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {LocalStorageWorksheetStateService} from "~/services/LocalStorageWorksheetStateService";
import {UserSettings} from "~/models/UserSettings";
import {defaultUserSettings} from "~/models/defaultUserSettings";

export const useWorksheetStateService = (): WorksheetStateService | null => {
  const currentUser = useCurrentUser();
  const userSettingsService = useUserSettingsService();
  const worksheetDefinition = useWorksheetDefinition();

  const [worksheetStateService, setWorksheetStateService] =
    useState<WorksheetStateService | null>(null);

  const setWorksheetStateServiceFromUserSettings = (
    userSettings: UserSettings
  ) => {
    if (currentUser && userSettings.worksheetConfiguration.state.googleSheets) {
      console.info("using Google Sheets WorksheetStateService");
      setWorksheetStateService(
        new GoogleSheetsWorksheetStateService({
          accessToken: currentUser.session.accessToken,
          configuration: userSettings.worksheetConfiguration.state.googleSheets,
          worksheetDefinition,
        })
      );
    } else if (userSettings.worksheetConfiguration.state.localStorage) {
      console.info("using localStorage WorksheetStateService");
      setWorksheetStateService(new LocalStorageWorksheetStateService());
    } else {
      throw new RangeError();
    }
  };

  useEffect(() => {
    if (worksheetStateService) {
      return;
    } else if (currentUser) {
      console.info("getting user settings");
      userSettingsService
        .getUserSettings(currentUser.id)
        .then(setWorksheetStateServiceFromUserSettings, () =>
          setWorksheetStateServiceFromUserSettings(defaultUserSettings)
        );
    } else {
      console.info("no current user, using default user settings");
      setWorksheetStateServiceFromUserSettings(defaultUserSettings);
    }
  }, [currentUser, userSettingsService, worksheetDefinition]);

  return worksheetStateService;
};
