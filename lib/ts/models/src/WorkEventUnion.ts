import {WorkClosing} from "./WorkClosing";
import {WorkCreation} from "./WorkCreation";
import {WorkOpening} from "./WorkOpening";

// Discriminated union on "type"
export type WorkEventUnion = WorkClosing | WorkCreation | WorkOpening;
