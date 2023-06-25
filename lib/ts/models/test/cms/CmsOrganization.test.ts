import {describe} from "mocha";
import {behavesLikeOrganization} from "../behavesLikeOrganization";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsOrganization", () => {
  const organization = requireNonNull(
    testCmsModelSet.organizationByIri("http://example.com/organization4")
  );

  behavesLikeOrganization(organization);
});
