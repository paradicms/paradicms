import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaPlace} from "../../src/schema/SchemaPlace";
import {behavesLikeLocation} from "../behavesLikeLocation";
import {testModelSet} from "../testModelSet";

describe("SchemaPlace", () => {
  const location = requireNonNull(
    testModelSet.locationByIri(
      DataFactory.namedNode("http://example.com/collection0/work3Location")
    )
  );

  before(() => {
    expect(location).to.be.instanceof(SchemaPlace);
  });

  behavesLikeLocation(location);
});
