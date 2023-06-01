import {expect} from "chai";
import {testModelSet} from "./testModelSet";

describe("Organization", () => {
  const sut = testModelSet.organizationByIri(
    "http://example.com/organization4"
  );

  it("should get the organization's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.originalImages).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  });

  it("should get the organization's label", () => {
    expect(sut.label).to.not.be.empty;
  });

  it("should get the organization's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the organization's iri", () => {
    expect(sut.iri).to.not.be.empty;
  });
});
