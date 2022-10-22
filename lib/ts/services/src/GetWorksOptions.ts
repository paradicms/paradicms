import {ThumbnailSelector, WorkJoinSelector} from "@paradicms/models";

export interface GetWorksOptions {
  readonly limit: number;
  readonly offset: number;
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
  readonly workJoinSelector?: WorkJoinSelector;
}
