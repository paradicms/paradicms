import {StringValueFacetFilter} from "./StringValueFacetFilter";
import {PropertyFilter} from "./PropertyFilter";

export interface ObjectFilters {
  readonly collectionUris: StringValueFacetFilter | null;
  readonly institutionUris: StringValueFacetFilter | null;
  readonly properties: readonly PropertyFilter[] | null;
}
