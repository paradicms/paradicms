import {ModelSet} from "../ModelSet";
import {Person} from "../Person";
import {Work} from "../Work";
import {DatasetModelReader} from "../DatasetModelReader";
import {getWikibaseItems, WikibaseItem} from "@paradicms/wikibase";
import {wd, wdt} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {WikidataPerson} from "./WikidataPerson";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {DatasetCore, NamedNode} from "@rdfjs/types";
import {WikidataModel} from "./WikidataModel";
import {WikidataWork} from "./WikidataWork";
import {ModelGraphIdentifier} from "../ModelGraphIdentifier";
import log from 'loglevel';
import {WikibaseItemSet} from "../wikibase/WikibaseItemSet";
import {WikidataProperty} from "./WikidataProperty";
import {indexModelsByIri} from "../indexModelsByIri";

class WikidataEntities {
  // Creative work somehow captures "episode from Greek mythology" (-> episode -> broadcast program -> creative work)
  // static readonly CREATIVE_WORK = wd["Q17537576"]
  static readonly HUMAN = wd["Q5"];
  // "Work" captures too many things
  // static readonly WORK = wd["Q386724"];
  static readonly WORK_OF_ART = wd["Q838948"];
}

export class WikidataModelReader extends DatasetModelReader {
  @Memoize()
  private get getWikibaseItemsResult() {
    return getWikibaseItems({dataset: this.dataset});
  }

  override readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.readWikidataModels({
      class_: WikidataEntities.HUMAN,
      factory: WikidataPerson,
      modelSet: kwds.modelSet,
    });
  }

  override readProperties(kwds: { modelSet: ModelSet }): readonly WikidataProperty[] {
    return this.getWikibaseItemsResult.wikibasePropertyDefinitions.map(wikibasePropertyDefinition => new WikidataProperty({
      dataset: this.dataset,
      modelSet: kwds.modelSet,
      wikibasePropertyDefinition
    }))
  }

  protected readWikidataModels<WikidataModelT extends WikidataModel>(kwds: {
    class_: NamedNode;
    factory: {
      new (kwds: {
        dataset: DatasetCore;
        modelSet: ModelSet;
        wikibaseItem: WikibaseItem;
        wikibaseItemSet: WikibaseItemSet;
        wikidataPropertiesByIri: {[index: string]: WikidataProperty}
      }): WikidataModelT;
    };
    modelSet: ModelSet;
  }): readonly WikidataModelT[] {
    const {class_, factory, modelSet} = kwds;
    const models: WikidataModelT[] = [];
    const wikidataPropertiesByIri = indexModelsByIri(this.readProperties(kwds));
    for (const instanceQuad of getRdfInstanceQuads({
      class_,
      dataset: this.dataset,
      includeSubclasses: true,
      instanceOfPredicate: wdt["P31"],
      subClassOfPredicate: wdt["P279"],
    })) {
      if (instanceQuad.subject.termType !== "NamedNode") {
        continue;
      }
      this.checkModelGraph({
        modelGraph: instanceQuad.graph as ModelGraphIdentifier,
        modelIdentifier: instanceQuad.subject,
      });
      const wikibaseItem = this.wikibaseItemSet.wikibaseItemByIri(instanceQuad.subject.value);
      if (wikibaseItem) {
        models.push(
          new factory({
            dataset: this.dataset,
            modelSet,
            wikibaseItem,
            wikibaseItemSet: this.wikibaseItemSet,
            wikidataPropertiesByIri
          })
        );
      } else {
        log.error("missing Wikidata item", instanceQuad.value);
      }
    }
    return models;
  }

  override readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return this.readWikidataModels({
      class_: WikidataEntities.WORK_OF_ART,
      factory: WikidataWork,
      modelSet: kwds.modelSet,
    });
  }

  @Memoize()
  private get wikibaseItemSet(): WikibaseItemSet {
    return new WikibaseItemSet(this.getWikibaseItemsResult.wikibaseItemsByIri);
  }
}
