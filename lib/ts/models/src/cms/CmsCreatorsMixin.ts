import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {CreatorsMixin} from "../CreatorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {AgentUnion} from "../AgentUnion";

export abstract class CmsCreatorsMixin extends ResourceBackedModelMixin
  implements CreatorsMixin {
  @Memoize()
  get creators(): readonly AgentUnion[] {
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
}
