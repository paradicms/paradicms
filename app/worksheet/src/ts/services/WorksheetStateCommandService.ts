import {WorksheetState} from "~/models/WorksheetState";

export interface WorksheetStateCommandService {
  deleteWorksheetState(kwds: {id: string}): Promise<void>;
  putWorksheetState(kwds: {state: WorksheetState}): Promise<void>;
  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void>;
}
