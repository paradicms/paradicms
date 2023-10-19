import {expect} from "chai";
import {it} from "mocha";
import {PropertyGroup} from "../src/PropertyGroup";
import {behavesLikeModel} from "./behavesLikeModel";
import {testModelSet} from "./testModelSet";

export const behavesLikePropertyGroup = (propertyGroup: PropertyGroup) => {
  it("should get the label", () => {
    expect(propertyGroup.label).to.not.be.empty;
  });

  it("should get the properties", () => {
    expect(propertyGroup.properties).to.have.length(
      testModelSet.properties.length
    );
  });

  behavesLikeModel(propertyGroup);
};
