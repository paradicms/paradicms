import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {JsonWorksheetStateExporter} from "~/exporters/JsonWorksheetStateExporter";
import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";

export class JsonStringWorksheetStateExporter
  implements StringWorksheetStateExporter
{
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string {
    return JSON.stringify(
      this.delegate.export(worksheetDefinition, worksheetStates),
      null,
      4
    );
  }

  get displayName() {
    return "JSON";
  }

  get fileExtension() {
    return "json";
  }

  get mimeType() {
    return "application/json";
  }

  private readonly delegate = new JsonWorksheetStateExporter();
}
