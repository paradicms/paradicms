import {expect} from "chai";
import {License} from "../src/License";
import {RightsStatement} from "../src/RightsStatement";
import {testModelSet} from "./testModelSet";

describe("CachingModelSet", () => {
  const sut = testModelSet;

  it("should exercise all indices", () => {
    const collections = sut.collections;
    expect(collections).to.have.length(2);
    for (const collection of collections) {
      expect(sut.collectionByIri(collection.iri)).to.eq(collection);

      const collectionWorks = sut.collectionWorks(collection.iri);
      expect(collectionWorks).to.have.length(4);
      for (const work of collectionWorks) {
        expect(sut.workByIri(work.iri)).to.eq(work);

        const workImages = sut.imagesByDepictsIri(work.iri);
        expect(workImages).to.have.length(10);
        for (const image of workImages) {
          expect(sut.imageByIri(image.iri)).to.eq(image);
        }
      }
    }

    // const concept = sut.conceptByIri(
    //   "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
    // );
    const concept = sut.concepts[0];
    expect(concept.value.value).to.eq(
      sut.conceptByIri(concept.iri).value.value
    );
    expect(concept.value.value).to.eq(
      sut.conceptByIriOptional(concept.iri)!.value.value
    );

    expect(sut.properties).to.not.be.empty;
    for (const property of sut.properties) {
      expect(property.groupIris).to.not.be.empty;
      if (property.filterable) {
        expect(property.rangeValues).to.not.be.empty;
      }
      expect(sut.propertyByIri(property.iri).label).to.eq(property.label);
    }

    expect(sut.propertyGroups).to.not.be.empty;
    for (const propertyGroup of sut.propertyGroups) {
      expect(propertyGroup.properties).to.have.length(sut.properties.length);
    }

    for (const work of sut.works) {
      expect(work.originalImages).to.not.be.empty;
      expect(work.contributors).to.not.be.empty;
      expect(work.contributors.every(contributor => contributor.iri === null));
      expect(
        work.contributors.every(contributor => contributor.label.length > 0)
      );
      expect(work.creators).to.not.be.empty;
      const creator = work.creators.find(creator => creator.iri !== null)!;
      expect(
        sut
          .agentWorks(creator.iri!)
          .some(agentWork => agentWork.iri === work.iri)
      ).to.be.true;
      expect(work.license).to.not.be.null;
      expect((work.license! as License).iri).to.not.be.empty;
      expect(work.rightsStatement).to.not.be.null;
      expect((work.rightsStatement! as RightsStatement).iri).to.not.be.empty;
    }

    for (const workEvent of sut.works[0].events) {
      expect(workEvent.work).to.not.be.null;
      expect(sut.workEventByIri(workEvent.iri).iri).to.eq(workEvent.iri);
      expect(
        sut
          .workEventsByWorkIri(workEvent.workIri)
          .some(otherWorkEvent => otherWorkEvent.iri === workEvent.iri)
      );
    }
  });

  it("should serialize itself", () => {
    expect(sut.toFastRdfString()).to.not.be.empty;
  });
});
