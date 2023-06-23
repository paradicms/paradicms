import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("Agent", () => {
  const sut = testModelSet.personByIri("http://example.com/person4")!;

  it("should get the agent's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  });

  it("should get the agent's label", () => {
    expect(sut.label).to.not.be.empty;
  });

  it("should get the agent's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the agent's Wikidata concept IRI", () => {
    expect(
      testModelSet.personByIri("http://example.com/person0")!.wikidataConceptIri
    ).to.eq("http://www.wikidata.org/entity/Q7251");
  });

  // it("should get the agent's Wikipedia URL", () => {
  //   expect(sut.wikipediaUrl).to.eq("http://en.wikipedia.org/wiki/Alan_Turing");
  // });

  it("should get the agent's IRIs", () => {
    expect(sut.iris).to.not.be.empty;
  });
});
