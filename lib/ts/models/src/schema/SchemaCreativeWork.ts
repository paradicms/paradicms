import {Mixin} from "ts-mixer";
import {SchemaNamedModel} from "./SchemaNamedModel";
import {SchemaCreativeWorkMixin} from "./SchemaCreativeWorkMixin";
import {Work} from "../Work";
import {WorkAgent} from "../WorkAgent";
import {getWorkAgents} from "../getWorkAgents";
import {Memoize} from "typescript-memoize";
import {getWorkDisplayDate} from "../getWorkDisplayDate";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {schema} from "@paradicms/vocabularies";
import {mapTermToLocation} from "../mapTermToLocation";
import {requireNonNull} from "@paradicms/utilities";
import {SyntheticWorkCreation} from "../synthetic/SyntheticWorkCreation";

export class SchemaCreativeWork
  extends Mixin(SchemaNamedModel, SchemaCreativeWorkMixin)
  implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    return getWorkAgents(this);
  }

  @Memoize()
  get displayDate(): string | null {
    return getWorkDisplayDate(this);
  }

  @Memoize()
  get events(): readonly WorkEventUnion[] {
    const events: WorkEventUnion[] = [];

    if (this.dateCreated) {
      events.push(new SyntheticWorkCreation({
        contributors: this.contributors,
        creators: this.creators,
        date: this.dateCreated,
        description: null,
        endDate: null,
        label: `${this.label} creation`,
        key: `${this.key} creation`,
        location: null,
        startDate: null,
      }));
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
        label: this.name,
        location,
        role: "Current",
      };
    } else {
      return null;
    }
  }
}
