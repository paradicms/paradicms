import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {Text} from "../../src";
import {SchemaTextObject} from "../../src/schema/SchemaTextObject";
import {behavesLikeText} from "../behavesLikeText";
import {testModelSet} from "../testModelSet";

describe("SchemaTextObject", () => {
  const work = requireNonNull(
    testModelSet.workByIri(
      DataFactory.namedNode("http://example.com/collection0/work1")
    )
  );
  const text: Text = requireNonNull(work.description) as Text;

  before(() => {
    expect(text).to.be.instanceof(SchemaTextObject);
  });

  behavesLikeText(text);
});
