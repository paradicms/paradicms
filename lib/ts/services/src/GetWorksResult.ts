import {Dataset} from "@paradicms/models";
import {Facet} from "@paradicms/facets";

export interface GetWorksResult {
  readonly modelSet: Dataset;
  readonly facets: readonly Facet[];
  readonly totalWorksCount: number;
}
