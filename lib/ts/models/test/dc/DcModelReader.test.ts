import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {describe} from "mocha";
import {DcModelReader} from "../../src/dc/DcModelReader";
import {dummyModelSet} from "../dummyModelSet";

describe("DcModelReader", () => {
  const sut = new DcModelReader(syntheticData);

  it("should read at least one named License", () => {
    expect(sut.readLicenses({modelSet: dummyModelSet})).to.not.be.empty;
  });

  it("should read at least one named RightsStatements", () => {
    const rightsStatements = sut.readRightsStatements({
      modelSet: dummyModelSet,
    });
    expect(rightsStatements).to.not.be.empty;
    for (const rightsStatement of rightsStatements) {
      expect(rightsStatement.label).not.to.be.empty;
    }
  });
});
