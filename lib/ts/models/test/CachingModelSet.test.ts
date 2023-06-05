import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("CachingModelSet", () => {
  const sut = testModelSet;

  it("should exercise all indices", () => {
    const collections = sut.collections;
    expect(collections).to.have.length(2);
    for (const collection of collections) {
      for (const collectionIri of collection.iris) {
        expect(sut.collectionByIri(collectionIri)).to.eq(collection);
      }

      const collectionWorks = sut.worksByCollectionKey(collection.key);
      expect(collectionWorks).to.have.length(4);
      for (const work of collectionWorks) {
        expect(sut.workByKey(work.key)).to.eq(work);
        for (const workIri of work.iris) {
          expect(sut.workByIri(workIri)).to.eq(work);
        }

        if (work.iris.length === 1) {
          const workImages = sut.imagesByDepictsIri(work.iris[0]);
          expect(workImages).to.have.length(10);
          for (const image of workImages) {
            for (const imageIri of image.iris) {
              expect(sut.imageByIri(imageIri)).to.eq(image);
            }
          }
        }
      }
    }

    // const concept = sut.conceptByIri(
    //   "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
    // );
    const concept = sut.concepts[0];
    expect(concept.value.value).to.eq(
      sut.conceptByIri(concept.iris[0]).value.value
    );
    expect(concept.value.value).to.eq(
      sut.conceptByIriOptional(concept.iris[0])!.value.value
    );

    expect(sut.properties).to.not.be.empty;
    for (const property of sut.properties) {
      expect(property.groupIris).to.not.be.empty;
      if (property.filterable) {
        expect(property.rangeValues).to.not.be.empty;
      }
      expect(sut.propertyByIri(property.iris[0]).label).to.eq(property.label);
    }

    expect(sut.propertyGroups).to.not.be.empty;
    for (const propertyGroup of sut.propertyGroups) {
      expect(propertyGroup.properties).to.have.length(sut.properties.length);
    }

    for (const work of sut.works) {
      expect(work.originalImages).to.not.be.empty;
      expect(work.contributors).to.not.be.empty;
      expect(
        work.contributors.every(contributor => contributor.iris[0] === null)
      );
      expect(
        work.contributors.every(contributor => contributor.label.length > 0)
      );
      expect(work.creators).to.not.be.empty;
      const creator = work.creators.find(creator => creator.iris[0] !== null)!;
      expect(
        sut
          .worksByAgentIri(creator.iris[0]!)
          .some(agentWork => agentWork.iris[0] === work.iris[0])
      ).to.be.true;
      expect(work.license).to.not.be.null;
      expect((work.license! as License).iris[0]).to.not.be.empty;
      expect(work.rightsStatement).to.not.be.null;
      expect((work.rightsStatement! as RightsStatement).iris[0]).to.not.be
        .empty;
    }

    for (const workEvent of sut.works[0].events) {
      expect(workEvent.work).to.not.be.null;
      if (workEvent.iris.length === 0) {
        continue;
      }
      expect(sut.workEventByIri(workEvent.iris[0]).iris[0]).to.eq(
        workEvent.iris[0]
      );
      expect(
        sut
          .workEventsByWorkIri(workEvent.workIri)
          .some(otherWorkEvent => otherWorkEvent.iris[0] === workEvent.iris[0])
      );
    }
  });

  it("should serialize itself", () => {
    expect(sut.toFastRdfString()).to.not.be.empty;
  });
});
