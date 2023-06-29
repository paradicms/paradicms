import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {DcModelReader} from "../../src/dc/DcModelReader";

describe("DcModelReader", () => {
  const sut = new DcModelReader(syntheticData);

  it("should read no named Licenses", () => {
    expect(sut.readNamedLicenses({modelSet: dummyModelSet})).to.be.empty;
  });

  it("should read no named RightsStatements", () => {
    expect(sut.readNamedRightsStatements({modelSet: dummyModelSet})).to.be
      .empty;
  });
});
