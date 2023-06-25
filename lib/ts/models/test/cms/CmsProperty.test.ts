import {describe} from "mocha";
import {behavesLikeProperty} from "../behavesLikeProperty";
import {testCmsModelSet} from "./testCmsModelSet";
import {requireDefined} from "@paradicms/utilities";

describe("CmsProperty", () => {
  const property = requireDefined(
    testCmsModelSet.properties.find(property => property.filterable)
  );

  behavesLikeProperty(property);
});
