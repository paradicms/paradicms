import {ModelSet} from "../ModelSet";
import {AppConfiguration} from "../AppConfiguration";
import {Collection} from "../Collection";
import {Concept} from "../Concept";
import {Image} from "../Image";
import {License} from "../License";
import {Location} from "../Location";
import {Organization} from "../Organization";
import {Person} from "../Person";
import {RightsStatement} from "../RightsStatement";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {WorkEventUnion} from "../WorkEventUnion";
import {Work} from "../Work";
import {DatasetModelReader} from "../DatasetModelReader";
import {getWikibaseItems, WikibaseItem} from "@paradicms/wikibase";
import {wd, wdt} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {WikidataPerson} from "./WikidataPerson";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {WikidataModel} from "./WikidataModel";
import {WikidataWork} from "./WikidataWork";

class WikidataEntities {
  static readonly HUMAN = wd["Q5"];
  static readonly WORK = wd["Q386724"];
}

export class WikidataModelReader extends DatasetModelReader {
  readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    return null;
  }

  readCollections(kwds: {modelSet: ModelSet}): readonly Collection[] {
    return [];
  }

  readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[] {
    return [];
  }

  readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return [];
  }

  readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return [];
  }

  readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[] {
    return [];
  }

  readNamedOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[] {
    return [];
  }

  readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.readWikidataModels({
      class_: WikidataEntities.HUMAN,
      factory: WikidataPerson,
      modelSet: kwds.modelSet,
    });
  }

  readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[] {
    return [];
  }

  readProperties(kwds: {modelSet: ModelSet}): readonly Property[] {
    return [];
  }

  readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return [];
  }

  protected readWikidataModels<WikidataModelT extends WikidataModel>(kwds: {
    class_: NamedNode;
    factory: {
      new (kwds: {
        dataset: Dataset;
        modelSet: ModelSet;
        wikibaseItem: WikibaseItem;
      }): WikidataModelT;
    };
    modelSet: ModelSet;
  }): readonly WikidataModelT[] {
    const {class_, factory, modelSet} = kwds;
    const models: WikidataModelT[] = [];
    for (const instanceQuad of getRdfInstanceQuads({
      class_,
      dataset: this.dataset,
      instanceOfPredicate: wdt["P31"],
      subClassOfPredicate: wdt["P279"],
    })) {
      if (instanceQuad.subject.termType !== "NamedNode") {
        continue;
      }
      this.checkModelGraph({
        modelGraph: instanceQuad.graph as DefaultGraph | BlankNode | NamedNode,
        modelNode: instanceQuad.subject,
      });
      const wikibaseItem = this.wikibaseItemsByUri[instanceQuad.subject.value];
      if (wikibaseItem) {
        models.push(
          new factory({
            dataset: this.dataset,
            modelSet,
            wikibaseItem,
          })
        );
      } else {
        console.error("missing Wikidata item", instanceQuad.value);
      }
    }
    return models;
  }

  readWorkEvents(kwds: {modelSet: ModelSet}): readonly WorkEventUnion[] {
    return [];
  }

  readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return this.readWikidataModels({
      class_: WikidataEntities.WORK,
      factory: WikidataWork,
      modelSet: kwds.modelSet,
    });
  }

  @Memoize()
  private get wikibaseItems(): readonly WikibaseItem[] {
    return getWikibaseItems({dataset: this.dataset});
  }

  @Memoize()
  private get wikibaseItemsByUri(): {[index: string]: WikibaseItem} {
    return this.wikibaseItems.reduce((map, wikibaseItem) => {
      map[wikibaseItem.identifier.value] = wikibaseItem;
      return map;
    }, {} as {[index: string]: WikibaseItem});
  }
}
