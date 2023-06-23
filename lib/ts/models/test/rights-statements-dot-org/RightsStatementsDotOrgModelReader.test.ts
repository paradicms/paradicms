import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {RightsStatementsDotOrgModelReader} from "../../src/rights-statements-dot-org/RightsStatementsDotOrgModelReader";

describe("RightsStatementsDotOrgModelReader", () => {
  const sut = new RightsStatementsDotOrgModelReader(syntheticData);

  it("should read rights statements", () => {
    const rightsStatements = sut.readNamedRightsStatements({
      modelSet: dummyModelSet,
    });
    expect(rightsStatements).to.have.length(2);
    for (const rightsStatement of rightsStatements) {
      expect(rightsStatement.iris).not.to.be.empty;
      expect(rightsStatement.label).not.to.be.empty;
    }
  });
});
