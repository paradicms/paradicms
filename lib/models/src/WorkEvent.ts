/**
 * Data structure summarizing an event associated with a work.
 *
 * This structure is used to capture the values of multiple properties,
 * such as dcterms:created and dcterms:dateSubmitted, in order to display them
 * on a single screen.
 *
 * A single date must be associated with the event.
 *
 * Must be JSON-compatible for serialization.
 */
import {WorkEventDateTime} from "./WorkEventDateTime";
import {WorkEventType} from "./WorkEventType";

export interface WorkEvent {
  readonly dateTime: WorkEventDateTime;
  readonly type: WorkEventType;
}
