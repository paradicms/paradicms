import {ModelSet} from "@paradicms/models";

export interface GetWorkAgentsResult {
  readonly modelSet: ModelSet;
  readonly totalWorkAgentsCount: number;
}
