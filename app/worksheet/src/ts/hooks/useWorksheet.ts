import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {useEffect, useReducer} from "react";
import {Worksheet} from "~/models/Worksheet";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";

interface WorksheetReducerAction {
  payload: Worksheet;
}

interface WorksheetReducerState {
  worksheet: Worksheet | null;
}

const worksheetReducer = (
  state: WorksheetReducerState,
  action: WorksheetReducerAction
): WorksheetReducerState => {
  return {worksheet: action.payload!};
};

export const useWorksheet = (): [
  Worksheet | null,
  React.Dispatch<WorksheetReducerAction>
] => {
  const routeWorksheetMark = useRouteWorksheetMark();
  const worksheetDefinition = useWorksheetDefinition();
  const worksheetStateService = useWorksheetStateService();
  const [state, dispatch] = useReducer(worksheetReducer, {
    worksheet: null,
  });

  useEffect(() => {
    if (!worksheetStateService) {
      return;
    }
    if (
      state.worksheet &&
      JSON.stringify(state.worksheet.currentMark) ===
        JSON.stringify(routeWorksheetMark)
    ) {
      return;
    }
    worksheetStateService
      .getWorksheetState(routeWorksheetMark.worksheetStateId)
      .then((worksheetState) =>
        dispatch({
          payload: new Worksheet({
            currentMark: routeWorksheetMark,
            definition: worksheetDefinition,
            initialState: worksheetState,
            stateService: worksheetStateService,
          }),
        })
      );
  }, [routeWorksheetMark, worksheetStateService]);

  return [state.worksheet, dispatch];
};
