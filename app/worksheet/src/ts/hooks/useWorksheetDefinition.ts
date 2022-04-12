import {useContext} from "react";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetDefinitionContext} from "~/contexts/WorksheetDefinitionContext";

export const useWorksheetDefinition = () => {
  const worksheetDefinition = useContext<WorksheetDefinition | null>(
    WorksheetDefinitionContext
  );
  if (!worksheetDefinition) {
    throw new EvalError("worksheet definition should always be set");
  }
  return worksheetDefinition;
};
