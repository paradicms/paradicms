import {expect} from "chai";
import {ModelSet, Text} from "../src";
import {testDataTrig} from "@paradicms/test";
import {dcterms} from "@paradicms/vocabularies";
import {parseIntoDataset} from "@paradicms/rdf";

describe("Work", () => {
  const modelSet = new ModelSet(parseIntoDataset(testDataTrig));
  const sut = modelSet.workByUri(
    "http://example.com/institution0/collection0/work2"
  );

  it("should get the work's abstract", () => {
    expect(sut.abstract).to.be.instanceof(Text);
    const abstract: Text = sut.abstract as Text;
    expect(abstract.value).to.not.be.empty;
  });

  it("should get the work's agents", () => {
    const agents = sut.agents;
    expect(agents).to.have.length(12);
    expect(agents.map(agent => agent.agent.uri)).to.deep.eq(sut.agentUris);
  });

  it("should get the work's collections", () => {
    expect(sut.collections.map(collection => collection.uri)).to.deep.eq(
      sut.collectionUris
    );
  });

  it("should get the work's images", () => {
    expect(sut.images.map(image => image.uri).sort()).to.deep.eq(
      modelSet.images
        .filter(image => image.depictsUri === sut.uri)
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the work's's institution", () => {
    expect(sut.institution.uri).to.eq(sut.institutionUri);
  });

  it("should get the work's images", () => {
    expect(sut.originalImages.map(image => image.uri).sort()).to.deep.eq(
      modelSet.images
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
    const propertyValues = sut.propertyNamedValues(dcterms.subject.value);
    expect(propertyValues).to.have.length(2);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value.value).to.satisfy((text: string) =>
      text.startsWith("Subject")
    );
  });

  it("should get the work's property values (Text)", () => {
    const propertyValues = sut.propertyValues(dcterms.abstract.value);
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.value).to.eq((sut.abstract as Text).value);
  });

  it("should get the work's rights", () => {
    expect(sut.rights!.statement).to.not.be.null;
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
