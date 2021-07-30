import {Dataset} from "./Dataset";
import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {Object} from "./Object";
import {RightsStatement} from "./RightsStatement";

/**
 * Lazily indexes the contents of an immutable Dataset to provide quick lookups and subsetting.
 *
 * For example, a GUI that has one object per page needs a quick objectByUri lookup in getStaticProps.
 *
 * IndexedDataset is used by getStaticProps to cut down Datasets, which means it must deal in JSON-serializable interfaces/objects rather than classes.
 * (JoinedDataset does the latter, because it is only used on the component side.)
 */
export class IndexedDataset {
  private _collectionsByInstitutionUri?: {
    [index: string]: readonly Collection[];
  };
  private _collectionsByUri?: {[index: string]: Collection};
  private _imagesByDepictsUri?: {[index: string]: readonly Image[]};
  private _imagesByInstitutionUri?: {[index: string]: readonly Image[]};
  private _imagesByUri?: {[index: string]: Image};
  private _institutionsByUri?: {[index: string]: Institution};
  private _licensesByUri?: {[index: string]: License};
  private _objectsByCollectionUri?: {[index: string]: readonly Object[]};
  private _objectsByInstitutionUri?: {[index: string]: readonly Object[]};
  private _objectsByUri?: {[index: string]: Object};
  private _rightsStatementsByUri?: {[index: string]: RightsStatement};

  constructor(private readonly dataset: Dataset) {
  }

  collectionImages(collectionUri: string): readonly Image[] {
    let collectionImages = this.imagesByDepictsUri[collectionUri];
    if (collectionImages) {
      return collectionImages;
    }

    const collectionObjects = this.objectsByCollectionUri[collectionUri];
    if (!collectionObjects) {
      return [];
    }

    for (const object of collectionObjects) {
      const objectImages = this.imagesByDepictsUri[object.uri];
      if (objectImages) {
        // Use the images of the first object with images as the collection's images
        return objectImages;
      }
    }

    return [];
  }

  collectionObjectsDataset(collectionUri: string): Dataset {
    return this.objectsDataset(...this.collectionObjects(collectionUri).map(object => object.uri));
  }

  private collectionObjects(collectionUri: string): readonly Object[] {
    return this.objectsByCollectionUri[collectionUri] ?? [];
  }

  // @ts-ignore
  private get collectionsByInstitutionUri(): {[index: string]: readonly Collection[]} {
    if (!this._collectionsByInstitutionUri) {
      this.indexCollections();
    }
    return IndexedDataset.requireNotNullish(this._collectionsByInstitutionUri);
  }

  private collectionByUri(collectionUri: string): Collection {
    const collection = this.collectionsByUri[collectionUri];
    if (!collection) {
      throw new RangeError("no such collection " + collectionUri);
    }
    return collection;
  }

  private get collectionsByUri(): {[index: string]: Collection} {
    if (!this._collectionsByUri) {
      this.indexCollections();
    }
    return IndexedDataset.requireNotNullish(this._collectionsByUri);
  }

  // private get emptyDataset(): Dataset {
  //   return {
  //     collections: [],
  //     images: [],
  //     institutions: [],
  //     licenses: [],
  //     objects: [],
  //     propertyDefinitions: [],
  //     rightsStatements: [],
  //   };
  // }

  get firstCollection(): Collection {
    if (this.dataset.collections.length === 0) {
      throw new RangeError("no collections");
    }
    return this.dataset.collections[0];
  }

  imageByUri(imageUri: string): Image {
    const image = this.imagesByUri[imageUri];
    if (!image) {
      throw new RangeError("no such image " + imageUri);
    }
    return image;
  }

  // @ts-ignore
  private get imagesByDepictsUri(): {[index: string]: readonly Image[]} {
    if (!this._imagesByDepictsUri) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByDepictsUri);
  }

  // @ts-ignore
  private get imagesByInstitutionUri(): {[index: string]: readonly Image[]} {
    if (!this._imagesByInstitutionUri) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByInstitutionUri);
  }

  // @ts-ignore
  private get imagesByUri(): {[index: string]: Image} {
    if (!this._imagesByUri) {
      this.indexImages();
    }
    return IndexedDataset.requireNotNullish(this._imagesByUri);
  }

  /**
   * Create all collection indices with a single pass over collections rather than one pass per index.
   */
  private indexCollections(): void {
    this._collectionsByUri = {};
    const collectionsByInstitutionUri: {[index: string]: Collection[]} = {};
    for (const collection of this.dataset.collections) {
      this._collectionsByUri[collection.uri] = collection;
      const institutionCollections = collectionsByInstitutionUri[collection.institutionUri];
      if (institutionCollections) {
        institutionCollections.push(collection);
      } else {
        collectionsByInstitutionUri[collection.institutionUri] = [collection];
      }
    }
    this._collectionsByInstitutionUri = collectionsByInstitutionUri;
  }

  /**
   * Create all image indices with a single pass over images rather than one pass per index.
   */
  private indexImages(): void {
    const imagesByDepictsUri: {[index: string]: Image[]} = {};
    const imagesByInstitutionUri: {[index: string]: Image[]} = {};
    this._imagesByUri = {};
    for (const image of this.dataset.images) {
      const depictsUriImages = imagesByDepictsUri[image.depictsUri];
      if (depictsUriImages) {
        depictsUriImages.push(image);
      } else {
        imagesByDepictsUri[image.depictsUri] = [image];
      }

      const institutionImages = imagesByInstitutionUri[image.institutionUri];
      if (institutionImages) {
        institutionImages.push(image);
      } else {
        imagesByInstitutionUri[image.institutionUri] = [image];
      }

      this._imagesByUri[image.uri] = image;
    }
    this._imagesByDepictsUri = imagesByDepictsUri;
    this._imagesByInstitutionUri = imagesByInstitutionUri;
  }

  // private static indexModelsByInstitutionUri<ModelT extends {institutionUri: string}>(
  //   models: readonly ModelT[]
  // ): {[index: string]: readonly ModelT[]} {
  //   return models.reduce((map: {[index: string]: ModelT[]}, model: ModelT) => {
  //     const models = map[model.institutionUri];
  //     if (!models) {
  //       map[model.institutionUri] = [model];
  //     } else {
  //       models.push(model);
  //     }
  //     return map;
  //   }, {});
  // };

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
    const objectsByCollectionUri: {[index: string]: Object[]} = {};
    const objectsByInstitutionUri: {[index: string]: Object[]} = {};
    this._objectsByUri = {};
    for (const object of this.dataset.objects) {
      for (const collectionUri of object.collectionUris) {
        const collectionObjects = objectsByCollectionUri[collectionUri];
        if (collectionObjects) {
          collectionObjects.push(object);
        } else {
          objectsByCollectionUri[collectionUri] = [object];
        }
      }

      const institutionObjects = objectsByInstitutionUri[object.institutionUri];
      if (institutionObjects) {
        institutionObjects.push(object);
      } else {
        objectsByInstitutionUri[object.institutionUri] = [object];
      }

      this._objectsByUri[object.uri] = object;
    }
    this._objectsByCollectionUri = objectsByCollectionUri;
    this._objectsByInstitutionUri = objectsByInstitutionUri;
  }

  institutionByUri(institutionUri: string): Institution {
    const institution = this.institutionsByUri[institutionUri];
    if (!institution) {
      throw new RangeError("no such institution " + institutionUri);
    }
    return institution;
  }

  // @ts-ignore
  private get institutionsByUri(): {[index: string]: Institution} {
    if (!this._institutionsByUri) {
      this._institutionsByUri = IndexedDataset.indexModelsByUri(this.dataset.institutions);
    }
    return this._institutionsByUri;
  }

  licenseByUri(licenseUri: string): License {
    const license = this.licenseByUri(licenseUri);
    if (!license) {
      throw new RangeError("no such license " + licenseUri);
    }
    return license;
  }

  // @ts-ignore
  private get licensesByUri(): {[index: string]: License} {
    if (!this._licensesByUri) {
      this._licensesByUri = IndexedDataset.indexModelsByUri(this.dataset.licenses);
    }
    return this._licensesByUri;
  }

  objectByUri(objectUri: string): Object {
    const object = this.objectsByUri[objectUri];
    if (!object) {
      throw new RangeError("no such object " + objectUri);
    }
    return object;
  }

  objectImages(objectUri: string): readonly Image[] {
    return this.imagesByDepictsUri[objectUri] ?? [];
  }

  get objects(): readonly Object[] {
    return this.dataset.objects;
  }

  objectsDataset(...objectUris: readonly string[]): Dataset {
    const objects = objectUris.map(objectUri => this.objectByUri(objectUri));

    const collectionUris = new Set<string>();
    const images: Image[] = [];
    const institutionUris = new Set<string>();
    for (const object of objects) {
      for (const collectionUri of object.collectionUris) {
        collectionUris.add(collectionUri);
      }
      images.push(...this.objectImages(object.uri));
      institutionUris.add(object.institutionUri);
    }
    return {
      collections: [...collectionUris].map(collectionUri => this.collectionByUri(collectionUri)),
      images,
      institutions: [...institutionUris].map(institutionUri => this.institutionByUri(institutionUri)),
      licenses: this.dataset.licenses,
      objects,
      propertyDefinitions: this.dataset.propertyDefinitions,
      rightsStatements: this.dataset.rightsStatements,
    };
  }

  // @ts-ignore
  private get objectsByCollectionUri(): {[index: string]: readonly Object[]} {
    if (!this._objectsByCollectionUri) {
      this.indexObjects();
    }
    return IndexedDataset.requireNotNullish(this._objectsByCollectionUri);
  }

  // @ts-ignore
  private get objectsByInstitutionUri(): {[index: string]: readonly Object[]} {
    if (!this._objectsByInstitutionUri) {
      this.indexObjects();
    }
    return IndexedDataset.requireNotNullish(this._objectsByInstitutionUri);
  }

  // @ts-ignore
  private get objectsByUri(): {[index: string]: Object} {
    if (!this._objectsByUri) {
      this.indexObjects();
    }
    return IndexedDataset.requireNotNullish(this._objectsByUri);
  }

  private static requireNotNullish<T>(value: T | undefined): T {
    if (typeof value === "undefined") {
      throw new EvalError("expected value to be defined");
    }
    return value;
  }

  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    const rightsStatement = this.rightsStatementsByUri[rightsStatementUri];
    if (!rightsStatement) {
      throw new RangeError("no such rights statement " + rightsStatementUri);
    }
    return rightsStatement;
  }

  // @ts-ignore
  private get rightsStatementsByUri(): {[index: string]: RightsStatement} {
    if (!this._rightsStatementsByUri) {
      this._rightsStatementsByUri = IndexedDataset.indexModelsByUri(this.dataset.rightsStatements);
    }
    return this._rightsStatementsByUri;
  }
}
