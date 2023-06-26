import {describe} from "mocha";
import {behavesLikeImage} from "../behavesLikeImage";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {CmsImage} from "../../src/cms/CmsImage";

describe("CmsImage", () => {
  // sut should be an original image
  const image = testModelSet.works[0].images.find(
    image => image.thumbnails.length > 0
  )!;

  before(() => {
    expect(image).to.be.instanceof(CmsImage);
  });

  behavesLikeImage(image);
});
