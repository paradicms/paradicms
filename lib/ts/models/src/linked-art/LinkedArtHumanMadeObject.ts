import {Mixin} from "ts-mixer";
import {LinkedArtModel} from "./LinkedArtModel";
import {Work} from "../Work";
import {WorkAgent} from "../WorkAgent";
import {requireNonNull} from "@paradicms/utilities";
import {LinkedArtDescriptionRightsMixin} from "./LinkedArtDescriptionRightsMixin";
import {Memoize} from "typescript-memoize";
import {LinkedArtProduction} from "./LinkedArtProduction";
import {crm} from "@paradicms/vocabularies";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";

export class LinkedArtHumanMadeObject extends Mixin(LinkedArtModel, LinkedArtDescriptionRightsMixin)
  implements Work {
  get agents(): readonly WorkAgent[] {
    return [];
  }

  // get displayDate(): string | null {
  //
  // }

  override get label(): string {
    return requireNonNull(super.label);
  }

  @Memoize()
  get wasProducedby(): readonly LinkedArtProduction[] {
    return this.filterAndMapObjects(crm.P108i_was_produced_by, term => mapTermToLinkedArtModel(this, term)).filter(model => model instanceof LinkedArtProduction);
  }
}
