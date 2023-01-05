import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "@paradicms/test";
import {parseIntoDataset} from "@paradicms/rdf";

describe("RightsStatement", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).rightsStatements[0];

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

  it("should return the statement's prefLabel from .toString()", () => {
    expect(sut.toString()).to.eq(sut.prefLabel);
  });
});
