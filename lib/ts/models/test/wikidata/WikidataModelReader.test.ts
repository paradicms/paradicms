import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";
import {describe} from "mocha";

describe("WikidataModelReader", () => {
  const sut = new WikidataModelReader(syntheticData);

  // it("should read at least one named Location", () => {
  //   const locations = sut.readNamedLocations({modelSet: dummyModelSet});
  //   expect(locations).to.have.length(1);
  //   for (const location of locations) {
  //     expect(location.centroid).not.to.be.null;
  //     expect(location.centroid!.latitude).not.to.eq(0);
  //     expect(location.centroid!.longitude).not.to.eq(0);
  //     expect(location.label).not.to.be.empty;
  //   }
  // });

  it("should read at least one named Person", () => {
    const people = sut.readNamedPeople({modelSet: dummyModelSet});
    expect(people).to.have.length(1);
    for (const person of people) {
      // "family name" and "given name" statements in Wikidata are often references to Wikidata entities we haven't resolved
      expect(person.label).not.to.be.empty;
      // expect(person.familyName).not.to.be.null;
      // expect(person.familyName).not.to.be.empty;
      // expect(person.givenName).not.to.be.null;
      // expect(person.givenName).not.to.be.empty;
    }
  });

  it("should read at least one Work", () => {
    const works = sut.readWorks({modelSet: dummyModelSet});
    expect(works).to.have.length(1);
    for (const work of works) {
      expect(work.label).not.to.be.empty;
    }
  });
});
