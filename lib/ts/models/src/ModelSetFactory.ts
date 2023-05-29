import {datasetCoreToDataset, fastRdfStringToDataset} from "@paradicms/rdf";
import {Dataset, DatasetCore} from "@rdfjs/types";
import {CachingModelSet} from "./CachingModelSet";
import {CmsModelReader} from "./cms/CmsModelReader";
import {SameAsModelReader} from "./same-as/SameAsModelReader";

class DatasetBackedModelSet extends CachingModelSet {
  constructor(private readonly dataset: Dataset) {
    super(new SameAsModelReader([new CmsModelReader(dataset)]));
  }

  override toRdf(): Dataset {
    return this.dataset;
  }
}

export class ModelSetFactory {
  static fromFastRdfString(fastRdfString: string) {
    return ModelSetFactory.fromDataset(fastRdfStringToDataset(fastRdfString));
  }

  static fromDataset(dataset: Dataset) {
    return new DatasetBackedModelSet(dataset);
  }

  static fromDatasetCore(datasetCore: DatasetCore) {
    return ModelSetFactory.fromDataset(datasetCoreToDataset(datasetCore));
  }
}
