import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";

export class GoogleSheetsWorksheetStateExporter
  implements WorksheetStateExporter<string[][]>
{
  static readonly FIRST_FEATURE_COLUMN_INDEX = 4;

  static parseFeatureHeader(featureHeader: string): [string, string] {
    const split = featureHeader.split("/", 2);
    if (split.length !== 2) {
      throw new RangeError();
    }
    return [split[0], split[1]];
  }

  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string[][] {
    const rows: string[][] = [];

    const headerRow = ["id", "ctime", "mtime", "description"];
    // Output all feature sets and values so they're represented in the CSV.
    for (const featureSetDefinition of worksheetDefinition.featureSets) {
      for (const featureUri of featureSetDefinition.featureUris) {
        headerRow.push(featureSetDefinition.uri + "|" + featureUri.toString());
      }
    }
    rows.push(headerRow);

    for (const worksheetState of worksheetStates) {
      const dataRow = [
        worksheetState.id.toString(),
        new Date(worksheetState.ctime).toISOString(),
        new Date(worksheetState.mtime).toISOString(),
      ];

      if (worksheetState.text) {
        dataRow.push(worksheetState.text);
      } else {
        dataRow.push("");
      }

      for (const featureHeader of headerRow.slice(
        GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX
      )) {
        const [featureSetUri, featureUri] =
          GoogleSheetsWorksheetStateExporter.parseFeatureHeader(featureHeader);
        const featureSetState = worksheetState.featureSets?.find(
          (existingFeatureSetState) =>
            existingFeatureSetState.uri === featureSetUri
        );
        if (!featureSetState) {
          dataRow.push("");
          continue;
        }
        const featureState = featureSetState.features?.find(
          (existingFeatureState) => existingFeatureState.uri === featureUri
        );
        if (!featureState) {
          dataRow.push("");
          continue;
        }
        const selectedFeatureValueUris = (featureState.values ?? [])
          .filter((value) => value.selected)
          .map((value) => value.uri);
        if (selectedFeatureValueUris.length === 0) {
          dataRow.push("");
          continue;
        }
        dataRow.push(selectedFeatureValueUris.join(";"));
      }

      rows.push(dataRow);
    }

    return rows;
  }
}
