import {fastRdfStringToDataset, Store} from "@paradicms/rdf";
import {DatasetCore} from "@rdfjs/types";
import {SameAsModelReader} from "./same-as/SameAsModelReader";
import {CmsModelReader} from "./cms/CmsModelReader";
import {WikidataModelReader} from "./wikidata/WikidataModelReader";
import {DatasetBackedModelSet} from "./DatasetBackedModelSet";
import {ModelSet} from "./ModelSet";
import {CreativeCommonsModelReader} from "./creative-commons/CreativeCommonsModelReader";
import {SchemaModelReader} from "./schema/SchemaModelReader";
import {registerResourceBackedModelFactories} from "./registerResourceBackedModelFactories";
import {SkosModelReader} from "./skos/SkosModelReader";
import {FoafModelReader} from "./foaf/FoafModelReader";
import {RdfModelReader} from "./rdf/RdfModelReader";
import {DcModelReader} from "./dc/DcModelReader";
import {LinkedArtModelReader} from "./linked-art/LinkedArtModelReader";
import * as jsonld from "jsonld";

export class ModelSetFactory {
  static async fromJsonLd(jsonLd: any): Promise<ModelSet> {
    const quads: any = await jsonld.toRDF(jsonLd);
    const dataset = new Store();
    dataset.addQuads(quads);
    return ModelSetFactory.fromDataset(dataset);
  }

  static fromFastRdfString(fastRdfString: string): ModelSet {
    return ModelSetFactory.fromDataset(fastRdfStringToDataset(fastRdfString));
  }

  static fromDataset(dataset: DatasetCore): ModelSet {
    return new DatasetBackedModelSet(
      dataset,
      new SameAsModelReader([
        new CmsModelReader(dataset),
        new CreativeCommonsModelReader(dataset),
        new DcModelReader(dataset),
        new FoafModelReader(dataset),
        new LinkedArtModelReader(dataset),
        new RdfModelReader(dataset),
        new SchemaModelReader(dataset),
        new SkosModelReader(dataset),
        new WikidataModelReader(dataset),
      ])
    );
  }
}

registerResourceBackedModelFactories();
