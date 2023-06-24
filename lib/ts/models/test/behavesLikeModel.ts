import {Model} from "../src";
import {it} from "mocha";
import {expect} from "chai";

export const behavesLikeModel = (model: Model) => {
  it("should have at least one identifier", () => {
    expect(model.identifiers).not.to.be.empty;
  });

  it("should have a non-empty key", () => {
    expect(model.key).not.to.be.empty;
  });
};
