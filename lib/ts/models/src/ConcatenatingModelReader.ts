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
 * ModelReader implementation that simply concatenates the outputs of other ModelReader implementations.
 */
export class ConcatenatingModelReader implements ModelReader {
  constructor(private readonly modelReaders: ModelReader[]) {}

  readAppConfiguration(kwds: {modelSet: ModelSet}): AppConfiguration | null {
    for (const modelReader of this.modelReaders) {
      const appConfiguration = modelReader.readAppConfiguration(kwds);
      if (appConfiguration) {
        return appConfiguration;
      }
    }
    return null;
  }

  readCollections(kwds: {modelSet: ModelSet}): readonly Collection[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readCollections(kwds)
    );
  }

  readConcepts(kwds: {modelSet: ModelSet}): readonly Concept[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readConcepts(kwds)
    );
  }

  readEvents(kwds: {modelSet: ModelSet}): readonly Event[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readEvents(kwds)
    );
  }

  readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readImages(kwds)
    );
  }

  readLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readLicenses(kwds)
    );
  }

  readLocations(kwds: {modelSet: ModelSet}): readonly Location[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readLocations(kwds)
    );
  }

  readOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readOrganizations(kwds)
    );
  }

  readPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readPeople(kwds)
    );
  }

  readRightsStatements(kwds: {modelSet: ModelSet}): readonly RightsStatement[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readRightsStatements(kwds)
    );
  }

  readProperties(kwds: {modelSet: ModelSet}): readonly Property[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readProperties(kwds)
    );
  }

  readPropertyGroups(kwds: {modelSet: ModelSet}): readonly PropertyGroup[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readPropertyGroups(kwds)
    );
  }

  readWorks(kwds: {modelSet: ModelSet}): readonly Work[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readWorks(kwds)
    );
  }
}
