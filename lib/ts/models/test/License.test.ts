import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "./testDataTrig";
import {parseIntoDataset} from "@paradicms/rdf";

describe("License", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).licenses[0];

  it("should get the license's identifier", () => {
    expect(sut.identifier).to.not.be.empty;
  });

  it("should get the license's title", () => {
    expect(sut.title).to.not.be.empty;
  });

  it("should get the license's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });

  it("should return the title from .toString()", () => {
    expect(sut.toString()).to.eq(sut.title);
  });
});
