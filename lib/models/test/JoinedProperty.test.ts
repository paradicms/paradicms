import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";
import {Dataset} from "../src";

describe("JoinedProperty", () => {
  const work = testDatasetTtl.works[0];
  const indexedTestDataset = new Dataset(testDatasetTtl);
  const sut = new JoinedDataset(indexedTestDataset).workByUri(work.uri)
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
