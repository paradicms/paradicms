import {WorkEvent} from "./WorkEvent";
import {ContributorsMixin} from "./ContributorsMixin";
import {CreatorsMixin} from "./CreatorsMixin";
import {AgentUnion} from "./AgentUnion";

export interface WorkCreationEvent
  extends WorkEvent,
    ContributorsMixin,
    CreatorsMixin {
  readonly agents: readonly AgentUnion[];
  readonly type: "WorkCreation";
}
