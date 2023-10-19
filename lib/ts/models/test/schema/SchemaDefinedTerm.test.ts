import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaDefinedTerm} from "../../src/schema/SchemaDefinedTerm";
import {behavesLikeConcept} from "../behavesLikeConcept";
import {testModelSet} from "../testModelSet";

describe("SchemaDefinedTerm", () => {
  const concept = requireNonNull(
    testModelSet.conceptByIri(
      DataFactory.namedNode(
        "urn:paradicms:etl:pipeline:synthetic_data:concept:11"
      )
    )
  );

  before(() => {
    expect(concept).to.be.instanceof(SchemaDefinedTerm);
  });

  behavesLikeConcept(concept);
});
