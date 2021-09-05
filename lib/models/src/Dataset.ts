import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {Object} from "./Object";
import {RightsStatement} from "./RightsStatement";
import {PropertyDefinition} from "./PropertyDefinition";
import {PropertyValueDefinition} from "./PropertyValueDefinition";
import {NamedNode, Parser, ParserOptions, Store} from "n3";
import {PARADICMS, RDF} from "./vocabularies";

/**
 * Lazily indexes the contents of an immutable Dataset to provide quick lookups and subsetting.
 *
 * For example, a GUI that has one object per page needs a quick objectByUri lookup in getStaticProps.
 *
 * IndexedDataset is used by getStaticProps to cut down Datasets, which means it must deal in JSON-serializable interfaces/objects rather than classes.
 * (JoinedDataset does the latter, because it is only used on the component side.)
 */
export class Dataset {
  private _collectionsByInstitutionUriIndex?: {
    [index: string]: readonly Collection[];
  };
  private _collectionsByUriIndex?: {[index: string]: Collection};
  private _imagesByDepictsUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByOriginalImageUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByUriIndex?: {[index: string]: Image};
  private _institutions?: readonly Institution[];
  private _institutionsByUriIndex?: {[index: string]: Institution};
  private _licensesByUriIndex?: {[index: string]: License};
  private _objectsByCollectionUriIndex?: {[index: string]: readonly Object[]};
  private _objectsByInstitutionUriIndex?: {[index: string]: readonly Object[]};
  private _objectsByUriIndex?: {[index: string]: Object};
  private _propertyDefinitionsByUriIndex?: {
    [index: string]: PropertyDefinition;
  };
  private _propertyValueDefinitionsByPropertyUriIndex?: {
    [index: string]: readonly PropertyValueDefinition[];
  };
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};

  constructor(readonly store: Store) {}

  collectionObjects(collectionUri: string): readonly Object[] {
    return this.objectsByCollectionUriIndex[collectionUri] ?? [];
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
      throw new RangeError("no such image " + imageUri);
    }
    return image;
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

  institutionObjects(institutionUri: string): readonly Object[] {
    return this.objectsByInstitutionUriIndex[institutionUri] ?? [];
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
      throw new RangeError("no such license " + licenseUri);
    }
    return license;
  }

  private get licensesByUriIndex(): {[index: string]: License} {
    if (!this._licensesByUriIndex) {
      this.readLicenses();
    }
    return this._licensesByUriIndex!;
  }

  objectByUri(objectUri: string): Object {
    const object = this.objectsByUriIndex[objectUri];
    if (!object) {
      throw new RangeError("no such object " + objectUri);
    }
    return object;
  }

  private get objectsByCollectionUriIndex(): {
    [index: string]: readonly Object[];
  } {
    if (!this._objectsByCollectionUriIndex) {
      this.readObjects();
    }
    return Dataset.requireNotNullish(this._objectsByCollectionUriIndex);
  }

  private get objectsByInstitutionUriIndex(): {
    [index: string]: readonly Object[];
  } {
    if (!this._objectsByInstitutionUriIndex) {
      this.readObjects();
    }
    return Dataset.requireNotNullish(this._objectsByInstitutionUriIndex);
  }

  private get objectsByUriIndex(): {[index: string]: Object} {
    if (!this._objectsByUriIndex) {
      this.readObjects();
    }
    return Dataset.requireNotNullish(this._objectsByUriIndex);
  }

  static parse(input: string, options?: ParserOptions): Dataset {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return new Dataset(store);
  }

  propertyDefinitionByUri(
    propertyDefinitionUri: string
  ): PropertyDefinition | null {
    return this.propertyDefinitionsByUriIndex[propertyDefinitionUri] ?? null;
  }

  private get propertyDefinitionsByUriIndex(): {
    [index: string]: PropertyDefinition;
  } {
    if (!this._propertyDefinitionsByUriIndex) {
      this.readPropertyDefinitions();
    }
    return this._propertyDefinitionsByUriIndex!;
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
    this._collectionsByUriIndex = {};
    const collectionsByInstitutionUriIndex: {
      [index: string]: Collection[];
    } = {};
    this.readModelNodes(node => {
      const collection = this.readCollection(node);

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
    this._collectionsByInstitutionUriIndex = collectionsByInstitutionUriIndex;
  }

  protected readImage(node: NamedNode): Image {
    return new Image({dataset: this, node});
  }

  private readImages(): void {
    const imagesByDepictsUriIndex: {[index: string]: Image[]} = {};
    const imagesByOriginalImageUriIndex: {[index: string]: Image[]} = {};
    this._imagesByUriIndex = {};
    this.readModelNodes(node => {
      const image = this.readImage(node);

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
    }, PARADICMS.institution);
    this._institutions = institutions;
  }

  protected readLicense(node: NamedNode): License {
    return new License({dataset: this, node});
  }

  private readLicenses() {
    this._licensesByUriIndex = {};
    this.readModelNodes(node => {
      const license = this.readLicense(node);
      this._licensesByUriIndex![license.uri] = license;
    }, PARADICMS.License);
  }

  private readModelNodes(
    callback: (node: NamedNode) => void,
    type: NamedNode
  ): void {
    this.store.forSubjects(
      node => {
        switch (node.termType) {
          case "NamedNode":
            break;
          default:
            throw new RangeError(`expected NamedNode, actual ${node.termType}`);
        }
        callback(node);
      },
      RDF.type,
      type,
      null
    );
  }

  protected readObject(node: NamedNode): Object {
    return new Object({dataset: this, node});
  }

  private readObjects(): void {
    const objectsByCollectionUriIndex: {[index: string]: Object[]} = {};
    const objectsByInstitutionUriIndex: {[index: string]: Object[]} = {};
    this._objectsByUriIndex = {};
    this.readModelNodes(node => {
      const object = this.readObject(node);

      for (const collectionUri of object.collectionUris) {
        const collectionObjects = objectsByCollectionUriIndex[collectionUri];
        if (collectionObjects) {
          collectionObjects.push(object);
        } else {
          objectsByCollectionUriIndex[collectionUri] = [object];
        }
      }

      const institutionObjects =
        objectsByInstitutionUriIndex[object.institutionUri];
      if (institutionObjects) {
        institutionObjects.push(object);
      } else {
        objectsByInstitutionUriIndex[object.institutionUri] = [object];
      }

      this._objectsByUriIndex![object.uri] = object;
    }, PARADICMS.Object);
    this._objectsByCollectionUriIndex = objectsByCollectionUriIndex;
    this._objectsByInstitutionUriIndex = objectsByInstitutionUriIndex;
  }

  protected readPropertyDefinition(node: NamedNode): PropertyDefinition {
    return new PropertyDefinition({dataset: this, node});
  }

  private readPropertyDefinitions() {
    this._propertyDefinitionsByUriIndex = {};
    this.readModelNodes(node => {
      const propertyDefinition = this.readPropertyDefinition(node);

      this._propertyDefinitionsByUriIndex![
        propertyDefinition.uri
      ] = propertyDefinition;
    }, PARADICMS.PropertyDefinition);
  }

  protected readPropertyValueDefinition(
    node: NamedNode
  ): PropertyValueDefinition {
    return new PropertyValueDefinition({dataset: this, node});
  }

  private readPropertyValueDefinitions() {
    const propertyValueDefinitionsByPropertyUriIndex: {
      [index: string]: PropertyValueDefinition[];
    } = {};
    this.readModelNodes(node => {
      const propertyValueDefinition = this.readPropertyValueDefinition(node);

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
    this._propertyValueDefinitionsByPropertyUriIndex = propertyValueDefinitionsByPropertyUriIndex;
  }

  protected readRightsStatement(node: NamedNode): RightsStatement {
    return new RightsStatement({dataset: this, node});
  }

  private readRightsStatements() {
    this._rightsStatementsByUriIndex = {};
    this.readModelNodes(node => {
      const rightsStatement = this.readRightsStatement(node);
      this._rightsStatementsByUriIndex![rightsStatement.uri] = rightsStatement;
    }, PARADICMS.RightsStatement);
  }

  private static requireNotNullish<T>(value: T | undefined): T {
    if (typeof value === "undefined") {
      throw new EvalError("expected value to be defined");
    }
    return value;
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    const rightsStatement = this.rightsStatementsByUriIndex[rightsStatementUri];
    if (!rightsStatement) {
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
}
