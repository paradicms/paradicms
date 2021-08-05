import {Query} from "~/models/Query";
import {Store} from "pullstate";

export const CurrentQueryStore = new Store<{
  currentQuery: Query;
  initialized: boolean;
}>({
  currentQuery: {filters: [], limit: 10, offset: 0},
  initialized: false,
});
