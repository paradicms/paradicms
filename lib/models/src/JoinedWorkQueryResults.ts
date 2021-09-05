import {JoinedFacet} from "./JoinedFacet";
import {WorkQueryResults} from "./WorkQueryResults";

export interface JoinedWorkQueryResults
  extends Omit<WorkQueryResults, "facets"> {
  readonly facets: readonly JoinedFacet[];
}
