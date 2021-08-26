import {expect} from "chai";
import {testDataset} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {IndexedDataset} from "../src";

describe("JoinedPropertyDefinition", () => {
  const propertyDefinition = new IndexedDataset(
    testDataset
  ).propertyDefinitionByUri(
    testDataset.propertyValueDefinitions[0].propertyUris[0]
  )!;
  const sut = JoinedDataset.fromDataset(testDataset).propertyDefinitionByUri(
    propertyDefinition.uri
  )!;

  it("should get the label", () => {
    expect(sut.label!).to.not.be.empty;
  });

  it("should get the URI", () => {
    expect(sut.uri).to.eq(propertyDefinition.uri);
  });

  it("should get associated values", () => {
    expect(sut.values).to.not.be.empty;
  });
});
