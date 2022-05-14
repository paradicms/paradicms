import {Dataset} from "@paradicms/models";
import {Facet} from "@paradicms/facets";

export interface GetWorksResult {
  readonly dataset: Dataset;
  readonly facets: readonly Facet[];
  readonly totalWorksCount: number;
}
