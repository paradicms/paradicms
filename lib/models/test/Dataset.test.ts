import {Dataset} from "../src/Dataset";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {testDataTtl} from "./testDataTtl";
import {expect} from "chai";
import {Agent} from "../src/Agent";

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

        const collectionWorks = sut.collectionWorks(collection.uri);
        expect(collectionWorks).to.have.length(8);
        for (const work of collectionWorks) {
          expect(sut.workByUri(work.uri)).to.eq(work);

          const workImages = sut.imagesByDepictsUri(work.uri);
          expect(workImages).to.have.length(6);
          for (const image of workImages) {
            expect(sut.imageByUri(image.uri)).to.eq(image);
          }
        }
      }

      const institutionImages = sut.imagesByDepictsUri(institution.uri);
      expect(institutionImages).to.have.length(6);

      const institutionWorks = sut.institutionWorks(institution.uri);
      expect(institutionWorks).to.have.length(8);

      for (const work of institutionWorks) {
        const rights = work.rights;
        expect(rights).to.not.be.null;
        expect(rights!.creator).to.not.be.null;
        expect((rights!.creator! as Agent).uri).to.not.be.empty;
        expect(rights!.license).to.not.be.null;
        expect((rights!.license! as License).uri).to.not.be.empty;
        expect(rights!.statement).to.not.be.null;
        expect((rights!.statement! as RightsStatement).uri).to.not.be.empty;
      }
    }
  });
});
