import {describe} from "mocha";
import {behavesLikeOriginalImage} from "../behavesLikeOriginalImage";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {requireNonNull} from "@paradicms/utilities";
import {DcImage} from "../../src/dc/DcImage";

describe("DcImage", () => {
  // sut should be an original image
  const image = requireNonNull(
    testModelSet.imageByIri("http://example.com/collection0/work2:Image0")
  );

  before(() => {
    expect(image).to.be.instanceof(DcImage);
  });

  behavesLikeOriginalImage(image);
});
