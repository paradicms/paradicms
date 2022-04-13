import {GoogleSheetsWorksheetStateConfiguration} from "~/models/GoogleSheetsWorksheetStateConfiguration";
import {WorksheetState} from "~/models/WorksheetState";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateService} from "~/services/WorksheetStateService";
import {GoogleSheetsWorksheetStateExporter} from "~/exporters/GoogleSheetsWorksheetStateExporter";
import {convertGapiErrorToException} from "~/services/GapiException";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {GoogleSheetsWorksheetStateImporter} from "~/importers/GoogleSheetsWorksheetStateImporter";

export class GoogleSheetsWorksheetStateService
  implements WorksheetStateService
{
  private readonly accessToken: string;
  private readonly configuration: GoogleSheetsWorksheetStateConfiguration;
  private readonly worksheetDefinition: WorksheetDefinition;

  constructor(kwds: {
    accessToken: string;
    configuration: GoogleSheetsWorksheetStateConfiguration;
    worksheetDefinition: WorksheetDefinition;
  }) {
    this.accessToken = kwds.accessToken;
    this.configuration = kwds.configuration;
    this.worksheetDefinition = kwds.worksheetDefinition;
  }

  deleteWorksheetState(kwds: {id: string}): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getWorksheetStates().then(
        (worksheetStates) => {
          this.replaceWorksheetStates(
            worksheetStates.filter(
              (worksheetState) => worksheetState.id !== kwds.id
            )
          ).then(
            () => resolve(),
            (reason) => reject(reason)
          );
        },
        (reason) => reject(reason)
      );
    });
  }

  private getFirstSheetData(): Promise<string[][]> {
    return new Promise((resolve, reject) => {
      gapi.client.setToken({access_token: this.accessToken});
      this.getSpreadsheetsResource()
        .get({
          includeGridData: true,
          spreadsheetId: this.configuration.spreadsheetId,
        })
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
                } else if (typeof value.boolValue !== "undefined") {
                  stringValue = value.boolValue ? "true" : "false";
                } else if (typeof value.errorValue !== "undefined") {
                  stringValue = "error";
                } else if (typeof value.formulaValue !== "undefined") {
                  stringValue = "formula";
                } else if (typeof value.numberValue !== "undefined") {
                  stringValue = value.numberValue.toString();
                } else if (typeof value.stringValue !== "undefined") {
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

  private getSpreadsheetsResource(): gapi.client.sheets.SpreadsheetsResource {
    return (gapi.client as any).sheets.spreadsheets;
  }

  getWorksheetState(kwds: {id: string}): Promise<WorksheetState> {
    return new Promise((resolve, reject) => {
      this.getWorksheetStates().then((worksheetStates) => {
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
    return new Promise((resolve, reject) => {
      this.getWorksheetStates().then(
        (worksheetStates) =>
          resolve(worksheetStates.map((worksheetState) => worksheetState.id)),
        reject
      );
    });
  }

  private getWorksheetStates(): Promise<WorksheetState[]> {
    return new Promise((resolve, reject) => {
      this.getFirstSheetData().then((stringRows) => {
        resolve(
          new GoogleSheetsWorksheetStateImporter().importCsvRows(stringRows)
        );
      }, reject);
    });
  }

  putWorksheetState(kwds: {state: WorksheetState}): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getWorksheetStates().then(
        (oldWorksheetStates) => {
          const newWorksheetStates: WorksheetState[] = [];
          let replaced: boolean = false;
          for (const oldWorksheetState of oldWorksheetStates) {
            if (!replaced && oldWorksheetState.id === kwds.state.id) {
              newWorksheetStates.push(kwds.state);
              replaced = true;
            } else {
              newWorksheetStates.push(oldWorksheetState);
            }
          }
          if (!replaced) {
            newWorksheetStates.push(kwds.state);
          }

          this.replaceWorksheetStates(newWorksheetStates).then(
            () => resolve(),
            (reason) => reject(reason)
          );
        },
        (reason) => reject(reason)
      );
    });
  }

  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getWorksheetStates().then(
        (worksheetStates) => {
          const newWorksheetStates: WorksheetState[] = [];
          let renamed: boolean = false;
          for (const worksheetState of worksheetStates) {
            if (!renamed && worksheetState.id === kwds.oldId) {
              worksheetState.id = kwds.newId;
              renamed = true;
            }
            newWorksheetStates.push(worksheetState);
          }
          if (!renamed) {
            reject(new NoSuchWorksheetStateException(kwds.oldId));
            return;
          }

          this.replaceWorksheetStates(newWorksheetStates).then(
            () => resolve(),
            (reason) => reject(reason)
          );
        },
        (reason) => reject(reason)
      );
    });
  }

  private replaceFirstSheetData(stringRows: string[][]): Promise<void> {
    const spreadsheetId = this.configuration.spreadsheetId;
    const requests: gapi.client.sheets.Request[] = [];
    requests.push({
      deleteRange: {
        range: {
          sheetId: 0,
          startColumnIndex: 0,
          startRowIndex: 0,
        },
        shiftDimension: "ROWS",
      },
    });
    const rows: gapi.client.sheets.RowData[] = [];
    for (const stringRow of stringRows) {
      const values: gapi.client.sheets.CellData[] = [];
      for (const stringCell of stringRow) {
        values.push({userEnteredValue: {stringValue: stringCell}});
      }
      rows.push({values});
    }
    requests.push({appendCells: {fields: "*", rows}});

    return new Promise((resolve, reject) => {
      gapi.client.setToken({access_token: this.accessToken});
      (this.getSpreadsheetsResource() as any)
        .batchUpdate({spreadsheetId}, {requests})
        .then(
          (response: any) => resolve(),
          (reason: any) => {
            reject(convertGapiErrorToException(reason));
          }
        );
    });
  }

  private replaceWorksheetStates(
    newWorksheetStates: WorksheetState[]
  ): Promise<void> {
    return this.replaceFirstSheetData(
      new GoogleSheetsWorksheetStateExporter().export(
        this.worksheetDefinition,
        newWorksheetStates
      )
    );
  }
}
