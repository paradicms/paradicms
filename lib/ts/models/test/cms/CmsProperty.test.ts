import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {behavesLikeProperty} from "../behavesLikeProperty";

describe("CmsProperty", () => {
  const property = testModelSet.properties.find(
    property => property.filterable
  )!;

  behavesLikeProperty(property);
});
