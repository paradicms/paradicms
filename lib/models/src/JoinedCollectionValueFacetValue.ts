import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedCollection} from "./JoinedCollection";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {JoinedImage} from "./JoinedImage";

export class JoinedCollectionValueFacetValue extends JoinedValueFacetValue<
  string
> {
  get collection(): JoinedCollection {
    return this.joinedDataset.collectionByUri(this.valueFacetValue.value);
  }

  get label() {
    return this.collection.title;
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    return this.collection.thumbnail(selector);
  }
}
