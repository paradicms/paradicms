import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("Concept", () => {
  const sut = testModelSet.conceptByIri(
    "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
  );

  it("should get the prefLabel", () => {
    expect(sut.prefLabel).to.not.be.empty;
  });

  it("should get the value", () => {
    expect(sut.value.value).to.not.be.empty;
  });

  it("should get associated images", () => {
    expect(sut.images).to.not.be.empty;
  });

  it("should get a thumbnail from the associated images", () => {
    expect(sut.thumbnail({targetDimensions: {height: 200, width: 200}})).to.not
      .be.null;
  });
});
