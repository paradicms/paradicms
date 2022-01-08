import {Dataset, WorkEvent} from "@paradicms/models";

export interface GetWorkEventsResult {
  readonly dataset: Dataset;
  readonly totalWorkEventsCount: number;
  readonly workEvents: readonly (WorkEvent & {readonly workUri: string})[];
}
