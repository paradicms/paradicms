import {describe} from "mocha";
import {behavesLikePropertyGroup} from "../behavesLikePropertyGroup";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {CmsPropertyGroup} from "../../src/cms/CmsPropertyGroup";

describe("CmsPropertyGroup", () => {
  const propertyGroup = requireNonNull(
    testModelSet.propertyGroupByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:property_group"
    )
  );

  before(() => {
    expect(propertyGroup).to.be.instanceof(CmsPropertyGroup);
  });

  behavesLikePropertyGroup(propertyGroup);
});
