import {JoinedValueFacet} from "./JoinedValueFacet";
import {PrimitiveType} from "./PrimitiveType";
import {PropertyDefinition} from "./PropertyDefinition";
import {JoinedPropertyValueFacetValue} from "./JoinedPropertyValueFacetValue";
import {PropertyValueFacet} from "./PropertyValueFacet";
import {Dataset} from "./Dataset";

export abstract class JoinedPropertyValueFacet<T extends PrimitiveType>
  extends JoinedValueFacet<T>
  implements PropertyValueFacet<T> {
  readonly propertyUri: string;

  constructor(dataset: Dataset, valueFacet: PropertyValueFacet<T>) {
    super(dataset, valueFacet);
    this.propertyUri = valueFacet.propertyUri;
  }

  get propertyDefinition(): PropertyDefinition | null {
    return this.dataset.propertyDefinitionByUri(this.propertyUri);
  }

  get joinedValues(): readonly JoinedPropertyValueFacetValue<T>[] {
    return this.valueFacet.values.map(
      value => new JoinedPropertyValueFacetValue(this.dataset, this, value)
    );
  }
}
