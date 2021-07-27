import {Dataset} from "./Dataset";
import {Collection} from "./Collection";
import {Image} from "./Image";
import {Institution} from "./Institution";
import {License} from "./License";
import {Object} from "./Object";
import {RightsStatement} from "RightsStatement";

/**
 * Lazily indexes the contents of a Dataset to provide quick lookups and subsetting.
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
  private _institutionsByUri?: {[index: string]: Institution};
  private _licensesByUri?: {[index: string]: License};
  private _objectsByCollectionUri?: {[index: string]: readonly Object[]};
  private _objectsByInstitutionUri?: {[index: string]: readonly Object[]};
  private _objectsByUri?: {[index: string]: Object};
  private _rightsStatementsByUri?: {[index: string]: RightsStatement};

  constructor(private readonly dataset: Dataset) {
  }

  // @ts-ignore
  private get collectionsByInstitutionUri(): {[index: string]: readonly Collection[]} {
    if (!this._collectionsByInstitutionUri) {
      this.indexCollections();
    }
    return IndexedDataset.requireNotNullish(this._collectionsByInstitutionUri);
  }

  // @ts-ignore
  private get collectionsByUri(): {[index: string]: Collection} {
    if (!this._collectionsByUri) {
      this.indexCollections();
    }
    return IndexedDataset.requireNotNullish(this._collectionsByUri);
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

  // @ts-ignore
  private get institutionsByUri(): {[index: string]: Institution} {
    if (!this._institutionsByUri) {
      this._institutionsByUri = IndexedDataset.indexModelsByUri(this.dataset.institutions);
    }
    return this._institutionsByUri;
  }

  // @ts-ignore
  private get licensesByUri(): {[index: string]: License} {
    if (!this._licensesByUri) {
      this._licensesByUri = IndexedDataset.indexModelsByUri(this.dataset.licenses);
    }
    return this._licensesByUri;
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

  // @ts-ignore
  private get rightsStatementsByUri(): {[index: string]: RightsStatement} {
    if (!this._rightsStatementsByUri) {
      this._rightsStatementsByUri = IndexedDataset.indexModelsByUri(this.dataset.rightsStatements);
    }
    return this._rightsStatementsByUri;
  }
}
