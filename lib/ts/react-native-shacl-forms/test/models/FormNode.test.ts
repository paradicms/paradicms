import {expect} from "@jest/globals";
import {DataFactory} from "n3";
import {testForm} from "./testForm";
import {FormNode} from "../../src/models/FormNode";

let sut: FormNode | undefined;

beforeEach(() => {
  sut = testForm().nodes[0];
});

test("has expected type", () => {
  expect(
    sut!.type.equals(DataFactory.namedNode("http://schema.org/Person"))
  ).toBeTruthy();
});
