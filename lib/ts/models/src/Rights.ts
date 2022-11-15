import {Model} from "./Model";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {HasCreators} from "./mixins/HasCreators";
import {HasContributors} from "./mixins/HasContributors";
import {dcterms} from "@paradicms/vocabularies";

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
      .concat(this.holderAgentUris);
  }

  get holderAgents(): readonly Agent[] {
    return this.holderAgentUris.map(agentUri =>
      this.modelSet.agentByUri(agentUri)
    );
  }

  @Memoize()
  get holderAgentUris(): readonly string[] {
    return this.filterAndMapObjects(dcterms.rightsHolder, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }

  @Memoize()
  get holders(): readonly (Agent | string)[] {
    return this.agentsOrStrings(dcterms.rightsHolder);
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

  @Memoize()
  get statement(): RightsStatement | string | null {
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
