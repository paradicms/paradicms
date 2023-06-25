import {Text} from "../../src";
import {describe} from "mocha";
import {behavesLikeText} from "../behavesLikeText";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsText", () => {
  const work = requireNonNull(
    testCmsModelSet.workByIri("http://example.com/collection0/work2")
  );
  const text: Text = requireNonNull(work.description) as Text;

  behavesLikeText(text);
});
