import {PrimitiveType} from "./PrimitiveType";
import {ValueFacetValue} from "./ValueFacetValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Dataset} from "./Dataset";
import {Image} from "./Image";

export abstract class JoinedValueFacetValue<T extends PrimitiveType>
  implements ValueFacetValue<T> {
  constructor(
    protected readonly dataset: Dataset,
    protected readonly valueFacetValue: ValueFacetValue<T>
  ) {}

  get count() {
    return this.valueFacetValue.count;
  }

  abstract readonly label: string;

  abstract thumbnail(selector: ThumbnailSelector): Image | null;

  get value(): T {
    return this.valueFacetValue.value;
  }
}
