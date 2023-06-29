import {fastRdfStringToDataset} from "@paradicms/rdf";
import {DatasetCore} from "@rdfjs/types";
import {SameAsModelReader} from "./same-as/SameAsModelReader";
import {CmsModelReader} from "./cms/CmsModelReader";
import {WikidataModelReader} from "./wikidata/WikidataModelReader";
import {DatasetBackedModelSet} from "./DatasetBackedModelSet";
import {ModelSet} from "./ModelSet";
import {RightsStatementsDotOrgModelReader} from "./rights-statements-dot-org/RightsStatementsDotOrgModelReader";
import {CreativeCommonsModelReader} from "./creative-commons/CreativeCommonsModelReader";
import {SchemaModelReader} from "./schema/SchemaModelReader";
import {registerResourceBackedModelFactories} from "./registerResourceBackedModelFactories";
import {SkosModelReader} from "./skos/SkosModelReader";
import {FoafModelReader} from "./foaf/FoafModelReader";
import {RdfModelReader} from "./rdf/RdfModelReader";

export class ModelSetFactory {
  static fromFastRdfString(fastRdfString: string): ModelSet {
    return ModelSetFactory.fromDataset(fastRdfStringToDataset(fastRdfString));
  }

  static fromDataset(dataset: DatasetCore): ModelSet {
    return new DatasetBackedModelSet(
      dataset,
      new SameAsModelReader([
        new CmsModelReader(dataset),
        new CreativeCommonsModelReader(dataset),
        new FoafModelReader(dataset),
        new RdfModelReader(dataset),
        new RightsStatementsDotOrgModelReader(dataset),
        new SchemaModelReader(dataset),
        new SkosModelReader(dataset),
        new WikidataModelReader(dataset),
      ])
    );
  }
}

registerResourceBackedModelFactories();
