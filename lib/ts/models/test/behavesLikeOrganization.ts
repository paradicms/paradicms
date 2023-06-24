import {expect} from "chai";
import {it} from "mocha";
import {Organization} from "../src";
import {behavesLikeAgent} from "./behavesLikeAgent";

export const behavesLikeOrganization = (organization: Organization) => {
  it("should get the organization's images", () => {
    expect(organization.images).to.not.be.empty;
    expect(
      organization.thumbnail({targetDimensions: {height: 600, width: 600}})
    ).to.not.be.null;
  });

  it("should get the organization's label", () => {
    expect(organization.label).to.not.be.empty;
  });

  it("should get the organization's page", () => {
    expect(organization.page).to.not.be.empty;
  });

  behavesLikeAgent(organization);
};
