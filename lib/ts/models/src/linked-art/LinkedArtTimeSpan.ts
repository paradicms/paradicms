import {LinkedArtModel} from "./LinkedArtModel";
import {DateTimeDescription} from "../DateTimeDescription";
import {crm} from "@paradicms/vocabularies";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {Memoize} from "typescript-memoize";

export class LinkedArtTimeSpan extends LinkedArtModel {
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
