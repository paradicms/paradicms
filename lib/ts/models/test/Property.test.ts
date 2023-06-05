import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("Property", () => {
  const sut = testModelSet.properties.find(property => property.filterable)!;

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
