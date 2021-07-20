import {PropertyFilter} from "./PropertyFilter";
import {ValueFacetFilter} from "./ValueFacetFilter";

export interface ObjectFilters {
  readonly collectionUris: ValueFacetFilter<string> | null;
  readonly institutionUris: ValueFacetFilter<string> | null;
  readonly properties: readonly PropertyFilter[] | null;
}
