import {jsonLdToDataset} from "@paradicms/rdf";
import {DatasetCore} from "@rdfjs/types";
import {JsonLd} from "jsonld/jsonld-spec";
import {ConcatenatingModelReader} from "./ConcatenatingModelReader";
import {DatasetBackedModelSet} from "./DatasetBackedModelSet";
import {ModelSet} from "./ModelSet";
import {CmsModelReader} from "./cms/CmsModelReader";
import {DcModelReader} from "./dc/DcModelReader";
import {SchemaModelReader} from "./schema/SchemaModelReader";

export class ModelSetFactory {
  static async fromJsonLd(jsonLd: JsonLd): Promise<ModelSet> {
    return ModelSetFactory.fromDataset(await jsonLdToDataset(jsonLd));
  }

  static fromDataset(dataset: DatasetCore): ModelSet {
    return new DatasetBackedModelSet(
      dataset,
      new ConcatenatingModelReader([
        new CmsModelReader(dataset),
        new DcModelReader(dataset),
        new SchemaModelReader(dataset),
      ])
    );
  }
}
