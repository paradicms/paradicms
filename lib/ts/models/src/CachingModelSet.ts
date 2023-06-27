import {datasetToFastRdfString} from "@paradicms/rdf";
import {DatasetCore} from "rdf-js";
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

const indexModelsByKey = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    map[model.key] = model;
    return map;
  }, {} as {[index: string]: ModelT});
};

const indexModelsByIri = <ModelT extends Model>(
  models: readonly ModelT[]
): {[index: string]: ModelT} => {
  return models.reduce((map, model) => {
    for (const iri of model.iris) {
      map[iri] = model;
    }
    return map;
  }, {} as {[index: string]: ModelT});
};

const indexModelsByValues = <ModelT extends Model>(
  models: readonly ModelT[],
  modelValues: (model: ModelT) => readonly string[]
): {[index: string]: readonly ModelT[]} => {
  const modelsMultimap: {[index: string]: ModelT[]} = {};
  for (const model of models) {
    for (const modelValue of modelValues(model)) {
      const modelsWithValue = modelsMultimap[modelValue];
      if (modelsWithValue) {
        modelsWithValue.push(model);
      } else {
        modelsMultimap[modelValue] = [model];
      }
    }
  }
  return sortModelsMultimap(modelsMultimap);
};

const sortModelsArray = <ModelT extends Model>(
  models: readonly ModelT[]
): readonly ModelT[] =>
  models.concat().sort((left, right) => left.key.localeCompare(right.key));

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

  agentByIri(agentIri: string): AgentUnion | null {
    for (const index of [this.organizationsByIriIndex, this.peopleByIriIndex]) {
      const agent = index[agentIri];
      if (agent) {
        return agent;
      }
    }
    return null;
  }

  @Memoize()
  get appConfiguration(): AppConfiguration | null {
    return this.modelReader.readAppConfiguration({
      modelSet: this,
    });
  }

  @Memoize()
  get collections(): readonly Collection[] {
    return sortModelsArray(this.modelReader.readCollections({modelSet: this}));
  }

  collectionByIri(collectionIri: string): Collection | null {
    return this.modelByIri(this.collectionsByIriIndex, collectionIri);
  }

  collectionByKey(collectionKey: string): Collection | null {
    return this.modelByKey(this.collectionsByKeyIndex, collectionKey);
  }

  @Memoize()
  private get collectionsByIriIndex(): {[index: string]: Collection} {
    return indexModelsByIri(this.collections);
  }

  @Memoize()
  private get collectionsByKeyIndex(): {[index: string]: Collection} {
    return indexModelsByKey(this.collections);
  }

  conceptByIri(conceptIri: string): Concept | null {
    return this.modelByIri(this.conceptsByIriIndex, conceptIri);
  }

  @Memoize()
  get concepts(): readonly Concept[] {
    return sortModelsArray(this.modelReader.readConcepts({modelSet: this}));
  }

  @Memoize()
  private get conceptsByIriIndex(): {[index: string]: Concept} {
    return indexModelsByIri(this.concepts);
  }

  imageByIri(imageIri: string): Image | null {
    return this.modelByIri(this.imagesByIriIndex, imageIri);
  }

  @Memoize()
  private get images(): readonly Image[] {
    return sortModelsArray(this.modelReader.readImages({modelSet: this}));
  }

  @Memoize()
  private get imagesByIriIndex(): {[index: string]: Image} {
    return indexModelsByIri(this.images);
  }

  licenseByIri(licenseIri: string): License | null {
    return this.modelByIri(this.licensesByIriIndex, licenseIri);
  }

  @Memoize()
  private get licensesByIriIndex(): {[index: string]: License} {
    return indexModelsByIri(this.namedLicenses);
  }

  locationByIri(locationIri: string): Location | null {
    return this.modelByIri(this.locationsByIriIndex, locationIri);
  }

  @Memoize()
  private get locationsByIriIndex(): {[index: string]: Location} {
    return indexModelsByIri(this.namedLocations);
  }

  private modelByIri<ModelT>(
    index: {[index: string]: ModelT},
    iri: string
  ): ModelT | null {
    return index[iri] ?? null;
  }

  private modelByKey<ModelT>(
    index: {[index: string]: ModelT},
    key: string
  ): ModelT | null {
    return index[key] ?? null;
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

  organizationByIri(organizationIri: string): Organization | null {
    return this.modelByIri(this.organizationsByIriIndex, organizationIri);
  }

  @Memoize()
  private get organizationsByIriIndex(): {[index: string]: Organization} {
    return indexModelsByIri(this.namedOrganizations);
  }

  @Memoize()
  private get peopleByIriIndex(): {[index: string]: Person} {
    return indexModelsByIri(this.namedPeople);
  }

  personByIri(personIri: string): Person | null {
    return this.modelByIri(this.peopleByIriIndex, personIri);
  }

  @Memoize()
  get properties(): readonly Property[] {
    return sortModelsArray(this.modelReader.readProperties({modelSet: this}));
  }

  @Memoize()
  private get propertiesByIriIndex(): {[index: string]: Property} {
    return indexModelsByIri(this.properties);
  }

  propertyByIri(propertyIri: string): Property | null {
    return this.modelByIri(this.propertiesByIriIndex, propertyIri);
  }

  propertyGroupByIri(propertyGroupIri: string): PropertyGroup | null {
    return this.modelByIri(this.propertyGroupsByIriIndex, propertyGroupIri);
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

  propertyGroupsByPropertyKey(propertyKey: string): readonly PropertyGroup[] {
    return this.propertyGroupsByPropertyKeyIndex[propertyKey] ?? [];
  }

  @Memoize()
  private get propertyGroupsByPropertyKeyIndex(): {
    [index: string]: readonly PropertyGroup[];
  } {
    return indexModelsByValues(this.propertyGroups, propertyGroup =>
      propertyGroup.properties.map(property => property.key)
    );
  }

  rightsStatementByIri(rightsStatementIri: string): RightsStatement | null {
    return this.modelByIri(this.rightsStatementsByIriIndex, rightsStatementIri);
  }

  @Memoize()
  private get rightsStatementsByIriIndex(): {[index: string]: RightsStatement} {
    return indexModelsByIri(this.namedRightsStatements);
  }

  toFastRdfString(): string {
    return datasetToFastRdfString(this.toRdf());
  }

  toRdf(): DatasetCore {
    throw new EvalError("use model.toRdf to serialize");
  }

  workByIri(workIri: string): Work | null {
    return this.modelByIri(this.worksByIriIndex, workIri);
  }

  workByKey(workKey: string): Work | null {
    return this.modelByKey(this.worksByKeyIndex, workKey);
  }

  workEventByIri(workEventIri: string): WorkEventUnion | null {
    return this.modelByIri(this.workEventsByIriIndex, workEventIri);
  }

  @Memoize()
  private get workEvents(): readonly WorkEventUnion[] {
    return sortModelsArray(this.modelReader.readWorkEvents({modelSet: this}));
  }

  @Memoize()
  private get workEventsByIriIndex(): {
    [index: string]: WorkEventUnion;
  } {
    return indexModelsByIri(this.workEvents);
  }

  @Memoize()
  get works(): readonly Work[] {
    return sortModelsArray(this.modelReader.readWorks({modelSet: this}));
  }

  worksByAgentIri(agentIri: string): readonly Work[] {
    return this.worksByAgentIriIndex[agentIri] ?? [];
  }

  @Memoize()
  private get worksByAgentIriIndex(): {
    [index: string]: readonly Work[];
  } {
    return indexModelsByValues(this.works, work =>
      work.agents.flatMap(agent => agent.agent.iris)
    );
  }

  @Memoize()
  private get worksByIriIndex(): {[index: string]: Work} {
    return indexModelsByIri(this.works);
  }

  @Memoize()
  private get worksByKeyIndex(): {[index: string]: Work} {
    return indexModelsByKey(this.works);
  }
}
