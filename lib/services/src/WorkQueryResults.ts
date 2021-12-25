import {Dataset} from "@paradicms/models";
import {Facet} from "@paradicms/facets";

export interface WorkQueryResults {
  readonly dataset: Dataset;
  readonly facets: readonly Facet[];
  readonly totalWorksCount: number;
}
