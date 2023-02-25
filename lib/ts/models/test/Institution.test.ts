import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "@paradicms/test";
import {parseIntoDataset} from "@paradicms/rdf";

describe("Institution", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).institutions[0];

  it("should get the institution's collections", () => {
    expect(sut.collections).to.not.be.empty;
  });

  it("should get the institution's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the institution's thumbnail", () => {
    const thumbnail = sut.thumbnail({
      targetDimensions: {height: 200, width: 200},
    });
    expect(thumbnail).to.not.be.null;
    expect(thumbnail!.depictsUri).to.eq(sut.uri);
  });

  it("should get the institution's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
