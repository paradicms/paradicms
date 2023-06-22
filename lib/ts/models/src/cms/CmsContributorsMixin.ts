import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";
import {ContributorsMixin} from "../ContributorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToAgent} from "../mapTermToAgent";

export abstract class CmsContributorsMixin extends ResourceBackedModelMixin
  implements ContributorsMixin {
  @Memoize()
  get contributors(): readonly AgentUnion[] {
    return this.filterAndMapObjects(dcterms.contributor, term =>
      mapTermToAgent(this, term)
    );
  }
}
