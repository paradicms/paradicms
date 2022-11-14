import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "./testDataTrig";
import {parseIntoDataset} from "@paradicms/rdf";

describe("Person", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).personByUri(
    "http://example.com/person4"
  );

  it("should get the person's family name", () => {
    expect(sut.familyName).to.not.be.empty;
  });

  it("should get the person's given name", () => {
    expect(sut.givenName).to.not.be.empty;
  });

  it("should get the person's sort name", () => {
    expect(sut.sortName).to.not.be.empty;
  });
});
