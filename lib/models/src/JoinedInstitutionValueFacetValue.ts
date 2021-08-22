import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedInstitution} from "./JoinedInstitution";

export class JoinedInstitutionValueFacetValue extends JoinedValueFacetValue<
  string
> {
  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.valueFacetValue.value);
  }
}
