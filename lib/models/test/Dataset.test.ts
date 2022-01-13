import {Dataset} from "../src/Dataset";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {expect} from "chai";
import {testDataTrig} from "./testDataTrig";

describe("Dataset", () => {
  const sut = Dataset.parse(testDataTrig);

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

      for (const namedValue of sut.namedValues) {
        expect(namedValue.value.value).to.eq(
          sut.namedValueByUri(namedValue.uri).value.value
        );
        expect(namedValue.value.value).to.eq(
          sut.namedValueByUriOptional(namedValue.uri)!.value.value
        );
      }

      for (const work of institutionWorks) {
        expect(work.originalImages).to.not.be.empty;
        const rights = work.rights;
        expect(rights).to.not.be.null;
        expect(rights!.creators).to.not.be.empty;
        expect(rights!.creatorAgents).to.not.be.empty;
        const agent = rights!.creatorAgents[0];
        expect(
          sut
            .agentWorks(agent.uri)
            .some(agentWork => agentWork.uri === work.uri)
        ).to.be.true;
        expect(rights!.license).to.not.be.null;
        expect((rights!.license! as License).uri).to.not.be.empty;
        expect(rights!.statement).to.not.be.null;
        expect((rights!.statement! as RightsStatement).uri).to.not.be.empty;
      }
    }
  });

  it("should log its contents", () => {
    sut.logContents();
  });

  it("should serialize itself", () => {
    expect(sut.stringify()).to.not.be.empty;
  });
});
