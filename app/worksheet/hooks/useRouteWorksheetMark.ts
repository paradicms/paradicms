import {StringParam, useQueryParam} from "use-query-params";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetMode} from "~/models/WorksheetMode";
import log from "loglevel";

export const useRouteWorksheetMark = (kwds: {
  featureSetKey?: string;
  featureKey?: string;
  review: boolean;
}): WorksheetMark | null => {
  if (typeof window === "undefined") {
    // log.info("window is not defined, returning null route worksheet mark");
    return null;
  }
  // log.info("window is defined");

  const {featureSetKey, featureKey, review} = kwds;

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
    log.debug("no worksheet state id included in query params");
    return null;
  }
  log.debug("worksheet state id from query param:", worksheetStateId);

  return {
    mode,
    featureSetKey: featureSetKey ?? null,
    featureKey: featureKey ?? null,
    review: review,
    worksheetStateId,
  };
};
