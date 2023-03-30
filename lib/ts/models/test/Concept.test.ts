import {expect} from "chai";
import {ModelSet} from "../src";
import {syntheticData} from "@paradicms/test";

describe("Concept", () => {
  const modelSet = ModelSet.fromDatasetCore(syntheticData);
  const sut = modelSet.concepts[0];

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
