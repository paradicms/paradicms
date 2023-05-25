import {datasetCoreToDataset} from "@paradicms/rdf";
import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";

describe("WikidataModelReader", () => {
  const sut = new WikidataModelReader(datasetCoreToDataset(syntheticData));

  it("should read at least one named Person", () => {
    const people = sut.readNamedPeople({modelSet: dummyModelSet});
    expect(people).not.to.be.empty;
    for (const person of people) {
      expect(person.familyName).not.to.be.null;
      expect(person.familyName).not.to.be.empty;
      expect(person.givenName).not.to.be.null;
      expect(person.givenName).not.to.be.empty;
    }
  });
});
