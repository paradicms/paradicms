import {expect} from "chai";
import {ThumbnailSelector} from "../src/ThumbnailSelector";
import {Text} from "../src";
import {testModelSet} from "./testModelSet";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

describe("Collection", () => {
  const sut = testModelSet.collections[0];

  it("should get the collection's description", () => {
    expect(sut.description).to.be.instanceof(Text);
    const description: Text = sut.description as Text;
    expect(description.value).to.not.be.empty;
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
