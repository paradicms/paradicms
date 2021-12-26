import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {
  NamedNode,
  Parser,
  ParserOptions,
  Store,
  Writer,
  WriterOptions,
} from "n3";
import {PARADICMS, prefixes, RDF} from "./vocabularies";
import {Work} from "./Work";
import {Person} from "./Person";
import {NamedModel} from "./NamedModel";
import {NamedValue} from "./NamedValue";
import {Organization} from "./Organization";
import {Agent} from "./Agent";
import {ModelParameters} from "./ModelParameters";

/**
 * Lazily indexes the contents of an immutable Dataset to provide quick lookups and subsetting.
 *
 * For example, a GUI that has one work per page needs a quick workByUri lookup in getStaticProps.
 *
 * IndexedDataset is used by getStaticProps to cut down Datasets, which means it must deal in JSON-serializable interfaces/works rather than classes.
 * (JoinedDataset does the latter, because it is only used on the component side.)
 */
export class Dataset {
  private _collections?: readonly Collection[];
  private _collectionsByInstitutionUriIndex?: {
    [index: string]: readonly Collection[];
  };
  private _collectionsByUriIndex?: {[index: string]: Collection};
  private _images?: readonly Image[];
  private _imagesByDepictsUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByOriginalImageUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByUriIndex?: {[index: string]: Image};
  private _institutions?: readonly Institution[];
  private _institutionsByUriIndex?: {[index: string]: Institution};
  private _licenses?: readonly License[];
  private _licensesByUriIndex?: {[index: string]: License};
  private _namedValues?: readonly NamedValue[];
  private _namedValuesByPropertyUriIndex?: {
    [index: string]: readonly NamedValue[];
  };
  private _organizations?: readonly Organization[];
  private _organizationsByUriIndex?: {[index: string]: Organization};
  private _people?: readonly Person[];
  private _peopleByUriIndex?: {[index: string]: Person};
  private _rightsStatements?: readonly RightsStatement[];
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};
  private _works?: readonly Work[];
  private _worksByCollectionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByInstitutionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByUriIndex?: {[index: string]: Work};

  constructor(readonly store: Store) {}

  agentByUri(agentUri: string): Agent {
    for (const index of [this.organizationsByUriIndex, this.peopleByUriIndex]) {
      const agent = index[agentUri];
      if (agent) {
        return agent;
      }
    }
    this.logContents();
    throw new RangeError("no such agent " + agentUri);
  }

  get agents(): readonly Agent[] {
    return [...this.organizations, ...this.people];
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

  private get collectionsByInstitutionUriIndex(): {
    [index: string]: readonly Collection[];
  } {
    if (!this._collectionsByInstitutionUriIndex) {
      this.readCollections();
    }
    return Dataset.requireNotNullish(this._collectionsByInstitutionUriIndex);
  }

  collectionByUri(collectionUri: string): Collection {
    const collection = this.collectionsByUriIndex[collectionUri];
    if (!collection) {
      this.logContents();
      throw new RangeError("no such collection " + collectionUri);
    }
    return collection;
  }

  private get collectionsByUriIndex(): {[index: string]: Collection} {
    if (!this._collectionsByUriIndex) {
      this.readCollections();
    }
    return Dataset.requireNotNullish(this._collectionsByUriIndex);
  }

  imageByUri(imageUri: string): Image {
    const image = this.imagesByUriIndex[imageUri];
    if (!image) {
      this.logContents();
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
    return Dataset.requireNotNullish(this._imagesByDepictsUriIndex);
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
    return Dataset.requireNotNullish(this._imagesByOriginalImageUriIndex);
  }

  private get imagesByUriIndex(): {[index: string]: Image} {
    if (!this._imagesByUriIndex) {
      this.readImages();
    }
    return Dataset.requireNotNullish(this._imagesByUriIndex);
  }

  institutionByUri(institutionUri: string): Institution {
    const institution = this.institutionsByUriIndex[institutionUri];
    if (!institution) {
      this.logContents();
      throw new RangeError("no such institution " + institutionUri);
    }
    return institution;
  }

  get institutions(): readonly Institution[] {
    if (!this._institutions) {
      this.readInstitutions();
    }
    return this._institutions!;
  }

  institutionCollections(institutionUri: string): readonly Collection[] {
    return this.collectionsByInstitutionUriIndex[institutionUri] ?? [];
  }

  institutionWorks(institutionUri: string): readonly Work[] {
    return this.worksByInstitutionUriIndex[institutionUri] ?? [];
  }

  private get institutionsByUriIndex(): {[index: string]: Institution} {
    if (!this._institutionsByUriIndex) {
      this.readInstitutions();
    }
    return this._institutionsByUriIndex!;
  }

  licenseByUri(licenseUri: string): License {
    const license = this.licensesByUriIndex[licenseUri];
    if (!license) {
      this.logContents();
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

  private logContents(): void {
    console.log(
      "Dataset:",
      this.store.getSubjects(null, null, null).length,
      "subjects"
    );
    const models: {[index: string]: readonly NamedModel[]} = {
      collections: this.collections,
      institutions: this.institutions,
      images: this.images,
      licenses: this.licenses,
      namedValues: this.namedValues,
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

  get namedValues(): readonly NamedValue[] {
    if (!this._namedValues) {
      this.readNamedValues();
    }
    return this._namedValues!;
  }

  namedValuesByPropertyUri(propertyUri: string): readonly NamedValue[] {
    return this.namedValuesByPropertyUriIndex[propertyUri] ?? [];
  }

  private get namedValuesByPropertyUriIndex(): {
    [index: string]: readonly NamedValue[];
  } {
    if (!this._namedValuesByPropertyUriIndex) {
      this.readNamedValues();
    }
    return this._namedValuesByPropertyUriIndex!;
  }

  organizationByUri(organizationUri: string): Organization {
    const organization = this.organizationsByUriIndex[organizationUri];
    if (!organization) {
      this.logContents();
      throw new RangeError("no such organization " + organizationUri);
    }
    return organization;
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

  static parse(input: string, options?: ParserOptions): Dataset {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return new Dataset(store);
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
      this.logContents();
      throw new RangeError("no such person " + personUri);
    }
    return person;
  }

  protected readCollection(kwds: ModelParameters): Collection {
    return new Collection(kwds);
  }

  private readCollections(): void {
    const collections: Collection[] = [];
    this._collectionsByUriIndex = {};
    const collectionsByInstitutionUriIndex: {
      [index: string]: Collection[];
    } = {};
    this.readModels(kwds => {
      const collection = this.readCollection(kwds);

      collections.push(collection);

      this._collectionsByUriIndex![collection.uri] = collection;

      const institutionCollections =
        collectionsByInstitutionUriIndex[collection.institutionUri];
      if (institutionCollections) {
        institutionCollections.push(collection);
      } else {
        collectionsByInstitutionUriIndex[collection.institutionUri] = [
          collection,
        ];
      }
    }, PARADICMS.Collection);
    this._collections = collections;
    this._collectionsByInstitutionUriIndex = collectionsByInstitutionUriIndex;
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
    }, PARADICMS.Image);
    this._images = images;
    this._imagesByDepictsUriIndex = imagesByDepictsUriIndex;
    this._imagesByOriginalImageUriIndex = imagesByOriginalImageUriIndex;
  }

  protected readInstitution(kwds: ModelParameters): Institution {
    return new Institution(kwds);
  }

  private readInstitutions() {
    const institutions: Institution[] = [];
    this._institutionsByUriIndex = {};
    this.readModels(kwds => {
      const institution = this.readInstitution(kwds);
      institutions.push(institution);
      this._institutionsByUriIndex![institution.uri] = institution;
    }, PARADICMS.Institution);
    this._institutions = institutions;
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
    }, PARADICMS.License);
    this._licenses = licenses;
  }

  private readModels(
    callback: (kwds: ModelParameters) => void,
    type: NamedNode
  ): void {
    this.store.forEach(
      quad => {
        if (quad.graph.termType !== "NamedNode") {
          throw new RangeError(
            `expected NamedNode graph, actual ${quad.graph.termType}`
          );
        }
        if (quad.subject.termType !== "NamedNode") {
          throw new RangeError(
            `expected NamedNode subject, actual ${quad.subject.termType}`
          );
        }
        callback({
          dataset: this,
          graphNode: quad.graph as NamedNode,
          node: quad.subject as NamedNode,
        });
      },
      null,
      RDF.type,
      type,
      null
    );
  }

  protected readNamedValue(kwds: ModelParameters): NamedValue {
    return new NamedValue(kwds);
  }

  private readNamedValues() {
    const namedValues: NamedValue[] = [];
    const namedValuesByPropertyUriIndex: {
      [index: string]: NamedValue[];
    } = {};
    this.readModels(kwds => {
      const namedValue = this.readNamedValue(kwds);

      namedValues.push(namedValue);

      for (const propertyUri of namedValue.propertyUris) {
        const existingNamedValues = namedValuesByPropertyUriIndex[propertyUri];
        if (existingNamedValues) {
          existingNamedValues.push(namedValue);
        } else {
          namedValuesByPropertyUriIndex[propertyUri] = [namedValue];
        }
      }
    }, PARADICMS.NamedValue);
    this._namedValues = namedValues;
    this._namedValuesByPropertyUriIndex = namedValuesByPropertyUriIndex;
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
    }, PARADICMS.Organization);
    this._organizations = organizations;
  }

  private readPeople() {
    const people: Person[] = [];
    this._peopleByUriIndex = {};
    this.readModels(kwds => {
      const person = this.readPerson(kwds);
      people.push(person);
      this._peopleByUriIndex![person.uri] = person;
    }, PARADICMS.Person);
    this._people = people;
  }

  private readPerson(kwds: ModelParameters): Person {
    return new Person(kwds);
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
    }, PARADICMS.RightsStatement);
    this._rightsStatements = rightsStatements;
  }

  protected readWork(kwds: ModelParameters): Work {
    return new Work(kwds);
  }

  private readWorks(): void {
    const works: Work[] = [];
    const worksByCollectionUriIndex: {[index: string]: Work[]} = {};
    const worksByInstitutionUriIndex: {[index: string]: Work[]} = {};
    this._worksByUriIndex = {};
    this.readModels(kwds => {
      const work = this.readWork(kwds);

      works.push(work);

      for (const collectionUri of work.collectionUris) {
        const collectionWorks = worksByCollectionUriIndex[collectionUri];
        if (collectionWorks) {
          collectionWorks.push(work);
        } else {
          worksByCollectionUriIndex[collectionUri] = [work];
        }
      }

      const institutionWorks = worksByInstitutionUriIndex[work.institutionUri];
      if (institutionWorks) {
        institutionWorks.push(work);
      } else {
        worksByInstitutionUriIndex[work.institutionUri] = [work];
      }

      this._worksByUriIndex![work.uri] = work;
    }, PARADICMS.Work);
    this._works = works;
    this._worksByCollectionUriIndex = worksByCollectionUriIndex;
    this._worksByInstitutionUriIndex = worksByInstitutionUriIndex;
  }

  private static requireNotNullish<T>(value: T | undefined): T {
    if (typeof value === "undefined") {
      throw new EvalError("expected value to be defined");
    }
    return value;
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
      this.logContents();
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

  stringify(options?: WriterOptions): string {
    const augmentedOptions: WriterOptions = {...options};
    if (!augmentedOptions.format) {
      augmentedOptions.format = "Turtle";
    }
    if (!augmentedOptions.prefixes) {
      augmentedOptions.prefixes = prefixes;
    }
    const writer = new Writer(augmentedOptions);
    writer.addQuads(this.store.getQuads(null, null, null, null));
    let resultString: string;
    writer.end((error, result: string) => (resultString = result));
    return resultString!;
  }

  workByUri(workUri: string): Work {
    const work = this.worksByUriIndex[workUri];
    if (!work) {
      this.logContents();
      throw new RangeError("no such work " + workUri);
    }
    return work;
  }

  get works(): readonly Work[] {
    if (!this._works) {
      this.readWorks();
    }
    return this._works!;
  }

  private get worksByCollectionUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByCollectionUriIndex) {
      this.readWorks();
    }
    return Dataset.requireNotNullish(this._worksByCollectionUriIndex);
  }

  private get worksByInstitutionUriIndex(): {
    [index: string]: readonly Work[];
  } {
    if (!this._worksByInstitutionUriIndex) {
      this.readWorks();
    }
    return Dataset.requireNotNullish(this._worksByInstitutionUriIndex);
  }

  private get worksByUriIndex(): {[index: string]: Work} {
    if (!this._worksByUriIndex) {
      this.readWorks();
    }
    return Dataset.requireNotNullish(this._worksByUriIndex);
  }
}
