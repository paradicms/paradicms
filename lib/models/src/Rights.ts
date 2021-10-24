import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Person} from "./Person";

export class Rights extends Model {
  get creator(): Person | string | null {
    const term = this.optionalTerm(DCTERMS.creator);
    if (!term) {
      return null;
    }
    switch (term.termType) {
      case "Literal":
        return term.value;
      case "NamedNode":
        return this.dataset.personByUri(term.value);
      default:
        return null;
    }
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
