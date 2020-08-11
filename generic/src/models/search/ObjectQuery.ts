import {ObjectFilters} from "~/models/search/ObjectFilters";

export interface ObjectQuery {
  readonly filters?: ObjectFilters | null;
  readonly text?: string | null;
}
