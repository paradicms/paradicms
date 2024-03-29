import {expect} from "chai";
import {RightsStatement} from "../src";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";

export const behavesLikeRightsStatement = (
  rightsStatement: RightsStatement
) => {
  it("should get the statement's label", () => {
    expect(rightsStatement.label).to.not.be.empty;
  });

  behavesLikeModel(rightsStatement);
};
