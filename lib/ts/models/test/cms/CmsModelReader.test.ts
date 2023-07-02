import {CmsModelReader} from "../../src/cms/CmsModelReader";
import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";

describe("CmsModelReader", () => {
  const sut = new CmsModelReader(syntheticData);

  it("should read at least one PropertyGroup", () => {
    expect(sut.readPropertyGroups({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
