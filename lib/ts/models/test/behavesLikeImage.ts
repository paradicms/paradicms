import {expect} from "chai";
import {Image, imagePlaceholderSrc} from "../src";
import {it} from "mocha";
import {behavesLikeNamedModel} from "./behavesLikeNamedModel";
import {behavesLikeRightsMixin} from "./behavesLikeRightsMixin";

export const behavesLikeImage = (image: Image) => {
  it("should get image's dimensions", () => {
    expect(image.exactDimensions).to.not.be.null;
    expect(image.maxDimensions).to.be.null;
  });

  // it("should get image's rights", () => {
  //   expect(image.rights).to.not.be.null;
  // });

  it("should get the image's src", () => {
    expect(image.src).to.not.be.empty;
  });

  it("should generate a placeholder src", () => {
    expect(imagePlaceholderSrc({height: 200, width: 200})).to.not.be.empty;
  });

  it("should get a thumbnail", () => {
    expect(image.thumbnail({targetDimensions: {height: 200, width: 200}})).to
      .not.be.null;
  });

  it("should get all thumbnails", () => {
    expect(image.thumbnails).to.not.be.empty;
    for (const thumbnail of image.thumbnails) {
      expect(thumbnail.thumbnails).to.be.empty;
    }
  });

  it("should get the label", () => {
    expect(image.label).to.not.be.empty;
  });

  it("should get the src", () => {
    expect(image.src).not.to.be.null;
    expect(image.src!.startsWith("https://paradicms.org/img/placeholder/")).to
      .be.true;
  });

  behavesLikeNamedModel(image);
  behavesLikeRightsMixin(image, {
    requireLicense: true,
    requireRightsHolders: true,
    requireRightsStatement: true,
  });
};
