import {DataFactory} from "@paradicms/rdf";
import {wdt} from "@paradicms/vocabularies";
import log from "loglevel";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {Collection} from "../Collection";
import {DateTimeDescription} from "../DateTimeDescription";
import {Text} from "../Text";
import {Work} from "../Work";
import {WorkAgentsMixin} from "../WorkAgentsMixin";
import {WorkDisplayDateMixin} from "../WorkDisplayDateMixin";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {mapTermToDateTimeDescription} from "../mapTermToDateTimeDescription";
import {SyntheticWorkCreationEvent} from "../synthetic/SyntheticWorkCreationEvent";
import {WikidataLocation} from "./WikidataLocation";
import {WikidataModel} from "./WikidataModel";
import {WikidataText} from "./WikidataText";

export class WikidataWork
  extends Mixin(WikidataModel, WorkAgentsMixin, WorkDisplayDateMixin)
  implements Work {
  readonly collections: readonly Collection[] = [];

  get contributors(): readonly Agent[] {
    return [];
  }

  @Memoize()
  get creators(): readonly Agent[] {
    return this.filterAndMapStatementValues(wdt["P170"], statementValue => {
      if (statementValue.termType !== "NamedNode") {
        return null;
      }
      return this.modelSet.agentByIri(statementValue.value);
    });
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(
      DataFactory.namedNode("http://schema.org/description"),
      term =>
        term.termType === "Literal"
          ? new WikidataText({literal: term, modelSet: this.modelSet})
          : null
    );
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
          wikidataPropertiesByIri: this.wikidataPropertiesByIri,
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
