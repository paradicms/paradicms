import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedCollection} from "./JoinedCollection";

export class JoinedCollectionValueFacetValue extends JoinedValueFacetValue<
  string
> {
  get collection(): JoinedCollection {
    return this.joinedDataset.collectionByUri(this.valueFacetValue.value);
  }
}
