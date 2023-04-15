import {datasetCoreToDataset} from "@paradicms/rdf";
import {CachingModelSet} from "./CachingModelSet";
import {Dataset, DatasetCore} from "@rdfjs/types";
import {CmsModelReader} from "./CmsModelReader";

export class DatasetBackedModelSet extends CachingModelSet {
  constructor(readonly dataset: Dataset) {
    super([new CmsModelReader(dataset)]);
  }

  static fromDataset(dataset: Dataset) {
    return new DatasetBackedModelSet(dataset);
  }

  static fromDatasetCore(datasetCore: DatasetCore) {
    return DatasetBackedModelSet.fromDataset(datasetCoreToDataset(datasetCore));
  }

  override toRdf(): Dataset {
    return this.dataset;
  }
}
