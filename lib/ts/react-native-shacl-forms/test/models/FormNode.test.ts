import {testForm} from "./testForm";
import {FormNode} from "../../src/models/FormNode";
import {FormNodeType} from "../../src/models/FormNodeType";
import {DataFactory} from "n3";

let node: FormNode;
let nodeType: FormNodeType;

beforeEach(() => {
  nodeType = testForm().nodeTypes.find(testNodeType =>
    testNodeType.rdfType.equals(
      DataFactory.namedNode("http://schema.org/Person")
    )
  )!;
  node = nodeType.nodes[0];
});

test("delete existing node", () => {
  expect(nodeType.nodes).toHaveLength(1);
  expect(nodeType.dataGraph.size).toEqual(8);

  node.delete();

  expect(nodeType.nodes).toHaveLength(0);
  expect(nodeType.dataGraph.size).not.toEqual(0);
  expect(nodeType.dataGraph.size).toEqual(2);
});

test("get properties", () => {
  const properties = node.properties;
  expect(properties).toHaveLength(4);
});
