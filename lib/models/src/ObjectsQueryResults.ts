import {Facet} from "./Facet";
import {Object} from "./Object";

export interface ObjectsQueryResults {
  readonly facets: readonly Facet[];
  readonly objects: readonly Object[];
  readonly text: string | null;
  readonly totalCount: number;
}
