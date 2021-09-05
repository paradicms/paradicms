import {JoinedValueFacetValue} from "./JoinedValueFacetValue";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Institution} from "./Institution";
import {Image} from "./Image";

export class JoinedInstitutionValueFacetValue extends JoinedValueFacetValue<
  string
> {
  get institution(): Institution {
    return this.dataset.institutionByUri(this.valueFacetValue.value);
  }

  get label() {
    return this.institution.name;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return this.institution.thumbnail(selector);
  }
}
