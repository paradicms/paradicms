import {WorkEvent} from "./WorkEvent";

export interface WorkOpening extends WorkEvent {
  readonly type: "WorkOpening";
}
