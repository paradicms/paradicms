import {ObjectQueryResults} from "./ObjectQueryResults";
import {JoinedFacet} from "./JoinedFacet";

export interface JoinedObjectQueryResults
  extends Omit<ObjectQueryResults, "facets"> {
  readonly facets: readonly JoinedFacet[];
}
