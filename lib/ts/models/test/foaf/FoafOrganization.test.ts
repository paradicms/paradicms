import {describe} from "mocha";
import {behavesLikeOrganization} from "../behavesLikeOrganization";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {FoafOrganization} from "../../src/foaf/FoafOrganization";

describe("FoafOrganization", () => {
  const organization = requireNonNull(
    testModelSet.organizationByIri("http://example.com/organization4")
  );

  before(() => {
    expect(organization).to.be.instanceof(FoafOrganization);
  });

  behavesLikeOrganization(organization);
});
