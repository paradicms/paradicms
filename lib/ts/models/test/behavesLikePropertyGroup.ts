import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {it} from "mocha";
import {PropertyGroup} from "../src/PropertyGroup";

export const behavesLikePropertyGroup = (propertyGroup: PropertyGroup) => {
  it("should get the label", () => {
    expect(propertyGroup.label).to.not.be.empty;
  });

  it("should get the properties", () => {
    expect(propertyGroup.properties).to.have.length(
      testModelSet.properties.length
    );
  });
};
