import {useUserSettingsService} from "~/hooks/useUserSettingsService";
import {useCurrentUser} from "~/hooks/useCurrentUser";
import {useEffect, useState} from "react";
import {WorksheetStateService} from "~/services/WorksheetStateService";
import {GoogleSheetsWorksheetStateService} from "~/services/GoogleSheetsWorksheetStateService";
import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {LocalStorageWorksheetStateService} from "~/services/LocalStorageWorksheetStateService";

export const useWorksheetStateService = () => {
  const currentUser = useCurrentUser();
  const userSettingsService = useUserSettingsService();
  const worksheetDefinition = useWorksheetDefinition();

  const [worksheetStateService, setWorksheetStateService] =
    useState<WorksheetStateService>();

  useEffect(() => {
    if (currentUser) {
      console.info("getting user settings");
      userSettingsService
        .getUserSettings(currentUser.id)
        .then((userSettings) => {
          console.info("got user settings");
          if (userSettings.worksheetConfiguration.state.googleSheets) {
            console.info("using Google Sheets WorksheetStateService");
            setWorksheetStateService(
              new GoogleSheetsWorksheetStateService({
                accessToken: currentUser.session.accessToken,
                configuration:
                  userSettings.worksheetConfiguration.state.googleSheets,
                worksheetDefinition,
              })
            );
          } else if (userSettings.worksheetConfiguration.state.localStorage) {
            console.info("using localStorage WorksheetStateService");
            setWorksheetStateService(new LocalStorageWorksheetStateService());
          } else {
            throw new RangeError();
          }
        });
    } else {
      console.info("no current user, using localStorage WorksheetStateService");
      setWorksheetStateService(new LocalStorageWorksheetStateService());
    }
  }, [currentUser, userSettingsService, worksheetDefinition]);

  return worksheetStateService;
};
