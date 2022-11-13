import {expect} from "chai";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {ModelSet, Text} from "../src";
import {testDataTrig} from "./testDataTrig";
import {parseIntoDataset} from "@paradicms/rdf";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

describe("Collection", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).collections[0];

  it("should get the collection's abstract", () => {
    expect(sut.abstract).to.be.instanceof(Text);
    const abstract: Text = sut.abstract as Text;
    expect(abstract.value).to.not.be.empty;
  });

  it("should get the collection's institution", () => {
    expect(sut.institution.uri).to.eq(sut.institutionUri);
  });

  it("should get the collection's title", () => {
    expect(sut.title).to.eq(sut.title);
  });

  it("should get the collection's URI", () => {
    expect(sut.uri).to.eq(sut.uri);
  });

  it("should get the collection's thumbnail", () => {
    const thumbnail = sut.thumbnail(THUMBNAIL_SELECTOR);
    expect(thumbnail).to.not.be.null;
    expect(thumbnail!.depictsUri).to.not.eq(sut.uri);
    expect(sut.works.some(work => work.uri === thumbnail!.depictsUri)).to.be
      .true;
  });
});
