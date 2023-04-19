import {datasetToFastRdfString} from "@paradicms/rdf";
import {requireDefined} from "@paradicms/utilities";
import {Dataset} from "rdf-js";
import {Agent} from "./Agent";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Model} from "./Model";
import {ModelReader} from "./ModelReader";
import {ModelSet} from "./ModelSet";
import {NamedModel} from "./NamedModel";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {WorkEvent} from "./WorkEvent";

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
  private _licenses?: readonly License[];
  private _licensesByUriIndex?: {[index: string]: License};
  private _locations?: readonly Location[];
  private _locationsByUriIndex?: {[index: string]: Location};
  private _organizations?: readonly Organization[];
  private _organizationsByUriIndex?: {[index: string]: Organization};
  private _people?: readonly Person[];
  private _peopleByUriIndex?: {[index: string]: Person};
  private _properties?: readonly Property[];
  private _propertiesByGroupUriIndex?: {[index: string]: readonly Property[]};
  private _propertyGroups?: readonly PropertyGroup[];
  private _propertyGroupsByUriIndex?: {[index: string]: PropertyGroup};
  private _rightsStatements?: readonly RightsStatement[];
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};
  private _workEvents?: readonly WorkEvent[];
  private _workEventsByUriIndex?: {[index: string]: WorkEvent};
  private _workEventsByWorkUriIndex?: {[index: string]: readonly WorkEvent[]};
  private _works?: readonly Work[];
  private _worksByAgentUriIndex?: {[index: string]: readonly Work[]};
  private _worksByCollectionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByUriIndex?: {[index: string]: Work};

  constructor(private readonly modelReaders: readonly ModelReader[]) {}

  agentByUri(agentUri: string): Agent {
    for (const index of [this.organizationsByUriIndex, this.peopleByUriIndex]) {
      const agent = index[agentUri];
      if (agent) {
        return agent;
      }
    }
    // this.logContents();
    throw new RangeError("no such agent " + agentUri);
  }

  get agents(): readonly Agent[] {
    return [...this.organizations, ...this.people];
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

  get concepts(): readonly Concept[] {
    if (!this._concepts) {
      this._concepts = sortModelsArray(this.readConcepts());
    }
    return requireDefined(this._concepts);
  }

  conceptByUri(conceptUri: string): Concept {
    return this.modelByUri(this.conceptsByUriIndex, conceptUri);
  }

  conceptByUriOptional(conceptUri: string): Concept | null {
    return this.modelByUriOptional(this.conceptsByUriIndex, conceptUri);
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

  get images(): readonly Image[] {
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

  get licenses(): readonly License[] {
    if (!this._licenses) {
      this._licenses = sortModelsArray(this.readLicenses());
    }
    return requireDefined(this._licenses);
  }

  private get licensesByUriIndex(): {[index: string]: License} {
    if (!this._licensesByUriIndex) {
      this._licensesByUriIndex = indexModelsByUri(this.licenses);
    }
    return requireDefined(this._licensesByUriIndex);
  }

  locationByUri(locationUri: string): Location {
    return this.modelByUri(this.locationsByUriIndex, locationUri);
  }

  get locations(): readonly Location[] {
    if (!this._locations) {
      this._locations = sortModelsArray(this.readLocations());
    }
    return requireDefined(this._locations);
  }

  private get locationsByUriIndex(): {[index: string]: Location} {
    if (!this._locationsByUriIndex) {
      this._locationsByUriIndex = {};
      for (const location of this.locations) {
        this._locationsByUriIndex[location.uri!] = location;
      }
    }
    return requireDefined(this._locationsByUriIndex);
  }

  logContents(): void {
    const models: {[index: string]: readonly NamedModel[]} = {
      collections: this.collections,
      images: this.images,
      licenses: this.licenses,
      concepts: this.concepts,
      organizations: this.organizations,
      people: this.people,
      rightsStatements: this.rightsStatements,
      works: this.works,
    };
    for (const key of Object.keys(models)) {
      const keyModels = models[key];
      console.log(
        "  ",
        keyModels.length,
        key,
        ":",
        keyModels
          .map(model => model.uri)
          .sort()
          .join(" ")
      );
    }
  }

  private modelByUri<ModelT>(
    index: {[index: string]: ModelT},
    uri: string
  ): ModelT {
    const model = this.modelByUriOptional(index, uri);
    if (!model) {
      // this.logContents();
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

  organizationByUri(organizationUri: string): Organization {
    return this.modelByUri(this.organizationsByUriIndex, organizationUri);
  }

  organizationByUriOptional(organizationUri: string): Organization | null {
    return this.modelByUriOptional(
      this.organizationsByUriIndex,
      organizationUri
    );
  }

  get organizations(): readonly Organization[] {
    if (!this._organizations) {
      this._organizations = sortModelsArray(this.readOrganizations());
    }
    return requireDefined(this._organizations);
  }

  private get organizationsByUriIndex(): {[index: string]: Organization} {
    if (!this._organizationsByUriIndex) {
      this._organizationsByUriIndex = indexModelsByUri(
        this.readOrganizations()
      );
    }
    return requireDefined(this._organizationsByUriIndex);
  }

  get people(): readonly Person[] {
    if (!this._people) {
      this._people = sortModelsArray(this.readPeople());
    }
    return requireDefined(this._people);
  }

  private get peopleByUriIndex(): {[index: string]: Person} {
    if (!this._peopleByUriIndex) {
      this._peopleByUriIndex = indexModelsByUri(this.people);
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

  get propertyGroups(): readonly PropertyGroup[] {
    if (!this._propertyGroups) {
      this._propertyGroups = sortModelsArray(this.readPropertyGroups());
    }
    return requireDefined(this._propertyGroups);
  }

  propertyGroupByUriOptional(propertyGroupUri: string): PropertyGroup | null {
    return this.modelByUriOptional(
      this.propertyGroupsByUriIndex,
      propertyGroupUri
    );
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

  private readLicenses(): readonly License[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readLicenses(kwds)
    );
  }

  private readLocations(): readonly Location[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readLocations(kwds)
    );
  }

  private readOrganizations(): readonly Organization[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readOrganizations(kwds)
    );
  }

  private readPeople(): readonly Person[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readPeople(kwds)
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

  private readRightsStatements(): readonly RightsStatement[] {
    const kwds = {modelSet: this};
    return this.modelReaders.flatMap(modelReader =>
      modelReader.readRightsStatements(kwds)
    );
  }

  private readWorkEvents(): readonly WorkEvent[] {
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

  get rightsStatements(): readonly RightsStatement[] {
    if (!this._rightsStatements) {
      this._rightsStatements = sortModelsArray(this.readRightsStatements());
    }
    return requireDefined(this._rightsStatements);
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    return this.modelByUri(this.rightsStatementsByUriIndex, rightsStatementUri);
  }

  private get rightsStatementsByUriIndex(): {[index: string]: RightsStatement} {
    if (!this._rightsStatementsByUriIndex) {
      this._rightsStatementsByUriIndex = indexModelsByUri(
        this.rightsStatements
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

  get workEvents(): readonly WorkEvent[] {
    if (!this._workEvents) {
      this._workEvents = sortModelsArray(this.readWorkEvents());
    }
    return this._workEvents!;
  }

  workEventsByWorkUri(workUri: string): readonly WorkEvent[] {
    return this.workEventsByWorkUriIndex[workUri] ?? [];
  }

  workEventByUri(workEventUri: string): WorkEvent {
    return this.modelByUri(this.workEventsByUriIndex, workEventUri);
  }

  private get workEventsByUriIndex(): {
    [index: string]: WorkEvent;
  } {
    if (!this._workEventsByUriIndex) {
      this._workEventsByUriIndex = indexModelsByUri(this.workEvents);
    }
    return requireDefined(this._workEventsByUriIndex);
  }

  private get workEventsByWorkUriIndex(): {
    [index: string]: readonly WorkEvent[];
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
      this._worksByAgentUriIndex = indexModelsByKeys(
        this.works,
        work => work.agentUris
      );
    }
    return requireDefined(this._worksByAgentUriIndex);
  }

  private get worksByCollectionUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByCollectionUriIndex) {
      this._worksByCollectionUriIndex = indexModelsByKeys(
        this.works,
        work => work.collectionUris
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
