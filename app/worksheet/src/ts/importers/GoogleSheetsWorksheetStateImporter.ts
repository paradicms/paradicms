import {WorksheetFeatureSetState} from "~/models/WorksheetFeatureSetState";
import {WorksheetFeatureState} from "~/models/WorksheetFeatureState";
import {WorksheetState} from "~/models/WorksheetState";
import {GoogleSheetsWorksheetStateExporter} from "~/exporters/GoogleSheetsWorksheetStateExporter";
import * as _ from "lodash";
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
      const ctime = Date.parse(dataRow[1]);
      const mtime = Date.parse(dataRow[2]);

      let description: string | undefined = dataRow[3];
      description = description.length ? description : undefined;

      // Build a map of maps of feature value id's.
      const featureSetValueIds: {
        [index: string]: {[index: string]: string[]};
      } = {};
      dataRow
        .slice(GoogleSheetsWorksheetStateExporter.FIRST_FEATURE_COLUMN_INDEX)
        .map((dataColumn, dataColumnI) => {
          const headerColumn = parsedHeaderColumns[dataColumnI];
          if (!headerColumn) {
            return;
          }
          const [featureSetId, featureId] = headerColumn;
          if (!featureSetValueIds[featureSetId.toString()]) {
            featureSetValueIds[featureSetId.toString()] = {};
          }
          featureSetValueIds[featureSetId.toString()][featureId.toString()] =
            dataColumn.length ? dataColumn.split(";") : [];
        });
      console.info(
        "Feature set value ids: " + JSON.stringify(featureSetValueIds)
      );

      const featureSetStates: WorksheetFeatureSetState[] = [];
      for (const featureSetId of _.keys(featureSetValueIds)) {
        const featureStates: WorksheetFeatureState[] = [];
        for (const featureId of _.keys(featureSetValueIds[featureSetId])) {
          const selectedValueIds = featureSetValueIds[featureSetId][featureId];
          featureStates.push({
            id: featureId,
            selectedValueIds: selectedValueIds.length
              ? selectedValueIds
              : undefined,
          });
        }
        featureSetStates.push({
          features: featureStates,
          id: featureSetId,
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
