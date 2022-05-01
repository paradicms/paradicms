import {WorksheetState} from "~/models/WorksheetState";

export interface WorksheetStateService {
  deleteWorksheetState(id: string): Promise<void>;
  getWorksheetState(id: string): Promise<WorksheetState>;
  getWorksheetStateIds(): Promise<string[]>;
  putWorksheetState(state: WorksheetState): Promise<void>;
  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void>;
}
