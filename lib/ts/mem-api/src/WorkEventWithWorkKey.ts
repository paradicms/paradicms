import {WorkEvent} from "@paradicms/models";

export type WorkEventWithWorkKey = WorkEvent & {readonly workKey: string};
