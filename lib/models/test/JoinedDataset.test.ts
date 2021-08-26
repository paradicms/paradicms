import {expect} from "chai";
import {testDataset} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";

describe("JoinedDataset", () => {
  const sut = JoinedDataset.fromDataset(testDataset);

  it("should get a collection by URI", () => {
    expect(sut.collectionByUri(testDataset.collections[0].uri).uri).to.eq(
      testDataset.collections[0].uri
    );
  });

  it("should get collection objects by URI", () => {
    expect(sut.collectionObjects(testDataset.collections[0].uri)).to.not.be
      .empty;
  });

  it("should get depicting images", () => {
    expect(sut.imagesByDepictsUri(testDataset.objects[0].uri)).to.not.be.empty;
  });

  it("should get derived images", () => {
    expect(
      sut.imagesByOriginalImageUri(
        testDataset.images.find(image => image.originalImageUri === null)!.uri
      )
    ).to.not.be.empty;
  });

  it("should get an image by URI", () => {
    expect(sut.imageByUri(testDataset.images[0].uri).uri).to.eq(
      testDataset.images[0].uri
    );
  });

  it("should get an institution by URI", () => {
    expect(sut.institutionByUri(testDataset.institutions[0].uri).uri).to.eq(
      testDataset.institutions[0].uri
    );
  });

  it("should get an institution's collections", () => {
    expect(
      sut.institutionCollections(testDataset.institutions[0].uri)
    ).to.have.length(
      testDataset.collections.filter(
        collection =>
          collection.institutionUri === testDataset.institutions[0].uri
      ).length
    );
  });

  it("should get institutions", () => {
    expect(sut.institutions).to.have.length(testDataset.institutions.length);
  });

  it("should get a license by URI", () => {
    expect(sut.licenseByUri(testDataset.licenses[0].uri).uri).to.eq(
      testDataset.licenses[0].uri
    );
  });

  it("should get an object by URI", () => {
    expect(sut.objectByUri(testDataset.objects[0].uri).uri).to.eq(
      testDataset.objects[0].uri
    );
  });

  it("should get objects", () => {
    expect(sut.objects).to.have.length(testDataset.objects.length);
  });

  it("should get a property definition by URI", () => {
    expect(
      sut.propertyDefinitionByUri(testDataset.propertyDefinitions[0].uri)!.uri
    ).to.eq(testDataset.propertyDefinitions[0].uri);
  });

  it("should get a rights statement by URI", () => {
    expect(
      sut.rightsStatementByUri(testDataset.rightsStatements[0].uri).uri
    ).to.eq(testDataset.rightsStatements[0].uri);
  });
});
