import {datasetToFastRdfString} from "@paradicms/rdf";
import {requireDefined} from "@paradicms/utilities";
import {Dataset} from "rdf-js";
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
  private _appConfiguration?: AppConfiguration | null;
  private _collections?: readonly Collection[];
  private _collectionsByUriIndex?: {[index: string]: Collection};
  private _concepts?: readonly Concept[];
  private _conceptsByUriIndex?: {[index: string]: Concept};
  private _images?: readonly Image[];
  private _imagesByDepictsUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByOriginalImageUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByUriIndex?: {[index: string]: Image};
  private _namedLicenses?: readonly License[];
  private _licensesByUriIndex?: {[index: string]: License};
  private _locationsByUriIndex?: {[index: string]: Location};
  private _namedLocations?: readonly Location[];
  private _namedOrganizations?: readonly Organization[];
  private _namedOrganizationsByUriIndex?: {[index: string]: Organization};
  private _namedPeople?: readonly Person[];
  private _namedRightsStatements?: readonly RightsStatement[];
  private _peopleByUriIndex?: {[index: string]: Person};
  private _properties?: readonly Property[];
  private _propertiesByGroupUriIndex?: {[index: string]: readonly Property[]};
  private _propertiesByUriIndex?: {[index: string]: Property};
  private _propertyGroups?: readonly PropertyGroup[];
  private _propertyGroupsByUriIndex?: {[index: string]: PropertyGroup};
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};
  private _workEvents?: readonly WorkEventUnion[];
  private _workEventsByUriIndex?: {[index: string]: WorkEventUnion};
  private _workEventsByWorkUriIndex?: {
    [index: string]: readonly WorkEventUnion[];
  };
  private _works?: readonly Work[];
  private _worksByAgentUriIndex?: {[index: string]: readonly Work[]};
  private _worksByCollectionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByUriIndex?: {[index: string]: Work};

  constructor(private readonly modelReaders: readonly ModelReader[]) {}

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

  get appConfiguration(): AppConfiguration | null {
    if (typeof this._appConfiguration === "undefined") {
      this._appConfiguration = this.readAppConfiguration();
    }
    return this._appConfiguration;
  }

  collectionWorks(collectionUri: string): readonly Work[] {
    return this.worksByCollectionUriIndex[collectionUri] ?? [];
  }

  get collections(): readonly Collection[] {
    if (!this._collections) {
      this._collections = sortModelsArray(this.readCollections());
    }
    return this._collections;
  }

  collectionByUri(collectionUri: string): Collection {
    return this.modelByUri(this.collectionsByUriIndex, collectionUri);
  }

  private get collectionsByUriIndex(): {[index: string]: Collection} {
    if (!this._collectionsByUriIndex) {
      this._collectionsByUriIndex = indexModelsByUri(this.collections);
    }
    return requireDefined(this._collectionsByUriIndex);
  }

  conceptByUri(conceptUri: string): Concept {
    return this.modelByUri(this.conceptsByUriIndex, conceptUri);
  }

  conceptByUriOptional(conceptUri: string): Concept | null {
    return this.modelByUriOptional(this.conceptsByUriIndex, conceptUri);
  }

  get concepts(): readonly Concept[] {
    if (!this._concepts) {
      this._concepts = sortModelsArray(this.readConcepts());
    }
    return requireDefined(this._concepts);
  }

  private get conceptsByUriIndex(): {[index: string]: Concept} {
    if (!this._conceptsByUriIndex) {
      this._conceptsByUriIndex = indexModelsByUri(this.concepts);
    }
    return requireDefined(this._conceptsByUriIndex);
  }

  imageByUri(imageUri: string): Image {
    return this.modelByUri(this.imagesByUriIndex, imageUri);
  }

  private get images(): readonly Image[] {
    if (!this._images) {
      this._images = sortModelsArray(this.readImages());
    }
    return requireDefined(this._images);
  }

  imagesByDepictsUri(depictsUri: string): readonly Image[] {
    return this.imagesByDepictsUriIndex[depictsUri] ?? [];
  }

  private get imagesByDepictsUriIndex(): {[index: string]: readonly Image[]} {
    if (!this._imagesByDepictsUriIndex) {
      this._imagesByDepictsUriIndex = indexModelsByKey(
        this.images,
        image => image.depictsUri
      );
    }
    return requireDefined(this._imagesByDepictsUriIndex);
  }

  imagesByOriginalImageUri(originalImageUri: string): readonly Image[] {
    // Exclude the original image itself
    return (this.imagesByOriginalImageUriIndex[originalImageUri] ?? []).filter(
      image => image.originalImageUri === originalImageUri
    );
  }

  private get imagesByOriginalImageUriIndex(): {
    [index: string]: readonly Image[];
  } {
    if (!this._imagesByOriginalImageUriIndex) {
      this._imagesByOriginalImageUriIndex = indexModelsByKey(
        this.images,
        image => image.originalImageUri ?? image.uri
      );
    }
    return requireDefined(this._imagesByOriginalImageUriIndex);
  }

  private get imagesByUriIndex(): {[index: string]: Image} {
    if (!this._imagesByUriIndex) {
      this._imagesByUriIndex = indexModelsByUri(this.images);
    }
    return requireDefined(this._imagesByUriIndex);
  }

  licenseByUri(licenseUri: string): License {
    return this.modelByUri(this.licensesByUriIndex, licenseUri);
  }

  private get licensesByUriIndex(): {[index: string]: License} {
    if (!this._licensesByUriIndex) {
      this._licensesByUriIndex = indexModelsByUri(this.namedLicenses);
    }
    return requireDefined(this._licensesByUriIndex);
  }

  locationByUri(locationUri: string): Location {
    return this.modelByUri(this.locationsByUriIndex, locationUri);
  }

  private get locationsByUriIndex(): {[index: string]: Location} {
    if (!this._locationsByUriIndex) {
      this._locationsByUriIndex = indexModelsByUri(this.namedLocations);
    }
    return requireDefined(this._locationsByUriIndex);
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

  private get namedLicenses(): readonly License[] {
    if (!this._namedLicenses) {
      this._namedLicenses = sortModelsArray(this.readNamedLicenses());
    }
    return requireDefined(this._namedLicenses);
  }

  private get namedLocations(): readonly Location[] {
    if (!this._namedLocations) {
      this._namedLocations = sortModelsArray(this.readNamedLocations());
    }
    return requireDefined(this._namedLocations);
  }

  private get namedOrganizations(): readonly Organization[] {
    if (!this._namedOrganizations) {
      this._namedOrganizations = sortModelsArray(this.readNamedOrganizations());
    }
    return requireDefined(this._namedOrganizations);
  }

  private get namedPeople(): readonly Person[] {
    if (!this._namedPeople) {
      this._namedPeople = sortModelsArray(this.readNamedPeople());
    }
    return requireDefined(this._namedPeople);
  }

  private get namedRightsStatements(): readonly RightsStatement[] {
    if (!this._namedRightsStatements) {
      this._namedRightsStatements = sortModelsArray(
        this.readNamedRightsStatements()
      );
    }
    return requireDefined(this._namedRightsStatements);
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

  private get organizationsByUriIndex(): {[index: string]: Organization} {
    if (!this._namedOrganizationsByUriIndex) {
      this._namedOrganizationsByUriIndex = indexModelsByUri(
        this.namedOrganizations
      );
    }
    return requireDefined(this._namedOrganizationsByUriIndex);
  }

  private get peopleByUriIndex(): {[index: string]: Person} {
    if (!this._peopleByUriIndex) {
      this._peopleByUriIndex = indexModelsByUri(this.namedPeople);
    }
    return requireDefined(this._peopleByUriIndex);
  }

  personByUri(personUri: string): Person {
    return this.modelByUri(this.peopleByUriIndex, personUri);
  }

  personByUriOptional(personUri: string): Person | null {
    return this.modelByUriOptional(this.peopleByUriIndex, personUri);
  }

  get properties(): readonly Property[] {
    if (!this._properties) {
      this._properties = sortModelsArray(this.readProperties());
    }
    return requireDefined(this._properties);
  }

  propertiesByGroupUri(propertyGroupUri: string): readonly Property[] {
    return this.propertiesByGroupUriIndex[propertyGroupUri] ?? [];
  }

  private get propertiesByGroupUriIndex(): {
    [index: string]: readonly Property[];
  } {
    if (!this._propertiesByGroupUriIndex) {
      this._propertiesByGroupUriIndex = indexModelsByKeys(
        this.properties,
        property => property.groupUris
      );
    }
    return this._propertiesByGroupUriIndex!;
  }

  private get propertiesByUriIndex(): {[index: string]: Property} {
    if (!this._propertiesByUriIndex) {
      this._propertiesByUriIndex = indexModelsByUri(this.properties);
    }
    return requireDefined(this._propertiesByUriIndex);
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

  get propertyGroups(): readonly PropertyGroup[] {
    if (!this._propertyGroups) {
      this._propertyGroups = sortModelsArray(this.readPropertyGroups());
    }
    return requireDefined(this._propertyGroups);
  }

  private get propertyGroupsByUriIndex(): {[index: string]: PropertyGroup} {
    if (!this._propertyGroupsByUriIndex) {
      this._propertyGroupsByUriIndex = indexModelsByUri(this.propertyGroups);
    }
    return requireDefined(this._propertyGroupsByUriIndex);
  }

  private readAppConfiguration(): AppConfiguration | null {
    for (const modelReader of this.modelReaders) {
      const appConfiguration = modelReader.readAppConfiguration({
        modelSet: this,
      });
      if (appConfiguration) {
        return appConfiguration;
      }
    }
    return null;
  }

  private readCollections(): readonly Collection[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readCollections(kwds)
    );
  }

  private readConcepts(): readonly Concept[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readConcepts(kwds)
    );
  }

  private readImages(): readonly Image[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readImages(kwds)
    );
  }

  private readNamedLicenses(): readonly License[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedLicenses(kwds)
    );
  }

  private readNamedLocations(): readonly Location[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedLocations(kwds)
    );
  }

  private readNamedOrganizations(): readonly Organization[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedOrganizations(kwds)
    );
  }

  private readNamedPeople(): readonly Person[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedPeople(kwds)
    );
  }

  private readNamedRightsStatements(): readonly RightsStatement[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readNamedRightsStatements(kwds)
    );
  }

  private readProperties(): readonly Property[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readProperties(kwds)
    );
  }

  private readPropertyGroups(): readonly PropertyGroup[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readPropertyGroups(kwds)
    );
  }

  private readWorkEvents(): readonly WorkEventUnion[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readWorkEvents(kwds)
    );
  }

  private readWorks(): readonly Work[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readWorks(kwds)
    );
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    return this.modelByUri(this.rightsStatementsByUriIndex, rightsStatementUri);
  }

  private get rightsStatementsByUriIndex(): {[index: string]: RightsStatement} {
    if (!this._rightsStatementsByUriIndex) {
      this._rightsStatementsByUriIndex = indexModelsByUri(
        this.namedRightsStatements
      );
    }
    return requireDefined(this._rightsStatementsByUriIndex);
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

  get workEvents(): readonly WorkEventUnion[] {
    if (!this._workEvents) {
      this._workEvents = sortModelsArray(this.readWorkEvents());
    }
    return this._workEvents!;
  }

  workEventsByWorkUri(workUri: string): readonly WorkEventUnion[] {
    return this.workEventsByWorkUriIndex[workUri] ?? [];
  }

  workEventByUri(workEventUri: string): WorkEventUnion {
    return this.modelByUri(this.workEventsByUriIndex, workEventUri);
  }

  private get workEventsByUriIndex(): {
    [index: string]: WorkEventUnion;
  } {
    if (!this._workEventsByUriIndex) {
      this._workEventsByUriIndex = indexModelsByUri(this.workEvents);
    }
    return requireDefined(this._workEventsByUriIndex);
  }

  private get workEventsByWorkUriIndex(): {
    [index: string]: readonly WorkEventUnion[];
  } {
    if (!this._workEventsByWorkUriIndex) {
      this._workEventsByWorkUriIndex = indexModelsByKey(
        this.workEvents,
        workEvent => workEvent.workUri
      );
    }
    return requireDefined(this._workEventsByWorkUriIndex);
  }

  get works(): readonly Work[] {
    if (!this._works) {
      this._works = sortModelsArray(this.readWorks());
    }
    return requireDefined(this._works);
  }

  private get worksByAgentUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByAgentUriIndex) {
      this._worksByAgentUriIndex = indexModelsByKeys(this.works, work => {
        const agentUris: string[] = [];
        for (const agent of work.agents) {
          if (agent.agent.uri) {
            agentUris.push(agent.agent.uri);
          }
        }
        return agentUris;
      });
    }
    return requireDefined(this._worksByAgentUriIndex);
  }

  private get worksByCollectionUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByCollectionUriIndex) {
      this._worksByCollectionUriIndex = indexModelsByKeys(this.works, work =>
        work.collections.map(collection => collection.uri)
      );
    }
    return requireDefined(this._worksByCollectionUriIndex);
  }

  private get worksByUriIndex(): {[index: string]: Work} {
    if (!this._worksByUriIndex) {
      this._worksByUriIndex = indexModelsByUri(this.works);
    }
    return requireDefined(this._worksByUriIndex);
  }
}
