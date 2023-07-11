import {Event} from "../Event";
import {Mixin} from "ts-mixer";
import {SchemaModel} from "./SchemaModel";
import {EventDerivedDatesMixin} from "../EventDerivedDatesMixin";
import {DateTimeDescription} from "../DateTimeDescription";
import {Memoize} from "typescript-memoize";
import {schema} from "@paradicms/vocabularies";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {Location} from "../Location";
import {mapTermToLocation} from "../mapTermToLocation";
import {requireNonNull} from "@paradicms/utilities";
import {AgentUnion} from "../AgentUnion";
import {mapTermToAgent} from "../mapTermToAgent";

export class SchemaEvent extends Mixin(SchemaModel, EventDerivedDatesMixin)
  implements Event {
  get agents(): readonly AgentUnion[] {
    return this.contributors;
  }

  @Memoize()
  get contributors(): readonly AgentUnion[] {
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
  get startDate(): DateTimeDescription | null {
    return this.findAndMapObject(schema.startDate, term =>
      mapTermToDateTimeDescription(this, term)
    );
  }
}
