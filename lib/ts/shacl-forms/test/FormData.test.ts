import {expect} from "chai";
import {testFormData} from "./testFormData";
import {FormData} from "../src";

describe("FormData", () => {
  let sut: FormData;

  beforeEach(() => {
    sut = testFormData();
  });

  it("has one node type", () => {
    expect(sut.nodeTypes).to.have.length(1);
  });
});
