import {crm} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {LinkedArtLinguisticAppellation} from "./LinkedArtLinguisticAppellation";
import {LinkedArtModelMixin} from "./LinkedArtModelMixin";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";

export abstract class LinkedArtIsIdentifiedByMixin extends LinkedArtModelMixin {
  @Memoize()
  get isIdentifiedBy(): readonly LinkedArtLinguisticAppellation[] {
    return this.filterAndMapObjects(crm.P1_is_identified_by, term =>
      mapTermToLinkedArtModel(this, term)
    ).filter(
      model => model instanceof LinkedArtLinguisticAppellation
    ) as LinkedArtLinguisticAppellation[];
  }

  protected preMemoizeIsIdentifiedBy(): void {
    this.isIdentifiedBy;
  }
}
