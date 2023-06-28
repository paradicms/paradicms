import {describe} from "mocha";
import {behavesLikeConcept} from "../behavesLikeConcept";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {SkosConcept} from "../../src/skos/SkosConcept";

describe("SkosConcept", () => {
  const concept = requireNonNull(
    testModelSet.conceptByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:concept:0"
    )
  );

  before(() => {
    expect(concept).to.be.instanceof(SkosConcept);
  });

  behavesLikeConcept(concept);
});
