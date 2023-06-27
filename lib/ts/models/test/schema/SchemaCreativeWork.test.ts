import {describe} from "mocha";
import {behavesLikeWork} from "../behavesLikeWork";
import {requireNonNull} from "@paradicms/utilities";
import {testModelSet} from "../testModelSet";
import {SchemaCreativeWork} from "../../src/schema/SchemaCreativeWork";
import {expect} from "chai";
import {schema} from "@paradicms/vocabularies";

describe("SchemaCreativeWork", () => {
  const work = requireNonNull(
    testModelSet.workByIri("http://example.com/collection0/work3")
  );

  before(() => {
    expect(work).to.be.instanceof(SchemaCreativeWork);
  });

  behavesLikeWork(work, {
    literalProperty: schema.name,
    namedProperty: schema.spatial,
    textProperty: schema.description,
  });
});
