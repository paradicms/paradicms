import {ModelSet} from "@paradicms/models";

export interface GetNamedWorkAgentsResult {
  readonly modelSet: ModelSet;
  readonly totalWorkAgentsCount: number;
  readonly workAgentKeys: readonly string[];
}
