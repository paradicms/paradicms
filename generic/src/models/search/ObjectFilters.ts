import {UriFacetFilter} from "~/models/search/UriFacetFilter";
import {StringFacetFilter} from "~/models/search/StringFacetFilter";

export interface ObjectFilters {
  collectionUris?: UriFacetFilter | null;
  creators?: StringFacetFilter | null;
  culturalContexts?: StringFacetFilter | null;
  extents?: StringFacetFilter | null;
  institutionUris?: UriFacetFilter | null;
  languages?: UriFacetFilter | null;
  materials?: StringFacetFilter | null;
  media?: StringFacetFilter | null;
  publishers?: StringFacetFilter | null;
  spatials?: StringFacetFilter | null;
  subjects?: StringFacetFilter | null;
  techniques?: StringFacetFilter | null;
  temporals?: StringFacetFilter | null;
  types?: StringFacetFilter | null;
}
