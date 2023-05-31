import {datasetCoreToDataset} from "@paradicms/rdf";
import {syntheticData} from "@paradicms/test";
import {SameAsModelReader} from "../../src/same-as/SameAsModelReader";
import {describe} from "mocha";
import {CmsModelReader} from "../../src/cms/CmsModelReader";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";
import {ConcatenatingModelReader} from "../../src/ConcatenatingModelReader";
import {dummyModelSet} from "../dummyModelSet";
import {expect} from "chai";
import {SameAsWork} from "../../src/same-as/SameAsWork";
import {SameAsPerson} from "../../src/same-as/SameAsPerson";

describe("SameAsModelReader", () => {
  const dataset = datasetCoreToDataset(syntheticData);
  const modelReaders = [
    new CmsModelReader(dataset),
    new WikidataModelReader(dataset),
  ];
  const concatenatingModelReader = new ConcatenatingModelReader(modelReaders);
  const sut = new SameAsModelReader(modelReaders);

  it("should group CmsPersons with Wikidata people", () => {
    const allPeople = concatenatingModelReader.readNamedPeople({
      modelSet: dummyModelSet,
    });
    expect(allPeople).to.have.length(6);
    const groupedPeople = sut.readNamedPeople({modelSet: dummyModelSet});
    expect(groupedPeople).to.have.length(5);
    expect(
      groupedPeople.filter(person => person instanceof SameAsPerson)
    ).to.have.length(1);
  });

  it("should group CmsWorks with Wikidata works", () => {
    const allWorks = concatenatingModelReader.readWorks({
      modelSet: dummyModelSet,
    });
    expect(allWorks).to.have.length(13);
    const groupedWorks = sut.readWorks({modelSet: dummyModelSet});
    expect(groupedWorks).to.have.length(12);
    expect(
      groupedWorks.filter(work => work instanceof SameAsWork)
    ).to.have.length(1);
  });
});
