import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";

export class CsvWorksheetStateExporter
  implements WorksheetStateExporter<string[][]>
{
  static readonly FIRST_FEATURE_COLUMN_INDEX = 5;

  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string[][] {
    const rows: string[][] = [];

    const featureHeader = (featureSetUri: string, featureUri: string) => {
      if (worksheetStates.length === 1) {
        const worksheetState = worksheetStates[0];
        if (
          worksheetState.featureSets &&
          worksheetState.featureSets.length === 1
        ) {
          // # 318: don't prefix CSV header names if there is only one feature set defined in all worksheets
          return featureUri.toString();
        }
      }

      const featureSetDefinition =
        worksheetDefinition.featureSetByUriOptional(featureSetUri);
      if (!featureSetDefinition) {
        return undefined;
      }
      // const featureDefinition = worksheetDefinition.features.find((featureDefinition) => featureDefinition.id.equals(featureId))!;
      return featureSetDefinition.title + "|" + featureUri.toString();
    };

    const headerRow = ["id", "ctime", "mtime", "description", "workType"];
    for (const featureSetDefinition of worksheetDefinition.featureSets) {
      for (const featureUri of featureSetDefinition.featureUris) {
        const header = featureHeader(featureSetDefinition.uri, featureUri);
        if (header) {
          headerRow.push(header);
        }
      }
    }
    rows.push(headerRow);

    for (const worksheetState of worksheetStates) {
      const dataRow = new Array(headerRow.length).fill("");
      dataRow[0] = worksheetState.id.toString();
      dataRow[1] = new Date(worksheetState.ctime).toISOString();
      dataRow[2] = new Date(worksheetState.mtime).toISOString();

      if (worksheetState.text) {
        dataRow[3] = worksheetState.text;
      }

      if (
        !worksheetState.featureSets ||
        worksheetState.featureSets.length === 0
      ) {
        continue;
      }

      const workType: string[] = [];
      for (const featureSetState of worksheetState.featureSets ?? []) {
        const featureSetDefinition = worksheetDefinition.featureSets.find(
          (featureSetDefinition) =>
            featureSetDefinition.uri === featureSetState.uri
        );
        if (featureSetDefinition) {
          workType.push(featureSetDefinition.title);
        }

        for (const featureState of featureSetState.features ?? []) {
          if (
            !(featureState.values ?? []).some(
              (featureValueState) => featureValueState.selected
            )
          ) {
            // Ignore text for now
            continue;
          }

          const header = featureHeader(featureSetState.uri, featureState.uri);
          if (!header) {
            console.warn(
              "feature set + feature not present in definition? skipping: " +
                featureSetState.uri.toString() +
                "|" +
                featureState.uri.toString()
            );
            continue;
          }

          const dataRowIndex = headerRow.indexOf(header);
          if (dataRowIndex < 0) {
            console.warn(
              "feature set + feature not present in definition? skipping: " +
                featureSetState.uri.toString() +
                "|" +
                featureState.uri.toString()
            );
            continue;
          }

          const values: string[] = [];
          for (const featureValueState of featureState.values ?? []) {
            if (!featureValueState.selected) {
              continue;
            }
            const featureValueDefinition =
              worksheetDefinition.featureValueByUriOptional(
                featureValueState.uri
              );
            if (!featureValueDefinition) {
              console.warn(
                "feature value not present in definition? skipping: " +
                  featureValueState.uri
              );
              continue;
            }
            values.push(featureValueDefinition.value.value);
          }
          dataRow[dataRowIndex] = values.join(";");
        }
      }

      dataRow[4] = workType.join(";");

      rows.push(dataRow);
    }

    return rows;
  }
}
