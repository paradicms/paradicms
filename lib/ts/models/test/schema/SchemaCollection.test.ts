import {expect} from "chai";
import {Text} from "../../src";
import {ThumbnailSelector} from "../../src/ThumbnailSelector";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {SchemaCollection} from "../../src/schema/SchemaCollection";

const THUMBNAIL_SELECTOR: ThumbnailSelector = {
  targetDimensions: {height: 200, width: 200},
};

describe("SchemaCollection", () => {
  const sut: SchemaCollection = testModelSet.collections.find(
    collection => collection instanceof SchemaCollection
  )! as SchemaCollection;

  it("should get the collection's description", () => {
    expect(sut.description).not.to.be.null;
    expect(sut.description).not.to.be.instanceof(String);
    const description: Text = sut.description as Text;
    expect(description.value).to.not.be.empty;
  });

  it("should get the collection's label", () => {
    expect(sut.label).to.eq(sut.label);
  });

  it("should get the collection's thumbnail", () => {
    const thumbnail = sut.thumbnail(THUMBNAIL_SELECTOR);
    expect(thumbnail).to.not.be.null;
    expect(
      sut.iris.some(collectionIri => collectionIri === thumbnail!.depictsIri)
    ).to.be.false;
    expect(
      sut.works.some(work =>
        work.iris.some(workIri => workIri === thumbnail!.depictsIri)
      )
    ).to.be.true;
  });
});
