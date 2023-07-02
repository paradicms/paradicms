import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {DcModelReader} from "../../src/dc/DcModelReader";

describe("DcModelReader", () => {
  const sut = new DcModelReader(syntheticData);

  it("should read at least one Collection", () => {
    expect(sut.readCollections({modelSet: dummyModelSet})).to.not.be.empty;
  });

  it("should read at least one Image", () => {
    expect(sut.readImages({modelSet: dummyModelSet})).to.not.be.empty;
  });

  it("should read no named Licenses", () => {
    expect(sut.readNamedLicenses({modelSet: dummyModelSet})).to.be.empty;
  });

  it("should read at least one named RightsStatements", () => {
    const rightsStatements = sut.readNamedRightsStatements({
      modelSet: dummyModelSet,
    });
    expect(rightsStatements).to.have.length(2);
    for (const rightsStatement of rightsStatements) {
      expect(rightsStatement.iris).not.to.be.empty;
      expect(rightsStatement.label).not.to.be.empty;
    }
  });

  it("should read at least one Work", () => {
    expect(sut.readWorks({modelSet: dummyModelSet})).to.not.be.empty;
  });
});
