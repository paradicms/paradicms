import {expect} from "chai";
import {describe} from "mocha";
import {testModelSet} from "../testModelSet";
import {requireNonNull} from "@paradicms/utilities";
import {CmsLocation} from "../../src/cms/CmsLocation";
import {behavesLikeLocation} from "../behavesLikeLocation";

describe("CmsLocation", () => {
  const location = requireNonNull(
    testModelSet.locationByIri("http://example.com/collection0/work0Location")
  );

  before(() => {
    expect(location).to.be.instanceof(CmsLocation);
  });

  behavesLikeLocation(location);
});
