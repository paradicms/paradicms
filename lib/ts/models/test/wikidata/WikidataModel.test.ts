import {describe} from "mocha";
import {WikidataModelReader} from "../../src/wikidata/WikidataModelReader";
import {syntheticData} from "@paradicms/test";
import {WikidataModel} from "../../src/wikidata/WikidataModel";
import {ModelSetFactory} from "../../src";
import {expect} from "chai";
import {WikidataWork} from "../../src/wikidata/WikidataWork";
import {SchemaImageObject} from "../../src/schema/SchemaImageObject";

describe("WikidataModel", () => {
  let sut: WikidataModel;

  before(() => {
    const modelSet = ModelSetFactory.fromDataset(syntheticData);
    const works = new WikidataModelReader(syntheticData).readWorks({modelSet});
    expect(works).to.have.length(1);
    sut = works[0] as WikidataWork;
  });

  it("should return images from Wikidata", () => {
    expect(sut.images).to.have.length(1);
    const image = sut.images[0];
    expect(image).to.be.instanceof(SchemaImageObject);
    const concreteImage = image as SchemaImageObject;
    expect(concreteImage.iri).to.eq(
      "http://commons.wikimedia.org/wiki/Special:FilePath/Pilot%20ACE%20computer-2.jpg"
    );
  });
});
