import {ModelSet} from "@paradicms/models";

export interface GetEventsResult {
  readonly modelSet: ModelSet;
  readonly totalEventsCount: number;
}
