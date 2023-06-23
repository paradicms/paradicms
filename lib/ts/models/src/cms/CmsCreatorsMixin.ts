import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";
import {CreatorsMixin} from "../CreatorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToAgent} from "../mapTermToAgent";

export abstract class CmsCreatorsMixin extends ResourceBackedModelMixin
  implements CreatorsMixin {
  @Memoize()
  get creators(): readonly AgentUnion[] {
    return this.filterAndMapObjects(dcterms.creator, term =>
      mapTermToAgent(this, term)
    );
  }
}
