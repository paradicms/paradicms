import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaCreativeWork} from "../../src/schema/SchemaCreativeWork";
import {behavesLikeWork} from "../behavesLikeWork";
import {testModelSet} from "../testModelSet";

describe("SchemaCreativeWork", () => {
  const work = requireNonNull(
    testModelSet.workByIri(
      DataFactory.namedNode("http://example.com/collection0/work3")
    )
  );

  before(() => {
    expect(work).to.be.instanceof(SchemaCreativeWork);
  });

  behavesLikeWork(work, {
    literalProperty: schema.name,
    namedProperty: schema.about,
    textProperty: schema.description,
  });
});
