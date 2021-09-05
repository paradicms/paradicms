import {Facet} from "./Facet";
import {Dataset} from "./Dataset";

export interface WorkQueryResults {
  readonly dataset: Dataset;
  readonly facets: readonly Facet[];
  readonly totalWorksCount: number;
}
