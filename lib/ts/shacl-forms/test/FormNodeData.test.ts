import {expect} from "chai";
import {testFormData} from "./testFormData";
import {schema} from "@paradicms/vocabularies";
import {FormNodeData, FormNodeTypeData} from "../src";
import {BlankNode} from "@rdfjs/types";

describe("FormNodeData", () => {
  let addressFormNode: FormNodeData;
  let personFormNode: FormNodeData;
  let personFormNodeType: FormNodeTypeData;

  beforeEach(() => {
    personFormNodeType = testFormData().nodeTypes.find(testNodeType =>
      testNodeType.rdfType.equals(schema.Person)
    )!;
    personFormNode = personFormNodeType.nodes[0];
    const addressFormProperty = personFormNode.properties.find(property =>
      property.path.equals(schema.address)
    )!;
    expect(addressFormProperty).not.to.be.undefined;
    addressFormNode = new FormNodeData({
      dataGraph: personFormNode.dataGraph,
      dataGraphNode: addressFormProperty.values.find(
        value => value.termType === "BlankNode"
      )! as BlankNode,
      shape: addressFormProperty.shape.nodeShapes[0],
      shapesGraph: personFormNode.shapesGraph,
    });
  });

  it("should delete an existing person node", () => {
    expect(personFormNodeType.nodes).to.have.length(1);
    expect(personFormNodeType.dataGraph.size).to.eq(10);

    personFormNode.delete();

    expect(personFormNodeType.nodes).to.have.length(0);
    expect(personFormNodeType.dataGraph.size).not.to.eq(0);
    expect(personFormNodeType.dataGraph.size).to.eq(2);
  });

  it("should get properties of a person NamedNode", () => {
    const properties = personFormNode.properties;
    expect(properties).to.have.length(4);
  });

  it("should get properties of an address BlankNode", () => {
    const properties = addressFormNode.properties;
    expect(properties).to.have.length(2);
  });
});
