import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";
import {License} from "../License";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {RightsMixin} from "../RightsMixin";
import {RightsStatement} from "../RightsStatement";
import {LiteralLicense} from "../literal/LiteralLicense";
import {mapAgentObject} from "../mapAgentObject";
import {CmsContributorsMixin} from "./CmsContributorsMixin";
import {CmsCreatorsMixin} from "./CmsCreatorsMixin";

export abstract class CmsRightsMixin
  extends Mixin(
    ResourceBackedModelMixin,
    CmsContributorsMixin,
    CmsCreatorsMixin
  )
  implements RightsMixin {
  @Memoize()
  get license(): License | null {
    return this.findAndMapObject(dcterms.license, term => {
      switch (term.termType) {
        case "BlankNode":
          throw new RangeError("not implemented");
        case "Literal":
          return new LiteralLicense(term);
        case "NamedNode":
          return this.modelSet.licenseByUri(term.value);
        default:
          return null;
      }
    });
  }

  get requiresAttribution(): boolean {
    const license = this.license;
    if (
      license &&
      typeof license !== "string" &&
      !license.requiresAttribution
    ) {
      return false;
    }
    return true;
  }

  @Memoize()
  get rightsHolders(): readonly AgentUnion[] {
    return this.filterAndMapObjects(dcterms.rightsHolder, term =>
      mapAgentObject(this, term)
    );
  }

  @Memoize()
  get rightsStatement(): RightsStatement | null {
    return this.findAndMapObject(dcterms.rights, term => {
      switch (term.termType) {
        case "Literal":
          return term.value;
        case "NamedNode":
          return this.modelSet.rightsStatementByUri(term.value);
        default:
          return null;
      }
    });
  }
}
