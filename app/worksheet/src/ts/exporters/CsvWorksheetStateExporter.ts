import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";
import * as _ from "lodash";

export class CsvWorksheetStateExporter
  implements WorksheetStateExporter<string[][]>
{
  static readonly FIRST_FEATURE_COLUMN_INDEX = 5;

  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string[][] {
    const rows: string[][] = [];

    const featureHeader = (featureSetId: string, featureId: string) => {
      if (worksheetStates.length === 1) {
        const worksheetState = worksheetStates[0];
        if (
          worksheetState.featureSets &&
          worksheetState.featureSets.length === 1
        ) {
          // # 318: don't prefix CSV header names if there is only one feature set defined in all worksheets
          return featureId.toString();
        }
      }

      const featureSetDefinition = worksheetDefinition.featureSets.find(
        (checkFeatureSetDefinition) =>
          checkFeatureSetDefinition.id === featureSetId
      );
      if (!featureSetDefinition) {
        return undefined;
      }
      // const featureDefinition = worksheetDefinition.features.find((featureDefinition) => featureDefinition.id.equals(featureId))!;
      return featureSetDefinition.displayNameEn + "/" + featureId.toString();
    };

    const headerRow = ["id", "ctime", "mtime", "description", "workType"];
    for (const featureSetDefinition of worksheetDefinition.featureSets) {
      for (const featureId of featureSetDefinition.featureIds) {
        const header = featureHeader(featureSetDefinition.id, featureId);
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

      if (_.isEmpty(worksheetState.featureSets)) {
        continue;
      }

      const workType: string[] = [];
      for (const featureSetState of worksheetState.featureSets) {
        const featureSetDefinition = worksheetDefinition.featureSets.find(
          (featureSetDefinition) =>
            featureSetDefinition.id === featureSetState.id
        );
        if (featureSetDefinition) {
          workType.push(featureSetDefinition.displayNameEn);
        }

        for (const featureState of featureSetState.features) {
          if (!featureState.selectedValueIds) {
            // Ignore text for now
            continue;
          }

          const header = featureHeader(featureSetState.id, featureState.id);
          if (!header) {
            console.warn(
              "feature set + feature not present in definition? skipping: " +
                featureSetState.id.toString() +
                "/" +
                featureState.id.toString()
            );
            continue;
          }

          const dataRowIndex = headerRow.indexOf(header);
          if (dataRowIndex < 0) {
            console.warn(
              "feature set + feature not present in definition? skipping: " +
                featureSetState.id.toString() +
                "/" +
                featureState.id.toString()
            );
            continue;
          }

          const values: string[] = [];
          for (const selectedValueId of featureState.selectedValueIds) {
            const featureValueDefinition =
              worksheetDefinition.featureValues.find(
                (featureValueDefinition) =>
                  featureValueDefinition.id === selectedValueId
              );
            if (!featureValueDefinition) {
              console.warn(
                "feature value not present in definition? skipping: " +
                  selectedValueId.toString()
              );
              continue;
            }
            values.push(featureValueDefinition.displayNameEn);
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
