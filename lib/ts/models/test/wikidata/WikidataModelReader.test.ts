import {datasetCoreToDataset} from "@paradicms/rdf";
import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";

describe("WikidataModelReader", () => {
  const sut = new WikidataModelReader(datasetCoreToDataset(syntheticData));

  it("should read at least one named Person", () => {
    expect(sut.readNamedPeople({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
