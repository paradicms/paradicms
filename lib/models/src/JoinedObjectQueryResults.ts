import {JoinedDataset} from "./JoinedDataset";
import {ObjectQueryResults} from "./ObjectQueryResults";

export interface JoinedObjectQueryResults
  extends Omit<ObjectQueryResults, "dataset"> {
  readonly joinedDataset: JoinedDataset;
}
