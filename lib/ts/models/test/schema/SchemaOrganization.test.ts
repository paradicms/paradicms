import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {describe} from "mocha";
import {SchemaOrganization} from "../../src/schema/SchemaOrganization";
import {behavesLikeOrganization} from "../behavesLikeOrganization";
import {testModelSet} from "../testModelSet";

describe("SchemaOrganization", () => {
  const organization = requireNonNull(
    testModelSet.organizationByIri(
      DataFactory.namedNode("http://example.com/organization3")
    )
  );

  before(() => {
    expect(organization).to.be.instanceof(SchemaOrganization);
  });

  behavesLikeOrganization(organization);
});
