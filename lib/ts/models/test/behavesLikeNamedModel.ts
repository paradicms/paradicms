import {NamedModel} from "../src";
import {it} from "mocha";
import {expect} from "chai";
import {behavesLikeModel} from "./behavesLikeModel";

export const behavesLikeNamedModel = (namedModel: NamedModel) => {
  it("should have only IRI identifiers", () => {
    expect(namedModel.identifiers).not.to.be.empty;
    expect(namedModel.iris).not.to.be.empty;
    expect(namedModel.iris).to.have.length(namedModel.identifiers.length);
  });

  behavesLikeModel(namedModel);
};
