import {JoinedValueFacet} from "./JoinedValueFacet";
import {PrimitiveType} from "./PrimitiveType";
import {PropertyDefinition} from "./PropertyDefinition";
import {JoinedPropertyValueFacetValue} from "./JoinedPropertyValueFacetValue";
import {JoinedDataset} from "./JoinedDataset";
import {PropertyValueFacet} from "./PropertyValueFacet";

export abstract class JoinedPropertyValueFacet<T extends PrimitiveType>
  extends JoinedValueFacet<T>
  implements PropertyValueFacet<T> {
  readonly propertyUri: string;

  constructor(joinedDataset: JoinedDataset, valueFacet: PropertyValueFacet<T>) {
    super(joinedDataset, valueFacet);
    this.propertyUri = valueFacet.propertyUri;
  }

  get propertyDefinition(): PropertyDefinition | null {
    return this.joinedDataset.propertyDefinitionByUri(this.propertyUri);
  }

  get joinedValues(): readonly JoinedPropertyValueFacetValue<T>[] {
    return this.valueFacet.values.map(
      value =>
        new JoinedPropertyValueFacetValue(this.joinedDataset, this, value)
    );
  }
}
