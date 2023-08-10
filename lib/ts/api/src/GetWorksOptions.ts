import {ThumbnailSelector, WorkJoinSelector} from "@paradicms/models";
import {WorksSort} from "./WorksSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelsOptions} from "./GetModelsOptions";

export interface GetWorksOptions
  extends GetModelsOptions<WorkJoinSelector, WorksQuery, WorksSort> {
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
}
