import {describe} from "mocha";
import {behavesLikeOrganization} from "../behavesLikeOrganization";
import {requireNonNull} from "@paradicms/utilities";
import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {CmsOrganization} from "../../src/cms/CmsOrganization";

describe("CmsOrganization", () => {
  const organization = requireNonNull(
    testModelSet.organizationByIri("http://example.com/organization4")
  );

  before(() => {
    expect(organization).to.be.instanceof(CmsOrganization);
  });

  behavesLikeOrganization(organization);
});
