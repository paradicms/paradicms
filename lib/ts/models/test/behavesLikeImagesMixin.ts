import {it} from "mocha";
import {expect} from "chai";
import {ImagesMixin} from "../src/ImagesMixin";
import {behavesLikeImage} from "./behavesLikeImage";

export const behavesLikeImagesMixin = (imagesMixin: ImagesMixin) => {
  it("should have images that behave like images", () => {
    expect(imagesMixin.images).to.not.be.empty;
    for (const image of imagesMixin.images) {
      behavesLikeImage(image);
    }
  });

  it("should get a thumbnail", () => {
    const thumbnail = imagesMixin.thumbnail({
      targetDimensions: {height: 600, width: 600},
    });
    expect(thumbnail).to.not.be.null;
    behavesLikeImage(thumbnail!);
  });
};
