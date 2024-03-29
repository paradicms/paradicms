import {it} from "mocha";
import {expect} from "chai";
import {ImagesMixin} from "../src/ImagesMixin";
import {behavesLikeOriginalImage} from "./behavesLikeOriginalImage";

export const behavesLikeImagesMixin = (imagesMixin: ImagesMixin) => {
  it("should have original images that behave like images", () => {
    expect(imagesMixin.images).to.not.be.empty;
    for (const image of imagesMixin.images) {
      behavesLikeOriginalImage(image);
      expect(image.thumbnails).to.not.be.empty; // Only "original" images
    }
  });
};
