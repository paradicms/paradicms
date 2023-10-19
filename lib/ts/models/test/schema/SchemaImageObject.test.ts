import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaImageObject} from "../../src/schema/SchemaImageObject";
import {behavesLikeOriginalImage} from "../behavesLikeOriginalImage";
import {testModelSet} from "../testModelSet";

describe("SchemaImageObject", () => {
  // sut should be an original image
  const image = requireNonNull(
    testModelSet.imageByIri(
      DataFactory.namedNode("http://example.com/collection0/work3:Image1")
    )
  );

  before(() => {
    expect(image).to.be.instanceof(SchemaImageObject);
  });

  behavesLikeOriginalImage(image);
});
