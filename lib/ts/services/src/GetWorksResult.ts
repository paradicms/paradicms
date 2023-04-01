import {ModelSet} from "@paradicms/models";
import {Facet} from "./Facet";

export interface GetWorksResult {
  readonly modelSet: ModelSet;
  readonly facets: readonly Facet[];
  readonly totalWorksCount: number;
}
