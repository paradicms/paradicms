import {Memoize} from "typescript-memoize";
import {Agent} from "./Agent";
import {dcterms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";
import {ContributorsMixin} from "./ContributorsMixin";

export abstract class CmsContributorsMixin extends ModelMixin
  implements ContributorsMixin {
  @Memoize()
  get contributors(): readonly (Agent | string)[] {
    return this.filterAndMapObjects(dcterms.contributor, term => {
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

  get contributorAgents(): readonly Agent[] {
    return this.contributorAgentUris.map(agentUri =>
      this.modelSet.agentByUri(agentUri)
    );
  }

  @Memoize()
  get contributorAgentUris(): readonly string[] {
    return this.filterAndMapObjects(dcterms.contributor, this.mapUriObject);
  }
}
