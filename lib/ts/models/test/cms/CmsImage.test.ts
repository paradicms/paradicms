import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikeImage} from "../behavesLikeImage";

describe("CmsImage", () => {
  // sut should be an original image
  const image = testModelSet.works[0].images.find(
    image => image.thumbnails.length > 0
  )!;

  behavesLikeImage(image);
});
