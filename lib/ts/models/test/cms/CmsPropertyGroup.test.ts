import {describe} from "mocha";
import {behavesLikePropertyGroup} from "../behavesLikePropertyGroup";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireNonNull} from "@paradicms/utilities";

describe("CmsPropertyGroup", () => {
  const propertyGroup = requireNonNull(
    testCmsModelSet.propertyGroupByIri(
      "urn:paradicms_etl:pipeline:synthetic_data:property_group"
    )
  );

  behavesLikePropertyGroup(propertyGroup);
});
