import {expect} from "chai";
import {testDatasetTtl} from "./testDataset";
import {JoinedDataset} from "../src/JoinedDataset";

describe("JoinedObject", () => {
  const object = testDatasetTtl.objects[0];
  const sut = JoinedDataset.fromDataset(testDatasetTtl).objectByUri(object.uri);

  it("should get the object's abstract", () => {
    expect(sut.abstract).to.eq(object.abstract);
  });

  it("should get the object's collections", () => {
    expect(sut.collections.map(collection => collection.uri)).to.deep.eq(
      object.collectionUris
    );
  });

  it("should get the object's images", () => {
    expect(sut.images.map(image => image.uri).sort()).to.deep.eq(
      testDatasetTtl.images
        .filter(image => image.depictsUri === sut.uri)
        .map(image => image.uri)
        .sort()
    );
  });

  it("should get the object's's institution", () => {
    expect(sut.institution.uri).to.eq(object.institutionUri);
  });

  it("should get the object's images", () => {
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

  it("should get the object's page", () => {
    expect(sut.page).to.eq(object.page);
  });

  it("should get the object's properties", () => {
    expect(sut.properties.map(property => property.uri).sort()).to.deep.eq(
      (object.properties ?? []).map(property => property.uri).sort()
    );
  });

  it("should get the object's rights", () => {
    expect(sut.rights!.statement).to.not.be.null;
  });

  it("should get the object's title", () => {
    expect(sut.title).to.not.be.empty;
    expect(sut.title).to.eq(object.title);
  });

  it("should get the object's URI", () => {
    expect(sut.uri).to.eq(object.uri);
  });
});
