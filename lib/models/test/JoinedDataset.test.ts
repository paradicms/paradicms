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

  it("should get collection objects by URI", () => {
    expect(sut.collectionObjects(testDatasetTtl.collections[0].uri)).to.not.be
      .empty;
  });

  it("should get depicting images", () => {
    expect(sut.imagesByDepictsUri(testDatasetTtl.objects[0].uri)).to.not.be
      .empty;
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

  it("should get an object by URI", () => {
    expect(sut.objectByUri(testDatasetTtl.objects[0].uri).uri).to.eq(
      testDatasetTtl.objects[0].uri
    );
  });

  it("should get objects", () => {
    expect(sut.objects).to.have.length(testDatasetTtl.objects.length);
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
