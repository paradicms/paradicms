import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";

export class Rights extends Model {
  get creator(): string | null {
    return this.optionalString(DCTERMS.creator);
  }

  get holder(): string | null {
    return this.optionalString(DCTERMS.rightsHolder);
  }

  get license(): License | string | null {
    const term = this.optionalTerm(DCTERMS.license);
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.dataset.licenseByUri(term.value);
      default:
        return null;
    }
  }

  get statement(): RightsStatement | string | null {
    const term = this.optionalTerm(DCTERMS.rights);
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.dataset.rightsStatementByUri(term.value);
      default:
        return null;
    }
  }
}
