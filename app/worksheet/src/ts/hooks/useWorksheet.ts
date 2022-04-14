import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {useWorksheetStateService} from "~/hooks/useWorksheetStateService";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetState} from "~/models/WorksheetState";
import {useEffect, useState} from "react";
import {Worksheet} from "~/models/Worksheet";

export const useWorksheet = (currentMark: WorksheetMark): Worksheet | null => {
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
      .getWorksheetState(currentMark.worksheetStateId)
      .then(setWorksheetState);
  }, [currentMark, worksheetStateService]);
  if (!worksheetState || !worksheetStateService) {
    return null;
  }
  return new Worksheet({
    currentMark,
    definition: worksheetDefinition,
    initialState: worksheetState,
    stateService: worksheetStateService,
  });
};
