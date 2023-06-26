import {describe} from "mocha";
import {behavesLikeImage} from "../behavesLikeImage";
import {testModelSet} from "../testModelSet";
import {expect} from "chai";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaImageObject} from "../../src/schema/SchemaImageObject";

describe("SchemaImageObject", () => {
  // sut should be an original image
  const image = requireNonNull(
    testModelSet.imageByIri("http://example.com/collection0/work3:Image1")
  );

  before(() => {
    expect(image).to.be.instanceof(SchemaImageObject);
  });

  behavesLikeImage(image);
});
