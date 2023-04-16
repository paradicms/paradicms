import {Event} from "./Event";
import {Work} from "./Work";
import {WorkEventVisitor} from "./WorkEventVisitor";
import {WorkLocation} from "./WorkLocation";

export interface WorkEvent extends Event {
  accept<T>(visitor: WorkEventVisitor<T>): T;
  readonly work: Work;
  readonly workLocation: WorkLocation | null;
  readonly workUri: string;
}
