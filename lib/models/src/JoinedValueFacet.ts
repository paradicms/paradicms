import {PrimitiveType} from "./PrimitiveType";
import {JoinedFacet} from "./JoinedFacet";
import {ValueFacet} from "./ValueFacet";
import {ValueFacetValue} from "./ValueFacetValue";
import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {Dataset} from "./Dataset";

export abstract class JoinedValueFacet<T extends PrimitiveType>
  extends JoinedFacet
  implements ValueFacet<T> {
  constructor(dataset: Dataset, protected readonly valueFacet: ValueFacet<T>) {
    super(dataset);
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
