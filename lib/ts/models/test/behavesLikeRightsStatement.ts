import {expect} from "chai";
import {RightsStatement} from "../src";
import {it} from "mocha";

export const behavesLikeRightsStatement = (
  rightsStatement: RightsStatement
) => {
  it("should get the statement's label", () => {
    expect(rightsStatement.label).to.not.be.empty;
  });
};
