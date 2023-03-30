import {expect} from "chai";
import {ModelSet} from "../src";
import {syntheticData} from "@paradicms/test";

describe("PropertyGroup", () => {
  const modelSet = ModelSet.fromDatasetCore(syntheticData);
  const sut = modelSet.propertyGroups[0];

  it("should get the label", () => {
    expect(sut.label).to.not.be.empty;
  });

  it("should get the properties", () => {
    expect(sut.properties).to.have.length(modelSet.properties.length);
  });
});
