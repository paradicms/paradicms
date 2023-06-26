import {Text} from "../../src";
import {describe} from "mocha";
import {behavesLikeText} from "../behavesLikeText";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {SchemaTextObject} from "../../src/schema/SchemaTextObject";

describe("SchemaTextObject", () => {
  const work = requireNonNull(
    testModelSet.workByIri("http://example.com/collection0/work1")
  );
  const text: Text = requireNonNull(work.description) as Text;

  before(() => {
    expect(text).to.be.instanceof(SchemaTextObject);
  });

  behavesLikeText(text);
});
