import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {CreativeCommonsModelReader} from "../../src/creative-commons/CreativeCommonsModelReader";

describe("CreativeCommonsModelReader", () => {
  const sut = new CreativeCommonsModelReader(syntheticData);

  it("should read license", () => {
    const licenses = sut.readNamedLicenses({modelSet: dummyModelSet});
    expect(licenses).to.have.length(3);
    for (const license of licenses) {
      expect(license.iris).not.to.be.empty;
      expect(license.label).not.to.be.empty;
    }
  });
});
