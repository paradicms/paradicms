import {RightsMixin} from "../src";
import {it} from "mocha";
import {behavesLikeAgent} from "./behavesLikeAgent";
import {behavesLikeLicense} from "./behavesLikeLicense";
import {behavesLikeRightsStatement} from "./behavesLikeRightsStatement";
import {expect} from "chai";

export const behavesLikeRightsMixin = (
  rightsMixin: RightsMixin,
  options?: {
    requireContributors?: boolean;
    requireCreators?: boolean;
    requireLicense?: boolean;
    requireRightsHolders?: boolean;
    requireRightsStatement?: boolean;
  }
) => {
  it("should have contributors that behave like agents", () => {
    if (options?.requireContributors) {
      expect(rightsMixin.contributors).to.not.be.empty;
    }
    for (const contributor of rightsMixin.contributors) {
      behavesLikeAgent(contributor);
    }
  });

  it("should have creators that behave like agents", () => {
    if (options?.requireCreators) {
      expect(rightsMixin.creators).to.not.be.empty;
    }
    for (const creator of rightsMixin.creators) {
      behavesLikeAgent(creator);
    }
  });

  it("should have a license that behaves like a license", () => {
    if (options?.requireLicense) {
      expect(rightsMixin.license).to.not.be.null;
    }
    if (rightsMixin.license) {
      behavesLikeLicense(rightsMixin.license);
    }
  });

  it("should have rights holders that behave like agents", () => {
    if (options?.requireRightsHolders) {
      expect(rightsMixin.rightsHolders).to.not.be.empty;
    }
    for (const rightsHolder of rightsMixin.rightsHolders) {
      behavesLikeAgent(rightsHolder);
    }
  });

  it("should have a rights statement that behaves like a rights statement", () => {
    if (options?.requireRightsStatement) {
      expect(rightsMixin.rightsStatement).to.not.be.null;
    }
    if (rightsMixin.rightsStatement) {
      behavesLikeRightsStatement(rightsMixin.rightsStatement);
    }
  });
};
