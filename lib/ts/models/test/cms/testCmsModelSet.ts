import {DatasetBackedModelSet} from "../../src/DatasetBackedModelSet";
import {syntheticData} from "@paradicms/test";
import {CmsModelReader} from "../../src/cms/CmsModelReader";

export const testCmsModelSet = new DatasetBackedModelSet(
  syntheticData,
  new CmsModelReader(syntheticData)
);
