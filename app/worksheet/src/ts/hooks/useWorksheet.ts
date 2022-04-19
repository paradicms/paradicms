import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {WorksheetState} from "~/models/WorksheetState";
import {useEffect, useState} from "react";
import {Worksheet} from "~/models/Worksheet";
import {useMatch} from "react-router-dom";
import {WorksheetMark} from "~/models/WorksheetMark";
import {useLocation} from "react-router";

const useRouteWorksheetMark = (): WorksheetMark => {
  const location = useLocation();
  const match = useMatch(location.pathname);
  if (!match) {
    throw new EvalError();
  }
  if (!match.params?.worksheetStateId) {
    throw new EvalError();
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
    featureUri: match.params.featureId,
    featureSetUri: match.params.featureSetId,
    review: review ? review : undefined,
    worksheetStateId: match.params.worksheetStateId,
  };
}

export const useWorksheet = (): Worksheet | null => {
  const routeWorksheetMark = useRouteWorksheetMark();
  const worksheetDefinition = useWorksheetDefinition();
  const worksheetStateService = useWorksheetStateService();
  const [worksheetState, setWorksheetState] = useState<WorksheetState | null>(
    null
  );
  useEffect(() => {
    if (!worksheetStateService) {
      return;
    }
    worksheetStateService
      .getWorksheetState(routeWorksheetMark.worksheetStateId)
      .then(setWorksheetState);
  }, [routeWorksheetMark, worksheetStateService]);
  if (!worksheetState || !worksheetStateService) {
    return null;
  }
  return new Worksheet({
    currentMark: routeWorksheetMark,
    definition: worksheetDefinition,
    initialState: worksheetState,
    stateService: worksheetStateService,
  });
};
