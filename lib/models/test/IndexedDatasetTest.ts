import {IndexedDataset} from "../src/IndexedDataset";
import {expect} from "chai";
import {testDataset} from "./testDataset";

describe("IndexedDataset test", () => {
  const sut = new IndexedDataset(testDataset);

  it("should exercise all indices", () => {
    const institutions = testDataset.institutions;
    expect(institutions).to.have.length(2);
    for (const institution of institutions) {
      expect(sut.institutionByUri(institution.uri)).to.eq(institution);

      const collections = sut.institutionCollections(institution.uri);
      expect(collections).to.have.length(1);
      for (const collection of collections) {
        expect(sut.collectionByUri(collection.uri)).to.eq(collection);

        const collectionObjects = sut.collectionObjects(collection.uri);
        expect(collectionObjects).to.have.length(8);
        for (const object of collectionObjects) {
          expect(sut.objectByUri(object.uri)).to.eq(object);

          const objectImages = sut.depictingImages(object.uri);
          expect(objectImages).to.have.length(6);
          for (const image of objectImages) {
            expect(sut.imageByUri(image.uri)).to.eq(image);
          }
        }
      }

      const institutionImages = sut.depictingImages(institution.uri);
      expect(institutionImages).to.have.length(6);

      const institutionObjects = sut.institutionObjects(institution.uri);
      expect(institutionObjects).to.have.length(8);
    }

    expect(sut.licenses).to.not.be.empty;
    for (const license of sut.licenses) {
      expect(sut.licenseByUri(license.uri)).to.eq(license);
    }

    expect(sut.rightsStatements).to.not.be.empty;
    for (const rightsStatement of sut.rightsStatements) {
      expect(sut.rightsStatementByUri(rightsStatement.uri)).to.eq(rightsStatement);
    }
  });
});
