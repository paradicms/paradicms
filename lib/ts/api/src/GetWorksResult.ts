import {ModelSet} from "@paradicms/models";
import {WorksFacet} from "./WorksFacet";

export interface GetWorksResult {
  readonly modelSet: ModelSet;
  readonly facets: readonly WorksFacet[];
  readonly totalWorksCount: number;
}
