import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";
import {CreatorsMixin} from "../CreatorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {LiteralAgent} from "../literal/LiteralAgent";

export abstract class CmsCreatorsMixin extends ResourceBackedModelMixin
  implements CreatorsMixin {
  @Memoize()
  get creators(): readonly AgentUnion[] {
    return this.filterAndMapObjects(dcterms.creator, term => {
      switch (term.termType) {
        case "BlankNode":
          throw new RangeError("not implemented");
        case "Literal":
          return new LiteralAgent(term);
        case "NamedNode":
          return this.modelSet.agentByUri(term.value);
        default:
          return null;
      }
    });
  }
}
