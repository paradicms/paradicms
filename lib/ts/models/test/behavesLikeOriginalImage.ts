import {expect} from "chai";
import {it} from "mocha";
import {Image, ImageDimensions, imagePlaceholderSrc} from "../src";
import {behavesLikeModel} from "./behavesLikeModel";
import {behavesLikeRightsMixin} from "./behavesLikeRightsMixin";

export const behavesLikeOriginalImage = (image: Image) => {
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
    const allTargetDimensions: ImageDimensions[] = [
      {height: 200, width: 200},
      {height: 400, width: 400},
      {height: 600, width: 600},
      {height: 800, width: 800},
    ];
    for (const targetDimensions of allTargetDimensions) {
      const thumbnail = image.thumbnail({
        maxDimensions: targetDimensions,
        targetDimensions,
      });
      expect(thumbnail).not.to.be.null;
      expect(thumbnail!.exactDimensions).to.deep.eq(targetDimensions);
    }
  });

  it("should get all thumbnails", () => {
    expect(image.thumbnails).to.have.length(4);
    for (const thumbnail of image.thumbnails) {
      expect(thumbnail.thumbnails).to.be.empty;
    }
  });

  it("should get the label", () => {
    expect(image.label).to.not.be.empty;
  });

  it("should get the src", () => {
    expect(image.src).not.to.be.null;
    expect(image.src!.startsWith("https://paradicms.org/img/synthetic/")).to.be
      .true;
  });

  behavesLikeModel(image);
  behavesLikeRightsMixin(image, {
    requireLicense: true,
    requireRightsHolders: true,
    requireRightsStatement: true,
  });
};
