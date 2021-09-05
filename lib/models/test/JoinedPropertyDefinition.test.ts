import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {Dataset} from "../src";

describe("JoinedPropertyDefinition", () => {
  const propertyDefinition = new Dataset(
    testDatasetTtl
  ).propertyDefinitionByUri(
    testDatasetTtl.propertyValueDefinitions[0].propertyUris[0]
  )!;
  const sut = JoinedDataset.fromDataset(testDatasetTtl).propertyDefinitionByUri(
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
