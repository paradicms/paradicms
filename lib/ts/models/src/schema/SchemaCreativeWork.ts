import {Mixin} from "ts-mixer";
import {SchemaNamedModel} from "./SchemaNamedModel";
import {SchemaCreativeWorkMixin} from "./SchemaCreativeWorkMixin";
import {Work} from "../Work";
import {Memoize} from "typescript-memoize";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {schema} from "@paradicms/vocabularies";
import {mapTermToLocation} from "../mapTermToLocation";
import {requireNonNull} from "@paradicms/utilities";
import {SyntheticWorkCreationEvent} from "../synthetic/SyntheticWorkCreationEvent";
import {SyntheticWorkModificationEvent} from "../synthetic/SyntheticWorkModificationEvent";
import {WorkDisplayDateMixin} from "../WorkDisplayDateMixin";
import {WorkAgentsMixin} from "../WorkAgentsMixin";

export class SchemaCreativeWork
  extends Mixin(SchemaNamedModel, SchemaCreativeWorkMixin, WorkAgentsMixin, WorkDisplayDateMixin)
  implements Work {
  @Memoize()
  get events(): readonly WorkEventUnion[] {
    const events: WorkEventUnion[] = [];

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
