import {WorkCreationEvent} from "./WorkCreationEvent";
import {WorkModificationEvent} from "./WorkModificationEvent";

// Discriminated union on "type"
export type WorkEventUnion = WorkCreationEvent | WorkModificationEvent;
