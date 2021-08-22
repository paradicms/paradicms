import {PrimitiveType} from "./PrimitiveType";
import {JoinedDataset} from "./JoinedDataset";
import {ValueFacetValue} from "./ValueFacetValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {JoinedImage} from "./JoinedImage";

export abstract class JoinedValueFacetValue<T extends PrimitiveType>
  implements ValueFacetValue<T> {
  constructor(
    protected readonly joinedDataset: JoinedDataset,
    protected readonly valueFacetValue: ValueFacetValue<T>
  ) {}

  get count() {
    return this.valueFacetValue.count;
  }

  abstract readonly label: string;

  abstract thumbnail(selector: ThumbnailSelector): JoinedImage | null;

  get value(): T {
    return this.valueFacetValue.value;
  }
}
