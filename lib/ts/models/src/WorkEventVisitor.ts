import {WorkCreation} from "./WorkCreation";
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
