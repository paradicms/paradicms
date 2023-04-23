import {dcterms} from "@paradicms/vocabularies";
import {expect} from "chai";
import {Text} from "../src";
import {testModelSet} from "./testModelSet";

describe("Work", () => {
  const sut = testModelSet.workByUri("http://example.com/collection0/work2");

  it("should get the work's description", () => {
    expect(sut.description).not.to.be.null;
    expect(sut.description).not.to.be.instanceof(String);
    const description: Text = sut.description as Text;
    expect(description.value).to.not.be.empty;
  });

  it("should get the work's agents", () => {
    expect(sut.agents).to.have.length(8);
    expect(sut.agents.filter(agent => agent.agent.uri)).to.have.length(4);
  });

  it("should get the work's collections", () => {
    expect(sut.collections).to.not.be.empty;
  });

  it("should get the work's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.images.every(image => image.depictsUri === sut.uri)).to.be.true;
  });

  it("should get the work's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the work's property values (literal)", () => {
    const propertyValues = sut.propertyValues(dcterms.title.value);
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq(sut.label);
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

  it("should get the work's label", () => {
    expect(sut.label).to.not.be.empty;
    expect(sut.label).to.not.be.empty;
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
