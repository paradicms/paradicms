import {Store} from "pullstate";
import {emptyDataset, ObjectQueryResults} from "@paradicms/models";

export const CurrentResultsStore = new Store<{
  currentResults: ObjectQueryResults;
  initialized: boolean;
}>({
  currentResults: {facets: [], dataset: emptyDataset, totalObjectsCount: 0},
  initialized: false,
});
