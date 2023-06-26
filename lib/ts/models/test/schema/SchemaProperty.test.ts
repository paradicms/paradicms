import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {SchemaProperty} from "../../src/schema/SchemaProperty";
import {behavesLikeProperty} from "../behavesLikeProperty";

describe("SchemaProperty", () => {
  const property: SchemaProperty = requireNonNull(
    testModelSet.propertyByIri(schema.name.value)
  ) as SchemaProperty;

  before(() => {
    expect(property).to.be.instanceof(SchemaProperty);
  });

  behavesLikeProperty(property);
});
