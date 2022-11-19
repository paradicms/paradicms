import {expect} from "chai";
import {testForm} from "./testForm";
import {schema} from "@paradicms/vocabularies";
import {FormNode, FormNodeType} from "../src";

describe("FormNode", () => {
  let node: FormNode;
  let nodeType: FormNodeType;

  beforeEach(() => {
    nodeType = testForm().nodeTypes.find(testNodeType =>
      testNodeType.rdfType.equals(schema.Person)
    )!;
    node = nodeType.nodes[0];
  });

  it("should delete an existing node", () => {
    expect(nodeType.nodes).to.have.length(1);
    expect(nodeType.dataGraph.size).to.eq(9);

    node.delete();

    expect(nodeType.nodes).to.have.length(0);
    expect(nodeType.dataGraph.size).not.to.eq(0);
    expect(nodeType.dataGraph.size).to.eq(2);
  });

  it("should get properties", () => {
    const properties = node.properties;
    expect(properties).to.have.length(4);
  });
});
