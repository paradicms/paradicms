import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";

export class GoogleSheetsWorksheetStateExporter
  implements WorksheetStateExporter<string[][]> {
  static readonly FIRST_FEATURE_COLUMN_INDEX = 4;

  static parseHeader(
    header: string
  ): {
    featureSetIri: string;
    featureIri?: string;
  } {
    const split = header.split("|", 2);
    switch (split.length) {
      case 1:
        return {
          featureSetIri: split[0],
        };
      case 2:
        return {
          featureSetIri: split[0],
          featureIri: split[1],
        };
      default:
        throw new RangeError();
    }
  }

  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string[][] {
    const rows: string[][] = [];

    const headerRow = ["id", "ctime", "mtime", "description"];
    // Output all feature sets and values so they're represented in the CSV.
    for (const featureSetDefinition of worksheetDefinition.featureSets) {
      // Column for indicating the feature set is selecting
      headerRow.push(featureSetDefinition.iri);
      // Columns for each (feature set, feature) combination
      // The cells under this column contain a list of selected feature values
      for (const featureIri of featureSetDefinition.featureIris) {
        headerRow.push(featureSetDefinition.iri + "|" + featureIri);
      }
    }
    rows.push(headerRow);

    for (const worksheetState of worksheetStates) {
      const dataRow = [
        worksheetState.id,
        new Date(worksheetState.ctime).toISOString(),
        new Date(worksheetState.mtime).toISOString(),
      ];

      if (worksheetState.text) {
        dataRow.push(worksheetState.text);
      } else {
        dataRow.push("");
      }

      for (const header of headerRow.slice(
        GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX
      )) {
        const {
          featureSetIri,
          featureIri,
        } = GoogleSheetsWorksheetStateExporter.parseHeader(header);
        const featureSetState = worksheetState.featureSets?.find(
          existingFeatureSetState =>
            existingFeatureSetState.iri === featureSetIri
        );
        if (!featureSetState) {
          dataRow.push("");
          continue;
        }
        if (!featureIri) {
          // Feature set is selected
          dataRow.push("1");
          continue;
        }
        const featureState = featureSetState.features?.find(
          existingFeatureState => existingFeatureState.iri === featureIri
        );
        if (!featureState) {
          dataRow.push("");
          continue;
        }
        const selectedFeatureValueIris = (featureState.values ?? [])
          .filter(value => value.selected)
          .map(value => value.iri);
        if (selectedFeatureValueIris.length === 0) {
          dataRow.push("");
          continue;
        }
        dataRow.push(selectedFeatureValueIris.join(";"));
      }

      rows.push(dataRow);
    }

    return rows;
  }
}
