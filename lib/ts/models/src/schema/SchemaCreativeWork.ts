import { requireNonNull } from "@paradicms/utilities";
import { schema } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Work } from "../Work";
import { WorkAgentsMixin } from "../WorkAgentsMixin";
import { WorkDisplayDateMixin } from "../WorkDisplayDateMixin";
import { WorkEvent } from "../WorkEvent";
import { WorkLocation } from "../WorkLocation";
import { mapTermToLocation } from "../mapTermToLocation";
import { SyntheticWorkCreationEvent } from "../synthetic/SyntheticWorkCreationEvent";
import { SyntheticWorkModificationEvent } from "../synthetic/SyntheticWorkModificationEvent";
import { SchemaCreativeWorkMixin } from "./SchemaCreativeWorkMixin";
import { SchemaModel } from "./SchemaModel";

export class SchemaCreativeWork
  extends Mixin(SchemaModel, SchemaCreativeWorkMixin, WorkAgentsMixin, WorkDisplayDateMixin)
  implements Work {
  @Memoize()
  get events(): readonly WorkEvent[] {
    const events: WorkEvent[] = [];

    if (this.dateCreated) {
      events.push(SyntheticWorkCreationEvent.fromWork({date: this.dateCreated, work: this}));
    }

    if (this.dateModified) {
      events.push(SyntheticWorkModificationEvent.fromWork({date: this.dateModified, work: this}));
    }

    return events;
  }

  override get label(): string {
    return requireNonNull(this.name);
  }

  get location(): WorkLocation | null {
    const location = this.findAndMapObject(schema.spatial, term =>
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
}
