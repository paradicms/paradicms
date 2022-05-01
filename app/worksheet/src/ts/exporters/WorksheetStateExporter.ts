import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";

export interface WorksheetStateExporter<T> {
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): T;
}
