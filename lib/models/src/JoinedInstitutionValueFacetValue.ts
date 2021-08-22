import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {JoinedInstitution} from "./JoinedInstitution";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {JoinedImage} from "./JoinedImage";

export class JoinedInstitutionValueFacetValue extends JoinedValueFacetValue<
  string
> {
  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.valueFacetValue.value);
  }

  get label() {
    return this.institution.name;
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    return this.institution.thumbnail(selector);
  }
}
