import {dcterms} from "@paradicms/vocabularies";
import {expect} from "chai";
import {Text} from "../src";
import {testModelSet} from "./testModelSet";

describe("Work", () => {
  const sut = testModelSet.workByUri("http://example.com/collection0/work2");

  it("should get the work's description", () => {
    expect(sut.description).to.be.instanceof(Text);
    const description: Text = sut.description as Text;
    expect(description.value).to.not.be.empty;
  });

  it("should get the work's agents", () => {
    const agents = sut.agents;
    expect(agents).to.have.length(4);
    expect(agents.map(agent => agent.agent.uri)).to.deep.eq(sut.agentUris);
  });

  it("should get the work's collections", () => {
    expect(sut.collections.map(collection => collection.uri)).to.deep.eq(
      sut.collectionUris
    );
  });

  it("should get the work's images", () => {
    expect(sut.images.map(image => image.uri).sort()).to.deep.eq(
      testModelSet.images
        .filter(image => image.depictsUri === sut.uri)
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the work's images", () => {
    expect(sut.originalImages.map(image => image.uri).sort()).to.deep.eq(
      testModelSet.images
        .filter(
          image =>
            image.depictsUri === sut.uri && image.originalImageUri === null
        )
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the work's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the work's property values (literal)", () => {
    const propertyValues = sut.propertyValues(dcterms.title.value);
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq(sut.title);
  });

  it("should get the work's property values (named)", () => {
    const propertyValues = sut.propertyValues(dcterms.subject.value);
    expect(propertyValues).to.have.length(2);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.satisfy((text: string) =>
      text.startsWith("Subject")
    );
  });

  it("should get the work's property values (Text)", () => {
    const propertyValues = sut.propertyValues(dcterms.description.value);
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq((sut.description as Text).value);
  });

  it("should get the work's rights statement", () => {
    expect(sut.rightsStatement).to.not.be.null;
  });

  it("should get the work's title", () => {
    expect(sut.title).to.not.be.empty;
    expect(sut.title).to.not.be.empty;
  });

  it("should get the work's URI", () => {
    expect(sut.uri).to.not.be.empty;
  });

  it("should get the work's Wikidata concept URI", () => {
    expect(sut.wikidataConceptUri).to.eq(
      "http://www.wikidata.org/entity/Q937690"
    );
  });

  it("should get the work's Wikipedia URL", () => {
    expect(sut.wikipediaUrl).to.eq("http://en.wikipedia.org/wiki/Pilot-ACE");
  });
});
