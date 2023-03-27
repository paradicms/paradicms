import {Collection} from "./Collection";
import {Image} from "./Image";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {
  BlankNode,
  Dataset,
  DatasetCore,
  DefaultGraph,
  NamedNode,
} from "@rdfjs/types";
import {Work} from "./Work";
import {Person} from "./Person";
import {NamedModel} from "./NamedModel";
import {Concept} from "./Concept";
import {Organization} from "./Organization";
import {Agent} from "./Agent";
import {ModelParameters} from "./ModelParameters";
import {WorkEvent} from "./WorkEvent";
import {WorkCreation} from "./WorkCreation";
import {Event} from "./Event";
import {hasMixin} from "ts-mixer";
import {datasetCoreToDataset, datasetToFastRdfString} from "@paradicms/rdf";
import TermSet from "@rdfjs/term-set";
import {requireDefined} from "@paradicms/utilities";
import {cms, rdf} from "@paradicms/vocabularies";
import {WorkClosing} from "./WorkClosing";
import {WorkOpening} from "./WorkOpening";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";

const eventClassesByRdfType = (() => {
  const result: {[index: string]: {new (kwds: ModelParameters): Event}} = {};
  result[cms.WorkClosing.value] = WorkClosing;
  result[cms.WorkCreation.value] = WorkCreation;
  result[cms.WorkOpening.value] = WorkOpening;
  return result;
})();

const sortNamedModelsArray = <NamedModelT extends NamedModel>(
  namedModels: readonly NamedModelT[]
): readonly NamedModelT[] => {
  const sortedNamedModels = namedModels.concat();
  sortedNamedModels.sort((left, right) => left.uri.localeCompare(right.uri));
  return sortedNamedModels;
};

const sortNamedModelsMultimap = <NamedModelT extends NamedModel>(namedModels: {
  [index: string]: readonly NamedModelT[];
}): {[index: string]: readonly NamedModelT[]} => {
  const sortedNamedModels: {[index: string]: readonly NamedModelT[]} = {};
  for (const key of Object.keys(namedModels)) {
    sortedNamedModels[key] = sortNamedModelsArray(namedModels[key]);
  }
  return sortedNamedModels;
};

/**
 * Lazily indexes the contents of an immutable ModelSet to provide quick lookups and subsetting.
 *
 * For example, a GUI that has one work per page needs a quick workByUri lookup in getStaticProps.
 *
 * IndexedModelSet is used by getStaticProps to cut down ModelSets, which means it must deal in JSON-serializable interfaces/works rather than classes.
 * (JoinedModelSet does the latter, because it is only used on the component side.)
 */
export class ModelSet {
  private _collections?: readonly Collection[];
  private _collectionsByUriIndex?: {[index: string]: Collection};
  private _images?: readonly Image[];
  private _imagesByDepictsUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByOriginalImageUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByUriIndex?: {[index: string]: Image};
  private _licenses?: readonly License[];
  private _licensesByUriIndex?: {[index: string]: License};
  private _concepts?: readonly Concept[];
  private _conceptsByUriIndex?: {[index: string]: Concept};
  private _organizations?: readonly Organization[];
  private _organizationsByUriIndex?: {[index: string]: Organization};
  private _people?: readonly Person[];
  private _peopleByUriIndex?: {[index: string]: Person};
  private _properties?: readonly Property[];
  private _propertiesByGroupUriIndex?: {[index: string]: readonly Property[]};
  private _propertyGroups?: readonly PropertyGroup[];
  private _rightsStatements?: readonly RightsStatement[];
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};
  private _workEvents?: readonly WorkEvent[];
  private _workEventsByUriIndex?: {[index: string]: WorkEvent};
  private _workEventsByWorkUriIndex?: {[index: string]: readonly WorkEvent[]};
  private _works?: readonly Work[];
  private _worksByAgentUriIndex?: {[index: string]: readonly Work[]};
  private _worksByCollectionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByUriIndex?: {[index: string]: Work};

  protected constructor(readonly dataset: Dataset) {}

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

  collectionWorks(collectionUri: string): readonly Work[] {
    return this.worksByCollectionUriIndex[collectionUri] ?? [];
  }

  get collections(): readonly Collection[] {
    if (!this._collections) {
      this.readCollections();
    }
    return this._collections!;
  }

  collectionByUri(collectionUri: string): Collection {
    const collection = this.collectionsByUriIndex[collectionUri];
    if (!collection) {
      // this.logContents();
      throw new RangeError("no such collection " + collectionUri);
    }
    return collection;
  }

  private get collectionsByUriIndex(): {[index: string]: Collection} {
    if (!this._collectionsByUriIndex) {
      this.readCollections();
    }
    return requireDefined(this._collectionsByUriIndex);
  }

  get concepts(): readonly Concept[] {
    if (!this._concepts) {
      this.readConcepts();
    }
    return this._concepts!;
  }

  conceptByUri(conceptUri: string): Concept {
    const concept = this.conceptsByUriIndex[conceptUri];
    if (!concept) {
      // this.logContents();
      throw new RangeError("no such named value " + conceptUri);
    }
    return concept;
  }

  conceptByUriOptional(conceptUri: string): Concept | null {
    return this.conceptsByUriIndex[conceptUri] ?? null;
  }

  private get conceptsByUriIndex(): {[index: string]: Concept} {
    if (!this._conceptsByUriIndex) {
      this.readConcepts();
    }
    return this._conceptsByUriIndex!;
  }

  static fromDataset(dataset: Dataset): ModelSet {
    return new ModelSet(dataset);
  }

  static fromDatasetCore(datasetCore: DatasetCore): ModelSet {
    return ModelSet.fromDataset(datasetCoreToDataset(datasetCore));
  }

  imageByUri(imageUri: string): Image {
    const image = this.imagesByUriIndex[imageUri];
    if (!image) {
      // this.logContents();
      throw new RangeError("no such image " + imageUri);
    }
    return image;
  }

  get images(): readonly Image[] {
    if (!this._images) {
      this.readImages();
    }
    return this._images!;
  }

  imagesByDepictsUri(depictsUri: string): readonly Image[] {
    return this.imagesByDepictsUriIndex[depictsUri] ?? [];
  }

  private get imagesByDepictsUriIndex(): {[index: string]: readonly Image[]} {
    if (!this._imagesByDepictsUriIndex) {
      this.readImages();
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
      this.readImages();
    }
    return requireDefined(this._imagesByOriginalImageUriIndex);
  }

  private get imagesByUriIndex(): {[index: string]: Image} {
    if (!this._imagesByUriIndex) {
      this.readImages();
    }
    return requireDefined(this._imagesByUriIndex);
  }

  licenseByUri(licenseUri: string): License {
    const license = this.licensesByUriIndex[licenseUri];
    if (!license) {
      // this.logContents();
      throw new RangeError("no such license " + licenseUri);
    }
    return license;
  }

  get licenses(): readonly License[] {
    if (!this._licenses) {
      this.readLicenses();
    }
    return this._licenses!;
  }

  private get licensesByUriIndex(): {[index: string]: License} {
    if (!this._licensesByUriIndex) {
      this.readLicenses();
    }
    return this._licensesByUriIndex!;
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

  organizationByUri(organizationUri: string): Organization {
    const organization = this.organizationsByUriIndex[organizationUri];
    if (!organization) {
      // this.logContents();
      throw new RangeError("no such organization " + organizationUri);
    }
    return organization;
  }

  organizationByUriOptional(organizationUri: string): Organization | null {
    return this.organizationsByUriIndex[organizationUri] ?? null;
  }

  get organizations(): readonly Organization[] {
    if (!this._organizations) {
      this.readOrganizations();
    }
    return this._organizations!;
  }

  private get organizationsByUriIndex(): {[index: string]: Organization} {
    if (!this._organizationsByUriIndex) {
      this.readOrganizations();
    }
    return this._organizationsByUriIndex!;
  }

  get people(): readonly Person[] {
    if (!this._people) {
      this.readPeople();
    }
    return this._people!;
  }

  private get peopleByUriIndex(): {[index: string]: Person} {
    if (!this._peopleByUriIndex) {
      this.readPeople();
    }
    return this._peopleByUriIndex!;
  }

  personByUri(personUri: string): Person {
    const person = this.peopleByUriIndex[personUri];
    if (!person) {
      // this.logContents();
      throw new RangeError("no such person " + personUri);
    }
    return person;
  }

  personByUriOptional(personUri: string): Person | null {
    return this.peopleByUriIndex[personUri] ?? null;
  }

  get properties(): readonly Property[] {
    if (!this._properties) {
      this.readProperties();
    }
    return this._properties!;
  }

  propertiesByGroupUri(propertyGroupUri: string): readonly Property[] {
    return this.propertiesByGroupUriIndex[propertyGroupUri] ?? [];
  }

  private get propertiesByGroupUriIndex(): {
    [index: string]: readonly Property[];
  } {
    if (!this._propertiesByGroupUriIndex) {
      this.readProperties();
    }
    return this._propertiesByGroupUriIndex!;
  }

  get propertyGroups(): readonly PropertyGroup[] {
    if (!this._propertyGroups) {
      this.readPropertyGroups();
    }
    return this._propertyGroups!;
  }

  protected readEvent(kwds: ModelParameters): Event {
    for (const quad of this.dataset.match(
      kwds.node,
      rdf.type,
      null,
      kwds.graphNode
    )) {
      const eventClass = eventClassesByRdfType[quad.object.value];
      if (eventClass) {
        return new eventClass(kwds);
      }
    }
    throw new EvalError(kwds.node.value);
  }

  protected readEvents(): void {
    const workEvents: WorkEvent[] = [];
    const workEventsByWorkUriIndex: {[index: string]: WorkEvent[]} = {};
    this._workEventsByUriIndex = {};

    this.readModels(kwds => {
      const event = this.readEvent(kwds);

      if (hasMixin(event, WorkEvent)) {
        workEvents.push(event);

        const workEventsForWorkUri = workEventsByWorkUriIndex[event.workUri];
        if (workEventsForWorkUri) {
          workEventsForWorkUri.push(event);
        } else {
          workEventsByWorkUriIndex[event.workUri] = [event];
        }

        this._workEventsByUriIndex![event.uri] = event;
      } else {
        throw new EvalError();
      }
    }, cms.Event);

    this._workEvents = sortNamedModelsArray(workEvents);
    this._workEventsByWorkUriIndex = workEventsByWorkUriIndex;
  }

  protected readCollection(kwds: ModelParameters): Collection {
    return new Collection(kwds);
  }

  private readCollections(): void {
    const collections: Collection[] = [];
    this._collectionsByUriIndex = {};
    this.readModels(kwds => {
      const collection = this.readCollection(kwds);

      collections.push(collection);

      this._collectionsByUriIndex![collection.uri] = collection;
    }, cms.Collection);
    this._collections = sortNamedModelsArray(collections);
  }

  protected readConcept(kwds: ModelParameters): Concept {
    return new Concept(kwds);
  }

  private readConcepts() {
    const concepts: Concept[] = [];
    this._conceptsByUriIndex = {};
    this.readModels(kwds => {
      const concept = this.readConcept(kwds);

      concepts.push(concept);

      this._conceptsByUriIndex![concept.uri] = concept;
    }, cms.Concept);
    this._concepts = sortNamedModelsArray(concepts);
  }

  protected readImage(kwds: ModelParameters): Image {
    return new Image(kwds);
  }

  private readImages(): void {
    const images: Image[] = [];
    const imagesByDepictsUriIndex: {[index: string]: Image[]} = {};
    const imagesByOriginalImageUriIndex: {[index: string]: Image[]} = {};
    this._imagesByUriIndex = {};
    this.readModels(kwds => {
      const image = this.readImage(kwds);

      images.push(image);

      const depictsUriImages = imagesByDepictsUriIndex[image.depictsUri];
      if (depictsUriImages) {
        depictsUriImages.push(image);
      } else {
        imagesByDepictsUriIndex[image.depictsUri] = [image];
      }

      const originalImageUri = image.originalImageUri ?? image.uri;
      const originalImageUriImages =
        imagesByOriginalImageUriIndex[originalImageUri];
      if (originalImageUriImages) {
        originalImageUriImages.push(image);
      } else {
        imagesByOriginalImageUriIndex[originalImageUri] = [image];
      }

      this._imagesByUriIndex![image.uri] = image;
    }, cms.Image);
    this._images = sortNamedModelsArray(images);
    this._imagesByDepictsUriIndex = sortNamedModelsMultimap(
      imagesByDepictsUriIndex
    );
    this._imagesByOriginalImageUriIndex = sortNamedModelsMultimap(
      imagesByOriginalImageUriIndex
    );
  }

  protected readLicense(kwds: ModelParameters): License {
    return new License(kwds);
  }

  private readLicenses() {
    const licenses: License[] = [];
    this._licensesByUriIndex = {};
    this.readModels(kwds => {
      const license = this.readLicense(kwds);
      licenses.push(license);
      this._licensesByUriIndex![license.uri] = license;
    }, cms.License);
    this._licenses = sortNamedModelsArray(licenses);
  }

  protected readModels(
    callback: (kwds: ModelParameters) => void,
    type: NamedNode
  ): void {
    const uniqueModelSubjects = new TermSet();
    this.dataset.match(null, rdf.type, type, null).forEach(quad => {
      switch (quad.graph.termType) {
        case "BlankNode":
        case "DefaultGraph":
        case "NamedNode":
          break;
        default:
          throw new RangeError(
            `expected NamedNode or default graph, actual ${quad.graph.termType}`
          );
      }

      switch (quad.subject.termType) {
        case "BlankNode":
        case "NamedNode":
          break;
        default:
          throw new RangeError(
            `expected BlankNode or NamedNode subject, actual ${quad.subject.termType}`
          );
      }

      if (!uniqueModelSubjects.add(quad.subject)) {
        return;
      }

      callback({
        modelSet: this,
        graphNode: quad.graph as BlankNode | DefaultGraph | NamedNode,
        node: quad.subject as BlankNode | NamedNode,
      });
    });
  }

  protected readOrganization(kwds: ModelParameters): Organization {
    return new Organization(kwds);
  }

  private readOrganizations() {
    const organizations: Organization[] = [];
    this._organizationsByUriIndex = {};
    this.readModels(kwds => {
      const organization = this.readOrganization(kwds);
      organizations.push(organization);
      this._organizationsByUriIndex![organization.uri] = organization;
    }, cms.Organization);
    this._organizations = sortNamedModelsArray(organizations);
  }

  private readPeople() {
    const people: Person[] = [];
    this._peopleByUriIndex = {};
    this.readModels(kwds => {
      const person = this.readPerson(kwds);
      people.push(person);
      this._peopleByUriIndex![person.uri] = person;
    }, cms.Person);
    this._people = sortNamedModelsArray(people);
  }

  private readPerson(kwds: ModelParameters): Person {
    return new Person(kwds);
  }

  private readProperties(): void {
    const properties: Property[] = [];
    const propertiesByGroupUriIndex: {[index: string]: Property[]} = {};
    this.readModels(kwds => {
      const property = this.readProperty(kwds);

      properties.push(property);

      for (const propertyGroupUri of property.groupUris) {
        const propertiesByGroupUri =
          propertiesByGroupUriIndex[propertyGroupUri];
        if (propertiesByGroupUri) {
          propertiesByGroupUri.push(property);
        } else {
          propertiesByGroupUriIndex[propertyGroupUri] = [property];
        }
      }
    }, cms.Property);
    this._properties = sortNamedModelsArray(properties);
    this._propertiesByGroupUriIndex = sortNamedModelsMultimap(
      propertiesByGroupUriIndex
    );
  }

  private readProperty(kwds: ModelParameters): Property {
    return new Property(kwds);
  }

  private readPropertyGroups(): void {
    const propertyGroups: PropertyGroup[] = [];
    this.readModels(kwds => {
      const propertyGroup = this.readPropertyGroup(kwds);
      propertyGroups.push(propertyGroup);
    }, cms.PropertyGroup);
    this._propertyGroups = sortNamedModelsArray(propertyGroups);
  }

  private readPropertyGroup(kwds: ModelParameters): PropertyGroup {
    return new PropertyGroup(kwds);
  }

  protected readRightsStatement(kwds: ModelParameters): RightsStatement {
    return new RightsStatement(kwds);
  }

  private readRightsStatements() {
    const rightsStatements: RightsStatement[] = [];
    this._rightsStatementsByUriIndex = {};
    this.readModels(kwds => {
      const rightsStatement = this.readRightsStatement(kwds);
      rightsStatements.push(rightsStatement);
      this._rightsStatementsByUriIndex![rightsStatement.uri] = rightsStatement;
    }, cms.RightsStatement);
    this._rightsStatements = sortNamedModelsArray(rightsStatements);
  }

  protected readWork(kwds: ModelParameters): Work {
    return new Work(kwds);
  }

  private readWorks(): void {
    const works: Work[] = [];
    const worksByAgentUriIndex: {[index: string]: Work[]} = {};
    const worksByCollectionUriIndex: {[index: string]: Work[]} = {};
    this._worksByUriIndex = {};
    this.readModels(kwds => {
      const work = this.readWork(kwds);

      works.push(work);

      for (const agentUri of work.agentUris) {
        const worksByAgentUri = worksByAgentUriIndex[agentUri];
        if (worksByAgentUri) {
          worksByAgentUri.push(work);
        } else {
          worksByAgentUriIndex[agentUri] = [work];
        }
      }

      for (const collectionUri of work.collectionUris) {
        const collectionWorks = worksByCollectionUriIndex[collectionUri];
        if (collectionWorks) {
          collectionWorks.push(work);
        } else {
          worksByCollectionUriIndex[collectionUri] = [work];
        }
      }

      this._worksByUriIndex![work.uri] = work;
    }, cms.Work);
    this._works = sortNamedModelsArray(works);
    this._worksByAgentUriIndex = sortNamedModelsMultimap(worksByAgentUriIndex);
    this._worksByCollectionUriIndex = sortNamedModelsMultimap(
      worksByCollectionUriIndex
    );
  }

  get rightsStatements(): readonly RightsStatement[] {
    if (!this._rightsStatements) {
      this.readRightsStatements();
    }
    return this._rightsStatements!;
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    const rightsStatement = this.rightsStatementsByUriIndex[rightsStatementUri];
    if (!rightsStatement) {
      // this.logContents();
      throw new RangeError("no such rights statement " + rightsStatementUri);
    }
    return rightsStatement;
  }

  private get rightsStatementsByUriIndex(): {[index: string]: RightsStatement} {
    if (!this._rightsStatementsByUriIndex) {
      this.readRightsStatements();
    }
    return this._rightsStatementsByUriIndex!;
  }

  toFastRdfString(): string {
    // return datasetToString(this.dataset, {
    //   prefixes: {
    //     cms: cms[""],
    //     configuration: configuration[""],
    //     contact: contact[""],
    //     dash: dash[""],
    //     dc11: dc11[""],
    //     dcterms: dcterms[""],
    //     exif: exif[""],
    //     foaf: foaf[""],
    //     rdf: rdf[""],
    //     rdfs: rdfs[""],
    //     sh: sh[""],
    //     skos: skos[""],
    //     time: time[""],
    //     vra: vra[""],
    //     wgs: wgs[""],
    //     xsd: xsd[""],
    //   },
    // });
    return datasetToFastRdfString(this.dataset);
  }

  workByUri(workUri: string): Work {
    const work = this.worksByUriIndex[workUri];
    if (!work) {
      // this.logContents();
      throw new RangeError("no such work " + workUri);
    }
    return work;
  }

  get workEvents(): readonly WorkEvent[] {
    if (!this._workEvents) {
      this.readEvents();
    }
    return this._workEvents!;
  }

  workEventsByWork(workUri: string): readonly WorkEvent[] {
    return this.workEventsByWorkUriIndex[workUri] ?? [];
  }

  workEventByUri(workEventUri: string): WorkEvent {
    const workEvent = this.workEventsByUriIndex[workEventUri];
    if (!workEvent) {
      // this.logContents();
      throw new RangeError("no such work event " + workEventUri);
    }
    return workEvent;
  }

  private get workEventsByUriIndex(): {
    [index: string]: WorkEvent;
  } {
    if (!this._workEventsByUriIndex) {
      this.readEvents();
    }
    return requireDefined(this._workEventsByUriIndex);
  }

  private get workEventsByWorkUriIndex(): {
    [index: string]: readonly WorkEvent[];
  } {
    if (!this._workEventsByWorkUriIndex) {
      this.readEvents();
    }
    return requireDefined(this._workEventsByWorkUriIndex);
  }

  get works(): readonly Work[] {
    if (!this._works) {
      this.readWorks();
    }
    return this._works!;
  }

  private get worksByAgentUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByAgentUriIndex) {
      this.readWorks();
    }
    return requireDefined(this._worksByAgentUriIndex);
  }

  private get worksByCollectionUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByCollectionUriIndex) {
      this.readWorks();
    }
    return requireDefined(this._worksByCollectionUriIndex);
  }

  private get worksByUriIndex(): {[index: string]: Work} {
    if (!this._worksByUriIndex) {
      this.readWorks();
    }
    return requireDefined(this._worksByUriIndex);
  }
}
