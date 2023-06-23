import {Event} from "./Event";
import {WorkLocation} from "./WorkLocation";

export interface WorkEvent extends Event {
  readonly workLocation: WorkLocation | null;
}
