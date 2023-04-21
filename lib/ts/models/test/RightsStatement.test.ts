import {expect} from "chai";
import {testModelSet} from "./testModelSet";

describe("RightsStatement", () => {
  const sut = testModelSet.rightsStatementByUri(
    "http://rightsstatements.org/vocab/InC-EDU/1.0/"
  );

  // it("should get the statement's definition", () => {
  //   expect(sut.definition).to.not.be.empty;
  // });

  // it("should get the statement's description", () => {
  //   expect(sut.description).to.not.be.empty;
  // });

  // it("should get the statement's identifier", () => {
  //   expect(sut.identifier).to.not.be.empty;
  // });

  it("should get the statement's label", () => {
    expect(sut.label).to.not.be.empty;
  });
});
