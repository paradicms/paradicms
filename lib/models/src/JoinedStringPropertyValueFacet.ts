import {JoinedPropertyValueFacet} from "./JoinedPropertyValueFacet";
import {JoinedDataset} from "./JoinedDataset";
import {StringPropertyValueFacet} from "./StringPropertyValueFacet";

export class JoinedStringPropertyValueFacet extends JoinedPropertyValueFacet<
  string
> {
  constructor(
    joinedDataset: JoinedDataset,
    valueFacet: StringPropertyValueFacet
  ) {
    super(joinedDataset, valueFacet);
  }
}
