import {expect} from "chai";
import {ModelSet} from "../src";
import {testDataTrig} from "./testDataTrig";
import {parseIntoDataset} from "@paradicms/rdf";

describe("Organization", () => {
  const sut = new ModelSet(parseIntoDataset(testDataTrig)).organizationByUri(
    "http://example.com/organization4"
  );

  (it("should get the organization's images", () => {
    expect(sut.images).to.not.be.empty;
    expect(sut.originalImages).to.not.be.empty;
    expect(sut.thumbnail({targetDimensions: {height: 600, width: 600}})).to.not
      .be.null;
  }) as any).timeout(5000);

  it("should get the organization's name", () => {
    expect(sut.name).to.not.be.empty;
  });

  it("should get the organization's page", () => {
    expect(sut.page).to.not.be.empty;
  });

  it("should get the organization's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
