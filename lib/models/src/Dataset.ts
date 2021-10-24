import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {PropertyDefinition} from "./PropertyDefinition";
import {PropertyValueDefinition} from "./PropertyValueDefinition";
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
  private _people?: readonly Person[];
  private _peopleByUriIndex?: {[index: string]: Person};
  private _propertyDefinitions?: readonly PropertyDefinition[];
  private _propertyDefinitionsByUriIndex?: {
    [index: string]: PropertyDefinition;
  };
  private _propertyValueDefinitions?: readonly PropertyValueDefinition[];
  private _propertyValueDefinitionsByPropertyUriIndex?: {
    [index: string]: readonly PropertyValueDefinition[];
  };
  private _rightsStatements?: readonly RightsStatement[];
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};
  private _works?: readonly Work[];
  private _worksByCollectionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByInstitutionUriIndex?: {[index: string]: readonly Work[]};
  private _worksByUriIndex?: {[index: string]: Work};

  constructor(readonly store: Store) {}

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
      people: this.people,
      propertyDefinitions: this.propertyDefinitions,
      propertyValueDefinitions: this.propertyValueDefinitions,
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

  propertyDefinitionByUri(
    propertyDefinitionUri: string
  ): PropertyDefinition | null {
    return this.propertyDefinitionsByUriIndex[propertyDefinitionUri] ?? null;
  }

  get propertyDefinitions(): readonly PropertyDefinition[] {
    if (!this._propertyDefinitions) {
      this.readPropertyDefinitions();
    }
    return this._propertyDefinitions!;
  }

  private get propertyDefinitionsByUriIndex(): {
    [index: string]: PropertyDefinition;
  } {
    if (!this._propertyDefinitionsByUriIndex) {
      this.readPropertyDefinitions();
    }
    return this._propertyDefinitionsByUriIndex!;
  }

  get propertyValueDefinitions(): readonly PropertyValueDefinition[] {
    if (!this._propertyValueDefinitions) {
      this.readPropertyValueDefinitions();
    }
    return this._propertyValueDefinitions!;
  }

  propertyValueDefinitionsByPropertyUri(
    propertyUri: string
  ): readonly PropertyValueDefinition[] {
    return this.propertyValueDefinitionsByPropertyUriIndex[propertyUri] ?? [];
  }

  private get propertyValueDefinitionsByPropertyUriIndex(): {
    [index: string]: readonly PropertyValueDefinition[];
  } {
    if (!this._propertyValueDefinitionsByPropertyUriIndex) {
      this.readPropertyValueDefinitions();
    }
    return this._propertyValueDefinitionsByPropertyUriIndex!;
  }

  protected readCollection(node: NamedNode): Collection {
    return new Collection({dataset: this, node});
  }

  private readCollections(): void {
    const collections: Collection[] = [];
    this._collectionsByUriIndex = {};
    const collectionsByInstitutionUriIndex: {
      [index: string]: Collection[];
    } = {};
    this.readModelNodes(node => {
      const collection = this.readCollection(node);

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

  protected readImage(node: NamedNode): Image {
    return new Image({dataset: this, node});
  }

  private readImages(): void {
    const images: Image[] = [];
    const imagesByDepictsUriIndex: {[index: string]: Image[]} = {};
    const imagesByOriginalImageUriIndex: {[index: string]: Image[]} = {};
    this._imagesByUriIndex = {};
    this.readModelNodes(node => {
      const image = this.readImage(node);

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

  protected readInstitution(node: NamedNode): Institution {
    return new Institution({dataset: this, node});
  }

  private readInstitutions() {
    const institutions: Institution[] = [];
    this._institutionsByUriIndex = {};
    this.readModelNodes(node => {
      const institution = this.readInstitution(node);
      institutions.push(institution);
      this._institutionsByUriIndex![institution.uri] = institution;
    }, PARADICMS.Institution);
    this._institutions = institutions;
  }

  protected readLicense(node: NamedNode): License {
    return new License({dataset: this, node});
  }

  private readLicenses() {
    const licenses: License[] = [];
    this._licensesByUriIndex = {};
    this.readModelNodes(node => {
      const license = this.readLicense(node);
      licenses.push(license);
      this._licensesByUriIndex![license.uri] = license;
    }, PARADICMS.License);
    this._licenses = licenses;
  }

  private readModelNodes(
    callback: (node: NamedNode) => void,
    type: NamedNode
  ): void {
    this.store.forSubjects(
      node => {
        if (node.termType !== "NamedNode") {
          throw new RangeError(`expected NamedNode, actual ${node.termType}`);
        }
        callback(node);
      },
      RDF.type,
      type,
      null
    );
  }

  private readPeople() {
    const people: Person[] = [];
    this._peopleByUriIndex = {};
    this.readModelNodes(node => {
      const person = this.readPerson(node);
      people.push(person);
      this._peopleByUriIndex![person.uri] = person;
    }, PARADICMS.Person);
    this._people = people;
  }

  private readPerson(node: NamedNode): Person {
    return new Person({dataset: this, node});
  }

  protected readPropertyDefinition(node: NamedNode): PropertyDefinition {
    return new PropertyDefinition({dataset: this, node});
  }

  private readPropertyDefinitions() {
    const propertyDefinitions: PropertyDefinition[] = [];
    this._propertyDefinitionsByUriIndex = {};
    this.readModelNodes(node => {
      const propertyDefinition = this.readPropertyDefinition(node);
      propertyDefinitions.push(propertyDefinition);
      this._propertyDefinitionsByUriIndex![
        propertyDefinition.uri
      ] = propertyDefinition;
    }, PARADICMS.PropertyDefinition);
    this._propertyDefinitions = propertyDefinitions;
  }

  protected readPropertyValueDefinition(
    node: NamedNode
  ): PropertyValueDefinition {
    return new PropertyValueDefinition({dataset: this, node});
  }

  private readPropertyValueDefinitions() {
    const propertyValueDefinitions: PropertyValueDefinition[] = [];
    const propertyValueDefinitionsByPropertyUriIndex: {
      [index: string]: PropertyValueDefinition[];
    } = {};
    this.readModelNodes(node => {
      const propertyValueDefinition = this.readPropertyValueDefinition(node);

      propertyValueDefinitions.push(propertyValueDefinition);

      for (const propertyUri of propertyValueDefinition.propertyUris) {
        const existingPropertyValueDefinitions =
          propertyValueDefinitionsByPropertyUriIndex[propertyUri];
        if (existingPropertyValueDefinitions) {
          existingPropertyValueDefinitions.push(propertyValueDefinition);
        } else {
          propertyValueDefinitionsByPropertyUriIndex[propertyUri] = [
            propertyValueDefinition,
          ];
        }
      }
    }, PARADICMS.PropertyValueDefinition);
    this._propertyValueDefinitions = propertyValueDefinitions;
    this._propertyValueDefinitionsByPropertyUriIndex = propertyValueDefinitionsByPropertyUriIndex;
  }

  protected readRightsStatement(node: NamedNode): RightsStatement {
    return new RightsStatement({dataset: this, node});
  }

  private readRightsStatements() {
    const rightsStatements: RightsStatement[] = [];
    this._rightsStatementsByUriIndex = {};
    this.readModelNodes(node => {
      const rightsStatement = this.readRightsStatement(node);
      rightsStatements.push(rightsStatement);
      this._rightsStatementsByUriIndex![rightsStatement.uri] = rightsStatement;
    }, PARADICMS.RightsStatement);
    this._rightsStatements = rightsStatements;
  }

  protected readWork(node: NamedNode): Work {
    return new Work({dataset: this, node});
  }

  private readWorks(): void {
    const works: Work[] = [];
    const worksByCollectionUriIndex: {[index: string]: Work[]} = {};
    const worksByInstitutionUriIndex: {[index: string]: Work[]} = {};
    this._worksByUriIndex = {};
    this.readModelNodes(node => {
      const work = this.readWork(node);

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
