import {ThumbnailSelector} from "@paradicms/models";

export interface GetWorksOptions {
  readonly limit: number;
  readonly offset: number;
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
}
