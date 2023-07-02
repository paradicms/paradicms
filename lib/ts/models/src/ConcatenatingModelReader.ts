import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {RightsStatement} from "./RightsStatement";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {Work} from "./Work";
import {ModelReader} from "./ModelReader";
import {ModelSet} from "./ModelSet";

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

  readImages(kwds: {modelSet: ModelSet}): readonly Image[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readImages(kwds)
    );
  }

  readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedLicenses(kwds)
    );
  }

  readNamedLocations(kwds: {modelSet: ModelSet}): readonly Location[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedLocations(kwds)
    );
  }

  readNamedOrganizations(kwds: {modelSet: ModelSet}): readonly Organization[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedOrganizations(kwds)
    );
  }

  readNamedPeople(kwds: {modelSet: ModelSet}): readonly Person[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedPeople(kwds)
    );
  }

  readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[] {
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedRightsStatements(kwds)
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
