import {expect} from "chai";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("MemModelSet", () => {
  const sut = testModelSet;

  it("should exercise all indices", () => {
    const collections = sut.collections;
    expect(collections).to.have.length(2);
    for (const collection of collections) {
      expect(sut.collectionByKey(collection.key)).to.eq(collection);
      for (const work of collection.works) {
        expect(sut.workByKey(work.key)).to.eq(work);
        for (const workIri of work.iris) {
          expect(sut.workByIri(workIri)).to.eq(work);
        }

        if (work.iris.length === 1) {
          expect(work.images).to.have.length(2);
          for (const image of work.images) {
            for (const imageIri of image.iris) {
              expect(sut.imageByIri(imageIri)).to.eq(image);
            }
          }
        }
      }
    }

    // const concept = sut.conceptByIri(
    //   "urn:paradicms:etl:pipeline:synthetic_data:concept:0"
    // );
    const concept = sut.concepts[0];
    expect(concept.value.value).to.eq(
      sut.conceptByIri(concept.iris[0])!.value.value
    );

    expect(sut.events).to.not.be.empty;
    for (const event of sut.events) {
      expect(sut.eventByKey(event.key)).not.to.be.null;
    }

    expect(sut.properties).to.not.be.empty;
    for (const property of sut.properties) {
      expect(property.groups).to.not.be.empty;
      if (property.filterable) {
        expect(property.rangeValues).to.not.be.empty;
      }
      expect(sut.propertyByIri(property.iris[0])!.label).to.eq(property.label);
    }

    expect(sut.propertyGroups).to.not.be.empty;
    for (const propertyGroup of sut.propertyGroups) {
      expect(propertyGroup.properties).to.have.length(sut.properties.length);
    }

    for (const work of sut.works) {
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
      expect(work.description).not.to.be.null;
      expect(work.description!.licenses).to.not.be.empty;
      for (const license of work.description!.licenses) {
        expect(license.iris[0]).to.not.be.empty;
      }
      expect(work.description!.rightsStatements).to.not.be.empty;
      for (const rightsStatement of work.description!.rightsStatements) {
        expect(rightsStatement.iris[0]).to.not.be.empty;
      }
      expect(work.images).to.not.be.empty;
    }
  });

  it("should serialize itself", async function() {
    this.timeout(5000);
    expect(await sut.toJsonLd()).to.not.be.empty;
  });
});
