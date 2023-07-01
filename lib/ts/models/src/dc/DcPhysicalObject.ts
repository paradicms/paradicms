import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {Work} from "../Work";
import {WorkAgent} from "../WorkAgent";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {mapTermToText} from "../mapTermToText";
import {mapTermToLocation} from "../mapTermToLocation";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {getWorkAgents} from "../getWorkAgents";
import {getWorkDisplayDate} from "../getWorkDisplayDate";
import {isWikipediaUrl} from "../isWikipediaUrl";
import {DcNamedModel} from "./DcNamedModel";
import {DcImagesMixin} from "./DcImagesMixin";
import {DcRightsMixin} from "./DcRightsMixin";
import {requireNonNull} from "@paradicms/utilities";
import {mapTermToString} from "@paradicms/rdf";
import {DateTimeDescription} from "DateTimeDescription";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {SyntheticWorkCreationEvent} from "../synthetic/SyntheticWorkCreationEvent";
import {SyntheticWorkModificationEvent} from "../synthetic/SyntheticWorkModificationEvent";

export class DcPhysicalObject
  extends Mixin(DcNamedModel, DcImagesMixin, DcRightsMixin, OwlSameAsMixin)
  implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    return getWorkAgents(this);
  }

  @Memoize()
  get created(): DateTimeDescription | null {
    return this.findAndMapObject(dcterms.created, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get displayDate(): string | null {
    return getWorkDisplayDate(this);
  }

  @Memoize()
  get events(): readonly WorkEventUnion[] {
    const events: WorkEventUnion[] = [];

    if (this.created) {
      events.push(
        SyntheticWorkCreationEvent.fromWork({
          date: this.created,
          work: this,
        })
      );
    }

    if (this.modified) {
      events.push(
        SyntheticWorkModificationEvent.fromWork({
          date: this.modified,
          work: this,
        })
      );
    }

    return events;
  }

  get label(): string {
    return this.title;
  }

  @Memoize()
  get location(): WorkLocation | null {
    const location = this.findAndMapObject(dcterms.spatial, term =>
      mapTermToLocation(this, term)
    );
    if (location) {
      return {
        label: this.title,
        location,
        role: "Current",
      };
    } else {
      return null;
    }
  }

  @Memoize()
  get modified(): DateTimeDescription | null {
    return this.findAndMapObject(dcterms.modified, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }

  get wikipediaUrl(): string | null {
    return this.findAndMapObject(dcterms.relation, term =>
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }
}
