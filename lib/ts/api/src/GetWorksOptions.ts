import {ThumbnailSelector, WorkJoinSelector} from "@paradicms/models";
import {WorksSort} from "./WorksSort";
import {WorksQuery} from "./WorksQuery";

export interface GetWorksOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: WorksQuery;
  readonly sort?: WorksSort;
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
  readonly workJoinSelector?: WorkJoinSelector;
}
