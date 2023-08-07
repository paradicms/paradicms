import {ThumbnailSelector, WorkJoinSelector} from "@paradicms/models";
import {WorksSort} from "./WorksSort";

export interface GetWorksOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly sort?: WorksSort;
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
  readonly workJoinSelector?: WorkJoinSelector;
}
