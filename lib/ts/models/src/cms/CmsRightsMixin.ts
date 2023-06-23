import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";
import {License} from "../License";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {RightsMixin} from "../RightsMixin";
import {RightsStatement} from "../RightsStatement";
import {CmsContributorsMixin} from "./CmsContributorsMixin";
import {CmsCreatorsMixin} from "./CmsCreatorsMixin";
import {mapTermToAgent} from "../mapTermToAgent";
import {mapTermToRightsStatement} from "../mapTermToRightsStatement";
import {mapTermToLicense} from "../mapTermToLicense";

export abstract class CmsRightsMixin
  extends Mixin(
    ResourceBackedModelMixin,
    CmsContributorsMixin,
    CmsCreatorsMixin
  )
  implements RightsMixin {
  @Memoize()
  get license(): License | null {
    return this.findAndMapObject(dcterms.license, term =>
      mapTermToLicense(this, term)
    );
  }

  get requiresAttribution(): boolean {
    return this.license?.requiresAttribution ?? true;
  }

  @Memoize()
  get rightsHolders(): readonly AgentUnion[] {
    return this.filterAndMapObjects(dcterms.rightsHolder, term =>
      mapTermToAgent(this, term)
    );
  }

  @Memoize()
  get rightsStatement(): RightsStatement | null {
    return this.findAndMapObject(dcterms.rights, term =>
      mapTermToRightsStatement(this, term)
    );
  }
}
