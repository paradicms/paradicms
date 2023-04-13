import {Model} from "./Model";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {dcterms} from "@paradicms/vocabularies";
import {HasContributors} from "./HasContributors";
import {HasCreators} from "./HasCreators";

export class Rights extends Mixin(Model, HasContributors, HasCreators) {
  private agentsOrStrings(property: NamedNode): readonly (Agent | string)[] {
    return this.filterAndMapObjects(dcterms.creator, term => {
      switch (term.termType) {
        case "Literal":
          return term.value;
        case "NamedNode":
          return this.modelSet.agentByUri(term.value);
        default:
          return null;
      }
    });
  }

  @Memoize()
  get agents(): readonly Agent[] {
    return this.agentUris.map(agentUri => this.modelSet.agentByUri(agentUri));
  }

  @Memoize()
  get agentUris(): readonly string[] {
    return this.contributorAgentUris
      .concat(this.creatorAgentUris)
      .concat(this.rightsHolderAgentUris);
  }

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
    if (license instanceof License && !license.requiresAttribution) {
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
    return this.agentsOrStrings(dcterms.rightsHolder);
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
