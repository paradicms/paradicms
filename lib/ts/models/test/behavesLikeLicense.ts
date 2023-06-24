import {expect} from "chai";
import {License} from "../src";
import {it} from "mocha";
import {behavesLikeModel} from "./behavesLikeModel";

export const behavesLikeLicense = (license: License) => {
  it("should get the license's label", () => {
    expect(license.label).to.not.be.empty;
  });

  it("should return a boolean from requiresAttribution", () => {
    expect(license.requiresAttribution).not.to.be.null;
  });

  behavesLikeModel(license);
};
