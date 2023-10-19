import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Event} from "./Event";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {ModelReader} from "./ModelReader";
import {ModelSet} from "./ModelSet";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";

/**
 * Abstract base for ModelReader implementations that only implement a subset of the read* methods.
 */
export class PartialModelReader implements ModelReader {
  readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    return null;
  }

  readCollections(kwds: {modelSet: ModelSet}): readonly Collection[] {
    return [];
  }

  readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[] {
    return [];
  }

  readEvents(kwds: {modelSet: ModelSet}): readonly Event[] {
    return [];
  }

  readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return [];
  }

  readLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return [];
  }

  readLocations(kwds: {modelSet: ModelSet}): readonly Location[] {
    return [];
  }

  readOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[] {
    return [];
  }

  readPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return [];
  }

  readRightsStatements(kwds: {modelSet: ModelSet}): readonly RightsStatement[] {
    return [];
  }

  readProperties(kwds: {modelSet: ModelSet}): readonly Property[] {
    return [];
  }

  readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return [];
  }

  readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return [];
  }
}
