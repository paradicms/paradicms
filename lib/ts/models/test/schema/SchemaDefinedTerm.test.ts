import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaDefinedTerm} from "../../src/schema/SchemaDefinedTerm";
import {behavesLikeConcept} from "../behavesLikeConcept";

describe("SchemaDefinedTerm", () => {
  const concept = requireNonNull(
    testModelSet.conceptByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:concept:81"
    )
  );

  before(() => {
    expect(concept).to.be.instanceof(SchemaDefinedTerm);
  });

  behavesLikeConcept(concept);
});
