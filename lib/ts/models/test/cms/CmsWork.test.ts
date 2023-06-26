import {expect} from "chai";
import {describe} from "mocha";
import {behavesLikeWork} from "../behavesLikeWork";
import {requireNonNull} from "@paradicms/utilities";
import {testModelSet} from "../testModelSet";
import {CmsWork} from "../../src/cms/CmsWork";
import {dcterms} from "@paradicms/vocabularies";

describe("CmsWork", () => {
  const work = requireNonNull(
    testModelSet.workByIri("http://example.com/collection0/work2")
  );

  before(() => {
    expect(work).to.be.instanceof(CmsWork);
  });

  it("should get the work's Wikidata concept IRI", () => {
    expect(
      testModelSet.workByIri("http://example.com/collection0/work0")!
        .wikidataConceptIri
    ).to.eq("http://www.wikidata.org/entity/Q937690");
  });

  behavesLikeWork(work, {
    literalProperty: dcterms.title,
    namedProperty: dcterms.subject,
    textProperty: dcterms.description,
  });
});
