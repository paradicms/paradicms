import {ObjectPropertyFacet} from "./ObjectPropertyFacet";

export interface ObjectFacets {
  readonly properties: readonly ObjectPropertyFacet[] | null;
}
