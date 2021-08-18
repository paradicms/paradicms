import {expect} from "chai";
import {testDataset} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {IndexedDataset} from "../src";

describe("JoinedPropertyValueDefinition", () => {
  const propertyDefinition = new IndexedDataset(
    testDataset
  ).propertyDefinitionByUri(
    testDataset.propertyValueDefinitions[0].propertyUri
  )!;
  const sut = JoinedDataset.fromDataset(testDataset).propertyDefinitionByUri(
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
