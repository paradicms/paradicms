import {describe} from "mocha";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";
import {syntheticData} from "@paradicms/test";
import {WikidataModel} from "../../src/wikidata/WikidataModel";
import {expect} from "chai";
import {SchemaImageObject} from "../../src/schema/SchemaImageObject";
import {wd} from "@paradicms/vocabularies";
import {requireDefined} from "@paradicms/utilities";
import {testModelSet} from "../testModelSet";
import {WikidataWork} from "../../src/wikidata/WikidataWork";

describe("WikidataModel", () => {
  let sut: WikidataModel;

  before(() => {
    sut = requireDefined(
      new WikidataModelReader(syntheticData)
        .readWorks({
          modelSet: testModelSet,
        })
        .find(work => work.iris[0] === wd["Q19911452"].value)
    ) as WikidataWork;
  });

  it("should have at least one article", () => {
    expect(sut.articles).not.to.be.empty;
  });

  it("should have creators", () => {
    expect(sut.creators).not.to.be.empty;
  });

  it("should return images from Wikidata", () => {
    expect(sut.images).to.have.length(1);
    const image = sut.images[0];
    expect(image).to.be.instanceof(SchemaImageObject);
    const concreteImage = image as SchemaImageObject;
    expect(concreteImage.iri).to.eq(
      "http://commons.wikimedia.org/wiki/Special:FilePath/Lucas%20Cranach%20d.%C3%84.%20-%20Das%20Urteil%20des%20Paris.jpg"
    );
  });

  it("should have a label", () => {
    expect(sut.label).not.to.be.empty;
  });

  it("should have a single license", () => {
    expect(sut.licenses).to.have.length(1);
    expect(sut.licenses[0].iris).to.have.length(1);
    expect(sut.licenses[0].iris[0]).to.eq(
      "http://creativecommons.org/licenses/by-sa/3.0/"
    );
  });

  it("should have a prefLabel", () => {
    expect(sut.prefLabel).not.to.be.null;
  });

  it("should have property values", () => {
    expect(sut.propertyValues).not.to.be.empty;
  });

  it("should have property values for a specific IRI", () => {
    expect(sut.propertyValuesByPropertyIri(wd["P1476"].value)).not.to.be.empty;
  });

  it("should require attribution", () => {
    expect(sut.requiresAttribution).to.be.true;
  });

  it("should have a single rights statement", () => {
    expect(sut.rightsStatements).to.have.length(1);
    expect(sut.rightsStatements[0].iris).to.have.length(1);
    expect(sut.rightsStatements[0].iris[0]).to.eq(
      "http://rightsstatements.org/vocab/InC/1.0/"
    );
  });

  it("should have Wikibase statements", () => {
    expect(sut.statements).not.to.be.empty;
  });

  it("should return a Wikidata concept IRI", () => {
    expect(sut.wikidataConceptIri).to.eq(sut.identifier.value);
  });

  it("should return a Wikipedia URL", () => {
    expect(sut.wikipediaUrl).not.to.be.null;
    expect(sut.wikipediaUrl).to.include("https://en.wikipedia.org");
  });
});
