import {ModelSet} from "@paradicms/models";

export interface GetWorkEventsResult {
  readonly modelSet: ModelSet;
  readonly totalWorkEventsCount: number;
  readonly workEventKeys: readonly string[];
}
