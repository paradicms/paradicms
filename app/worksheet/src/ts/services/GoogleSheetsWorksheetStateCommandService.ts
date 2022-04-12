import {GoogleSheetsWorksheetStateConfiguration} from "~/models/GoogleSheetsWorksheetStateConfiguration";
import {WorksheetState} from "~/models/WorksheetState";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateCommandService} from "~/services/WorksheetStateCommandService";
import {GoogleSheetsWorksheetStateExporter} from "~/exporters/GoogleSheetsWorksheetStateExporter";
import {convertGapiErrorToException} from "~/services/GapiException";
import {GoogleSheetsWorksheetStateQueryService} from "~/services/GoogleSheetsWorksheetStateQueryService";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";

export class GoogleSheetsWorksheetStateCommandService
  implements WorksheetStateCommandService
{
  constructor(
    private readonly configuration: GoogleSheetsWorksheetStateConfiguration,
    private readonly worksheetDefinition: WorksheetDefinition
  ) {}

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

  private getWorksheetStates() {
    return GoogleSheetsWorksheetStateQueryService.getWorksheetStates({
      spreadsheetId: this.configuration.spreadsheetId,
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
      (GoogleSheetsWorksheetStateQueryService.getSpreadsheetsResource() as any)
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
