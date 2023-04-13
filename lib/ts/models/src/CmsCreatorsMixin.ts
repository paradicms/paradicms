import {Memoize} from "typescript-memoize";
import {Agent} from "./Agent";
import {dcterms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";
import {CreatorsMixin} from "./CreatorsMixin";

export abstract class CmsCreatorsMixin extends ModelMixin
  implements CreatorsMixin {
  @Memoize()
  get creators(): readonly (Agent | string)[] {
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

  get creatorAgents(): readonly Agent[] {
    return this.creatorAgentUris.map(agentUri =>
      this.modelSet.agentByUri(agentUri)
    );
  }

  @Memoize()
  get creatorAgentUris(): readonly string[] {
    return this.filterAndMapObjects(dcterms.creator, this.mapUriObject);
  }
}
