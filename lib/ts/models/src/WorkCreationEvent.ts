import {WorkEvent} from "./WorkEvent";
import {ContributorsMixin} from "./ContributorsMixin";
import {CreatorsMixin} from "./CreatorsMixin";

export interface WorkCreationEvent
  extends WorkEvent,
    ContributorsMixin,
    CreatorsMixin {
  readonly type: "WorkCreation";
}
