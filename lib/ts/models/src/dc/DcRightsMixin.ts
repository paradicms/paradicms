import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {License} from "../License";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {RightsMixin} from "../RightsMixin";
import {RightsStatement} from "../RightsStatement";
import {mapTermToAgent} from "../mapTermToAgent";
import {mapTermToLicense} from "../mapTermToLicense";
import {mapTermToRightsStatement} from "../mapTermToRightsStatement";
import {DcContributorsMixin} from "./DcContributorsMixin";
import {DcCreatorsMixin} from "./DcCreatorsMixin";

export abstract class DcRightsMixin
  extends Mixin(ResourceBackedModelMixin, DcContributorsMixin, DcCreatorsMixin)
  implements RightsMixin {
  @Memoize()
  get licenses(): readonly License[] {
    return this.filterAndMapObjects(dcterms.license, term =>
      mapTermToLicense(this, term)
    );
  }

  get requiresAttribution(): boolean {
    if (this.licenses.length === 0) {
      return true;
    } else if (!this.licenses.some(license => license.requiresAttribution)) {
      // If some license does not require attribution, then don't do attribution
      return false;
    } else {
      return true;
    }
  }

  @Memoize()
  get rightsHolders(): readonly Agent[] {
    return this.filterAndMapObjects(dcterms.rightsHolder, term =>
      mapTermToAgent(this, term)
    );
  }

  @Memoize()
  get rightsStatements(): readonly RightsStatement[] {
    return this.filterAndMapObjects(dcterms.rights, term =>
      mapTermToRightsStatement(this, term)
    );
  }
}
