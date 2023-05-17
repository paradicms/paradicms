import {GoogleSheetsWorksheetStateConfiguration} from "~/models/GoogleSheetsWorksheetStateConfiguration";
import {WorksheetState} from "~/models/WorksheetState";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateService} from "~/services/WorksheetStateService";
import {GoogleSheetsWorksheetStateExporter} from "~/exporters/GoogleSheetsWorksheetStateExporter";
import {convertGapiErrorToException} from "~/services/GapiException";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {GoogleSheetsWorksheetStateImporter} from "~/importers/GoogleSheetsWorksheetStateImporter";
import {Secrets} from "~/Secrets";

export class GoogleSheetsWorksheetStateService
  implements WorksheetStateService {
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

  deleteWorksheetState(id: string): Promise<void> {
    return this.getWorksheetStates().then(worksheetStates =>
      this.replaceWorksheetStates(
        worksheetStates.filter(worksheetState => worksheetState.id !== id)
      )
    );
  }

  private getFirstSheetData(): Promise<string[][]> {
    return this.getSpreadsheetsResource().then(spreadsheets =>
      spreadsheets
        .get({
          includeGridData: true,
          spreadsheetId: this.configuration.spreadsheetId,
        })
        .then(
          response => {
            const sheets = response.result.sheets;
            if (!sheets || !sheets.length) {
              return [];
            }

            const firstSheet = sheets[0];
            if (!firstSheet.data) {
              return [];
            }

            const firstSheetData = firstSheet.data[0];

            const rowData = firstSheetData.rowData;
            if (!rowData) {
              return [];
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
            return stringRows;
          }
          // (reason: any) => convertGapiErrorToException(reason)
        )
    );
  }

  private getSpreadsheetsResource(): Promise<
    gapi.client.sheets.SpreadsheetsResource
  > {
    return this.loadGapiClient().then(
      () => (gapi.client as any).sheets.spreadsheets
    );
  }

  getWorksheetState(id: string): Promise<WorksheetState> {
    return this.getWorksheetStates().then(worksheetStates => {
      for (const worksheetState of worksheetStates) {
        if (worksheetState.id === id) {
          return worksheetState;
        }
      }
      throw new NoSuchWorksheetStateException(id);
    });
  }

  getWorksheetStateIds(): Promise<string[]> {
    return this.getWorksheetStates().then(worksheetStates =>
      worksheetStates.map(worksheetState => worksheetState.id)
    );
  }

  private getWorksheetStates(): Promise<WorksheetState[]> {
    return this.getFirstSheetData().then(stringRows =>
      new GoogleSheetsWorksheetStateImporter().importCsvRows(stringRows)
    );
  }

  private loadGapiClient(): Promise<void> {
    return new Promise<void>(resolve => {
      gapi.load("client", () => {
        gapi.client.load("sheets", "v4", () => {
          resolve();
        });
      });
    })
      .then(
        () =>
          gapi.client.init({
            apiKey: Secrets.GOOGLE_API_KEY,
          }),
        reason => convertGapiErrorToException(reason)
      )
      .then(() => {
        gapi.client.setToken({
          access_token: this.accessToken,
        });
      });
  }

  putWorksheetState(state: WorksheetState): Promise<void> {
    return this.getWorksheetStates().then(oldWorksheetStates => {
      const newWorksheetStates: WorksheetState[] = [];
      let replaced: boolean = false;
      for (const oldWorksheetState of oldWorksheetStates) {
        if (!replaced && oldWorksheetState.id === state.id) {
          newWorksheetStates.push(state);
          replaced = true;
        } else {
          newWorksheetStates.push(oldWorksheetState);
        }
      }
      if (!replaced) {
        newWorksheetStates.push(state);
      }

      return this.replaceWorksheetStates(newWorksheetStates);
    });
  }

  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void> {
    return this.getWorksheetStates().then(worksheetStates => {
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
        throw new NoSuchWorksheetStateException(kwds.oldId);
      }

      return this.replaceWorksheetStates(newWorksheetStates);
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
    let maxStringRowLength = -1;
    for (const stringRow of stringRows) {
      if (stringRow.length > maxStringRowLength) {
        maxStringRowLength = stringRow.length;
      }
      const values: gapi.client.sheets.CellData[] = [];
      for (const stringCell of stringRow) {
        values.push({userEnteredValue: {stringValue: stringCell}});
      }
      rows.push({values});
    }

    if (maxStringRowLength > 26) {
      // By default a new sheet only has 26 columns
      // https://github.com/OpenRefine/OpenRefine/issues/2760
      requests.push({
        appendDimension: {
          dimension: "COLUMNS",
          length: maxStringRowLength - 26,
        },
      });
    }

    requests.push({appendCells: {fields: "*", rows}});

    return this.getSpreadsheetsResource().then(spreadsheets =>
      (spreadsheets as any).batchUpdate({spreadsheetId}, {requests}).then(
        () => {},
        (reason: any) => convertGapiErrorToException(reason)
      )
    );
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
