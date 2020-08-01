import {ObjectFilters} from "models/ObjectFilters";

export interface ObjectQuery {
  filters?: ObjectFilters | null;
  text?: string | null;
}
