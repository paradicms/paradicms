import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {CmsPropertyGroup} from "../../src/cms/CmsPropertyGroup";
import {behavesLikePropertyGroup} from "../behavesLikePropertyGroup";
import {testModelSet} from "../testModelSet";

describe("CmsPropertyGroup", () => {
  const propertyGroup = requireNonNull(
    testModelSet.propertyGroupByIri(
      DataFactory.namedNode(
        "urn:paradicms:etl:pipeline:synthetic_data:property_group"
      )
    )
  );

  before(() => {
    expect(propertyGroup).to.be.instanceof(CmsPropertyGroup);
  });

  behavesLikePropertyGroup(propertyGroup);
});
