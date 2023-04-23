import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";
import {ContributorsMixin} from "../ContributorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {LiteralAgent} from "../literal/LiteralAgent";

export abstract class CmsContributorsMixin extends ResourceBackedModelMixin
  implements ContributorsMixin {
  @Memoize()
  get contributors(): readonly AgentUnion[] {
    return this.filterAndMapObjects(dcterms.contributor, term => {
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
