import {datasetToJsonLd, getNamedRdfTypes} from "@paradicms/rdf";
import {schema, time} from "@paradicms/vocabularies";
import {DatasetCore, NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {Agent} from "./Agent";
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
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {Text} from "./Text";
import {Work} from "./Work";
import {indexModelsByIri} from "./indexModelsByIri";
import {indexModelsByValues} from "./indexModelsByValues";
import {OwlTimePartialDateTimeDescription} from "./owl-time/OwlTimePartialDateTimeDescription";
import {SchemaTextObject} from "./schema/SchemaTextObject";
import {sortModelsArray} from "./sortModelsArray";
import {sortModelsMultimap} from "./sortModelsMultimap";

export class MemModelSet implements ModelSet {
  constructor(private readonly modelReader: ModelReader) {}
  agentByIri(agentIri: NamedNode): Agent | null {
    for (const index of [this.organizationsByIriIndex, this.peopleByIriIndex]) {
      const agent = index[agentIri.value];
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

  collectionByIri(collectionIri: NamedNode): Collection | null {
    return this.modelByIri(this.collectionsByIriIndex, collectionIri);
  }

  @Memoize()
  private get collectionsByIriIndex(): {[index: string]: Collection} {
    return indexModelsByIri(this.collections);
  }

  conceptByIri(conceptIri: NamedNode): Concept | null {
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

  eventByIri(eventIri: NamedNode): Event | null {
    return this.modelByIri(this.eventsByIriIndex, eventIri);
  }

  @Memoize()
  get events(): readonly Event[] {
    return sortModelsArray(this.modelReader.readEvents({modelSet: this}));
  }

  @Memoize()
  private get eventsByIriIndex(): {[index: string]: Event} {
    return indexModelsByIri(this.events);
  }

  imageByIri(imageIri: NamedNode): Image | null {
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

  licenseByIri(licenseIri: NamedNode): License | null {
    return this.modelByIri(this.licensesByIriIndex, licenseIri);
  }

  @Memoize()
  private get licenses(): readonly License[] {
    return sortModelsArray(this.modelReader.readLicenses({modelSet: this}));
  }

  @Memoize()
  private get licensesByIriIndex(): {[index: string]: License} {
    return indexModelsByIri(this.licenses);
  }

  locationByIri(locationIri: NamedNode): Location | null {
    return this.modelByIri(this.locationsByIriIndex, locationIri);
  }

  @Memoize()
  private get locations(): readonly Location[] {
    return sortModelsArray(this.modelReader.readLocations({modelSet: this}));
  }

  @Memoize()
  private get locationsByIriIndex(): {[index: string]: Location} {
    return indexModelsByIri(this.locations);
  }

  private modelByIri<ModelT>(
    index: {[index: string]: ModelT},
    iri: NamedNode
  ): ModelT | null {
    return index[iri.value] ?? null;
  }

  organizationByIri(organizationIri: NamedNode): Organization | null {
    return this.modelByIri(this.organizationsByIriIndex, organizationIri);
  }

  @Memoize()
  private get organizations(): readonly Organization[] {
    return sortModelsArray(
      this.modelReader.readOrganizations({modelSet: this})
    );
  }

  @Memoize()
  private get organizationsByIriIndex(): {[index: string]: Organization} {
    return indexModelsByIri(this.organizations);
  }

  partialDateTimeDescriptionByIri(
    parameters: ResourceBackedModelParameters
  ): PartialDateTimeDescription | null {
    for (const rdfType of getNamedRdfTypes({
      dataset: parameters.dataset,
      subject: parameters.iri,
    })) {
      if (rdfType.equals(time.DateTimeDescription)) {
        return new OwlTimePartialDateTimeDescription(parameters);
      }
    }
    return null;
  }

  @Memoize()
  private get people(): readonly Person[] {
    return sortModelsArray(this.modelReader.readPeople({modelSet: this}));
  }

  @Memoize()
  private get peopleByIriIndex(): {[index: string]: Person} {
    return indexModelsByIri(this.people);
  }

  personByIri(personIri: NamedNode): Person | null {
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

  propertyByIri(propertyIri: NamedNode): Property | null {
    return this.modelByIri(this.propertiesByIriIndex, propertyIri);
  }

  propertyGroupByIri(propertyGroupIri: NamedNode): PropertyGroup | null {
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

  propertyGroupsByPropertyIri(
    propertyIri: NamedNode
  ): readonly PropertyGroup[] {
    return this.propertyGroupsByPropertyIriIndex[propertyIri.value] ?? [];
  }

  @Memoize()
  private get propertyGroupsByPropertyIriIndex(): {
    [index: string]: readonly PropertyGroup[];
  } {
    return sortModelsMultimap(
      indexModelsByValues(this.propertyGroups, propertyGroup =>
        propertyGroup.properties.map(property => property.iri.value)
      )
    );
  }

  rightsStatementByIri(rightsStatementIri: NamedNode): RightsStatement | null {
    return this.modelByIri(this.rightsStatementsByIriIndex, rightsStatementIri);
  }

  @Memoize()
  private get rightsStatements(): readonly RightsStatement[] {
    return sortModelsArray(
      this.modelReader.readRightsStatements({modelSet: this})
    );
  }

  @Memoize()
  private get rightsStatementsByIriIndex(): {[index: string]: RightsStatement} {
    return indexModelsByIri(this.rightsStatements);
  }

  textByIri(parameters: ResourceBackedModelParameters): Text | null {
    for (const rdfType of getNamedRdfTypes({
      dataset: parameters.dataset,
      subject: parameters.iri,
    })) {
      if (rdfType.equals(schema.TextObject)) {
        return new SchemaTextObject(parameters);
      }
    }
    return null;
  }

  toJsonLd(): Promise<any> {
    return datasetToJsonLd(this.toRdf());
  }

  toRdf(): DatasetCore {
    throw new EvalError("use model.toRdf to serialize");
  }

  workByIri(workIri: NamedNode): Work | null {
    return this.modelByIri(this.worksByIriIndex, workIri);
  }

  @Memoize()
  get works(): readonly Work[] {
    return sortModelsArray(this.modelReader.readWorks({modelSet: this}));
  }

  worksByAgentIri(agentIri: NamedNode): readonly Work[] {
    return this.worksByAgentIriIndex[agentIri.value] ?? [];
  }

  @Memoize()
  private get worksByAgentIriIndex(): {
    [index: string]: readonly Work[];
  } {
    return sortModelsMultimap(
      indexModelsByValues(this.works, work =>
        work.agents.map(agent => agent.agent.iri.value)
      )
    );
  }

  @Memoize()
  private get worksByIriIndex(): {[index: string]: Work} {
    return indexModelsByIri(this.works);
  }
}
