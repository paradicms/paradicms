import {StringFilter} from "./StringFilter";
import {PropertyFilter} from "./PropertyFilter";

export interface ObjectFilters {
  readonly collectionUris: StringFilter | null;
  readonly institutionUris: StringFilter | null;
  readonly properties: readonly PropertyFilter[] | null;
}
