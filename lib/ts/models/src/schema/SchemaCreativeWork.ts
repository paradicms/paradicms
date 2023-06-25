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
    return [];
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

  get page(): string | null {
    return this.url;
  }
}
