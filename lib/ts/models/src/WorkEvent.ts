import {Event} from "./Event";
import {Work} from "./Work";
import {WorkLocation} from "./WorkLocation";

export interface WorkEvent extends Event {
  readonly work: Work;
  readonly workLocation: WorkLocation | null;
  readonly workUri: string;
}
