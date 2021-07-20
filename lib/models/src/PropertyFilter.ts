import {ValueFacetFilter} from "./ValueFacetFilter";

export interface PropertyFilter extends ValueFacetFilter<string> {
  readonly propertyDefinitionUri: string;
}
