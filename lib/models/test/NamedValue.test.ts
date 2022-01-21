import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("NamedValue", () => {
  const dataset = Dataset.parse(testDataTrig);
  const sut = dataset.namedValuesByPropertyUri(
    dataset.namedValues[0].propertyUris[0]
  )[0];

  it("should get the title", () => {
    expect(sut.title).to.not.be.empty;
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
