import {expect} from "chai";
import {it} from "mocha";
import {Property} from "../src";
import {behavesLikeModel} from "./behavesLikeModel";
import {testModelSet} from "./testModelSet";

export const behavesLikeProperty = (property: Property) => {
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

  behavesLikeModel(property);
};
