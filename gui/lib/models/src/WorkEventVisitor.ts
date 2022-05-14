import {WorkCreation} from "./WorkCreation";
import {WorkEvent} from "./WorkEvent";

/**
 * Visitor pattern for concrete WorkEvent instances.
 */
export interface WorkEventVisitor<T> {
  visitWorkCreation(workCreation: WorkCreation): T;
}

/**
 * Visit a WorkEvent. This isn't an abstract accept method on WorkEvent because
 * of issues marking the WorkEvent class abstract and using it with ts-mixer.
 * */
export const visitWorkEvent = <T>(
  workEvent: WorkEvent,
  workEventVisitor: WorkEventVisitor<any>
): T => {
  if (workEvent instanceof WorkCreation) {
    return workEventVisitor.visitWorkCreation(workEvent);
  } else {
    throw new EvalError();
  }
};
