import {Text} from "../../src";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikeText} from "../behavesLikeText";

describe("CmsText", () => {
  const work = testModelSet.workByIri("http://example.com/collection0/work2")!;
  const text: Text = work.description! as Text;

  behavesLikeText(text);
});
