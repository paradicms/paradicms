import {WorkCreationEvent} from "./WorkCreationEvent";
import {WorkModificationEvent} from "./WorkModificationEvent";

export type WorkEvent = WorkCreationEvent | WorkModificationEvent;
