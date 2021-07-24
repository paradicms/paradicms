import {ValueFacet} from "ValueFacet";

export interface CollectionValueFacet extends ValueFacet<string> {
  readonly type: "CollectionValue";
}
