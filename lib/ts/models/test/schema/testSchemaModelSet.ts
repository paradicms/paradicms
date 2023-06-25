import {DatasetBackedModelSet} from "../../src/DatasetBackedModelSet";
import {syntheticData} from "@paradicms/test";
import {ConcatenatingModelReader} from "../../src/ConcatenatingModelReader";
import {CreativeCommonsModelReader} from "../../src/creative-commons/CreativeCommonsModelReader";
import {RightsStatementsDotOrgModelReader} from "../../src/rights-statements-dot-org/RightsStatementsDotOrgModelReader";
import {SchemaModelReader} from "../../src/schema/SchemaModelReader";
import {registerResourceBackedModelFactories} from "../../src/registerResourceBackedModelFactories";

export const testSchemaModelSet = new DatasetBackedModelSet(
  syntheticData,
  new ConcatenatingModelReader([
    new SchemaModelReader(syntheticData),
    new CreativeCommonsModelReader(syntheticData),
    new RightsStatementsDotOrgModelReader(syntheticData),
  ])
);

registerResourceBackedModelFactories();
