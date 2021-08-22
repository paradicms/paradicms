import {PrimitiveType} from "./PrimitiveType";
import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedPropertyValueDefinition} from "./JoinedPropertyValueDefinition";
import {JoinedDataset} from "./JoinedDataset";
import {JoinedPropertyValueFacet} from "./JoinedPropertyValueFacet";
import {ValueFacetValue} from "./ValueFacetValue";

export class JoinedPropertyValueFacetValue<
  T extends PrimitiveType
> extends JoinedValueFacetValue<T> {
  constructor(
    joinedDataset: JoinedDataset,
    private readonly joinedPropertyValueFacet: JoinedPropertyValueFacet<T>,
    valueFacetValue: ValueFacetValue<T>
  ) {
    super(joinedDataset, valueFacetValue);
  }

  get valueDefinition(): JoinedPropertyValueDefinition | null {
    for (const propertyValueDefinition of this.joinedDataset.propertyValueDefinitionsByPropertyUri(
      this.joinedPropertyValueFacet.propertyUri
    )) {
      if (this.value === propertyValueDefinition.value.value) {
        return propertyValueDefinition;
      }
    }
    return null;
  }
}
