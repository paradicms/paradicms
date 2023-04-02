import {ThumbnailSelector, WorkJoinSelector} from "@paradicms/models";
import {WorkSort} from "./WorkSort";

export interface GetWorksOptions {
  readonly limit: number;
  readonly offset: number;
  readonly sort?: WorkSort;
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
  readonly workJoinSelector?: WorkJoinSelector;
}
