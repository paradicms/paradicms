import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {CsvWorksheetStateExporter} from "~/exporters/CsvWorksheetStateExporter";
import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";
import * as Papa from "papaparse";

export class CsvStringWorksheetStateExporter
  implements StringWorksheetStateExporter
{
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string {
    return Papa.unparse(
      this.csvExporter.export(worksheetDefinition, worksheetStates)
    );
  }

  get displayName() {
    return "CSV";
  }

  get fileExtension() {
    return "csv";
  }

  get mimeType() {
    return "text/csv";
  }

  private readonly csvExporter: CsvWorksheetStateExporter =
    new CsvWorksheetStateExporter();
}
