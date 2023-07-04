import {StringParam, useQueryParam} from "use-query-params";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetMode} from "~/models/WorksheetMode";

export const useRouteWorksheetMark = (kwds: {
  featureSetIri?: string;
  featureIri?: string;
  review: boolean;
}): WorksheetMark | null => {
  if (typeof window === "undefined") {
    // log.info("window is not defined, returning null route worksheet mark");
    return null;
  }
  // log.info("window is defined");

  const {featureSetIri, featureIri, review} = kwds;

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
    // log.debug("no worksheet state id included in query params");
    return null;
  }
  log.debug("worksheet state id from query param:", worksheetStateId);

  return {
    mode,
    featureSetIri: featureSetIri ?? null,
    featureIri: featureIri ?? null,
    review: review,
    worksheetStateId,
  };
};
