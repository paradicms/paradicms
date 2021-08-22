import {PrimitiveType} from "./PrimitiveType";
import {JoinedDataset} from "./JoinedDataset";
import {ValueFacetValue} from "./ValueFacetValue";

export abstract class JoinedValueFacetValue<T extends PrimitiveType>
  implements ValueFacetValue<T> {
  constructor(
    protected readonly joinedDataset: JoinedDataset,
    protected readonly valueFacetValue: ValueFacetValue<T>
  ) {}

  get count() {
    return this.valueFacetValue.count;
  }

  get value(): T {
    return this.valueFacetValue.value;
  }
}
