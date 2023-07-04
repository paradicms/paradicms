import {useUserSettingsService} from "~/hooks/useUserSettingsService";
import {useCurrentUser} from "~/hooks/useCurrentUser";
import {useEffect, useReducer} from "react";
import {WorksheetStateService} from "~/services/WorksheetStateService";
import {GoogleSheetsWorksheetStateService} from "~/services/GoogleSheetsWorksheetStateService";
import {LocalStorageWorksheetStateService} from "~/services/LocalStorageWorksheetStateService";
import {UserSettings} from "~/models/UserSettings";
import {defaultUserSettings} from "~/models/defaultUserSettings";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";

interface WorksheetStateServiceReducerAction {
  payload: WorksheetStateService;
}

interface WorksheetStateServiceReducerState {
  worksheetStateService: WorksheetStateService | null;
}

const worksheetStateServiceReducer = (
  state: WorksheetStateServiceReducerState,
  action: WorksheetStateServiceReducerAction
): WorksheetStateServiceReducerState => {
  return {worksheetStateService: action.payload!};
};

export const useWorksheetStateService = (kwds: {
  worksheetDefinition: WorksheetDefinition;
}): WorksheetStateService | null => {
  const {worksheetDefinition} = kwds;
  const currentUser = useCurrentUser();
  const userSettingsService = useUserSettingsService();
  const [state, dispatch] = useReducer(worksheetStateServiceReducer, {
    worksheetStateService: null,
  });

  const setWorksheetStateServiceFromUserSettings = (
    userSettings: UserSettings
  ) => {
    // log.info("setting WorksheetStateService");
    if (currentUser && userSettings.worksheetConfiguration.state.googleSheets) {
      log.info("using Google Sheets WorksheetStateService");
      dispatch({
        payload: new GoogleSheetsWorksheetStateService({
          accessToken: currentUser.session.accessToken,
          configuration: userSettings.worksheetConfiguration.state.googleSheets,
          worksheetDefinition,
        }),
      });
    } else if (userSettings.worksheetConfiguration.state.localStorage) {
      log.info("using localStorage WorksheetStateService");
      dispatch({
        payload: new LocalStorageWorksheetStateService(),
      });
    } else {
      throw new RangeError();
    }
  };

  useEffect(() => {
    if (state.worksheetStateService) {
      // log.info("already have worksheetStateService set");
      return;
    } else if (currentUser) {
      // log.info("getting user settings");
      userSettingsService
        .getUserSettings(currentUser.id)
        .then(setWorksheetStateServiceFromUserSettings, () =>
          setWorksheetStateServiceFromUserSettings(defaultUserSettings)
        );
    } else {
      log.info("no current user, using default user settings");
      setWorksheetStateServiceFromUserSettings(defaultUserSettings);
    }
  }, [currentUser, userSettingsService]);

  return state.worksheetStateService;
};
