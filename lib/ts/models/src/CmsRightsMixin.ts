import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {dcterms} from "@paradicms/vocabularies";
import {CmsContributorsMixin} from "./CmsContributorsMixin";
import {CmsCreatorsMixin} from "./CmsCreatorsMixin";
import {mapAgentObject} from "./mapAgentObject";
import {RightsMixin} from "./RightsMixin";
import {ResourceBackedModelMixin} from "./ResourceBackedModelMixin";

export abstract class CmsRightsMixin
  extends Mixin(
    ResourceBackedModelMixin,
    CmsContributorsMixin,
    CmsCreatorsMixin
  )
  implements RightsMixin {
  // @Memoize()
  // get agents(): readonly Agent[] {
  //   return this.agentUris.map(agentUri => this.modelSet.agentByUri(agentUri));
  // }
  //
  // @Memoize()
  // get agentUris(): readonly string[] {
  //   return this.contributorAgentUris
  //     .concat(this.creatorAgentUris)
  //     .concat(this.rightsHolderAgentUris);
  // }

  @Memoize()
  get license(): License | string | null {
    return this.findAndMapObject(dcterms.license, term => {
      switch (term.termType) {
        case "Literal":
          return term.value;
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

  get rightsHolderAgents(): readonly Agent[] {
    return this.rightsHolderAgentUris.map(agentUri =>
      this.modelSet.agentByUri(agentUri)
    );
  }

  @Memoize()
  get rightsHolderAgentUris(): readonly string[] {
    return this.filterAndMapObjects(dcterms.rightsHolder, this.mapUriObject);
  }

  @Memoize()
  get rightsHolders(): readonly (Agent | string)[] {
    return this.filterAndMapObjects(dcterms.rightsHolder, term =>
      mapAgentObject(this, term)
    );
  }

  @Memoize()
  get rightsStatement(): RightsStatement | string | null {
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
