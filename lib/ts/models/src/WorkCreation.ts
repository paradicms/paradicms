import {WorkEvent} from "./WorkEvent";
import {Agent} from "./Agent";
import {ContributorsMixin} from "./ContributorsMixin";
import {CreatorsMixin} from "./CreatorsMixin";

export interface WorkCreation
  extends WorkEvent,
    ContributorsMixin,
    CreatorsMixin {
  readonly agents: readonly Agent[];
  readonly agentUris: readonly string[];
}
