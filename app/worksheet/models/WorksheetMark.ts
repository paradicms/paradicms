import {WorksheetMode} from "~/models/WorksheetMode";

export interface WorksheetMark {
  readonly featureUri: string | null;
  readonly featureSetUri: string | null;
  readonly mode: WorksheetMode;
  readonly review: boolean;
  readonly worksheetStateId: string;
}
