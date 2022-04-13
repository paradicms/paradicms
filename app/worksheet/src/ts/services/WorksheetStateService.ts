import {WorksheetState} from "~/models/WorksheetState";

export interface WorksheetStateService {
  deleteWorksheetState(kwds: {id: string}): Promise<void>;
  getWorksheetState(kwds: {id: string}): Promise<WorksheetState>;
  getWorksheetStateIds(): Promise<string[]>;
  putWorksheetState(kwds: {state: WorksheetState}): Promise<void>;
  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void>;
}
