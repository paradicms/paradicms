import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "./testModelSet";

describe("MemModelSet", () => {
  const sut = testModelSet;

  it("should exercise all indices", function() {
    this.timeout(5000);

    const collections = sut.collections;
    expect(collections).to.have.length(2);
    for (const collection of collections) {
      expect(sut.collectionByIri(collection.iri)).to.eq(collection);
      for (const work of collection.works) {
        expect(sut.workByIri(work.iri)).to.eq(work);

        expect(work.images).to.not.be.empty;
        for (const image of work.images) {
          expect(sut.imageByIri(image.iri)).to.eq(image);
        }
      }
    }

    // const concept = sut.conceptByIri(
    //   "urn:paradicms:etl:pipeline:synthetic_data:concept:0"
    // );
    const concept = sut.concepts[0];
    expect(concept.value.value).to.eq(
      sut.conceptByIri(concept.iri)!.value.value
    );

    expect(sut.events).to.not.be.empty;
    for (const event of sut.events) {
      expect(sut.eventByIri(event.iri)).not.to.be.null;
    }

    expect(sut.properties).to.not.be.empty;
    for (const property of sut.properties) {
      expect(property.groups).to.not.be.empty;
      if (property.filterable) {
        expect(property.rangeValues).to.not.be.empty;
      }
      expect(sut.propertyByIri(property.iri)!.label).to.eq(property.label);
    }

    expect(sut.propertyGroups).to.not.be.empty;
    for (const propertyGroup of sut.propertyGroups) {
      expect(propertyGroup.properties).to.have.length(sut.properties.length);
    }

    for (const work of sut.works) {
      expect(work.creators).to.not.be.empty;
      const creator = work.creators[0];
      expect(
        sut
          .worksByAgentIri(creator.iri!)
          .some(agentWork => agentWork.iri.equals(work.iri))
      ).to.be.true;
      expect(work.description).not.to.be.null;
      expect(work.description!.licenses).to.not.be.empty;
      expect(work.description!.rightsStatements).to.not.be.empty;
      expect(work.images).to.not.be.empty;
    }
  });

  it("should serialize itself", async function() {
    this.timeout(5000);
    expect(await sut.toJsonLd()).to.not.be.empty;
  });
});
