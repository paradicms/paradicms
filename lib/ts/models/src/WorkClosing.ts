import {WorkEvent} from "./WorkEvent";

export interface WorkClosing extends WorkEvent {
  readonly type: "WorkClosing";
}
