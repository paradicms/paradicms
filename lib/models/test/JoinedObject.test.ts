import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";

describe("JoinedWork", () => {
  const work = testDatasetTtl.works[0];
  const sut = JoinedDataset.fromDataset(testDatasetTtl).workByUri(work.uri);

  it("should get the work's abstract", () => {
    expect(sut.abstract).to.eq(work.abstract);
  });

  it("should get the work's collections", () => {
    expect(sut.collections.map(collection => collection.uri)).to.deep.eq(
      work.collectionUris
    );
  });

  it("should get the work's images", () => {
    expect(sut.images.map(image => image.uri).sort()).to.deep.eq(
      testDatasetTtl.images
        .filter(image => image.depictsUri === sut.uri)
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the work's's institution", () => {
    expect(sut.institution.uri).to.eq(work.institutionUri);
  });

  it("should get the work's images", () => {
    expect(sut.originalImages.map(image => image.uri).sort()).to.deep.eq(
      testDatasetTtl.images
        .filter(
          image =>
            image.depictsUri === sut.uri && image.originalImageUri === null
        )
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the work's page", () => {
    expect(sut.page).to.eq(work.page);
  });

  it("should get the work's properties", () => {
    expect(sut.properties.map(property => property.uri).sort()).to.deep.eq(
      (work.properties ?? []).map(property => property.uri).sort()
    );
  });

  it("should get the work's rights", () => {
    expect(sut.rights!.statement).to.not.be.null;
  });

  it("should get the work's title", () => {
    expect(sut.title).to.not.be.empty;
    expect(sut.title).to.eq(work.title);
  });

  it("should get the work's URI", () => {
    expect(sut.uri).to.eq(work.uri);
  });
});
