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
import {wd} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {WikidataPerson} from "./WikidataPerson";
import {WikidataWork} from "./WikidataWork";

class WikidataEntities {
  static readonly HUMAN = wd["Q5"];
  static readonly NON_WORK = [WikidataEntities.HUMAN];
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
    return (
      this.wikibaseItemsByInstanceOfEntityUri[WikidataEntities.HUMAN.value] ??
      []
    ).map(
      wikibaseItem =>
        new WikidataPerson({
          dataset: this.dataset,
          modelSet: kwds.modelSet,
          wikibaseItem,
        })
    );
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

  readWorkEvents(kwds: {modelSet: ModelSet}): readonly WorkEventUnion[] {
    return [];
  }

  readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    const works: Work[] = [];
    for (const instanceOfEntityEntry of Object.entries(
      this.wikibaseItemsByInstanceOfEntityUri
    )) {
      if (
        WikidataEntities.NON_WORK.some(
          nonWorkEntityUri => nonWorkEntityUri.value === instanceOfEntityEntry[0]
        )
      ) {
        continue;
      }
      for (const wikibaseItem of instanceOfEntityEntry[1]) {
        works.push(new WikidataWork({dataset: this.dataset, modelSet: kwds.modelSet, wikibaseItem})
      }
    }
    return works;
  }

  @Memoize()
  private get wikibaseItems(): readonly WikibaseItem[] {
    return getWikibaseItems({dataset: this.dataset});
  }

  @Memoize()
  private get wikibaseItemsByInstanceOfEntityUri(): {
    [index: string]: readonly WikibaseItem[];
  } {
    const result: {[index: string]: WikibaseItem[]} = {};
    const instanceOfProperty = wd["P31"];
    for (const wikibaseItem of this.wikibaseItems) {
      for (const statement of wikibaseItem.statements) {
        if (
          statement.propertyDefinition.node.value !== instanceOfProperty.value
        ) {
          continue;
        } else if (statement.value.termType !== "NamedNode") {
          continue;
        }
        const instanceOfEntityUri = statement.value;
        if (!result[instanceOfEntityUri.value]) {
          result[instanceOfEntityUri.value] = [];
        }
        result[instanceOfEntityUri.value].push(wikibaseItem);
      }
    }
    return result;
  }
}
