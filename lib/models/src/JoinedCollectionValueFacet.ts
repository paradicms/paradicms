import {JoinedValueFacet} from "./JoinedValueFacet";
import {JoinedCollectionValueFacetValue} from "./JoinedCollectionValueFacetValue";
import {JoinedDataset} from "./JoinedDataset";
import {CollectionValueFacet} from "./CollectionValueFacet";

export class JoinedCollectionValueFacet extends JoinedValueFacet<string> {
  constructor(joinedDataset: JoinedDataset, valueFacet: CollectionValueFacet) {
    super(joinedDataset, valueFacet);
  }

  get joinedValues(): readonly JoinedCollectionValueFacetValue[] {
    return this.valueFacet.values.map(
      value => new JoinedCollectionValueFacetValue(this.joinedDataset, value)
    );
  }
}
