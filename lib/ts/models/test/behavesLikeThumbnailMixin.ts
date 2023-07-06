import {it} from "mocha";
import {expect} from "chai";
import {ThumbnailMixin} from "../src/ThumbnailMixin";

export const behavesLikeThumbnailMixin = (thumbnailMixin: ThumbnailMixin) => {
  it("should get a thumbnail", () => {
    const thumbnail = thumbnailMixin.thumbnail({
      targetDimensions: {height: 600, width: 600},
    });
    expect(thumbnail).to.not.be.null;
  });
};
