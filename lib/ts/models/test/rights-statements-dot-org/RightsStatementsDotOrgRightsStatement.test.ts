import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {RightsStatementsDotOrgRightsStatement} from "../../src/rights-statements-dot-org/RightsStatementsDotOrgRightsStatement";
import {behavesLikeRightsStatement} from "../behavesLikeRightsStatement";

describe("RightsStatementsDotOrgRightsStatement", () => {
  const sut: RightsStatementsDotOrgRightsStatement = testModelSet.rightsStatementByIri(
    "http://rightsstatements.org/vocab/InC-EDU/1.0/"
  )! as RightsStatementsDotOrgRightsStatement;

  it("should get the statement's definition", () => {
    expect(sut.definition).to.not.be.empty;
  });

  it("should get the statement's description", () => {
    expect(sut.description).to.not.be.empty;
  });

  // it("should get the statement's identifier", () => {
  //   expect(sut.identifier).to.not.be.empty;
  // });

  behavesLikeRightsStatement(sut);
});
