import {WorksheetMode} from "~/models/WorksheetMode";

export interface WorksheetMark {
  readonly featureIri: string | null;
  readonly featureSetIri: string | null;
  readonly mode: WorksheetMode;
  readonly review: boolean;
  readonly worksheetStateId: string;
}
