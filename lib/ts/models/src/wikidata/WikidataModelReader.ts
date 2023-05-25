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
    return (this.wikibaseItemsByInstanceOfUri[wd["Q5"].value] ?? []).map(
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
    return [];
  }

  @Memoize()
  private get wikibaseItems(): readonly WikibaseItem[] {
    return getWikibaseItems({dataset: this.dataset});
  }

  @Memoize()
  private get wikibaseItemsByInstanceOfUri(): {
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
        }
        if (statement.value.type !== "NamedNode") {
          continue;
        }
        if (!result[statement.value.value.value]) {
          result[statement.value.value.value] = [];
        }
        result[statement.value.value.value].push(wikibaseItem);
      }
    }
    return result;
  }
}
