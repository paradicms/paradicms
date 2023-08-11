import {WorksSort} from "./WorksSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {ThumbnailSelector} from "@paradicms/models";

export interface GetWorksOptions
  extends GetModelsOptions<WorkJoinSelector, WorksQuery, WorksSort> {
  readonly valueFacetValueThumbnailSelector?: ThumbnailSelector;
}
