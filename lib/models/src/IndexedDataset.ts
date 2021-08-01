import {Dataset} from "./Dataset";
import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {Object} from "./Object";
import {RightsStatement} from "./RightsStatement";
import {PropertyDefinition} from "PropertyDefinition";

/**
 * Lazily indexes the contents of an immutable Dataset to provide quick lookups and subsetting.
 *
 * For example, a GUI that has one object per page needs a quick objectByUri lookup in getStaticProps.
 *
 * IndexedDataset is used by getStaticProps to cut down Datasets, which means it must deal in JSON-serializable interfaces/objects rather than classes.
 * (JoinedDataset does the latter, because it is only used on the component side.)
 */
export class IndexedDataset {
  // The lazy indices are prefixed with _ and suffixed with "Index". They should not be accessed directly,
  // but indirectly through a getter with the same name (but unprefixed), which will instantiate and populate the index on demand.
  private _collectionsByInstitutionUriIndex?: {
    [index: string]: readonly Collection[];
  };
  private _collectionsByUriIndex?: {[index: string]: Collection};
  private _imagesByDepictsUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByInstitutionUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByOriginalImageUriIndex?: {[index: string]: readonly Image[]};
  private _imagesByUriIndex?: {[index: string]: Image};
  private _institutionsByUriIndex?: {[index: string]: Institution};
  private _licensesByUriIndex?: {[index: string]: License};
  private _objectsByCollectionUriIndex?: {[index: string]: readonly Object[]};
  private _objectsByInstitutionUriIndex?: {[index: string]: readonly Object[]};
  private _objectsByUriIndex?: {[index: string]: Object};
  private _propertyDefinitionsByUriIndex?: {[index: string]: PropertyDefinition};
  private _rightsStatementsByUriIndex?: {[index: string]: RightsStatement};

  constructor(private readonly dataset: Dataset) {
  }

  collectionImages(collectionUri: string): readonly Image[] {
    let collectionImages = this.imagesByDepictsUriIndex[collectionUri];
    if (collectionImages) {
      return collectionImages;
    }

    const collectionObjects = this.objectsByCollectionUriIndex[collectionUri];
    if (!collectionObjects) {
      return [];
    }

    for (const object of collectionObjects) {
      const objectImages = this.imagesByDepictsUriIndex[object.uri];
      if (objectImages) {
        // Use the images of the first object with images as the collection's images
        return objectImages;
      }
    }

    return [];
  }

  collectionObjects(collectionUri: string): readonly Object[] {
    return this.objectsByCollectionUriIndex[collectionUri] ?? [];
  }

  // @ts-ignore
  private get collectionsByInstitutionUriIndex(): {[index: string]: readonly Collection[]} {
    if (!this._collectionsByInstitutionUriIndex) {
      this.indexCollections();
    }
    return IndexedDataset.requireNotNullish(this._collectionsByInstitutionUriIndex);
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
      this.indexCollections();
    }
    return IndexedDataset.requireNotNullish(this._collectionsByUriIndex);
  }

  derivedImages(originalImageUri: string): readonly Image[] {
    // Exclude the original image itself
    return (this.imagesByOriginalImageUriIndex[originalImageUri] ?? []).filter(image => image.originalImageUri === originalImageUri);
  }

  get firstCollection(): Collection {
    if (this.dataset.collections.length === 0) {
      throw new RangeError("no collections");
    }
    return this.dataset.collections[0];
  }

  imageByUri(imageUri: string): Image {
    const image = this.imagesByUriIndex[imageUri];
    if (!image) {
      throw new RangeError("no such image " + imageUri);
    }
    return image;
  }

  // @ts-ignore
  private get imagesByDepictsUriIndex(): {[index: string]: readonly Image[]} {
    if (!this._imagesByDepictsUriIndex) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByDepictsUriIndex);
  }

  // @ts-ignore
  private get imagesByInstitutionUriIndex(): {[index: string]: readonly Image[]} {
    if (!this._imagesByInstitutionUriIndex) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByInstitutionUriIndex);
  }

  private get imagesByOriginalImageUriIndex(): {[index: string]: readonly Image[]} {
    if (!this._imagesByOriginalImageUriIndex) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByOriginalImageUriIndex);
  }

  // @ts-ignore
  private get imagesByUriIndex(): {[index: string]: Image} {
    if (!this._imagesByUriIndex) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByUriIndex);
  }

  /**
   * Create all collection indices with a single pass over collections rather than one pass per index.
   */
  private indexCollections(): void {
    this._collectionsByUriIndex = {};
    const collectionsByInstitutionUriIndex: {[index: string]: Collection[]} = {};
    for (const collection of this.dataset.collections) {
      this._collectionsByUriIndex[collection.uri] = collection;
      const institutionCollections = collectionsByInstitutionUriIndex[collection.institutionUri];
      if (institutionCollections) {
        institutionCollections.push(collection);
      } else {
        collectionsByInstitutionUriIndex[collection.institutionUri] = [collection];
      }
    }
    this._collectionsByInstitutionUriIndex = collectionsByInstitutionUriIndex;
  }

  /**
   * Create all image indices with a single pass over images rather than one pass per index.
   */
  private indexImages(): void {
    const imagesByDepictsUriIndex: {[index: string]: Image[]} = {};
    const imagesByInstitutionUriIndex: {[index: string]: Image[]} = {};
    const imagesByOriginalImageUriIndex: {[index: string]: Image[]} = {};
    this._imagesByUriIndex = {};
    for (const image of this.dataset.images) {
      const depictsUriImages = imagesByDepictsUriIndex[image.depictsUri];
      if (depictsUriImages) {
        depictsUriImages.push(image);
      } else {
        imagesByDepictsUriIndex[image.depictsUri] = [image];
      }

      const institutionImages = imagesByInstitutionUriIndex[image.institutionUri];
      if (institutionImages) {
        institutionImages.push(image);
      } else {
        imagesByInstitutionUriIndex[image.institutionUri] = [image];
      }

      const originalImageUri = image.originalImageUri ?? image.uri;
      const originalImageUriImages = imagesByOriginalImageUriIndex[originalImageUri];
      if (originalImageUriImages) {
        originalImageUriImages.push(image);
      } else {
        imagesByOriginalImageUriIndex[originalImageUri] = [image];
      }

      this._imagesByUriIndex[image.uri] = image;
    }
    this._imagesByDepictsUriIndex = imagesByDepictsUriIndex;
    this._imagesByInstitutionUriIndex = imagesByInstitutionUriIndex;
    this._imagesByOriginalImageUriIndex = imagesByOriginalImageUriIndex;
  }

  private static indexModelsByUri<ModelT extends {uri: string}>(
    models: readonly ModelT[]
  ): {[index: string]: ModelT} {
    return models.reduce((map, model) => {
      map[model.uri] = model;
      return map;
    }, {} as {[index: string]: ModelT});
  }

  /**
   * Create all object indices with a single pass over objects rather than one pass per index.
   */
  private indexObjects(): void {
    const objectsByCollectionUriIndex: {[index: string]: Object[]} = {};
    const objectsByInstitutionUriIndex: {[index: string]: Object[]} = {};
    this._objectsByUriIndex = {};
    for (const object of this.dataset.objects) {
      for (const collectionUri of object.collectionUris) {
        const collectionObjects = objectsByCollectionUriIndex[collectionUri];
        if (collectionObjects) {
          collectionObjects.push(object);
        } else {
          objectsByCollectionUriIndex[collectionUri] = [object];
        }
      }

      const institutionObjects = objectsByInstitutionUriIndex[object.institutionUri];
      if (institutionObjects) {
        institutionObjects.push(object);
      } else {
        objectsByInstitutionUriIndex[object.institutionUri] = [object];
      }

      this._objectsByUriIndex[object.uri] = object;
    }
    this._objectsByCollectionUriIndex = objectsByCollectionUriIndex;
    this._objectsByInstitutionUriIndex = objectsByInstitutionUriIndex;
  }

  institutionByUri(institutionUri: string): Institution {
    const institution = this.institutionsByUriIndex[institutionUri];
    if (!institution) {
      throw new RangeError("no such institution " + institutionUri);
    }
    return institution;
  }

  // @ts-ignore
  private get institutionsByUriIndex(): {[index: string]: Institution} {
    if (!this._institutionsByUriIndex) {
      this._institutionsByUriIndex = IndexedDataset.indexModelsByUri(this.dataset.institutions);
    }
    return this._institutionsByUriIndex;
  }

  institutionCollections(institutionUri: string): readonly Collection[] {
    return this.collectionsByInstitutionUriIndex[institutionUri] ?? [];
  }

  institutionImages(institutionUri: string): readonly Image[] {
    let institutionImages = this.imagesByDepictsUriIndex[institutionUri];
    if (institutionImages) {
      return institutionImages;
    }

    const institutionObjects = this.objectsByInstitutionUriIndex[institutionUri];
    if (!institutionObjects) {
      return [];
    }

    for (const object of institutionObjects) {
      const objectImages = this.imagesByDepictsUriIndex[object.uri];
      if (objectImages) {
        // Use the images of the first object with images as the institution's images
        return objectImages;
      }
    }

    return [];
  }

  institutionObjects(institutionUri: string): readonly Object[] {
    return this.objectsByInstitutionUriIndex[institutionUri] ?? [];
  }

  get institutions(): readonly Institution[] {
    return this.dataset.institutions;
  }

  licenseByUri(licenseUri: string): License {
    const license = this.licenseByUri(licenseUri);
    if (!license) {
      throw new RangeError("no such license " + licenseUri);
    }
    return license;
  }

  get licenses(): readonly License[] {
    return this.dataset.licenses;
  }

  // @ts-ignore
  private get licensesByUriIndex(): {[index: string]: License} {
    if (!this._licensesByUriIndex) {
      this._licensesByUriIndex = IndexedDataset.indexModelsByUri(this.dataset.licenses);
    }
    return this._licensesByUriIndex;
  }


  objectByUri(objectUri: string): Object {
    const object = this.objectsByUriIndex[objectUri];
    if (!object) {
      throw new RangeError("no such object " + objectUri);
    }
    return object;
  }

  objectImages(objectUri: string): readonly Image[] {
    return this.imagesByDepictsUriIndex[objectUri] ?? [];
  }

  get objects(): readonly Object[] {
    return this.dataset.objects;
  }

  // @ts-ignore
  private get objectsByCollectionUriIndex(): {[index: string]: readonly Object[]} {
    if (!this._objectsByCollectionUriIndex) {
      this.indexObjects();
    }
    return IndexedDataset.requireNotNullish(this._objectsByCollectionUriIndex);
  }

  // @ts-ignore
  private get objectsByInstitutionUriIndex(): {[index: string]: readonly Object[]} {
    if (!this._objectsByInstitutionUriIndex) {
      this.indexObjects();
    }
    return IndexedDataset.requireNotNullish(this._objectsByInstitutionUriIndex);
  }

  // @ts-ignore
  private get objectsByUriIndex(): {[index: string]: Object} {
    if (!this._objectsByUriIndex) {
      this.indexObjects();
    }
    return IndexedDataset.requireNotNullish(this._objectsByUriIndex);
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

  propertyDefinitionByUri(propertyDefinitionUri: string): PropertyDefinition | null {
    return this.propertyDefinitionsByUriIndex[propertyDefinitionUri] ?? null;
  }

  get propertyDefinitions(): readonly PropertyDefinition[] {
    return this.dataset.propertyDefinitions;
  }

  private get propertyDefinitionsByUriIndex(): {[index: string]: PropertyDefinition} {
    if (!this._propertyDefinitionsByUriIndex) {
      this._propertyDefinitionsByUriIndex = IndexedDataset.indexModelsByUri(this.dataset.propertyDefinitions);
    }
    return this._propertyDefinitionsByUriIndex;
  }

  get rightsStatements(): readonly RightsStatement[] {
    return this.dataset.rightsStatements;
  }

  private get rightsStatementsByUriIndex(): {[index: string]: RightsStatement} {
    if (!this._rightsStatementsByUriIndex) {
      this._rightsStatementsByUriIndex = IndexedDataset.indexModelsByUri(this.dataset.rightsStatements);
    }
    return this._rightsStatementsByUriIndex;
  }
}
