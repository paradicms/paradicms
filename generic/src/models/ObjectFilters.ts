import {StringFilter} from "~/models/StringFilter";
import {PropertyFilter} from "~/models/PropertyFilter";

export interface ObjectFilters {
  readonly collectionUris?: StringFilter;
  readonly institutionUris?: StringFilter;
  readonly properties?: readonly PropertyFilter[];
}
