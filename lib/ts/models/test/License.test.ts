import {expect} from "chai";
import {testModelSet} from "./testModelSet";

describe("License", () => {
  const sut = testModelSet.licenseByUri(
    "http://creativecommons.org/licenses/nc/1.0/"
  );

  // it("should get the license's identifier", () => {
  //   expect(sut.identifier).to.not.be.empty;
  // });

  it("should get the license's label", () => {
    expect(sut.label).to.not.be.empty;
  });

  it("should get the license's uri", () => {
    expect(sut.uri).to.not.be.empty;
  });
});
