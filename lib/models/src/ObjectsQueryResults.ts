import {Facet} from "./Facet";
import {Dataset} from "./Dataset";

export interface ObjectsQueryResults {
  readonly dataset: Dataset;
  readonly facets: readonly Facet[];
  readonly totalObjectsCount: number;
}
