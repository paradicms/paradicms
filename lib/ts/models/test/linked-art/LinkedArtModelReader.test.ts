import {syntheticData} from "@paradicms/test";
import {expect} from "chai";
import {dummyModelSet} from "../dummyModelSet";
import {describe} from "mocha";
import {LinkedArtModelReader} from "../../src/linked-art/LinkedArtModelReader";

describe("LinkedArtModelReader", () => {
  const sut = new LinkedArtModelReader(syntheticData);

  it("should read at least one Work", () => {
    expect(sut.readWorks({modelSet: dummyModelSet})).not.to.be.empty;
  });
});
