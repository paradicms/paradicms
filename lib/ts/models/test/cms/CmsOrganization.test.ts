import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikeOrganization} from "../behavesLikeOrganization";

describe("CmsOrganization", () => {
  const organization = testModelSet.organizationByIri(
    "http://example.com/organization4"
  )!;

  behavesLikeOrganization(organization);
});
