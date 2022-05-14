import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {useEffect, useReducer, useState} from "react";
import {Worksheet} from "~/models/Worksheet";
import {useRouteWorksheetMark} from "~/hooks/useRouteWorksheetMark";
import {Exception} from "~/Exception";

export interface WorksheetReducerAction {
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

export const useWorksheet = (): {
  exception: Exception | null;
  dispatchWorksheet: React.Dispatch<WorksheetReducerAction>;
  worksheet: Worksheet | null;
} => {
  const routeWorksheetMark = useRouteWorksheetMark();
  const worksheetDefinition = useWorksheetDefinition();
  const worksheetStateService = useWorksheetStateService();
  const [state, dispatchWorksheet] = useReducer(worksheetReducer, {
    worksheet: null,
  });
  const [exception, setException] = useState<Exception | null>(null);

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
      .then(
        (worksheetState) =>
          dispatchWorksheet({
            payload: new Worksheet({
              currentMark: routeWorksheetMark,
              definition: worksheetDefinition,
              initialState: worksheetState,
              stateService: worksheetStateService,
            }),
          }),
        setException
      );
  }, [routeWorksheetMark, worksheetStateService]);

  return {exception, dispatchWorksheet, worksheet: state.worksheet};
};
