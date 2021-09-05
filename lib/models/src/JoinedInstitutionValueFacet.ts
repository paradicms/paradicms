import {JoinedValueFacet} from "./JoinedValueFacet";
import {JoinedInstitutionValueFacetValue} from "./JoinedInstitutionValueFacetValue";

export class JoinedInstitutionValueFacet extends JoinedValueFacet<string> {
  get joinedValues(): readonly JoinedInstitutionValueFacetValue[] {
    return this.valueFacet.values.map(
      value => new JoinedInstitutionValueFacetValue(this.dataset, value)
    );
  }
}
