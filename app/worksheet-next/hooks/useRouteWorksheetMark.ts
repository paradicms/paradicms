import {WorksheetMark} from "~/models/WorksheetMark";
import {useLocation} from "react-router";
import {useParams} from "react-router-dom";
import * as queryString from "query-string";
import {WorksheetMode} from "~/models/WorksheetMode";

export const useRouteWorksheetMark = (): WorksheetMark => {
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

  const parsedQueryString = queryString.parse(location.search);
  let mode: WorksheetMode | null;
  if (
    Object.values(WorksheetMode).some(
      (mode: string) => mode === parsedQueryString.mode
    )
  ) {
    mode = <WorksheetMode>parsedQueryString.mode;
  } else {
    mode = WorksheetMode.BEGINNER;
  }

  return {
    featureUri: params.featureUri ?? null,
    featureSetUri: params.featureSetUri ?? null,
    mode,
    review,
    worksheetStateId: params.worksheetStateId,
  };
};
