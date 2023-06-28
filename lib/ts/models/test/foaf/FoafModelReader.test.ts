import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {FoafModelReader} from "../../src/foaf/FoafModelReader";

describe("FoafModelReader", () => {
  const sut = new FoafModelReader(syntheticData);

  it("should read at least one named Organization", () => {
    expect(sut.readNamedOrganizations({modelSet: dummyModelSet})).not.to.be
      .empty;
  });

  it("should read at least one named Person", () => {
    expect(sut.readNamedPeople({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
