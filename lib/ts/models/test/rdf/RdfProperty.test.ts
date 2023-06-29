import {describe} from "mocha";
import {behavesLikeProperty} from "../behavesLikeProperty";
import {requireDefined} from "@paradicms/utilities";
import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {RdfProperty} from "../../src/rdf/RdfProperty";

describe("RdfProperty", () => {
  const property = requireDefined(
    testModelSet.properties.find(property => property.filterable)
  );

  before(() => {
    expect(property).to.be.instanceof(RdfProperty);
  });

  behavesLikeProperty(property);
});
