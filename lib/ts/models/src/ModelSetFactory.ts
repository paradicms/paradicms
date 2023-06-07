import {datasetCoreToDataset, fastRdfStringToDataset} from "@paradicms/rdf";
import {DatasetCore} from "@rdfjs/types";
import {SameAsModelReader} from "./same-as/SameAsModelReader";
import {CmsModelReader} from "./cms/CmsModelReader";
import {WikidataModelReader} from "./wikidata/WikidataModelReader";
import {DatasetBackedModelSet} from "./DatasetBackedModelSet";
import {ModelSet} from "./ModelSet";

export class ModelSetFactory {
  static fromFastRdfString(fastRdfString: string): ModelSet {
    return ModelSetFactory.fromDataset(fastRdfStringToDataset(fastRdfString));
  }

  static fromDataset(dataset: DatasetCore): ModelSet {
    return new DatasetBackedModelSet(
      dataset,
      new SameAsModelReader([
        new CmsModelReader(dataset),
        new WikidataModelReader(dataset),
      ])
    );
  }

  static fromDatasetCore(datasetCore: DatasetCore): ModelSet {
    return ModelSetFactory.fromDataset(datasetCoreToDataset(datasetCore));
  }
}
