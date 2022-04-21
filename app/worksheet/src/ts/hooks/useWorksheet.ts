import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {useEffect, useReducer} from "react";
import {Worksheet} from "~/models/Worksheet";
import {useParams} from "react-router-dom";
import {WorksheetMark} from "~/models/WorksheetMark";
import {useLocation} from "react-router";

const useRouteWorksheetMark = (): WorksheetMark => {
  const location = useLocation();
  const params = useParams();
  if (!params.worksheetStateId) {
    throw new EvalError(JSON.stringify(params));
  }

  let review: boolean;
  if (location.pathname.endsWith("/edit")) {
    review = false;
  } else if (location.pathname.endsWith("/review")) {
    review = true;
  } else {
    throw new RangeError(location.pathname);
  }

  return {
    featureUri: params.featureId,
    featureSetUri: params.featureSetId,
    review: review ? review : undefined,
    worksheetStateId: params.worksheetStateId,
  };
};

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
  console.info("dispatch worksheet");
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
    console.info("Calling effect");
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
