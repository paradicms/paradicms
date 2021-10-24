import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";

export class Rights extends Model {
  get creator(): Agent | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.agentByUri(uri),
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
