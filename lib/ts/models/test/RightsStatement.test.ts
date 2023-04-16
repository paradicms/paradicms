import {expect} from "chai";
import {testModelSet} from "./testModelSet";

describe("RightsStatement", () => {
  const sut = testModelSet.rightsStatements[0];

  it("should get the statement's definition", () => {
    expect(sut.definition).to.not.be.empty;
  });

  it("should get the statement's description", () => {
    expect(sut.description).to.not.be.empty;
  });

  it("should get the statement's identifier", () => {
    expect(sut.identifier).to.not.be.empty;
  });

  it("should get the statement's prefLabel", () => {
    expect(sut.prefLabel).to.not.be.empty;
  });
});
