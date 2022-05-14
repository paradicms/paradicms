import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";

export class JsonWorksheetStateExporter
  implements WorksheetStateExporter<any[]>
{
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): any[] {
    return worksheetStates;
  }
}
