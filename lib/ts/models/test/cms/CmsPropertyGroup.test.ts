import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikePropertyGroup} from "../behavesLikePropertyGroup";

describe("CmsPropertyGroup", () => {
  const propertyGroup = testModelSet.propertyGroupByIri(
    "urn:paradicms_etl:pipeline:synthetic_data:property_group"
  )!;

  behavesLikePropertyGroup(propertyGroup);
});
