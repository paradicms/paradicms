import {describe} from "mocha";
import {behavesLikePropertyGroup} from "../behavesLikePropertyGroup";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
// import {CmsPropertyGroup} from "../../src/cms/CmsPropertyGroup";
import {CmsProperty} from "../../src/cms/CmsProperty";

describe("CmsPropertyGroup", () => {
  const propertyGroup = requireNonNull(
    testModelSet.propertyGroupByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:property_group"
    )
  );

  before(() => {
    expect(propertyGroup).to.be.instanceof(CmsProperty);
  });

  behavesLikePropertyGroup(propertyGroup);
});
