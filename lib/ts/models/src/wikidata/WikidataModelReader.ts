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
    return [];
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
}
