import {expect} from "@jest/globals";
import {DataFactory} from "n3";
import {testForm} from "./testForm";
import {FormNodeType} from "../../src/models/FormNodeType";
import {schema} from "@paradicms/vocabularies";

let sut: FormNodeType;

beforeEach(() => {
  sut = testForm().nodeTypes[0];
});

test("has expected rdf type", () => {
  expect(sut.rdfType.equals(schema.Person)).toBeTruthy();
});

test("has one existing node", () => {
  expect(sut.nodes).toHaveLength(1);
});

test("add a node and have two nodes", () => {
  sut.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
  expect(sut.nodes).toHaveLength(2);
});

test("add a node twice and still have two nodes", () => {
  sut.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
  expect(sut.nodes).toHaveLength(2);
  sut.addNode(DataFactory.namedNode("urn:example:JohnDoe"));
  expect(sut.nodes).toHaveLength(2);
});
