import {ModelSet} from "@paradicms/models";
import {FacetUnion} from "./FacetUnion";

export interface GetWorksResult {
  readonly modelSet: ModelSet;
  readonly facets: readonly FacetUnion[];
  readonly totalWorksCount: number;
}
