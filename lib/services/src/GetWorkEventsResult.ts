import {Dataset} from "@paradicms/models";

export interface GetWorkEventsResult {
  readonly dataset: Dataset;
  readonly totalWorkEventsCount: number;
}
