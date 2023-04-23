import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {testModelSet} from "./testModelSet";

describe("ModelSet", () => {
  const sut = testModelSet;

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

    // const concept = sut.conceptByUri(
    //   "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
    // );
    const concept = sut.concepts[0];
    expect(concept.value.value).to.eq(
      sut.conceptByUri(concept.uri).value.value
    );
    expect(concept.value.value).to.eq(
      sut.conceptByUriOptional(concept.uri)!.value.value
    );

    for (const property of sut.properties) {
      expect(property.groupUris).to.not.be.empty;
      if (property.filterable) {
        expect(property.rangeValues).to.not.be.empty;
      }
    }

    expect(sut.propertyGroups).to.not.be.empty;
    for (const propertyGroup of sut.propertyGroups) {
      expect(propertyGroup.properties).to.have.length(sut.properties.length);
    }

    for (const work of sut.works) {
      expect(work.originalImages).to.not.be.empty;
      expect(work.contributors).to.not.be.empty;
      expect(work.contributors.every(contributor => contributor.uri === null));
      expect(
        work.contributors.every(contributor => contributor.label.length > 0)
      );
      expect(work.creators).to.not.be.empty;
      const creator = work.creators.find(creator => creator.uri !== null)!;
      expect(
        sut
          .agentWorks(creator.uri!)
          .some(agentWork => agentWork.uri === work.uri)
      ).to.be.true;
      expect(work.license).to.not.be.null;
      expect((work.license! as License).uri).to.not.be.empty;
      expect(work.rightsStatement).to.not.be.null;
      expect((work.rightsStatement! as RightsStatement).uri).to.not.be.empty;
    }

    for (const workEvent of sut.works[0].events) {
      expect(workEvent.work).to.not.be.null;
      expect(sut.workEventByUri(workEvent.uri).uri).to.eq(workEvent.uri);
      expect(
        sut
          .workEventsByWorkUri(workEvent.workUri)
          .some(otherWorkEvent => otherWorkEvent.uri === workEvent.uri)
      );
    }
  });

  it("should serialize itself", () => {
    expect(sut.toFastRdfString()).to.not.be.empty;
  });
});
