import {PrimitiveType} from "./PrimitiveType";
import {JoinedFacet} from "./JoinedFacet";
import {JoinedDataset} from "./JoinedDataset";
import {ValueFacet} from "./ValueFacet";
import {ValueFacetValue} from "./ValueFacetValue";
import {JoinedValueFacetValue} from "./JoinedValueFacetValue";

export abstract class JoinedValueFacet<T extends PrimitiveType>
  extends JoinedFacet
  implements ValueFacet<T> {
  protected constructor(
    joinedDataset: JoinedDataset,
    protected readonly valueFacet: ValueFacet<T>
  ) {
    super(joinedDataset);
  }

  abstract get joinedValues(): readonly JoinedValueFacetValue<T>[];

  get unknownCount() {
    return this.valueFacet.unknownCount;
  }

  get type() {
    return this.valueFacet.type;
  }

  get values(): readonly ValueFacetValue<T>[] {
    return this.valueFacet.values;
  }
}
