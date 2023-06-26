import {dcterms, vra} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {DateTimeDescription} from "../DateTimeDescription";
import {Event} from "../Event";
import {Location} from "../Location";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {mapTermToLocation} from "../mapTermToLocation";
import {requireNonNull} from "@paradicms/utilities";
import {mapTermToString} from "@paradicms/rdf";
import {EventMixin} from "../EventMixin";
import {CmsModel} from "./CmsModel";

export abstract class CmsEvent
  extends Mixin(CmsModel, CmsDescriptionMixin, EventMixin)
  implements Event {
  @Memoize()
  get date(): DateTimeDescription | null {
    return this.findAndMapObject(dcterms.date, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get endDate(): DateTimeDescription | null {
    return this.findAndMapObject(vra.endDate, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get location(): Location | null {
    return this.findAndMapObject(dcterms.spatial, term =>
      mapTermToLocation(this, term)
    );
  }

  @Memoize()
  get startDate(): DateTimeDescription | null {
    return this.findAndMapObject(vra.startDate, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  get label(): string {
    return requireNonNull(this.title);
  }

  get title(): string | null {
    return this.findAndMapObject(dcterms.title, mapTermToString);
  }
}
