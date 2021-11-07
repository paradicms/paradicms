import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTtl} from "./testDataTtl";

describe("PropertyDefinition", () => {
  const dataset = Dataset.parse(testDataTrig);
  const sut = dataset.propertyDefinitionByUri(
    dataset.propertyValueDefinitions[0].propertyUris[0]
  )!;

  it("should get the label", () => {
    expect(sut.label!).to.not.be.empty;
  });

  it("should get the URI", () => {
    expect(sut.uri).to.not.be.empty;
  });

  it("should get associated values", () => {
    expect(sut.values).to.not.be.empty;
  });
});
