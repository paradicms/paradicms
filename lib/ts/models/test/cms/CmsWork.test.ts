import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikeWork} from "../behavesLikeWork";
import {requireNonNull} from "@paradicms/utilities";
import {testCmsModelSet} from "./testCmsModelSet";

describe("CmsWork", () => {
  const work = requireNonNull(
    testCmsModelSet.workByIri("http://example.com/collection0/work2")
  );

  it("should get the work's Wikidata concept IRI", () => {
    expect(
      testModelSet.workByIri("http://example.com/collection0/work0")!
        .wikidataConceptIri
    ).to.eq("http://www.wikidata.org/entity/Q937690");
  });

  behavesLikeWork(work);
});
