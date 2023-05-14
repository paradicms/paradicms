import {StringParam, useQueryParam} from "use-query-params";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetMode} from "~/models/WorksheetMode";

export const useRouteWorksheetMark = (kwds: {
  featureSetUri?: string;
  featureUri?: string;
  review: boolean;
}): WorksheetMark | null => {
  if (typeof window === "undefined") {
    // console.info("window is not defined, returning null route worksheet mark");
    return null;
  }
  // console.info("window is defined");

  const {featureSetUri, featureUri, review} = kwds;

  const [modeString] = useQueryParam<string | null | undefined>(
    "mode",
    StringParam
  );
  let mode: WorksheetMode = WorksheetMode.BEGINNER;
  if (modeString) {
    switch (modeString.toLowerCase()) {
      case "advanced":
        mode = WorksheetMode.ADVANCED;
        break;
      case "intermediate":
        mode = WorksheetMode.INTERMEDIATE;
        break;
    }
  }

  const [worksheetStateId] = useQueryParam<string | null | undefined>(
    "id",
    StringParam
  );
  if (!worksheetStateId) {
    // console.debug("no worksheet state id included in query params");
    return null;
  }
  console.debug("worksheet state id from query param:", worksheetStateId);

  return {
    mode,
    featureSetUri: featureSetUri ?? null,
    featureUri: featureUri ?? null,
    review: review,
    worksheetStateId,
  };
};
