import {crm} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {mapTermToPartialDateTimeDescription} from "../mapTermToPartialDateTimeDescription";
import {LinkedArtIsIdentifiedByMixin} from "./LinkedArtIsIdentifiedByMixin";
import {LinkedArtModel} from "./LinkedArtModel";

export class LinkedArtTimeSpan extends Mixin(
  LinkedArtModel,
  LinkedArtIsIdentifiedByMixin
) {
  @Memoize()
  get beginOfTheBegin(): PartialDateTimeDescription | null {
    return this.findAndMapObject(crm.P82a_begin_of_the_begin, term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }

  get displayDate(): string | null {
    for (const isIdentifiedBy of this.isIdentifiedBy) {
      for (const symbolicContent of isIdentifiedBy.hasSymbolicContent) {
        return symbolicContent.value;
      }
    }
    return null;
  }

  @Memoize()
  get endOfTheEnd(): PartialDateTimeDescription | null {
    return this.findAndMapObject(crm.P82b_end_of_the_end, term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }
}
