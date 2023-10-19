import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaProperty} from "../../src/schema/SchemaProperty";
import {behavesLikeProperty} from "../behavesLikeProperty";
import {testModelSet} from "../testModelSet";

describe("SchemaProperty", () => {
  const property: SchemaProperty = requireNonNull(
    testModelSet.propertyByIri(schema.about)
  ) as SchemaProperty;

  before(() => {
    expect(property).to.be.instanceof(SchemaProperty);
  });

  behavesLikeProperty(property);
});
