import {WorksSort} from "./WorksSort";
import {WorksQuery} from "./WorksQuery";

export interface GetWorkKeysOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly query: WorksQuery;
  readonly sort?: WorksSort;
}
