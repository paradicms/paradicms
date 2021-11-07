import {expect} from "chai";
import {Dataset} from "../src";
import {testDataTrig} from "./testDataTrig";

describe("Work", () => {
  const dataset = Dataset.parse(testDataTrig);
  const sut = dataset.works[0];

  it("should get the work's abstract", () => {
    expect(sut.abstract).to.not.be.empty;
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

  it("should get the work's properties", () => {
    expect(sut.properties).to.not.be.empty;
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
