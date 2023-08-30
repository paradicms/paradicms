import {wdt} from "@paradicms/vocabularies";
import log from "loglevel";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {Collection} from "../Collection";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {Work} from "../Work";
import {WorkAgentsMixin} from "../WorkAgentsMixin";
import {WorkDisplayDateMixin} from "../WorkDisplayDateMixin";
import {WorkEvent} from "../WorkEvent";
import {WorkLocation} from "../WorkLocation";
import {WorkSubject} from "../WorkSubject";
import {mapTermToPartialDateTimeDescription} from "../mapTermToPartialDateTimeDescription";
import {SyntheticWorkCreationEvent} from "../synthetic/SyntheticWorkCreationEvent";
import {WikidataConcept} from "./WikidataConcept";
import {WikidataLocation} from "./WikidataLocation";
import {WikidataModel} from "./WikidataModel";

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
  get inception(): PartialDateTimeDescription | null {
    return this.findAndMapStatementValue(wdt["P571"], term =>
      mapTermToPartialDateTimeDescription(this, term)
    );
  }

  @Memoize()
  get events(): readonly WorkEvent[] {
    const events: WorkEvent[] = [];

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

  get subjects(): readonly WorkSubject[] {
    // Subjects don't have a consistent type hierarchy in Wikipedia.
    // Rather than trying to read them ahead of time in WikidataModelReader,
    // simply assume anything that's the object of P921 is a WikidataConcept.
    return this.filterAndMapStatementValues(wdt["P921"], statementValue => {
      if (statementValue.termType !== "NamedNode") {
        return null;
      }

      const wikibaseItem = this.wikibaseItemSet.wikibaseItemByIri(
        statementValue.value
      );
      if (!wikibaseItem) {
        log.debug("missing concept Wikibase item", statementValue.value);
        return null;
      }

      const concept = new WikidataConcept({
        dataset: this.dataset,
        modelSet: this.modelSet,
        wikibaseItem,
        wikibaseItemSet: this.wikibaseItemSet,
        wikidataPropertiesByIri: this.wikidataPropertiesByIri,
      });

      return {
        concept,
        label: concept.label,
        thumbnail: selector => concept.thumbnail(selector),
        type: "Concept",
        value: "Concept-" + concept.key,
      };
    });
  }
}
