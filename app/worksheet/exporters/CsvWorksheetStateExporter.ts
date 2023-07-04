import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";

export class CsvWorksheetStateExporter
  implements WorksheetStateExporter<string[][]> {
  static readonly FIRST_FEATURE_COLUMN_INDEX = 5;

  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string[][] {
    const rows: string[][] = [];

    const featureHeader = (featureSetIri: string, featureIri: string) => {
      if (worksheetStates.length === 1) {
        const worksheetState = worksheetStates[0];
        if (
          worksheetState.featureSets &&
          worksheetState.featureSets.length === 1
        ) {
          // # 318: don't prefix CSV header names if there is only one feature set defined in all worksheets
          return featureIri;
        }
      }

      const featureSetDefinition = worksheetDefinition.featureSetByIri(
        featureSetIri
      );
      if (!featureSetDefinition) {
        return undefined;
      }
      // const featureDefinition = worksheetDefinition.features.find((featureDefinition) => featureDefinition.id.equals(featureId))!;
      return featureSetDefinition.label + "|" + featureIri;
    };

    const headerRow = ["id", "ctime", "mtime", "description", "workType"];
    for (const featureSetDefinition of worksheetDefinition.featureSets) {
      for (const featureIri of featureSetDefinition.featureIris) {
        const header = featureHeader(featureSetDefinition.iri, featureIri);
        if (header) {
          headerRow.push(header);
        }
      }
    }
    rows.push(headerRow);

    for (const worksheetState of worksheetStates) {
      const dataRow = new Array(headerRow.length).fill("");
      dataRow[0] = worksheetState.id;
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
          featureSetDefinition =>
            featureSetDefinition.iri === featureSetState.uri
        );
        if (featureSetDefinition) {
          workType.push(featureSetDefinition.label);
        }

        for (const featureState of featureSetState.features ?? []) {
          if (
            !(featureState.values ?? []).some(
              featureValueState => featureValueState.selected
            )
          ) {
            // Ignore text for now
            continue;
          }

          const header = featureHeader(featureSetState.uri, featureState.uri);
          if (!header) {
            log.warn(
              "feature set + feature not present in definition? skipping: " +
                featureSetState.uri +
                "|" +
                featureState.uri
            );
            continue;
          }

          const dataRowIndex = headerRow.indexOf(header);
          if (dataRowIndex < 0) {
            log.warn(
              "feature set + feature not present in definition? skipping: " +
                featureSetState.uri +
                "|" +
                featureState.uri
            );
            continue;
          }

          const values: string[] = [];
          for (const featureValueState of featureState.values ?? []) {
            if (!featureValueState.selected) {
              continue;
            }
            const featureValueDefinition = worksheetDefinition.featureValueByIri(
              featureValueState.uri
            );
            if (!featureValueDefinition) {
              log.warn(
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
