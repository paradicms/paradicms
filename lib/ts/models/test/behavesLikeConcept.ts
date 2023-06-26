import {expect} from "chai";
import {Concept} from "../src";
import {it} from "mocha";
import {behavesLikeNamedModel} from "./behavesLikeNamedModel";

export const behavesLikeConcept = (concept: Concept) => {
  it("should get the label", () => {
    expect(concept.label).to.not.be.empty;
  });

  it("should get the value", () => {
    expect(concept.value.value).to.not.be.empty;
  });

  it("should get associated images", () => {
    expect(concept.images).to.not.be.empty;
  });

  it("should get a thumbnail from the associated images", () => {
    expect(concept.thumbnail({targetDimensions: {height: 200, width: 200}})).to
      .not.be.null;
  });

  behavesLikeNamedModel(concept);
};
