import {Dataset} from "../src/Dataset";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {testDataTtl} from "./testDataTtl";
import {expect} from "chai";

describe("Dataset", () => {
  const sut = Dataset.parse(testDataTtl);

  it("should exercise all indices", () => {
    const institutions = sut.institutions;
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

          const objectImages = sut.imagesByDepictsUri(object.uri);
          expect(objectImages).to.have.length(6);
          for (const image of objectImages) {
            expect(sut.imageByUri(image.uri)).to.eq(image);
          }
        }
      }

      const institutionImages = sut.imagesByDepictsUri(institution.uri);
      expect(institutionImages).to.have.length(6);

      const institutionObjects = sut.institutionObjects(institution.uri);
      expect(institutionObjects).to.have.length(8);

      for (const object of institutionObjects) {
        const rights = object.rights;
        expect(rights).to.not.be.null;
        expect(rights!.license).to.not.be.null;
        expect((rights!.license! as License).uri).to.not.be.empty;
        expect(rights!.statement).to.not.be.null;
        expect((rights!.statement! as RightsStatement).uri).to.not.be.empty;
      }
    }
  });
});
