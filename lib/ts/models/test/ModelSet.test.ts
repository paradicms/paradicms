import {ModelSet} from "../src/ModelSet";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {expect} from "chai";
import {syntheticData} from "@paradicms/test";

describe("ModelSet", () => {
  const sut = ModelSet.fromDatasetCore(syntheticData);

  it("should exercise all indices", () => {
    const collections = sut.collections;
    expect(collections).to.have.length(2);
    for (const collection of collections) {
      expect(sut.collectionByUri(collection.uri)).to.eq(collection);

      const collectionWorks = sut.collectionWorks(collection.uri);
      expect(collectionWorks).to.have.length(4);
      for (const work of collectionWorks) {
        expect(sut.workByUri(work.uri)).to.eq(work);

        const workImages = sut.imagesByDepictsUri(work.uri);
        expect(workImages).to.have.length(10);
        for (const image of workImages) {
          expect(sut.imageByUri(image.uri)).to.eq(image);
        }
      }
    }

    for (const concept of sut.concepts) {
      expect(concept.value.value).to.eq(
        sut.conceptByUri(concept.uri).value.value
      );
      expect(concept.value.value).to.eq(
        sut.conceptByUriOptional(concept.uri)!.value.value
      );
    }

    for (const property of sut.properties) {
      expect(property.groupUris).to.not.be.empty;
      if (property.filterable) {
        expect(property.rangeValues).to.not.be.empty;
      }
    }

    for (const propertyGroup of sut.propertyGroups) {
      expect(propertyGroup.properties).to.have.length(sut.properties.length);
    }

    for (const work of sut.works) {
      expect(work.originalImages).to.not.be.empty;
      expect(work.contributors).to.not.be.empty;
      expect(work.contributorAgents).to.not.be.empty;
      const contributorAgent = work.contributorAgents[0];
      expect(
        sut
          .agentWorks(contributorAgent.uri)
          .some(contributorAgentWork => contributorAgentWork.uri === work.uri)
      ).to.be.true;
      expect(work.creators).to.not.be.empty;
      expect(work.creatorAgents).to.not.be.empty;
      const creatorAgent = work.creatorAgents[0];
      expect(
        sut
          .agentWorks(creatorAgent.uri)
          .some(agentWork => agentWork.uri === work.uri)
      ).to.be.true;
      expect(work.license).to.not.be.null;
      expect((work.license! as License).uri).to.not.be.empty;
      expect(work.rightsStatement).to.not.be.null;
      expect((work.rightsStatement! as RightsStatement).uri).to.not.be.empty;
    }

    for (const workEvent of sut.workEvents) {
      expect(workEvent.work).to.not.be.null;
      expect(sut.workEventByUri(workEvent.uri).uri).to.eq(workEvent.uri);
      expect(
        sut
          .workEventsByWork(workEvent.workUri)
          .some(otherWorkEvent => otherWorkEvent.uri === workEvent.uri)
      );
    }
  });

  it("should log its contents", () => {
    sut.logContents();
  });

  it("should serialize itself", () => {
    expect(sut.toFastRdfString()).to.not.be.empty;
  });
});
