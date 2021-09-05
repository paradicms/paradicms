import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";

describe("JoinedDataset", () => {
  const sut = JoinedDataset.fromDataset(testDatasetTtl);

  it("should get a collection by URI", () => {
    expect(sut.collectionByUri(testDatasetTtl.collections[0].uri).uri).to.eq(
      testDatasetTtl.collections[0].uri
    );
  });

  it("should get collection works by URI", () => {
    expect(sut.collectionWorks(testDatasetTtl.collections[0].uri)).to.not.be
      .empty;
  });

  it("should get depicting images", () => {
    expect(sut.imagesByDepictsUri(testDatasetTtl.works[0].uri)).to.not.be.empty;
  });

  it("should get derived images", () => {
    expect(
      sut.imagesByOriginalImageUri(
        testDatasetTtl.images.find(image => image.originalImageUri === null)!
          .uri
      )
    ).to.not.be.empty;
  });

  it("should get an image by URI", () => {
    expect(sut.imageByUri(testDatasetTtl.images[0].uri).uri).to.eq(
      testDatasetTtl.images[0].uri
    );
  });

  it("should get an institution by URI", () => {
    expect(sut.institutionByUri(testDatasetTtl.institutions[0].uri).uri).to.eq(
      testDatasetTtl.institutions[0].uri
    );
  });

  it("should get an institution's collections", () => {
    expect(
      sut.institutionCollections(testDatasetTtl.institutions[0].uri)
    ).to.have.length(
      testDatasetTtl.collections.filter(
        collection =>
          collection.institutionUri === testDatasetTtl.institutions[0].uri
      ).length
    );
  });

  it("should get institutions", () => {
    expect(sut.institutions).to.have.length(testDatasetTtl.institutions.length);
  });

  it("should get a license by URI", () => {
    expect(sut.licenseByUri(testDatasetTtl.licenses[0].uri).uri).to.eq(
      testDatasetTtl.licenses[0].uri
    );
  });

  it("should get an work by URI", () => {
    expect(sut.workByUri(testDatasetTtl.works[0].uri).uri).to.eq(
      testDatasetTtl.works[0].uri
    );
  });

  it("should get works", () => {
    expect(sut.works).to.have.length(testDatasetTtl.works.length);
  });

  it("should get a property definition by URI", () => {
    expect(
      sut.propertyDefinitionByUri(testDatasetTtl.propertyDefinitions[0].uri)!
        .uri
    ).to.eq(testDatasetTtl.propertyDefinitions[0].uri);
  });

  it("should get a rights statement by URI", () => {
    expect(
      sut.rightsStatementByUri(testDatasetTtl.rightsStatements[0].uri).uri
    ).to.eq(testDatasetTtl.rightsStatements[0].uri);
  });
});
