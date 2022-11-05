import {expect} from "@jest/globals";
import {Form} from "../../src/models/Form";
import {testForm} from "./testForm";
import {DataFactory} from "n3";

let sut: Form | undefined;

beforeEach(() => {
  sut = testForm();
});

test("add a node", () => {
  const node = sut!.addNode({
    dataGraphNode: DataFactory.namedNode("urn:paradicms:testNode"),
    rdfType: DataFactory.namedNode("http://schema.org/Person"),
  });
  expect(node.shapes).not.toHaveLength(0);
});

test("finds existing nodes", () => {
  expect(sut!.nodes).toHaveLength(1);
});
