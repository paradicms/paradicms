import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetFeatureState} from "~/models/WorksheetFeatureState";
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
    const parsedHeaderColumns: any[] = headerRow
      .slice(GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX)
      .map((headerColumn) =>
        GoogleSheetsWorksheetStateExporter.parseFeatureHeader(headerColumn)
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

      // Build a map of maps of feature value id's.
      const featureSetValueUris: {
        [index: string]: {[index: string]: string[]};
      } = {};
      dataRow
        .slice(GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX)
        .map((dataColumn, dataColumnI) => {
          const headerColumn = parsedHeaderColumns[dataColumnI];
          if (!headerColumn) {
            return;
          }
          const [featureSetUri, featureUri] = headerColumn;
          if (!featureSetValueUris[featureSetUri.toString()]) {
            featureSetValueUris[featureSetUri.toString()] = {};
          }
          featureSetValueUris[featureSetUri.toString()][featureUri.toString()] =
            dataColumn.length ? dataColumn.split(";") : [];
        });
      console.info(
        "Feature set value ids: " + JSON.stringify(featureSetValueUris)
      );

      const featureSetStates: WorksheetFeatureSetState[] = [];
      for (const featureSetValueUri of Object.keys(featureSetValueUris)) {
        const featureStates: WorksheetFeatureState[] = [];
        for (const featureUri of Object.keys(
          featureSetValueUris[featureSetValueUri]
        )) {
          const selectedValueUris =
            featureSetValueUris[featureSetValueUri][featureUri];
          featureStates.push({
            uri: featureUri,
            values:
              selectedValueUris.length > 0
                ? selectedValueUris.map((selectedValueUri) => ({
                    selected: true,
                    uri: selectedValueUri,
                  }))
                : undefined,
            text: undefined,
          });
        }
        featureSetStates.push({
          features: featureStates.length > 0 ? featureStates : undefined,
          uri: featureSetValueUri,
        });
      }
      worksheetStates.push({
        ctime,
        featureSets: featureSetStates,
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
