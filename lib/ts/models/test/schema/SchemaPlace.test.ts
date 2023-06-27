import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {behavesLikeLocation} from "../behavesLikeLocation";
import {SchemaPlace} from "../../src/schema/SchemaPlace";

describe("SchemaPlace", () => {
  const location = requireNonNull(
    testModelSet.locationByIri("http://example.com/collection0/work1Location")
  );

  before(() => {
    expect(location).to.be.instanceof(SchemaPlace);
  });

  behavesLikeLocation(location);
});
