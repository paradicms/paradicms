import {ObjectFilters} from "~/models/search/ObjectFilters";

export interface ObjectQuery {
  filters?: ObjectFilters | null;
  text?: string | null;
}
