import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {Dataset} from "../src";

describe("JoinedPropertyValueDefinition", () => {
  const propertyDefinition = new Dataset(
    testDatasetTtl
  ).propertyDefinitionByUri(
    testDatasetTtl.propertyValueDefinitions[0].propertyUris[0]
  )!;
  const sut = JoinedDataset.fromDataset(testDatasetTtl).propertyDefinitionByUri(
    propertyDefinition.uri
  )!.values[0];

  it("should get the value", () => {
    expect(sut.value.value.toString()).to.not.be.empty;
  });

  it("should get associated images", () => {
    expect(sut.images).to.not.be.empty;
  });

  it("should get a thumbnail from the associated images", () => {
    expect(sut.thumbnail({targetDimensions: {height: 200, width: 200}})).to.not
      .be.null;
  });
});
