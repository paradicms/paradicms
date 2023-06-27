import {describe} from "mocha";
import {behavesLikeProperty} from "../behavesLikeProperty";
import {requireDefined} from "@paradicms/utilities";
import {expect} from "chai";
import {CmsProperty} from "../../src/cms/CmsProperty";
import {testModelSet} from "../testModelSet";

describe("CmsProperty", () => {
  const property = requireDefined(
    testModelSet.properties.find(property => property.filterable)
  );

  before(() => {
    expect(property).to.be.instanceof(CmsProperty);
  });

  behavesLikeProperty(property);
});
