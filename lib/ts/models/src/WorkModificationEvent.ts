import {WorkEvent} from "./WorkEvent";
import {ContributorsMixin} from "./ContributorsMixin";

export interface WorkModificationEvent extends WorkEvent, ContributorsMixin {
  readonly type: "WorkModification";
}
