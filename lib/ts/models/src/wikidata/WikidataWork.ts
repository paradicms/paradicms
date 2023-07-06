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
import {WikidataLocation} from "./WikidataLocation";
import log from "loglevel";

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

  get location(): WorkLocation | null {
    // Locations have an odd type hierarchy in Wikidata
    // Rather than trying to read them ahead of time in WikidataModelReader,
    // simply assume anything that's the object of P276 is a WikidataLocation.
    const getLocationWithCentroid = (
      wikidataModel: WikidataModel
    ): WikidataLocation | null => {
      for (const p276Quad of this.dataset.match(
        wikidataModel.identifier,
        wdt["P276"],
        null,
        wikidataModel.graph
      )) {
        if (p276Quad.object.termType !== "NamedNode") {
          continue;
        }
        const wikibaseItem = this.wikibaseItemSet.wikibaseItemByIri(
          p276Quad.object.value
        );
        if (!wikibaseItem) {
          log.debug("missing location Wikibase item", p276Quad.object.value);
          continue;
        }
        const wikidataLocation = new WikidataLocation({
          dataset: this.dataset,
          modelSet: this.modelSet,
          wikibaseItem,
          wikibaseItemSet: this.wikibaseItemSet,
        });
        if (wikidataLocation.centroid) {
          return wikidataLocation;
        } else {
          return getLocationWithCentroid(wikidataLocation);
        }
      }
      return null;
    };

    const location = getLocationWithCentroid(this);
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
