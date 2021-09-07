import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTtl} from "./testDataTtl";

describe("Property", () => {
  const dataset = Dataset.parse(testDataTtl);
  const work = dataset.works[0];
  const sut = work.properties[0];
  const definition = dataset.propertyDefinitionByUri(sut.uri)!;

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
