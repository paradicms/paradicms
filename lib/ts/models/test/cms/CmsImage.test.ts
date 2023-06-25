import {describe} from "mocha";
import {behavesLikeImage} from "../behavesLikeImage";
import {testCmsModelSet} from "./testCmsModelSet";

describe("CmsImage", () => {
  // sut should be an original image
  const image = testCmsModelSet.works[0].images.find(
    image => image.thumbnails.length > 0
  )!;

  behavesLikeImage(image);
});
