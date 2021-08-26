import {JoinedDataset} from "./JoinedDataset";
import {ObjectQueryResults} from "./ObjectQueryResults";
import {JoinedFacet} from "./JoinedFacet";

export interface JoinedObjectQueryResults
  extends Pick<ObjectQueryResults, "totalObjectsCount"> {
  readonly dataset: JoinedDataset;
  readonly facets: readonly JoinedFacet[];
}
