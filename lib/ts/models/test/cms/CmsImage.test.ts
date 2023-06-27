import {describe} from "mocha";
import {behavesLikeImage} from "../behavesLikeImage";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {CmsImage} from "../../src/cms/CmsImage";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsImage", () => {
  // sut should be an original image
  const image = requireNonNull(
    testModelSet.imageByIri("http://example.com/collection0/work2:Image0")
  );

  before(() => {
    expect(image).to.be.instanceof(CmsImage);
  });

  behavesLikeImage(image);
});
