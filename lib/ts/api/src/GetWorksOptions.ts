import {WorksSort} from "./WorksSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {ThumbnailSelector} from "@paradicms/models";
import {Optional, Static} from "runtypes";

export const GetWorksOptions = GetModelsOptions(
  WorkJoinSelector,
  WorksQuery,
  WorksSort
)
  .extend({
    valueFacetValueThumbnailSelector: Optional(ThumbnailSelector),
  })
  .asReadonly();

export type GetWorksOptions = Static<typeof GetWorksOptions>;
