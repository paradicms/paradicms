import {LinkedArtModel} from "./LinkedArtModel";
import {DateTimeDescription} from "../DateTimeDescription";
import {crm} from "@paradicms/vocabularies";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {Memoize} from "typescript-memoize";
import {LinkedArtIsIdentifiedByMixin} from "./LinkedArtIsIdentifiedByMixin";
import {Mixin} from "ts-mixer";

export class LinkedArtTimeSpan extends Mixin(
  LinkedArtModel,
  LinkedArtIsIdentifiedByMixin
) {
  @Memoize()
  get beginOfTheBegin(): DateTimeDescription | null {
    return this.findAndMapObject(crm.P82a_begin_of_the_begin, term =>
      mapTermToDateTimeDescription(this, term)
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
  get endOfTheEnd(): DateTimeDescription | null {
    return this.findAndMapObject(crm.P82b_end_of_the_end, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }
}
