import {Dataset, DatasetCore} from "@rdfjs/types";
import {CachingModelSet} from "./CachingModelSet";
import {CmsModelReader} from "./CmsModelReader";
import {datasetCoreToDataset} from "@paradicms/rdf";

export class ModelSetFactory {
  static fromDataset(dataset: Dataset) {
    return new CachingModelSet([new CmsModelReader(dataset)]);
  }

  static fromDatasetCore(datasetCore: DatasetCore) {
    return ModelSetFactory.fromDataset(datasetCoreToDataset(datasetCore));
  }
}
