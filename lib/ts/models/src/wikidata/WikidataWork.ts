import {WikidataModel} from "./WikidataModel";
import {Work} from "../Work";
import {WorkLocation} from "../WorkLocation";
import {WorkAgent} from "../WorkAgent";
import {Collection} from "../Collection";
import {WorkEventUnion} from "../WorkEventUnion";
import {Text} from "../Text";
import {getWorkAgents} from "../getWorkAgents";
import {Memoize} from "typescript-memoize";
import {mapTermToText} from "../mapTermToText";
import {DataFactory} from "@paradicms/rdf";
import {getWorkDisplayDate} from "../getWorkDisplayDate";
import {DateTimeDescription} from "../DateTimeDescription";
import {wdt} from "@paradicms/vocabularies";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {SyntheticWorkCreationEvent} from "../synthetic/SyntheticWorkCreationEvent";

export class WikidataWork extends WikidataModel implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    return getWorkAgents(this);
  }

  readonly collections: readonly Collection[] = [];

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(
      DataFactory.namedNode("http://schema.org/description"),
      term => mapTermToText(this, term)
    );
  }

  get displayDate(): string | null {
    return getWorkDisplayDate(this);
  }

  @Memoize()
  get inception(): DateTimeDescription | null {
    return this.findAndMapStatementValue(wdt["P571"], term =>
      mapTermToDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get events(): readonly WorkEventUnion[] {
    const events: WorkEventUnion[] = [];

    if (this.inception) {
      events.push(
        SyntheticWorkCreationEvent.fromWork({
          date: this.inception,
          work: this,
        })
      );
    }

    return events;
  }

  readonly location: WorkLocation | null = null;
}
