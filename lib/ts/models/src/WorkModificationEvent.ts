import {Agent} from "./Agent";
import {ContributorsMixin} from "./ContributorsMixin";
import {Event} from "./Event";
import {WorkLocation} from "./WorkLocation";

export interface WorkModificationEvent extends Event, ContributorsMixin {
  readonly agents: readonly Agent[];
  readonly workLocation: WorkLocation | null;
  readonly type: "WorkModification";
}
