import {Dataset} from "@paradicms/models";

export interface GetWorkAgentsResult {
  readonly dataset: Dataset;
  readonly totalWorkAgentsCount: number;
}
