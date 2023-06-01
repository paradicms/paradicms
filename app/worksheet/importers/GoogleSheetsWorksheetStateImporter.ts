import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetState} from "~/models/WorksheetState";
import {GoogleSheetsWorksheetStateExporter} from "~/exporters/GoogleSheetsWorksheetStateExporter";
import * as Papa from "papaparse";

export class GoogleSheetsWorksheetStateImporter {
  importCsvRows(csvRows: string[][]): WorksheetState[] {
    if (csvRows.length < 2) {
      return [];
    }

    const headerRow = csvRows[0];
    if (
      headerRow.length <
      GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX
    ) {
      return [];
    }
    const parsedHeaderColumns: {
      featureSetIri: string;
      featureIri?: string;
    }[] = headerRow
      .slice(GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX)
      .map(headerColumn =>
        GoogleSheetsWorksheetStateExporter.parseHeader(headerColumn)
      );

    const worksheetStates: WorksheetState[] = [];
    for (const dataRow of csvRows.slice(1)) {
      if (
        dataRow.length <
        GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX
      ) {
        continue;
      }

      if (!dataRow[0].length) {
        continue;
      }
      const id = dataRow[0];
      const ctime = new Date(Date.parse(dataRow[1]));
      const mtime = new Date(Date.parse(dataRow[2]));

      let description: string | undefined = dataRow[3];
      description = description.length ? description : undefined;

      const featureSetStates: WorksheetFeatureSetState[] = [];
      dataRow
        .slice(GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX)
        .forEach((dataColumn, dataColumnI) => {
          if (dataColumn.length === 0) {
            return;
          }
          const headerColumn = parsedHeaderColumns[dataColumnI];
          if (!headerColumn) {
            return;
          }
          const {featureSetIri, featureIri} = headerColumn;
          let featureSetState = featureSetStates.find(
            featureSetState => featureSetState.iri === featureSetIri
          );
          if (!featureSetState) {
            featureSetState = {
              features: undefined,
              iri: featureSetIri,
            };
            featureSetStates.push(featureSetState);
          }

          if (!featureIri) {
            // dataColumn was not empty, so this is a featureSet column
            return;
          }

          let featureState = featureSetState.features?.find(
            feature => feature.iri === featureIri
          );
          if (!featureState) {
            featureState = {
              text: undefined,
              iri: featureIri,
              values: undefined,
            };
            if (featureSetState.features) {
              featureSetState.features.push(featureState);
            } else {
              featureSetState.features = [featureState];
            }
          }

          const featureValueIris = dataColumn.split(";");
          for (const featureValueIri of featureValueIris) {
            let featureValueState = featureState.values?.find(
              featureValue => featureValue.iri === featureValueIri
            );
            if (featureValueState) {
              continue;
            }
            featureValueState = {
              selected: true,
              iri: featureValueIri,
            };
            if (featureState.values) {
              featureState.values.push(featureValueState);
            } else {
              featureState.values = [featureValueState];
            }
          }
        });
      worksheetStates.push({
        ctime,
        featureSets: featureSetStates.length > 0 ? featureSetStates : undefined,
        id,
        mtime,
        text: description,
      });
    }

    return worksheetStates;
  }

  importCsvString(csvString: string) {
    return this.importCsvRows(Papa.parse(csvString).data);
  }
}
