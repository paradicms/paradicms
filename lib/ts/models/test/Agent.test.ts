import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "@paradicms/test";
import {parseIntoDataset} from "@paradicms/rdf";

describe("Agent", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).personByUri(
    "http://example.com/person4"
  );

  it("should get the agent's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.originalImages).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  });

  it("should get the agent's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the agent's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should call the agent's .toString()", () => {
    expect(sut.toString()).to.eq(sut.name);
  });

  it("should get the agent's Wikidata concept URI", () => {
    expect(sut.wikidataConceptUri).to.eq(
      "http://www.wikidata.org/entity/Q7251"
    );
  });

  it("should get the agent's Wikipedia URL", () => {
    expect(sut.wikipediaUrl).to.eq("http://en.wikipedia.org/wiki/Alan_Turing");
  });

  it("should get the agent's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
