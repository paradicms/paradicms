import {PrimitiveType} from "./PrimitiveType";
import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedPropertyValueDefinition} from "./JoinedPropertyValueDefinition";
import {JoinedDataset} from "./JoinedDataset";
import {JoinedPropertyValueFacet} from "./JoinedPropertyValueFacet";
import {ValueFacetValue} from "./ValueFacetValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {JoinedImage} from "./JoinedImage";

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

  get label() {
    const definition = this.valueDefinition;
    if (definition && definition.label) {
      return definition.label;
    }
    return this.value.toString();
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    return this.valueDefinition?.thumbnail(selector) ?? null;
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
