import {JoinedValueFacet} from "./JoinedValueFacet";
import {JoinedCollectionValueFacetValue} from "./JoinedCollectionValueFacetValue";

export class JoinedCollectionValueFacet extends JoinedValueFacet<string> {
  get joinedValues(): readonly JoinedCollectionValueFacetValue[] {
    return this.valueFacet.values.map(
      value => new JoinedCollectionValueFacetValue(this.dataset, value)
    );
  }
}
