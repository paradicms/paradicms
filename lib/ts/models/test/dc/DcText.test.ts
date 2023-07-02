import {Text} from "../../src";
import {describe} from "mocha";
import {behavesLikeText} from "../behavesLikeText";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {DcText} from "../../src/dc/DcText";

describe("DcText", () => {
  const work = requireNonNull(
    testModelSet.workByIri("http://example.com/collection0/work2")
  );
  const text: Text = requireNonNull(work.description) as Text;

  before(() => {
    expect(text).to.be.instanceof(DcText);
  });

  behavesLikeText(text);
});
