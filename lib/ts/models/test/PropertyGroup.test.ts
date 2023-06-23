import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("PropertyGroup", () => {
  const sut = testModelSet.propertyGroupByIri(
    "urn:paradicms_etl:pipeline:synthetic_data:property_group"
  )!;

  it("should get the label", () => {
    expect(sut.label).to.not.be.empty;
  });

  it("should get the properties", () => {
    expect(sut.properties).to.have.length(testModelSet.properties.length);
  });
});
