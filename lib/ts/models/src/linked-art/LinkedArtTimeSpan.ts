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
  override get label(): string | null {
    if (super.label) {
      return this.label;
    } else if (this.isIdentifiedBy.length > 0) {
      return this.isIdentifiedBy[0].label;
    } else {
      return null;
    }
  }

  @Memoize()
  get beginOfTheBegin(): DateTimeDescription | null {
    return this.findAndMapObject(crm.P82a_begin_of_the_begin, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get endOfTheEnd(): DateTimeDescription | null {
    return this.findAndMapObject(crm.P82b_end_of_the_end, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }
}
