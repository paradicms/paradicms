import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {CreatorsMixin} from "../CreatorsMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToAgent} from "../mapTermToAgent";

export abstract class DcCreatorsMixin extends ResourceBackedModelMixin
  implements CreatorsMixin {
  @Memoize()
  get creators(): readonly Agent[] {
    return this.filterAndMapObjects(dcterms.creator, term =>
      mapTermToAgent(this, term)
    );
  }

  protected preMemoizeCreators(): void {
    this.creators;
  }
}
