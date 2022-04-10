import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";
import * as _ from "lodash";

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
      for (const featureId of featureSetDefinition.featureIds) {
        headerRow.push(
          featureSetDefinition.id.toString() + "/" + featureId.toString()
        );
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
        const [featureSetId, featureId] =
          GoogleSheetsWorksheetStateExporter.parseFeatureHeader(featureHeader);
        const featureSetState = _.find(
          worksheetState.featureSets,
          (existingFeatureSetState) =>
            existingFeatureSetState.id === featureSetId
        );
        if (!featureSetState) {
          dataRow.push("");
          continue;
        }
        const featureState = _.find(
          featureSetState.features,
          (existingFeatureState) => existingFeatureState.id === featureId
        );
        if (!featureState) {
          dataRow.push("");
          continue;
        }
        if (!featureState.selectedValueIds) {
          dataRow.push("");
          continue;
        }
        dataRow.push(
          featureState.selectedValueIds
            .map((valueId) => valueId.toString())
            .join(";")
        );
      }

      rows.push(dataRow);
    }

    return rows;
  }
}
