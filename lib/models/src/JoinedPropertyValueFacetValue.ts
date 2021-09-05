import {PrimitiveType} from "./PrimitiveType";
import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedPropertyValueFacet} from "./JoinedPropertyValueFacet";
import {ValueFacetValue} from "./ValueFacetValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Dataset} from "./Dataset";
import {Image} from "./Image";
import {PropertyValueDefinition} from "./PropertyValueDefinition";

export class JoinedPropertyValueFacetValue<
  T extends PrimitiveType
> extends JoinedValueFacetValue<T> {
  constructor(
    dataset: Dataset,
    private readonly joinedPropertyValueFacet: JoinedPropertyValueFacet<T>,
    valueFacetValue: ValueFacetValue<T>
  ) {
    super(dataset, valueFacetValue);
  }

  get label() {
    const definition = this.valueDefinition;
    if (definition && definition.label) {
      return definition.label;
    }
    return this.value.toString();
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return this.valueDefinition?.thumbnail(selector) ?? null;
  }

  get valueDefinition(): PropertyValueDefinition | null {
    for (const propertyValueDefinition of this.dataset.propertyValueDefinitionsByPropertyUri(
      this.joinedPropertyValueFacet.propertyUri
    )) {
      if (this.value === propertyValueDefinition.value.value) {
        return propertyValueDefinition;
      }
    }
    return null;
  }
}
