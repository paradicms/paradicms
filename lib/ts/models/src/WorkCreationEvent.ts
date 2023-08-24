import {Agent} from "./Agent";
import {ContributorsMixin} from "./ContributorsMixin";
import {CreatorsMixin} from "./CreatorsMixin";
import {Event} from "./Event";
import {WorkLocation} from "./WorkLocation";

export interface WorkCreationEvent
  extends Event,
    ContributorsMixin,
    CreatorsMixin {
  readonly agents: readonly Agent[];
  readonly workLocation: WorkLocation | null;
  readonly type: "WorkCreation";
}
