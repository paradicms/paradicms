import {ObjectFilters} from "~/models/ObjectFilters";

export interface ObjectQuery {
  readonly filters?: ObjectFilters | null;
  readonly text?: string | null;
}
