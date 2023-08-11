import {WorksheetMode} from "~/models/WorksheetMode";

export interface WorksheetMark {
  readonly featureKey: string | null;
  readonly featureSetKey: string | null;
  readonly mode: WorksheetMode;
  readonly review: boolean;
  readonly worksheetStateId: string;
}
