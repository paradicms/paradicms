import {JoinedValueFacet} from "./JoinedValueFacet";
import {JoinedInstitutionValueFacetValue} from "./JoinedInstitutionValueFacetValue";
import {JoinedDataset} from "./JoinedDataset";
import {InstitutionValueFacet} from "./InstitutionValueFacet";

export class JoinedInstitutionValueFacet extends JoinedValueFacet<string> {
  constructor(joinedDataset: JoinedDataset, valueFacet: InstitutionValueFacet) {
    super(joinedDataset, valueFacet);
  }

  get joinedValues(): readonly JoinedInstitutionValueFacetValue[] {
    return this.valueFacet.values.map(
      value => new JoinedInstitutionValueFacetValue(this.joinedDataset, value)
    );
  }
}
