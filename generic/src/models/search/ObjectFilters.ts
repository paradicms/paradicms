import {StringFilter} from "~/models/search/StringFilter";
import {PropertyFilter} from "~/models/search/PropertyFilter";

export interface ObjectFilters {
  readonly collectionUris?: StringFilter;
  readonly institutionUris?: StringFilter;
  readonly properties?: readonly PropertyFilter[];
}
