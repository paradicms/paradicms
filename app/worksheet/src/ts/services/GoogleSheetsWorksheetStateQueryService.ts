import {GoogleSheetsWorksheetStateConfiguration} from "~/models/GoogleSheetsWorksheetStateConfiguration";
import {WorksheetState} from "~/models/WorksheetState";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateQueryService} from "~/services/WorksheetStateQueryService";
import {GoogleSheetsWorksheetStateImporter} from "~/components/worksheet/state/importers/GoogleSheetsWorksheetStateImporter";
import {convertGapiErrorToException} from "~/services/GapiException";
import * as _ from "lodash";

export class GoogleSheetsWorksheetStateQueryService
  implements WorksheetStateQueryService
{
  constructor(
    private readonly configuration: GoogleSheetsWorksheetStateConfiguration
  ) {}

  static getSpreadsheetsResource(): gapi.client.sheets.SpreadsheetsResource {
    return (gapi.client as any).sheets.spreadsheets;
  }

  static getWorksheetStates(kwds: {
    spreadsheetId: string;
  }): Promise<WorksheetState[]> {
    const spreadsheetId = kwds.spreadsheetId;
    return new Promise((resolve, reject) => {
      GoogleSheetsWorksheetStateQueryService.getFirstSheetData({
        spreadsheetId,
      }).then((stringRows) => {
        resolve(
          new GoogleSheetsWorksheetStateImporter().importCsvRows(stringRows)
        );
      }, reject);
    });
  }

  getWorksheetState(kwds: {id: string}): Promise<WorksheetState> {
    const spreadsheetId = this.configuration.spreadsheetId;
    return new Promise((resolve, reject) => {
      GoogleSheetsWorksheetStateQueryService.getWorksheetStates({
        spreadsheetId,
      }).then((worksheetStates) => {
        for (const worksheetState of worksheetStates) {
          if (worksheetState.id === kwds.id) {
            resolve(worksheetState);
            return;
          }
        }
        reject(new NoSuchWorksheetStateException(kwds.id));
      }, reject);
    });
  }

  getWorksheetStateIds(): Promise<string[]> {
    const spreadsheetId = this.configuration.spreadsheetId;
    return new Promise((resolve, reject) => {
      GoogleSheetsWorksheetStateQueryService.getWorksheetStates({
        spreadsheetId,
      }).then(
        (worksheetStates) =>
          resolve(worksheetStates.map((worksheetState) => worksheetState.id)),
        reject
      );
    });
  }

  private static getFirstSheetData(kwds: {
    spreadsheetId: string;
  }): Promise<string[][]> {
    return new Promise((resolve, reject) => {
      GoogleSheetsWorksheetStateQueryService.getSpreadsheetsResource()
        .get({includeGridData: true, spreadsheetId: kwds.spreadsheetId})
        .then(
          (response) => {
            const sheets = response.result.sheets;
            if (!sheets || !sheets.length) {
              resolve([]);
              return;
            }

            const firstSheet = sheets[0];
            if (!firstSheet.data) {
              resolve([]);
              return;
            }

            const firstSheetData = firstSheet.data[0];

            const rowData = firstSheetData.rowData;
            if (!rowData) {
              resolve([]);
              return;
            }

            const stringRows: string[][] = [];
            for (const rowDatum of rowData) {
              if (!rowDatum.values) {
                continue;
              }
              const stringRow: string[] = [];
              for (const cellDatum of rowDatum.values) {
                const value = cellDatum.effectiveValue;
                let stringValue: string;
                if (!value) {
                  stringValue = "";
                } else if (!_.isUndefined(value.boolValue)) {
                  stringValue = value.boolValue ? "true" : "false";
                } else if (!_.isUndefined(value.errorValue)) {
                  stringValue = "error";
                } else if (!_.isUndefined(value.formulaValue)) {
                  stringValue = "formula";
                } else if (!_.isUndefined(value.numberValue)) {
                  stringValue = value.numberValue.toString();
                } else if (!_.isUndefined(value.stringValue)) {
                  stringValue = value.stringValue;
                } else {
                  stringValue = "";
                }
                stringRow.push(stringValue);
              }
              stringRows.push(stringRow);
            }
            resolve(stringRows);
          },
          (reason: any) => {
            reject(convertGapiErrorToException(reason));
          }
        );
    });
  }
}
