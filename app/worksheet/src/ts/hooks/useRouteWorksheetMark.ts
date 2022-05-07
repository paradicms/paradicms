import {WorksheetMark} from "~/models/WorksheetMark";
import {useLocation} from "react-router";
import {useParams} from "react-router-dom";
import * as queryString from "query-string";
import {WorksheetView} from "~/models/WorksheetView";

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
  let view: WorksheetView | null;
  if (parsedQueryString.view === "gallery") {
    view = WorksheetView.GALLERY;
  } else if (parsedQueryString.view === "table") {
    view = WorksheetView.TABLE;
  } else {
    view = null;
  }

  return {
    featureUri: params.featureUri ?? null,
    featureSetUri: params.featureSetUri ?? null,
    review: !!review,
    view,
    worksheetStateId: params.worksheetStateId,
  };
};
