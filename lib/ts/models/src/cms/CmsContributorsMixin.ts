import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {ContributorsMixin} from "../ContributorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {AgentUnion} from "../AgentUnion";

export abstract class CmsContributorsMixin extends ResourceBackedModelMixin
  implements ContributorsMixin {
  @Memoize()
  get contributors(): readonly AgentUnion[] {
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
}
