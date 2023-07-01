import {Event} from "./Event";
import {WorkLocation} from "./WorkLocation";
import {AgentUnion} from "./AgentUnion";

export interface WorkEvent extends Event {
  readonly agents: readonly AgentUnion[];
  readonly workLocation: WorkLocation | null;
}
