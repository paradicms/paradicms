import {datasetCoreToDataset} from "@paradicms/rdf";
import {syntheticData} from "@paradicms/test";
import {SameAsModelReader} from "../../src/same-as/SameAsModelReader";
import {describe} from "mocha";
import {CmsModelReader} from "../../src/cms/CmsModelReader";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";
import {ConcatenatingModelReader} from "../../src/ConcatenatingModelReader";
import {expect} from "chai";
import {SameAsWork} from "../../src/same-as/SameAsWork";
import {SameAsPerson} from "../../src/same-as/SameAsPerson";
import {DatasetBackedModelSet} from "../../src/DatasetBackedModelSet";

describe("SameAsModelReader", () => {
  const dataset = datasetCoreToDataset(syntheticData);
  const modelReaders = [
    new CmsModelReader(dataset),
    new WikidataModelReader(dataset),
  ];
  const concatenatingModelReader = new ConcatenatingModelReader(modelReaders);
  const sut = new SameAsModelReader(modelReaders);
  const modelSet = new DatasetBackedModelSet(dataset, concatenatingModelReader);

  it("should group CmsPersons with Wikidata people", () => {
    const allPeople = concatenatingModelReader.readNamedPeople({
      modelSet,
    });
    expect(allPeople).to.have.length(6);
    const groupedPeople = sut.readNamedPeople({modelSet});
    expect(groupedPeople).to.have.length(5);
    expect(
      groupedPeople.filter(person => person instanceof SameAsPerson)
    ).to.have.length(1);
  });

  it("should group CmsWorks with Wikidata works", () => {
    const allWorks = concatenatingModelReader.readWorks({
      modelSet,
    });
    expect(allWorks).to.have.length(13);
    const groupedWorks = sut.readWorks({modelSet});
    expect(groupedWorks).to.have.length(12);
    expect(
      groupedWorks.filter(work => work instanceof SameAsWork)
    ).to.have.length(1);
  });
});
