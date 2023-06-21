import {expect} from "chai";
import {imagePlaceholderSrc} from "../src";
import {testModelSet} from "./testModelSet";
import {describe} from "mocha";

describe("Image", () => {
  // sut should be an original image
  const sut = testModelSet.works[0].images.find(
    image => image.thumbnails.length === 0
  )!;

  it("should get image's dimensions", () => {
    expect(sut.exactDimensions).to.not.be.null;
    expect(sut.maxDimensions).to.be.null;
  });

  // it("should get image's rights", () => {
  //   expect(sut.rights).to.not.be.null;
  // });

  it("should get the image's src", () => {
    expect(sut.src).to.not.be.empty;
  });

  it("should generate a placeholder src", () => {
    expect(imagePlaceholderSrc({height: 200, width: 200})).to.not.be.empty;
  });

  it("should get a thumbnail", () => {
    expect(sut.thumbnail({targetDimensions: {height: 200, width: 200}})).to.not
      .be.null;
  });

  it("should get all thumbnails", () => {
    expect(sut.thumbnails).to.not.be.empty;
    for (const thumbnail of sut.thumbnails) {
      expect(thumbnail.thumbnails).to.be.empty;
    }
  });

  it("should get the label", () => {
    expect(sut.label).to.not.be.empty;
  });
});
