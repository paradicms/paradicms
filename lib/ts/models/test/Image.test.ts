import {expect} from "chai";
import {Image, ModelSet} from "../src";
import {syntheticData} from "@paradicms/test";

describe("Image", () => {
  // sut should be an original image
  const sut = ModelSet.fromDatasetCore(syntheticData).works[0].images.find(
    image => image.isOriginal
  )!;

  it("should get the image's original image", () => {
    expect(sut.originalImage.uri).to.eq(sut.uri);
  });

  it("should get derived images", () => {
    expect(sut.derivedImages).to.not.be.empty;
    for (const derivedImage of sut.derivedImages) {
      expect(derivedImage.originalImageUri).to.eq(sut.uri);
      expect(derivedImage.derivedImages).to.be.empty;
    }
  });

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
    expect(Image.placeholderSrc({height: 200, width: 200})).to.not.be.empty;
  });

  it("should get a thumbnail", () => {
    expect(sut.thumbnail({targetDimensions: {height: 200, width: 200}})).to.not
      .be.null;
  });

  it("should get the title", () => {
    expect(sut.title).to.not.be.empty;
  });

  it("should get the image's URI", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
