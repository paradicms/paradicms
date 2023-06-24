import {expect} from "chai";
import {testModelSet} from "../testModelSet";
import {describe} from "mocha";
import {CreativeCommonsLicense} from "../../src/creative-commons/CreativeCommonsLicense";
import {behavesLikeLicense} from "../behavesLikeLicense";

describe("CreativeCommonsLicense", () => {
  const nc_1_0: CreativeCommonsLicense = testModelSet.licenseByIri(
    "http://creativecommons.org/licenses/nc/1.0/"
  )! as CreativeCommonsLicense;
  const pd: CreativeCommonsLicense = testModelSet.licenseByIri(
    "http://creativecommons.org/publicdomain/mark/1.0/"
  )! as CreativeCommonsLicense;

  // it("should get the license's identifier", () => {
  //   expect(sut.identifier).to.not.be.empty;
  // });

  it("should get requires attribution", () => {
    expect(nc_1_0.requiresAttribution).to.be.true;
    expect(pd.requiresAttribution).to.be.false;
  });

  it("should get the license's title", () => {
    expect(nc_1_0.title).to.not.be.empty;
  });

  behavesLikeLicense(nc_1_0);
});
