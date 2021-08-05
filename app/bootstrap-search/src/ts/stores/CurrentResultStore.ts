import {Store} from "pullstate";
import {GetObjectsResult} from "~/services/ObjectQueryService";

export const CurrentResultStore = new Store<{
  currentResult: GetObjectsResult;
  initialized: boolean;
}>({
  currentResult: {objects: [], totalObjectsCount: 0},
  initialized: false,
});
