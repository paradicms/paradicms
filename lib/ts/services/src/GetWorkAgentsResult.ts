import {Dataset} from "@paradicms/models";

export interface GetWorkAgentsResult {
  readonly modelSet: Dataset;
  readonly totalWorkAgentsCount: number;
  readonly workAgentUris: readonly string[];
}
