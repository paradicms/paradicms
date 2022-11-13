import {Dataset} from "@paradicms/models";

export interface GetWorkEventsResult {
  readonly modelSet: Dataset;
  readonly totalWorkEventsCount: number;
  readonly workEventUris: readonly string[];
}
