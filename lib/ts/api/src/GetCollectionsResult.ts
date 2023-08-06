import {ModelSet} from "@paradicms/models";

export interface GetCollectionsResult {
  readonly modelSet: ModelSet;
  readonly totalCollectionsCount: number;
}
