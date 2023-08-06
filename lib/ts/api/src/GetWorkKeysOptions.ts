import {WorksSort} from "./WorksSort";

export interface GetWorkKeysOptions {
  readonly limit: number;
  readonly offset: number;
  readonly sort?: WorksSort;
}
