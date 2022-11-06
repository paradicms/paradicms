import {expect} from "@jest/globals";
import {Form} from "../../src/models/Form";
import {testForm} from "./testForm";

let sut: Form;

beforeEach(() => {
  sut = testForm();
});

test("has one node type", () => {
  expect(sut.nodeTypes).toHaveLength(1);
});
