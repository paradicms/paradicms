import {IndexedDataset} from "./IndexedDataset";
import {Dataset} from "./Dataset";
import {Image} from "./Image";
import {JoinedDataset} from "./JoinedDataset";
import {Rights} from "./Rights";
import {Property} from "./Property";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {ObjectJoinSelector} from "./ObjectJoinSelector";
import {Collection} from "./Collection";
import {Object} from "./Object";
import {emptyDataset} from "./emptyDataset";
import {datasetFromPartial} from "./datasetFromPartial";
import {JoinedRights} from "./JoinedRights";

/**
 * Subset a Dataset to reduce the amount of data passed between getStaticProps and the component.
 *
 * Re: join selectors. A caller can select which connected models to include in a Dataset.
 * For example, return a collection's institution along with the collection.
 * An undefined joinSelector means don't return any connected models.
 * An empty joinSelector ({}) means return the connected models themselves but none of their connected models (i.e., no recursion).
 * For example, a joinSelector on Institution with collections: {} will return all of the Collection instances associated with that Institution,
 * but no models connected to the Collections (i.e., their Objects).
 */
export class DataSubsetter {
  private readonly completeJoinedDataset: JoinedDataset;

  constructor(private readonly completeIndexedDataset: IndexedDataset) {
    this.completeJoinedDataset = new JoinedDataset(completeIndexedDataset);
  }

  collectionDataset(
    collectionUri: string,
    joinSelector?: CollectionJoinSelector
  ): Dataset {
    const collection = this.completeIndexedDataset.collectionByUri(
      collectionUri
    );

    let images: Image[] = [];
    let objects: Object[] = [];
    if (joinSelector?.thumbnail) {
      console.log("Looking for collection thumbnail");
      const thumbnailImage = this.completeJoinedDataset
        .collectionByUri(collectionUri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        images.push(thumbnailImage.asImage);
        if (thumbnailImage.asImage.depictsUri !== collectionUri) {
          // The thumbnail either depicts the collection or one of the collection's objects.
          // If the latter case we need to include the object in the dataset.
          objects.push(
            this.completeIndexedDataset.objectByUri(
              thumbnailImage.asImage.depictsUri
            )
          );
        }
      }
    }

    const collectionDataset = datasetFromPartial({
      collections: [collection],
      images,
      objects,
    });

    const datasets: Dataset[] = [collectionDataset];

    if (joinSelector?.institution) {
      datasets.push(
        this.institutionDataset(
          collection.institutionUri,
          joinSelector.institution
        )
      );
    }

    if (joinSelector?.objects) {
      datasets.push(
        this.objectsDataset(
          this.completeIndexedDataset
            .collectionObjects(collectionUri)
            .map(object => object.uri),
          joinSelector.objects
        )
      );
    }

    return DataSubsetter.mergeDatasets(datasets);
  }

  collectionsDataset(
    collectionUris: readonly string[],
    joinSelector?: CollectionJoinSelector
  ): Dataset {
    if (collectionUris.length === 0) {
      return emptyDataset;
    } else if (collectionUris.length === 1) {
      return this.collectionDataset(collectionUris[0], joinSelector);
    } else {
      return DataSubsetter.mergeDatasets(
        collectionUris.map(collectionUri =>
          this.collectionDataset(collectionUri, joinSelector)
        )
      );
    }
  }

  static fromDataset(dataset: Dataset) {
    return new DataSubsetter(new IndexedDataset(dataset));
  }

  institutionDataset(
    institutionUri: string,
    joinSelector?: InstitutionJoinSelector
  ): Dataset {
    const institution = this.completeIndexedDataset.institutionByUri(
      institutionUri
    );

    let collections: Collection[] = [];
    let images: Image[] = [];
    let objects: Object[] = [];
    if (joinSelector?.thumbnail) {
      const thumbnailImage = this.completeJoinedDataset
        .institutionByUri(institutionUri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        images.push(thumbnailImage.asImage);
        if (thumbnailImage.asImage.depictsUri !== institutionUri) {
          // The thumbnail either depicts the institution, one of the institution's collections, or one of the institution's objects.
          // In the latter cases we need to include the depicted collection or object
          // TODO: this should call an IndexedDataset.modelByUri(depictsUri), then use the NamedModel discriminated union to include the model in the right array
          try {
            objects.push(
              this.completeIndexedDataset.objectByUri(
                thumbnailImage.asImage.depictsUri
              )
            );
          } catch (e) {
            collections.push(
              this.completeIndexedDataset.collectionByUri(
                thumbnailImage.asImage.depictsUri
              )
            );
          }
        }
      }
    }

    const institutionDataset = datasetFromPartial({
      collections,
      images,
      institutions: [institution],
      objects,
    });

    const datasets: Dataset[] = [institutionDataset];

    if (joinSelector?.collections) {
      datasets.push(
        this.collectionsDataset(
          this.completeIndexedDataset
            .institutionCollections(institutionUri)
            .map(collection => collection.uri),
          joinSelector.collections
        )
      );
    }

    if (joinSelector?.objects) {
      datasets.push(
        this.objectsDataset(
          this.completeIndexedDataset
            .institutionObjects(institutionUri)
            .map(object => object.uri),
          joinSelector.objects
        )
      );
    }

    if (joinSelector?.rights && institution.rights) {
      datasets.push(this.rightsDataset(institution.rights));
    }

    return DataSubsetter.mergeDatasets(datasets);
  }

  institutionsDataset(
    institutionUris: readonly string[],
    joinSelector?: InstitutionJoinSelector
  ): Dataset {
    if (institutionUris.length === 0) {
      return emptyDataset;
    } else if (institutionUris.length === 1) {
      return this.institutionDataset(institutionUris[0], joinSelector);
    } else {
      return DataSubsetter.mergeDatasets(
        institutionUris.map(institutionUri =>
          this.institutionDataset(institutionUri, joinSelector)
        )
      );
    }
  }

  private static mergeDatasets(datasets: readonly Dataset[]): Dataset {
    if (datasets.length === 0) {
      return emptyDataset;
    } else if (datasets.length === 1) {
      return datasets[0];
    }

    const deduplicateModels = <
      ModelT extends {institutionUri?: string; uri: string}
    >(
      datasetModelsGetter: (dataset: Dataset) => readonly ModelT[]
    ) => {
      const mergedModelsByUri: {[index: string]: ModelT} = {};
      for (const dataset of datasets) {
        for (const model of datasetModelsGetter(dataset)) {
          const existingModel = mergedModelsByUri[model.uri];
          if (existingModel) {
            // Simple check on the invariant that collection, object, et al. URIs aren't reused between institutions
            // This doesn't do a deep duplication check.
            if (existingModel.institutionUri !== model.institutionUri) {
              throw new EvalError(
                `models with the same URI ${model.uri} but different institution URIs (${existingModel.institutionUri} vs. ${model.institutionUri}`
              );
            }
          } else {
            mergedModelsByUri[model.uri] = model;
          }
        }
      }
      return Object.keys(mergedModelsByUri).map(
        modelUri => mergedModelsByUri[modelUri]
      );
    };

    return {
      collections: deduplicateModels(dataset => dataset.collections),
      images: deduplicateModels(dataset => dataset.images),
      institutions: deduplicateModels(dataset => dataset.institutions),
      licenses: deduplicateModels(dataset => dataset.licenses),
      objects: deduplicateModels(dataset => dataset.objects),
      propertyDefinitions: deduplicateModels(
        dataset => dataset.propertyDefinitions
      ),
      propertyValueDefinitions: deduplicateModels(
        dataset => dataset.propertyValueDefinitions
      ),
      rightsStatements: deduplicateModels(dataset => dataset.rightsStatements),
    };
  }

  objectDataset(objectUri: string, joinSelector?: ObjectJoinSelector): Dataset {
    const object = this.completeIndexedDataset.objectByUri(objectUri);

    let images: readonly Image[];
    if (joinSelector?.allImages) {
      images = this.completeIndexedDataset.depictingImages(objectUri);
    } else if (joinSelector?.thumbnail) {
      const thumbnailImage = this.completeJoinedDataset
        .objectByUri(objectUri)
        .thumbnail(joinSelector.thumbnail);
      if (thumbnailImage) {
        images = [thumbnailImage.asImage];
      } else {
        images = [];
      }
    } else {
      images = [];
    }

    const objectDataset: Dataset = datasetFromPartial({
      images,
      objects: [object],
    });

    const datasets: Dataset[] = [objectDataset];

    if (joinSelector?.collections) {
      datasets.push(
        this.collectionsDataset(object.collectionUris, joinSelector.collections)
      );
    }

    if (joinSelector?.institution) {
      datasets.push(
        this.institutionDataset(object.institutionUri, joinSelector.institution)
      );
    }

    if (object.properties && object.properties.length > 0) {
      datasets.push(this.propertiesDataset(object.properties));
    }

    if (object.rights) {
      datasets.push(this.rightsDataset(object.rights));
    }

    return DataSubsetter.mergeDatasets(datasets);
  }

  objectsDataset(
    objectUris: readonly string[],
    joinSelector?: ObjectJoinSelector
  ): Dataset {
    if (objectUris.length === 0) {
      return emptyDataset;
    } else if (objectUris.length === 1) {
      return this.objectDataset(objectUris[0], joinSelector);
    } else {
      return DataSubsetter.mergeDatasets(
        objectUris.map(objectUri => this.objectDataset(objectUri, joinSelector))
      );
    }
  }

  private propertiesDataset(properties: readonly Property[]): Dataset {
    return datasetFromPartial({
      propertyDefinitions: this.completeIndexedDataset.propertyDefinitions,
    });
  }

  private rightsDataset(rights: Rights): Dataset {
    const joinedRights = new JoinedRights(this.completeJoinedDataset, rights);
    const license = joinedRights.license;
    const rightsStatement = joinedRights.statement;

    return datasetFromPartial({
      licenses: license && typeof license !== "string" ? [license] : undefined,
      rightsStatements:
        rightsStatement && typeof rightsStatement !== "string"
          ? [rightsStatement]
          : undefined,
    });
  }
}
