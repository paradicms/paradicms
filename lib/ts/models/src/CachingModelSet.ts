import {datasetToFastRdfString} from "@paradicms/rdf";
import {Dataset} from "rdf-js";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "./AgentUnion";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Model} from "./Model";
import {ModelReader} from "./ModelReader";
import {ModelSet} from "./ModelSet";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {WorkEventUnion} from "./WorkEventUnion";

const indexModelsByUri = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    if (model.uri) {
      map[model.uri] = model;
    }
    return map;
  }, {} as {[index: string]: ModelT});
};

const indexModelsByKeys = <ModelT extends Model>(
  models: readonly ModelT[],
  modelKeys: (model: ModelT) => readonly string[]
): {[index: string]: readonly ModelT[]} => {
  const modelsMultimap: {[index: string]: ModelT[]} = {};
  for (const model of models) {
    for (const key of modelKeys(model)) {
      const modelsWithKey = modelsMultimap[key];
      if (modelsWithKey) {
        modelsWithKey.push(model);
      } else {
        modelsMultimap[key] = [model];
      }
    }
  }
  return sortModelsMultimap(modelsMultimap);
};

const indexModelsByKey = <ModelT extends Model>(
  models: readonly ModelT[],
  modelKey: (model: ModelT) => string
): {[index: string]: readonly ModelT[]} => {
  const modelsMultimap: {[index: string]: ModelT[]} = {};
  for (const model of models) {
    const key = modelKey(model);
    const modelsWithKey = modelsMultimap[key];
    if (modelsWithKey) {
      modelsWithKey.push(model);
    } else {
      modelsMultimap[key] = [model];
    }
  }
  return sortModelsMultimap(modelsMultimap);
};

const sortModelsArray = <ModelT extends Model>(
  models: readonly ModelT[]
): readonly ModelT[] => {
  const sortedModels = models.concat();
  sortedModels.sort((left, right) => {
    if (left.uri !== null) {
      if (right.uri !== null) {
        return left.uri.localeCompare(right.uri);
      } else {
        return 1; // URI > no URI
      }
    } else if (right.uri !== null) {
      return -1; // no URI < URI
    } else {
      return 0;
    }
  });
  return sortedModels;
};

const sortModelsMultimap = <ModelT extends Model>(models: {
  [index: string]: readonly ModelT[];
}): {[index: string]: readonly ModelT[]} => {
  const sortedModels: {[index: string]: readonly ModelT[]} = {};
  for (const key of Object.keys(models)) {
    sortedModels[key] = sortModelsArray(models[key]);
  }
  return sortedModels;
};

export class CachingModelSet implements ModelSet {
  constructor(private readonly modelReader: ModelReader) {}

  agentByUri(agentUri: string): AgentUnion {
    for (const index of [this.organizationsByUriIndex, this.peopleByUriIndex]) {
      const agent = index[agentUri];
      if (agent) {
        return agent;
      }
    }
    throw new RangeError("no such agent " + agentUri);
  }

  agentWorks(agentUri: string): readonly Work[] {
    return this.worksByAgentUriIndex[agentUri] ?? [];
  }

  @Memoize()
  get appConfiguration(): AppConfiguration | null {
    return this.modelReader.readAppConfiguration({
      modelSet: this,
    });
  }

  collectionWorks(collectionUri: string): readonly Work[] {
    return this.worksByCollectionUriIndex[collectionUri] ?? [];
  }

  @Memoize()
  get collections(): readonly Collection[] {
    return sortModelsArray(this.modelReader.readCollections({modelSet: this}));
  }

  collectionByUri(collectionUri: string): Collection {
    return this.modelByUri(this.collectionsByUriIndex, collectionUri);
  }

  @Memoize()
  private get collectionsByUriIndex(): {[index: string]: Collection} {
    return indexModelsByUri(this.collections);
  }

  conceptByUri(conceptUri: string): Concept {
    return this.modelByUri(this.conceptsByUriIndex, conceptUri);
  }

  conceptByUriOptional(conceptUri: string): Concept | null {
    return this.modelByUriOptional(this.conceptsByUriIndex, conceptUri);
  }

  @Memoize()
  get concepts(): readonly Concept[] {
    return sortModelsArray(this.modelReader.readConcepts({modelSet: this}));
  }

  @Memoize()
  private get conceptsByUriIndex(): {[index: string]: Concept} {
    return indexModelsByUri(this.concepts);
  }

  imageByUri(imageUri: string): Image {
    return this.modelByUri(this.imagesByUriIndex, imageUri);
  }

  @Memoize()
  private get images(): readonly Image[] {
    return sortModelsArray(this.modelReader.readImages({modelSet: this}));
  }

  imagesByDepictsUri(depictsUri: string): readonly Image[] {
    return this.imagesByDepictsUriIndex[depictsUri] ?? [];
  }

  @Memoize()
  private get imagesByDepictsUriIndex(): {[index: string]: readonly Image[]} {
    return indexModelsByKey(this.images, image => image.depictsUri);
  }

  imagesByOriginalImageUri(originalImageUri: string): readonly Image[] {
    // Exclude the original image itself
    return (this.imagesByOriginalImageUriIndex[originalImageUri] ?? []).filter(
      image => image.originalImageUri === originalImageUri
    );
  }

  @Memoize()
  private get imagesByOriginalImageUriIndex(): {
    [index: string]: readonly Image[];
  } {
    return indexModelsByKey(
      this.images,
      image => image.originalImageUri ?? image.uri
    );
  }

  @Memoize()
  private get imagesByUriIndex(): {[index: string]: Image} {
    return indexModelsByUri(this.images);
  }

  licenseByUri(licenseUri: string): License {
    return this.modelByUri(this.licensesByUriIndex, licenseUri);
  }

  @Memoize()
  private get licensesByUriIndex(): {[index: string]: License} {
    return indexModelsByUri(this.namedLicenses);
  }

  locationByUri(locationUri: string): Location {
    return this.modelByUri(this.locationsByUriIndex, locationUri);
  }

  @Memoize()
  private get locationsByUriIndex(): {[index: string]: Location} {
    return indexModelsByUri(this.namedLocations);
  }

  private modelByUri<ModelT>(
    index: {[index: string]: ModelT},
    uri: string
  ): ModelT {
    const model = this.modelByUriOptional(index, uri);
    if (!model) {
      throw new RangeError("no such model " + uri);
    }
    return model;
  }

  private modelByUriOptional<ModelT>(
    index: {[index: string]: ModelT},
    uri: string
  ): ModelT | null {
    return index[uri] ?? null;
  }

  @Memoize()
  private get namedLicenses(): readonly License[] {
    return sortModelsArray(
      this.modelReader.readNamedLicenses({modelSet: this})
    );
  }

  @Memoize()
  private get namedLocations(): readonly Location[] {
    return sortModelsArray(
      this.modelReader.readNamedLocations({modelSet: this})
    );
  }

  @Memoize()
  private get namedOrganizations(): readonly Organization[] {
    return sortModelsArray(
      this.modelReader.readNamedOrganizations({modelSet: this})
    );
  }

  @Memoize()
  private get namedPeople(): readonly Person[] {
    return sortModelsArray(this.modelReader.readNamedPeople({modelSet: this}));
  }

  @Memoize()
  private get namedRightsStatements(): readonly RightsStatement[] {
    return sortModelsArray(
      this.modelReader.readNamedRightsStatements({modelSet: this})
    );
  }

  organizationByUri(organizationUri: string): Organization {
    return this.modelByUri(this.organizationsByUriIndex, organizationUri);
  }

  organizationByUriOptional(organizationUri: string): Organization | null {
    return this.modelByUriOptional(
      this.organizationsByUriIndex,
      organizationUri
    );
  }

  @Memoize()
  private get organizationsByUriIndex(): {[index: string]: Organization} {
    return indexModelsByUri(this.namedOrganizations);
  }

  @Memoize()
  private get peopleByUriIndex(): {[index: string]: Person} {
    return indexModelsByUri(this.namedPeople);
  }

  personByUri(personUri: string): Person {
    return this.modelByUri(this.peopleByUriIndex, personUri);
  }

  personByUriOptional(personUri: string): Person | null {
    return this.modelByUriOptional(this.peopleByUriIndex, personUri);
  }

  @Memoize()
  get properties(): readonly Property[] {
    return sortModelsArray(this.modelReader.readProperties({modelSet: this}));
  }

  propertiesByGroupUri(propertyGroupUri: string): readonly Property[] {
    return this.propertiesByGroupUriIndex[propertyGroupUri] ?? [];
  }

  @Memoize()
  private get propertiesByGroupUriIndex(): {
    [index: string]: readonly Property[];
  } {
    return indexModelsByKeys(this.properties, property => property.groupUris);
  }

  @Memoize()
  private get propertiesByUriIndex(): {[index: string]: Property} {
    return indexModelsByUri(this.properties);
  }

  propertyByUri(propertyUri: string): Property {
    return this.modelByUri(this.propertiesByUriIndex, propertyUri);
  }

  propertyGroupByUri(propertyGroupUri: string): PropertyGroup {
    return this.modelByUri(this.propertyGroupsByUriIndex, propertyGroupUri);
  }

  propertyGroupByUriOptional(propertyGroupUri: string): PropertyGroup | null {
    return this.modelByUriOptional(
      this.propertyGroupsByUriIndex,
      propertyGroupUri
    );
  }

  @Memoize()
  get propertyGroups(): readonly PropertyGroup[] {
    return sortModelsArray(
      this.modelReader.readPropertyGroups({modelSet: this})
    );
  }

  @Memoize()
  private get propertyGroupsByUriIndex(): {[index: string]: PropertyGroup} {
    return indexModelsByUri(this.propertyGroups);
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    return this.modelByUri(this.rightsStatementsByUriIndex, rightsStatementUri);
  }

  @Memoize()
  private get rightsStatementsByUriIndex(): {[index: string]: RightsStatement} {
    return indexModelsByUri(this.namedRightsStatements);
  }

  toFastRdfString(): string {
    return datasetToFastRdfString(this.toRdf());
  }

  toRdf(): Dataset {
    throw new EvalError("use model.toRdf to serialize");
  }

  workByUri(workUri: string): Work {
    return this.modelByUri(this.worksByUriIndex, workUri);
  }

  workByUriOptional(workUri: string): Work | null {
    return this.modelByUriOptional(this.worksByUriIndex, workUri);
  }

  @Memoize()
  get workEvents(): readonly WorkEventUnion[] {
    return sortModelsArray(this.modelReader.readWorkEvents({modelSet: this}));
  }

  workEventsByWorkUri(workUri: string): readonly WorkEventUnion[] {
    return this.workEventsByWorkUriIndex[workUri] ?? [];
  }

  workEventByUri(workEventUri: string): WorkEventUnion {
    return this.modelByUri(this.workEventsByUriIndex, workEventUri);
  }

  @Memoize()
  private get workEventsByUriIndex(): {
    [index: string]: WorkEventUnion;
  } {
    return indexModelsByUri(this.workEvents);
  }

  @Memoize()
  private get workEventsByWorkUriIndex(): {
    [index: string]: readonly WorkEventUnion[];
  } {
    return indexModelsByKey(this.workEvents, workEvent => workEvent.workUri);
  }

  @Memoize()
  get works(): readonly Work[] {
    return sortModelsArray(this.modelReader.readWorks({modelSet: this}));
  }

  @Memoize()
  private get worksByAgentUriIndex(): {
    [index: string]: readonly Work[];
  } {
    return indexModelsByKeys(this.works, work => {
      const agentUris: string[] = [];
      for (const agent of work.agents) {
        if (agent.agent.uri) {
          agentUris.push(agent.agent.uri);
        }
      }
      return agentUris;
    });
  }

  @Memoize()
  private get worksByCollectionUriIndex(): {
    [index: string]: readonly Work[];
  } {
    return indexModelsByKeys(this.works, work =>
      work.collections.map(collection => collection.uri)
    );
  }

  @Memoize()
  private get worksByUriIndex(): {[index: string]: Work} {
    return indexModelsByUri(this.works);
  }
}
