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

const indexModelsByIri = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    if (model.iri) {
      map[model.iri] = model;
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
    if (left.iri !== null) {
      if (right.iri !== null) {
        return left.iri.localeCompare(right.iri);
      } else {
        return 1; // URI > no URI
      }
    } else if (right.iri !== null) {
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

  agentByIri(agentIri: string): AgentUnion {
    for (const index of [this.organizationsByIriIndex, this.peopleByIriIndex]) {
      const agent = index[agentIri];
      if (agent) {
        return agent;
      }
    }
    throw new RangeError("no such agent " + agentIri);
  }

  agentWorks(agentIri: string): readonly Work[] {
    return this.worksByAgentIriIndex[agentIri] ?? [];
  }

  @Memoize()
  get appConfiguration(): AppConfiguration | null {
    return this.modelReader.readAppConfiguration({
      modelSet: this,
    });
  }

  collectionWorks(collectionIri: string): readonly Work[] {
    return this.worksByCollectionIriIndex[collectionIri] ?? [];
  }

  @Memoize()
  get collections(): readonly Collection[] {
    return sortModelsArray(this.modelReader.readCollections({modelSet: this}));
  }

  collectionByIri(collectionIri: string): Collection {
    return this.modelByIri(this.collectionsByIriIndex, collectionIri);
  }

  @Memoize()
  private get collectionsByIriIndex(): {[index: string]: Collection} {
    return indexModelsByIri(this.collections);
  }

  conceptByIri(conceptIri: string): Concept {
    return this.modelByIri(this.conceptsByIriIndex, conceptIri);
  }

  conceptByIriOptional(conceptIri: string): Concept | null {
    return this.modelByIriOptional(this.conceptsByIriIndex, conceptIri);
  }

  @Memoize()
  get concepts(): readonly Concept[] {
    return sortModelsArray(this.modelReader.readConcepts({modelSet: this}));
  }

  @Memoize()
  private get conceptsByIriIndex(): {[index: string]: Concept} {
    return indexModelsByIri(this.concepts);
  }

  imageByIri(imageIri: string): Image {
    return this.modelByIri(this.imagesByIriIndex, imageIri);
  }

  @Memoize()
  private get images(): readonly Image[] {
    return sortModelsArray(this.modelReader.readImages({modelSet: this}));
  }

  imagesByDepictsIri(depictsIri: string): readonly Image[] {
    return this.imagesByDepictsIriIndex[depictsIri] ?? [];
  }

  @Memoize()
  private get imagesByDepictsIriIndex(): {[index: string]: readonly Image[]} {
    return indexModelsByKey(this.images, image => image.depictsIri);
  }

  imagesByOriginalImageIri(originalImageIri: string): readonly Image[] {
    // Exclude the original image itself
    return (this.imagesByOriginalImageIriIndex[originalImageIri] ?? []).filter(
      image => image.originalImageIri === originalImageIri
    );
  }

  @Memoize()
  private get imagesByOriginalImageIriIndex(): {
    [index: string]: readonly Image[];
  } {
    return indexModelsByKey(
      this.images,
      image => image.originalImageIri ?? image.iri
    );
  }

  @Memoize()
  private get imagesByIriIndex(): {[index: string]: Image} {
    return indexModelsByIri(this.images);
  }

  licenseByIri(licenseIri: string): License {
    return this.modelByIri(this.licensesByIriIndex, licenseIri);
  }

  @Memoize()
  private get licensesByIriIndex(): {[index: string]: License} {
    return indexModelsByIri(this.namedLicenses);
  }

  locationByIri(locationIri: string): Location {
    return this.modelByIri(this.locationsByIriIndex, locationIri);
  }

  @Memoize()
  private get locationsByIriIndex(): {[index: string]: Location} {
    return indexModelsByIri(this.namedLocations);
  }

  private modelByIri<ModelT>(
    index: {[index: string]: ModelT},
    iri: string
  ): ModelT {
    const model = this.modelByIriOptional(index, iri);
    if (!model) {
      throw new RangeError("no such model " + iri);
    }
    return model;
  }

  private modelByIriOptional<ModelT>(
    index: {[index: string]: ModelT},
    iri: string
  ): ModelT | null {
    return index[iri] ?? null;
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

  organizationByIri(organizationIri: string): Organization {
    return this.modelByIri(this.organizationsByIriIndex, organizationIri);
  }

  organizationByIriOptional(organizationIri: string): Organization | null {
    return this.modelByIriOptional(
      this.organizationsByIriIndex,
      organizationIri
    );
  }

  @Memoize()
  private get organizationsByIriIndex(): {[index: string]: Organization} {
    return indexModelsByIri(this.namedOrganizations);
  }

  @Memoize()
  private get peopleByIriIndex(): {[index: string]: Person} {
    return indexModelsByIri(this.namedPeople);
  }

  personByIri(personIri: string): Person {
    return this.modelByIri(this.peopleByIriIndex, personIri);
  }

  personByIriOptional(personIri: string): Person | null {
    return this.modelByIriOptional(this.peopleByIriIndex, personIri);
  }

  @Memoize()
  get properties(): readonly Property[] {
    return sortModelsArray(this.modelReader.readProperties({modelSet: this}));
  }

  propertiesByGroupIri(propertyGroupIri: string): readonly Property[] {
    return this.propertiesByGroupIriIndex[propertyGroupIri] ?? [];
  }

  @Memoize()
  private get propertiesByGroupIriIndex(): {
    [index: string]: readonly Property[];
  } {
    return indexModelsByKeys(this.properties, property => property.groupIris);
  }

  @Memoize()
  private get propertiesByIriIndex(): {[index: string]: Property} {
    return indexModelsByIri(this.properties);
  }

  propertyByIri(propertyIri: string): Property {
    return this.modelByIri(this.propertiesByIriIndex, propertyIri);
  }

  propertyGroupByIri(propertyGroupIri: string): PropertyGroup {
    return this.modelByIri(this.propertyGroupsByIriIndex, propertyGroupIri);
  }

  propertyGroupByIriOptional(propertyGroupIri: string): PropertyGroup | null {
    return this.modelByIriOptional(
      this.propertyGroupsByIriIndex,
      propertyGroupIri
    );
  }

  @Memoize()
  get propertyGroups(): readonly PropertyGroup[] {
    return sortModelsArray(
      this.modelReader.readPropertyGroups({modelSet: this})
    );
  }

  @Memoize()
  private get propertyGroupsByIriIndex(): {[index: string]: PropertyGroup} {
    return indexModelsByIri(this.propertyGroups);
  }

  rightsStatementByIri(rightsStatementIri: string): RightsStatement {
    return this.modelByIri(this.rightsStatementsByIriIndex, rightsStatementIri);
  }

  @Memoize()
  private get rightsStatementsByIriIndex(): {[index: string]: RightsStatement} {
    return indexModelsByIri(this.namedRightsStatements);
  }

  toFastRdfString(): string {
    return datasetToFastRdfString(this.toRdf());
  }

  toRdf(): Dataset {
    throw new EvalError("use model.toRdf to serialize");
  }

  workByIri(workIri: string): Work {
    return this.modelByIri(this.worksByIriIndex, workIri);
  }

  workByIriOptional(workIri: string): Work | null {
    return this.modelByIriOptional(this.worksByIriIndex, workIri);
  }

  @Memoize()
  get workEvents(): readonly WorkEventUnion[] {
    return sortModelsArray(this.modelReader.readWorkEvents({modelSet: this}));
  }

  workEventsByWorkIri(workIri: string): readonly WorkEventUnion[] {
    return this.workEventsByWorkIriIndex[workIri] ?? [];
  }

  workEventByIri(workEventIri: string): WorkEventUnion {
    return this.modelByIri(this.workEventsByIriIndex, workEventIri);
  }

  @Memoize()
  private get workEventsByIriIndex(): {
    [index: string]: WorkEventUnion;
  } {
    return indexModelsByIri(this.workEvents);
  }

  @Memoize()
  private get workEventsByWorkIriIndex(): {
    [index: string]: readonly WorkEventUnion[];
  } {
    return indexModelsByKey(this.workEvents, workEvent => workEvent.workIri);
  }

  @Memoize()
  get works(): readonly Work[] {
    return sortModelsArray(this.modelReader.readWorks({modelSet: this}));
  }

  @Memoize()
  private get worksByAgentIriIndex(): {
    [index: string]: readonly Work[];
  } {
    return indexModelsByKeys(this.works, work => {
      const agentIris: string[] = [];
      for (const agent of work.agents) {
        if (agent.agent.iri) {
          agentIris.push(agent.agent.iri);
        }
      }
      return agentIris;
    });
  }

  @Memoize()
  private get worksByCollectionIriIndex(): {
    [index: string]: readonly Work[];
  } {
    return indexModelsByKeys(this.works, work =>
      work.collections.map(collection => collection.iri)
    );
  }

  @Memoize()
  private get worksByIriIndex(): {[index: string]: Work} {
    return indexModelsByIri(this.works);
  }
}
