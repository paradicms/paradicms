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

class WikidataEntities {
  // static readonly BUILDING = wd["Q41176"];
  // static readonly EXHIBITION_HALL = wd["Q57659484"];
  static readonly CREATIVE_WORK = wd["Q17537576"]
  static readonly HUMAN = wd["Q5"];
  // static readonly LOCATION = wd["Q115095765"];
  // static readonly WORK = wd["Q386724"];
}

export class WikidataModelReader extends DatasetModelReader {
  override readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.readWikidataModels({
      class_: WikidataEntities.HUMAN,
      factory: WikidataPerson,
      modelSet: kwds.modelSet,
    });
  }

  protected readWikidataModels<WikidataModelT extends WikidataModel>(kwds: {
    class_: NamedNode;
    factory: {
      new (kwds: {
        dataset: DatasetCore;
        modelSet: ModelSet;
        wikibaseItem: WikibaseItem;
        wikibaseItemSet: WikibaseItemSet;
      }): WikidataModelT;
    };
    modelSet: ModelSet;
  }): readonly WikidataModelT[] {
    const {class_, factory, modelSet} = kwds;
    const models: WikidataModelT[] = [];
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
            wikibaseItemSet: this.wikibaseItemSet
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
      class_: WikidataEntities.CREATIVE_WORK,
      factory: WikidataWork,
      modelSet: kwds.modelSet,
    });
  }

  @Memoize()
  private get wikibaseItemSet(): WikibaseItemSet {
    return new WikibaseItemSet(getWikibaseItems({dataset: this.dataset}));
  }
}
