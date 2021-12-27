import {expect} from "chai";
import {Dataset, DCTERMS, Text} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("Work", () => {
  const dataset = Dataset.parse(testDataTrig);
  const sut = dataset.workByUri(
    "http://example.com/institution0/collection0/work2"
  );

  it("should get the work's abstract", () => {
    expect(sut.abstract).to.be.instanceof(Text);
    const abstract: Text = sut.abstract as Text;
    expect(abstract.value).to.not.be.empty;
  });

  it("should get the work's collections", () => {
    expect(sut.collections.map(collection => collection.uri)).to.deep.eq(
      sut.collectionUris
    );
  });

  it("should get the work's images", () => {
    expect(sut.images.map(image => image.uri).sort()).to.deep.eq(
      dataset.images
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
      dataset.images
        .filter(
          image =>
            image.depictsUri === sut.uri && image.originalImageUri === null
        )
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the work's property values (literal)", () => {
    const propertyValues = sut.propertyValues(DCTERMS.title.value);
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.toString()).to.eq(sut.title);
  });

  it("should get the work's property values (Text)", () => {
    const propertyValues = sut.propertyValues(DCTERMS.abstract.value);
    expect(propertyValues).to.have.length(1);
    const propertyValue = propertyValues[0];
    expect(propertyValue.toString()).to.eq((sut.abstract as Text).value);
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
});
