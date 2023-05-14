import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {JsonLdWorksheetStateExporter} from "~/exporters/JsonLdWorksheetStateExporter";
import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";

export class JsonLdStringWorksheetStateExporter
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
    return "JSON-LD";
  }

  get fileExtension() {
    return "jsonld";
  }

  get mimeType() {
    return "application/ld+json";
  }

  private readonly delegate = new JsonLdWorksheetStateExporter();
}
