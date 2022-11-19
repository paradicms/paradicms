import {expect} from "chai";
import {testForm} from "./testForm";
import {Form} from "../src";

describe("Form", () => {
  let sut: Form;

  beforeEach(() => {
    sut = testForm();
  });

  it("has one node type", () => {
    expect(sut.nodeTypes).to.have.length(1);
  });
});
