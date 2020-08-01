import {UriFacetFilter} from "models/UriFacetFilter";
import {StringFacetFilter} from "models/StringFacetFilter";

export interface ObjectFilters {
  collectionUris?: UriFacetFilter | null;
  culturalContexts?: StringFacetFilter | null;
  institutionUris?: UriFacetFilter | null;
  materials?: StringFacetFilter | null;
  spatials?: StringFacetFilter | null;
  subjects?: StringFacetFilter | null;
  techniques?: StringFacetFilter | null;
  temporals?: StringFacetFilter | null;
  types?: StringFacetFilter | null;
}
