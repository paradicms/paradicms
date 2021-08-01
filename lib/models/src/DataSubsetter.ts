import {IndexedDataset} from "./IndexedDataset";
import {Dataset} from "./Dataset";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";
import {JoinedDataset} from "./JoinedDataset";
import {Rights} from "./Rights";
import {Property} from "./Property";

// A caller can select which connected models to include in a Dataset.
// For example, return a collection's institution along with the collection.
// An undefined selector means don't return any connected models.
// An empty selector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
// For example, a selector on Institution with collections: {} will return all of the Collection instances associated with that Institution,
// but no models connected to the Collections (i.e., their Objects).
interface CollectionDataSelector {
  // Return the Institution referred to by the Collection's institutionUri.
  institution?: InstitutionDataSelector;
  // Return all objects that have a collectionUri referring to this Collection.
  objects?: ObjectDataSelector;
  // Return a single thumbnail Image for this Collection.
  thumbnail?: ThumbnailSelector;
}

interface InstitutionDataSelector {
  // Return all Collections whose institutionUri refers to this Institution.
  collections?: CollectionDataSelector;
  // Return all Objects whose institutionUri refers to this Institution.
  objects?: ObjectDataSelector;
  // Return a single thumbnail Image for this Institution.
  thumbnail?: ThumbnailSelector;
}

interface ObjectDataSelector {
  // Return all Images that depict this Object.
  allImages?: boolean;
  // Return all collections referred to by this Object's collectionUris.
  collections?: CollectionDataSelector;
  // Return the Institution referred to by this Object's institutionUri.
  institution?: InstitutionDataSelector;
  // Return a single thumbnail Image for this Object.
  thumbnail?: ThumbnailSelector;
}

export class DataSubsetter {
  constructor(private readonly completeDataset: IndexedDataset) {
  }

  collectionDataset(collectionUri: string, selector: CollectionDataSelector): Dataset {
    const collection = this.completeDataset.collectionByUri(collectionUri);

    let images: Image[] = [];
    if (selector.thumbnail) {
      const thumbnailImage = new JoinedDataset(this.completeDataset).collectionByUri(collectionUri).thumbnail(selector.thumbnail);
      if (thumbnailImage) {
        images.push(thumbnailImage.asImage);
      }
    }

    const collectionDataset = DataSubsetter.datasetFromPartial({
      collections: [collection],
      images,
      propertyDefinitions: this.completeDataset.propertyDefinitions,
    });

    const datasets: Dataset[] = [collectionDataset];

    if (selector.institution) {
      datasets.push(this.institutionDataset(collection.institutionUri, selector.institution));
    }

    if (selector.objects) {
      datasets.push(this.objectsDataset(this.completeDataset.collectionObjects(collectionUri).map(object => object.uri), selector.objects));
    }

    return DataSubsetter.mergeDatasets(datasets);
  }

  collectionsDataset(collectionUris: readonly string[], selector: CollectionDataSelector): Dataset {
    if (collectionUris.length === 0) {
      return DataSubsetter.emptyDataset;
    } else if (collectionUris.length === 1) {
      return this.collectionDataset(collectionUris[0], selector);
    } else {
      return DataSubsetter.mergeDatasets(collectionUris.map(collectionUri => this.collectionDataset(collectionUri, selector)));
    }
  }

  private static get emptyDataset() {
    return DataSubsetter.datasetFromPartial({});
  }

  private static datasetFromPartial(partialDataset: Partial<Dataset>): Dataset {
    return {
      collections: partialDataset.collections ?? [],
      images: partialDataset.images ?? [],
      institutions: partialDataset.institutions ?? [],
      licenses: partialDataset.licenses ?? [],
      objects: partialDataset.objects ?? [],
      propertyDefinitions: partialDataset.propertyDefinitions ?? [],
      rightsStatements: partialDataset.rightsStatements ?? [],
    };
  }

  institutionDataset(institutionUri: string, selector: InstitutionDataSelector): Dataset {
    const institution = this.completeDataset.institutionByUri(institutionUri);

    let images: Image[] = [];
    if (selector.thumbnail) {
      const thumbnailImage = new JoinedDataset(this.completeDataset).institutionByUri(institutionUri).thumbnail(selector.thumbnail);
      if (thumbnailImage) {
        images.push(thumbnailImage.asImage);
      }
    }

    const institutionDataset = DataSubsetter.datasetFromPartial({
      images,
      institutions: [institution],
    });

    const datasets: Dataset[] = [institutionDataset];

    if (institution.rights) {
      datasets.push(this.rightsDataset(institution.rights));
    }

    if (selector.collections) {
      datasets.push(this.collectionsDataset(this.completeDataset.institutionCollections(institutionUri).map(collection => collection.uri), selector.collections));
    }

    if (selector.objects) {
      datasets.push(this.objectsDataset(this.completeDataset.institutionObjects(institutionUri).map(object => object.uri), selector.objects));
    }

    return DataSubsetter.mergeDatasets(datasets);
  }

  institutionsDataset(institutionUris: readonly string[], selector: InstitutionDataSelector): Dataset {
    if (institutionUris.length === 0) {
      return DataSubsetter.emptyDataset;
    } else if (institutionUris.length === 1) {
      return this.institutionDataset(institutionUris[0], selector);
    } else {
      return DataSubsetter.mergeDatasets(institutionUris.map(institutionUri => this.institutionDataset(institutionUri, selector)));
    }
  }

  private static mergeDatasets(datasets: readonly Dataset[]): Dataset {
    if (datasets.length === 0) {
      return DataSubsetter.emptyDataset;
    } else if (datasets.length === 1) {
      return datasets[0];
    }

    const deduplicateModels = <ModelT extends {institutionUri?: string; uri: string}>(datasetModelsGetter: (dataset: Dataset) => readonly ModelT[]) => {
      const mergedModelsByUri: {[index: string]: ModelT} = {};
      for (const dataset of datasets) {
        for (const model of datasetModelsGetter(dataset)) {
          const existingModel = mergedModelsByUri[model.uri];
          if (existingModel) {
            // Simple check on the invariant that collection, object, et al. URIs aren't reused between institutions
            // This doesn't do a deep duplication check.
            if (existingModel.institutionUri !== model.institutionUri) {
              throw new EvalError(`models with the same URI ${model.uri} but different institution URIs (${existingModel.institutionUri} vs. ${model.institutionUri}`);
            }
          } else {
            mergedModelsByUri[model.uri] = model;
          }
        }
      }
      return Object.keys(mergedModelsByUri).map(modelUri => mergedModelsByUri[modelUri]);
    };

    return {
      collections: deduplicateModels(dataset => dataset.collections),
      images: deduplicateModels(dataset => dataset.images),
      institutions: deduplicateModels(dataset => dataset.institutions),
      licenses: deduplicateModels(dataset => dataset.licenses),
      objects: deduplicateModels(dataset => dataset.objects),
      propertyDefinitions: deduplicateModels(dataset => dataset.propertyDefinitions),
      rightsStatements: deduplicateModels(dataset => dataset.rightsStatements),
    };
  }

  objectDataset(objectUri: string, selector: ObjectDataSelector): Dataset {
    const object = this.completeDataset.objectByUri(objectUri);

    let images: readonly Image[];
    if (selector.allImages) {
      images = this.completeDataset.depictingImages(objectUri);
    } else if (selector.thumbnail) {
      const thumbnailImage = new JoinedDataset(this.completeDataset).objectByUri(objectUri).thumbnail(selector.thumbnail);
      if (thumbnailImage) {
        images = [thumbnailImage.asImage];
      } else {
        images = [];
      }
    } else {
      images = [];
    }

    const objectDataset: Dataset = DataSubsetter.datasetFromPartial({
      images,
      objects: [object],
    });

    const datasets: Dataset[] = [objectDataset];

    if (selector.collections) {
      datasets.push(this.collectionsDataset(object.collectionUris, selector.collections));
    }

    if (selector.institution) {
      datasets.push(this.institutionDataset(object.institutionUri, selector.institution));
    }

    if (object.properties && object.properties.length > 0) {
      datasets.push(this.propertiesDataset(object.properties));
    }

    if (object.rights) {
      datasets.push(this.rightsDataset(object.rights));
    }

    return DataSubsetter.mergeDatasets(datasets);
  }

  objectsDataset(objectUris: readonly string[], selector: ObjectDataSelector): Dataset {
    if (objectUris.length === 0) {
      return DataSubsetter.emptyDataset;
    } else if (objectUris.length === 1) {
      return this.objectDataset(objectUris[0], selector);
    } else {
      return DataSubsetter.mergeDatasets(objectUris.map(objectUri => this.objectDataset(objectUri, selector)));
    }
  }

  private propertiesDataset(properties: readonly Property[]): Dataset {
    return DataSubsetter.datasetFromPartial({
      propertyDefinitions: this.completeDataset.propertyDefinitions,
    });
  }

  private rightsDataset(rights: Rights): Dataset {
    return DataSubsetter.datasetFromPartial({
      licenses: this.completeDataset.licenses,
      rightsStatements: this.completeDataset.rightsStatements,
    });
  }
}