import {expect} from "chai";
import {testDataset} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {IndexedDataset} from "../src";

describe("JoinedProperty", () => {
  const object = testDataset.objects[0];
  const indexedTestDataset = new IndexedDataset(testDataset);
  const sut = new JoinedDataset(indexedTestDataset).objectByUri(object.uri)
    .properties[0];
  const definition = indexedTestDataset.propertyDefinitionByUri(sut.uri)!;

  it("should get the definition", () => {
    expect(sut.definition).to.not.be.null;
    expect(sut.definition!.label).to.eq(definition.label);
  });

  it("should get the URI", () => {
    expect(sut.uri).to.eq(definition.uri);
  });

  it("should get the value", () => {
    expect(sut.value.value.toString()).to.not.be.empty;
  });
});
