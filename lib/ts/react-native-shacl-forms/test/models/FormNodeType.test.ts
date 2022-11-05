import {expect} from "@jest/globals";
import {DataFactory} from "n3";
import {testForm} from "./testForm";
import {FormNodeType} from "../../src/models/FormNodeType";

let sut: FormNodeType | undefined;

beforeEach(() => {
  sut = testForm().nodeTypes[0];
});

test("has expected RDF type", () => {
  expect(
    sut!.rdfType.equals(DataFactory.namedNode("http://schema.org/Person"))
  ).toBeTruthy();
});

test("has one existing node", () => {
  expect(sut!.nodes).toHaveLength(1);
});

test("add a node and have two nodes", () => {
  sut!.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
  expect(sut!.nodes).toHaveLength(2);
});

test("add a node twice and still have two nodes", () => {
  sut!.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
  expect(sut!.nodes).toHaveLength(2);
  sut!.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
  expect(sut!.nodes).toHaveLength(2);
});
