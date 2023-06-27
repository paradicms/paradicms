import {describe} from "mocha";
import {CmsConcept} from "../../src/cms/CmsConcept";
import {behavesLikeConcept} from "../behavesLikeConcept";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";

describe("CmsConcept", () => {
  const concept: CmsConcept = requireNonNull(
    testModelSet.conceptByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
    )
  ) as CmsConcept;

  before(() => {
    expect(concept).to.be.instanceof(CmsConcept);
  });

  behavesLikeConcept(concept);
});
