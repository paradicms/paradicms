import {expect} from "chai";
import {testFormDataFactory} from "./testFormDataFactory";
import {FormData} from "../src";

describe("FormData", () => {
  let sut: FormData;

  beforeEach(() => {
    sut = testFormDataFactory();
  });

  it("has one node type", () => {
    expect(sut.nodeTypes).to.have.length(1);
  });
});
