import {testForm} from "./testForm";
import {FormNode} from "../../src/models/FormNode";
import {FormNodeType} from "../../src/models/FormNodeType";

let node: FormNode | undefined;
let nodeType: FormNodeType | undefined;

beforeEach(() => {
  nodeType = testForm().nodeTypes[0];
  node = nodeType.nodes[0];
});

test("delete existing node", () => {
  expect(nodeType!.nodes).toHaveLength(1);
  expect(
    nodeType!.form.dataGraph.store.countQuads(null, null, null, null)
  ).toEqual(8);

  node!.delete();

  expect(nodeType!.nodes).toHaveLength(0);
  expect(
    nodeType!.form.dataGraph.store.countQuads(null, null, null, null)
  ).not.toEqual(0);
  expect(
    nodeType!.form.dataGraph.store.countQuads(null, null, null, null)
  ).toEqual(2);
});
