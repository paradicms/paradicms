import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {ContributorsMixin} from "../ContributorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToAgent} from "../mapTermToAgent";

export abstract class DcContributorsMixin extends ResourceBackedModelMixin
  implements ContributorsMixin {
  @Memoize()
  get contributors(): readonly Agent[] {
    return this.filterAndMapObjects(dcterms.contributor, term =>
      mapTermToAgent(this, term)
    );
  }
}
