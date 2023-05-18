import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {useEffect, useReducer, useState} from "react";
import {Worksheet} from "~/models/Worksheet";
import {Exception} from "~/Exception";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetMark} from "~/models/WorksheetMark";

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

export const useWorksheet = (kwds: {
  routeWorksheetMark: WorksheetMark | null;
  worksheetDefinition: WorksheetDefinition;
}): {
  exception: Exception | null;
  dispatchWorksheet: React.Dispatch<WorksheetReducerAction>;
  worksheet: Worksheet | null;
} => {
  const {routeWorksheetMark, worksheetDefinition} = kwds;
  const worksheetStateService = useWorksheetStateService(kwds);
  const [state, dispatchWorksheet] = useReducer(worksheetReducer, {
    worksheet: null,
  });
  const [exception, setException] = useState<Exception | null>(null);

  useEffect(() => {
    if (!routeWorksheetMark || !worksheetStateService) {
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
        worksheetState =>
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
