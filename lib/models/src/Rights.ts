import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Person} from "./Person";

export class Rights extends Model {
  get creator(): Person | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.personByUri(uri),
      DCTERMS.creator
    );
  }

  get holder(): string | null {
    return this.optionalString(DCTERMS.rightsHolder);
  }

  get license(): License | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.licenseByUri(uri),
      DCTERMS.license
    );
  }

  get statement(): RightsStatement | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.rightsStatementByUri(uri),
      DCTERMS.rights
    );
  }
}
