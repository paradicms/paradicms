import {WorkCreation} from "./WorkCreation";
import {WorkEvent} from "./WorkEvent";
import {WorkClosing} from "./WorkClosing";
import {WorkOpening} from "./WorkOpening";

/**
 * Visitor pattern for concrete WorkEvent instances.
 */
export interface WorkEventVisitor<T> {
  visitWorkClosing(workClosing: WorkClosing): T;
  visitWorkCreation(workCreation: WorkCreation): T;
  visitWorkOpening(workOpening: WorkOpening): T;
}

/**
 * Visit a WorkEvent. This isn't an abstract accept method on WorkEvent because
 * of issues marking the WorkEvent class abstract and using it with ts-mixer.
 * */
export const visitWorkEvent = <T>(
  workEvent: WorkEvent,
  workEventVisitor: WorkEventVisitor<any>
): T => {
  if (workEvent instanceof WorkClosing) {
    return workEventVisitor.visitWorkClosing(workEvent);
  } else if (workEvent instanceof WorkCreation) {
    return workEventVisitor.visitWorkCreation(workEvent);
  } else if (workEvent instanceof WorkOpening) {
    return workEventVisitor.visitWorkOpening(workEvent);
  } else {
    throw new EvalError();
  }
};
