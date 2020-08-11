import {StringFilter} from "~/models/search/StringFilter";
import {ObjectPropertyFilter} from "~/models/search/ObjectPropertyFilter";

export interface ObjectFilters {
  readonly collectionUris?: StringFilter;
  readonly institutionUris?: StringFilter;
  readonly properties?: readonly ObjectPropertyFilter[];
}
