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
    // console.info("setting WorksheetStateService");
    if (currentUser && userSettings.worksheetConfiguration.state.googleSheets) {
      console.info("using Google Sheets WorksheetStateService");
      dispatch({
        payload: new GoogleSheetsWorksheetStateService({
          accessToken: currentUser.session.accessToken,
          configuration: userSettings.worksheetConfiguration.state.googleSheets,
          worksheetDefinition,
        }),
      });
    } else if (userSettings.worksheetConfiguration.state.localStorage) {
      console.info("using localStorage WorksheetStateService");
      dispatch({
        payload: new LocalStorageWorksheetStateService(),
      });
    } else {
      throw new RangeError();
    }
  };

  useEffect(() => {
    if (state.worksheetStateService) {
      // console.info("already have worksheetStateService set");
      return;
    } else if (currentUser) {
      // console.info("getting user settings");
      userSettingsService
        .getUserSettings(currentUser.id)
        .then(setWorksheetStateServiceFromUserSettings, () =>
          setWorksheetStateServiceFromUserSettings(defaultUserSettings)
        );
    } else {
      console.info("no current user, using default user settings");
      setWorksheetStateServiceFromUserSettings(defaultUserSettings);
    }
  }, [currentUser, userSettingsService]);

  return state.worksheetStateService;
};
