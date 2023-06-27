import {describe} from "mocha";
import {behavesLikeOrganization} from "../behavesLikeOrganization";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {SchemaOrganization} from "../../src/schema/SchemaOrganization";

describe("SchemaOrganization", () => {
  const organization = requireNonNull(
    testModelSet.organizationByIri("http://example.com/organization3")
  );

  before(() => {
    expect(organization).to.be.instanceof(SchemaOrganization);
  });

  behavesLikeOrganization(organization);
});
