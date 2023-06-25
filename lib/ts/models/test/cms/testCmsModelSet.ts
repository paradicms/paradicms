import {DatasetBackedModelSet} from "../../src/DatasetBackedModelSet";
import {syntheticData} from "@paradicms/test";
import {CmsModelReader} from "../../src/cms/CmsModelReader";
import {ConcatenatingModelReader} from "../../src/ConcatenatingModelReader";
import {CreativeCommonsModelReader} from "../../src/creative-commons/CreativeCommonsModelReader";
import {RightsStatementsDotOrgModelReader} from "../../src/rights-statements-dot-org/RightsStatementsDotOrgModelReader";

export const testCmsModelSet = new DatasetBackedModelSet(
  syntheticData,
  new ConcatenatingModelReader([
    new CmsModelReader(syntheticData),
    new CreativeCommonsModelReader(syntheticData),
    new RightsStatementsDotOrgModelReader(syntheticData),
  ])
);
