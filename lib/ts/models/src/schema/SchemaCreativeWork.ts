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
import {isWikipediaUrl} from "../isWikipediaUrl";
import {isWikidataConceptIri} from "../isWikidataConceptIri";
import {requireNonNull} from "@paradicms/utilities";

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

  get page(): string | null {
    return this.url;
  }

  get wikipediaUrl(): string | null {
    return this.findAndMapObject(schema.sameAs, term =>
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }

  get wikidataConceptIri(): string | null {
    return this.findAndMapObject(schema.sameAs, term =>
      term.termType === "NamedNode" && isWikidataConceptIri(term.value)
        ? term.value
        : null
    );
  }
}
