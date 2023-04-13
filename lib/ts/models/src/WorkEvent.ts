import {Event} from "./Event";
import {Work} from "./Work";
import {WorkLocation} from "./WorkLocation";
import {WorkEventVisitor} from "./WorkEventVisitor";

export interface WorkEvent extends Event {
  accept<T>(visitor: WorkEventVisitor<T>): T;
  readonly work: Work;
  readonly workLocation: WorkLocation | null;
  readonly workUri: string;
}
