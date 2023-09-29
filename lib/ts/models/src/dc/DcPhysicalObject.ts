import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { PartialDateTimeDescription } from "../PartialDateTimeDescription";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Text } from "../Text";
import { Work } from "../Work";
import { WorkAgentsMixin } from "../WorkAgentsMixin";
import { WorkDisplayDateMixin } from "../WorkDisplayDateMixin";
import { WorkEvent } from "../WorkEvent";
import { WorkLocation } from "../WorkLocation";
import { WorkSubject } from "../WorkSubject";
import { isWikipediaUrl } from "../isWikipediaUrl";
import { mapTermToLocation } from "../mapTermToLocation";
import { mapTermToPartialDateTimeDescription } from "../mapTermToPartialDateTimeDescription";
import { mapTermToText } from "../mapTermToText";
import { mapTermToWorkSubject } from "../mapTermToWorkSubject";
import { OwlSameAsMixin } from "../owl/OwlSameAsMixin";
import { SyntheticWorkCreationEvent } from "../synthetic/SyntheticWorkCreationEvent";
import { SyntheticWorkModificationEvent } from "../synthetic/SyntheticWorkModificationEvent";
import { DcContributorsMixin } from "./DcContributorsMixin";
import { DcCreatorsMixin } from "./DcCreatorsMixin";
import { DcImagesMixin } from "./DcImagesMixin";

export class DcPhysicalObject
  extends Mixin(
    ResourceBackedModel,
    DcCreatorsMixin,
    DcContributorsMixin,
    DcImagesMixin,
    OwlSameAsMixin,
    SomeImageThumbnailMixin,
    WorkAgentsMixin,
    WorkDisplayDateMixin
  )
  implements Work {
  @Memoize()
  get created(): PartialDateTimeDescription | null {
    return this.findAndMapObject(dcterms.created, term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get events(): readonly WorkEvent[] {
    const events: WorkEvent[] = [];

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
        label: null,
        location,
        role: "Current",
      };
    } else {
      return null;
    }
  }

  @Memoize()
  get modified(): PartialDateTimeDescription | null {
    return this.findAndMapObject(dcterms.modified, term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }

  override preMemoize(): void {
    super.preMemoize();
    this.preMemoizeContributors();
    this.preMemoizeCreators();
    this.preMemoizeImages();
    this.preMemoizeSameAs();
    this.preMemoizeWorkAgents();
    this.preMemoizeWorkDisplayDate();
    this.created;
    this.description;
    this.events;
    this.location;
    this.modified;
    this.subjects;
    this.title;
    this.wikipediaUrl;
  }

  @Memoize()
  get subjects(): readonly WorkSubject[] {
    return this.filterAndMapObjects(dcterms.subject, term =>
      mapTermToWorkSubject(this, term)
    );
  }

  @Memoize()
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }

  @Memoize()
  get wikipediaUrl(): string | null {
    return this.findAndMapObject(dcterms.relation, term =>
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }
}
