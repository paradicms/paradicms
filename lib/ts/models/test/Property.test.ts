import {expect} from "chai";
import {ModelSet} from "../src";
import {syntheticData} from "@paradicms/test";

describe("Property", () => {
  const sut = ModelSet.fromDatasetCore(syntheticData).properties[0];

  it("should get the label", () => {
    expect(sut.label).to.not.be.empty;
  });

  it("should get the range", () => {
    expect(sut.range).to.not.be.null;
  });

  it("should get the range values", () => {
    expect(sut.rangeValues).to.not.be.empty;
  });
});
