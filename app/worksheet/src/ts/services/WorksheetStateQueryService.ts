import {WorksheetState} from "~/models/WorksheetState";

export interface WorksheetStateQueryService {
  getWorksheetState(kwds: {id: string}): Promise<WorksheetState>;
  getWorksheetStateIds(): Promise<string[]>;
}
