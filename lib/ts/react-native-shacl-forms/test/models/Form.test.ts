import {expect} from "@jest/globals";
import {Form} from "../../../shacl-forms/src/Form";
import {testForm} from "./testForm";

let sut: Form;

beforeEach(() => {
  sut = testForm();
});

test("has one node type", () => {
  expect(sut.nodeTypes).toHaveLength(1);
});
