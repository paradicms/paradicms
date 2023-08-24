import {Agent} from "./Agent";
import {Event} from "./Event";
import {WorkLocation} from "./WorkLocation";

export interface WorkEvent extends Event {
  readonly agents: readonly Agent[];
  readonly workLocation: WorkLocation | null;
}
