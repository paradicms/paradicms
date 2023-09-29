import { requireNonNull } from "@paradicms/utilities";
import { schema } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Agent } from "../Agent";
import { Event } from "../Event";
import { EventDerivedDatesMixin } from "../EventDerivedDatesMixin";
import { Location } from "../Location";
import { PartialDateTimeDescription } from "../PartialDateTimeDescription";
import { mapTermToAgent } from "../mapTermToAgent";
import { mapTermToLocation } from "../mapTermToLocation";
import { mapTermToPartialDateTimeDescription } from "../mapTermToPartialDateTimeDescription";
import { SchemaModel } from "./SchemaModel";

export class SchemaEvent extends Mixin(SchemaModel, EventDerivedDatesMixin)
  implements Event {
  get agents(): readonly Agent[] {
    return this.contributors.concat(this.organizers);
  }

  @Memoize()
  get contributors(): readonly Agent[] {
    return this.filterAndMapObjects(schema.contributor, term =>
        mapTermToAgent(this, term)
    );
  }

  readonly date: PartialDateTimeDescription | null = null;

  @Memoize()
  get endDate(): PartialDateTimeDescription | null {
    return this.findAndMapObject(schema.endDate, term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }

  override get label(): string {
    return requireNonNull(this.name);
  }

  @Memoize()
  get location(): Location | null {
    return this.findAndMapObject(schema.location, term =>
      mapTermToLocation(this, term)
    );
  }

  @Memoize()
  get organizers(): readonly Agent[] {
    return this.filterAndMapObjects(schema.organizer, term =>
        mapTermToAgent(this, term)
    );
  }

  override preMemoize(): void {
    super.preMemoize();
    this.preMemoizeEventDerivedDates();
    this.contributors;
    this.location;
    this.organizers;
    this.startDate;
  }

  @Memoize()
  get startDate(): PartialDateTimeDescription | null {
    return this.findAndMapObject(schema.startDate, term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }
}
