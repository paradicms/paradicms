import { requireNonNull } from "@paradicms/utilities";
import { schema } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Agent } from "../Agent";
import { DateTimeDescription } from "../DateTimeDescription";
import { Event } from "../Event";
import { EventDerivedDatesMixin } from "../EventDerivedDatesMixin";
import { Location } from "../Location";
import { mapTermToAgent } from "../mapTermToAgent";
import { mapTermToDateTimeDescription } from "../mapTermToDateTimeDescription";
import { mapTermToLocation } from "../mapTermToLocation";
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

  readonly date: DateTimeDescription | null = null;

  @Memoize()
  get endDate(): DateTimeDescription | null {
    return this.findAndMapObject(schema.endDate, term =>
      mapTermToDateTimeDescription(this, term)
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

  @Memoize()
  get startDate(): DateTimeDescription | null {
    return this.findAndMapObject(schema.startDate, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }
}
