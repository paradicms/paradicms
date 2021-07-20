import {StringValueFacetFilter} from "./StringValueFacetFilter";

export interface PropertyFilter extends StringValueFacetFilter {
  readonly propertyDefinitionUri: string;
}
