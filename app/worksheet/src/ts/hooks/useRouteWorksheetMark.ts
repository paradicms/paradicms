import {WorksheetMark} from "~/models/WorksheetMark";
import {useLocation} from "react-router";
import {useParams} from "react-router-dom";

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

  return {
    featureUri: params.featureUri,
    featureSetUri: params.featureSetUri,
    review: review ? review : undefined,
    worksheetStateId: params.worksheetStateId,
  };
};
