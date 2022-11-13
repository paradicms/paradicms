import {ModelSet} from "@paradicms/models";
import {Facet} from "@paradicms/facets";

export interface GetWorksResult {
  readonly modelSet: ModelSet;
  readonly facets: readonly Facet[];
  readonly totalWorksCount: number;
}
