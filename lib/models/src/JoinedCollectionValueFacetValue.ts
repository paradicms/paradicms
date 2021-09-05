import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";
import {Collection} from "./Collection";

export class JoinedCollectionValueFacetValue extends JoinedValueFacetValue<
  string
> {
  get collection(): Collection {
    return this.dataset.collectionByUri(this.valueFacetValue.value);
  }

  get label(): string {
    return this.collection.title;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return this.collection.thumbnail(selector);
  }
}
