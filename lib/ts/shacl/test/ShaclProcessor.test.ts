import {expect} from "chai";
import {FocusNode, NodeShape, PropertyShape, ShapesGraph} from "../src";
import {ShaclProcessor} from "../src/ShaclProcessor";
import {DataFactory} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {
  invalidTestDataGraph,
  testShapesGraph,
  validTestDataGraph,
} from "@paradicms/test";
import {describe} from "mocha";

describe("ShaclProcessor", () => {
  let shapesGraph: ShapesGraph;

  before(() => {
    shapesGraph = ShapesGraph.fromDataset(testShapesGraph);
  });

  it("should get the node shapes for a given rdf:type", () => {
    const nodeShapes: NodeShape[] = [];
    new ShaclProcessor({
      dataGraph: validTestDataGraph,
      shapesGraph,
    }).someRdfTypeNodeShapes(nodeShape => {
      nodeShapes.push(nodeShape);
      return false;
    }, schema.Person);
    expect(nodeShapes).to.have.length(1);
  });

  it("should get the property shapes for a focus node that has them", () => {
    const propertyShapes: PropertyShape[] = [];
    new ShaclProcessor({
      dataGraph: validTestDataGraph,
      shapesGraph,
    }).someFocusNodePropertyShapes(propertyShape => {
      propertyShapes.push(propertyShape);
      return false;
    }, DataFactory.namedNode("urn:example:MinorGordon"));
    expect(propertyShapes).to.have.length(4);
    expect(
      propertyShapes.find(propertyShape =>
        propertyShape.path.equals(schema.givenName)
      )
    ).to.not.be.undefined;
  });

  it("should get no property shapes for a focus node that has none", () => {
    const propertyShapes: PropertyShape[] = [];
    new ShaclProcessor({
      dataGraph: validTestDataGraph,
      shapesGraph,
    }).someFocusNodePropertyShapes(propertyShape => {
      propertyShapes.push(propertyShape);
      return false;
    }, DataFactory.namedNode("urn:example:troy"));
    expect(propertyShapes).to.have.length(0);
  });

  it("should get the focus nodes for a shape", () => {
    const nodeShape = shapesGraph.nodeShapeByNode(
      DataFactory.namedNode("https://schema.org/PersonShape")
    );
    const focusNodes: FocusNode[] = [];
    new ShaclProcessor({
      dataGraph: validTestDataGraph,
      shapesGraph,
    }).someShapeFocusNodes(focusNode => {
      focusNodes.push(focusNode);
      return false;
    }, nodeShape);
    expect(focusNodes).to.have.length(1);
  });

  it("should validate a valid data graph", () => {
    const validationReport = new ShaclProcessor({
      dataGraph: validTestDataGraph,
      shapesGraph,
    }).validate();
    expect(validationReport.results).to.be.empty;
  });

  it("should validate an invalid data graph", () => {
    const validationReport = new ShaclProcessor({
      dataGraph: invalidTestDataGraph,
      shapesGraph,
    }).validate();
    expect(validationReport.results).to.have.length(2);
  });
});
