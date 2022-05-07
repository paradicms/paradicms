import {WorksheetView} from "~/models/WorksheetView";

export interface WorksheetMark {
  readonly featureUri: string | null;
  readonly featureSetUri: string | null;
  readonly review: boolean;
  readonly view: WorksheetView | null;
  readonly worksheetStateId: string;
}
