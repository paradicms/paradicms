import {IndexedDataset} from "./IndexedDataset";
import {Dataset} from "./Dataset";

export class DataSubsetter {
  constructor(private readonly completeDataset: IndexedDataset) {
  }

  collectionDataset(collectionUri: string): Dataset {
    // Collection is connected to institution, which connects to all other collection in the institution, so the collection dataset is equivalent to its institution's dataset
    const collection = this.completeDataset.collectionByUri(collectionUri);
    return this.institutionDataset(collection.institutionUri);
  }

  private get emptyDataset(): Dataset {
    return {
      collections: [],
      images: [],
      institutions: [],
      licenses: [],
      objects: [],
      propertyDefinitions: [],
      rightsStatements: [],
    };
  }

  institutionDataset(institutionUri: string): Dataset {
    return {
      collections: this.completeDataset.institutionCollections(institutionUri),
      images: this.completeDataset.institutionImages(institutionUri),
      institutions: [this.completeDataset.institutionByUri(institutionUri)],
      licenses: this.completeDataset.licenses,
      objects: this.completeDataset.institutionObjects(institutionUri),
      propertyDefinitions: this.completeDataset.propertyDefinitions,
      rightsStatements: this.completeDataset.rightsStatements,
    };
  }

  private static mergeDatasets(datasets: readonly Dataset[]): Dataset {
    const modelSet = <ModelT extends {institutionUri?: string; uri: string}>(datasetModelsGetter: (dataset: Dataset) => readonly ModelT[]) => {
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
    }

    return {
      collections: modelSet(dataset => dataset.collections),
      images: modelSet(dataset => dataset.images),
      institutions: modelSet(dataset => dataset.institutions),
      licenses: modelSet(dataset => dataset.licenses),
      objects: modelSet(dataset => dataset.objects),
      propertyDefinitions: modelSet(dataset => dataset.propertyDefinitions),
      rightsStatements: modelSet(dataset => dataset.rightsStatements),
    };
  }

  objectDataset(objectUri: string): Dataset {
    // Object is connected to institution, which connects to all other objects in the institution, so the object dataset is equivalent to its institution's dataset
    const object = this.completeDataset.objectByUri(objectUri);
    return this.institutionDataset(object.institutionUri);
  }

  objectsDataset(objectUris: readonly string[]): Dataset {
    if (objectUris.length === 0) {
      return this.emptyDataset;
    } else if (objectUris.length === 1) {
      return this.objectDataset(objectUris[0]);
    }

    const objects = objectUris.map(objectUri => this.completeDataset.objectByUri(objectUri));
    const institutionUris = new Set(objects.map(object => object.institutionUri));
    if (institutionUris.size === 1) {
      // All objects belong to the same institution
      for (const institutionUri of institutionUris) {
        return this.institutionDataset(institutionUri);
      }
    }

    // Objects belong to multiple institutions
    return DataSubsetter.mergeDatasets([...institutionUris].map(institutionUri => this.institutionDataset(institutionUri)));
  }
}