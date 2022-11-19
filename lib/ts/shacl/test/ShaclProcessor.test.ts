import {expect} from "chai";
import {DataGraph, FocusNode, PropertyShape, ShapesGraph} from "../src";
import {ShaclProcessor} from "../src/ShaclProcessor";
import {DataFactory, parseIntoDataset} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {
  invalidTestDataGraphTtl,
  testShapesGraphTtl,
  validTestDataGraphTtl,
} from "@paradicms/test";

describe("ShaclProcessor", () => {
  let invalidDataGraph: DataGraph;
  let validDataGraph: DataGraph;
  let shapesGraph: ShapesGraph;

  before(() => {
    invalidDataGraph = parseIntoDataset(invalidTestDataGraphTtl);
    validDataGraph = parseIntoDataset(validTestDataGraphTtl);
    shapesGraph = new ShapesGraph(parseIntoDataset(testShapesGraphTtl));
  });

  it("should get the property shapes for a focus node that has them", () => {
    const propertyShapes: PropertyShape[] = [];
    new ShaclProcessor({
      dataGraph: validDataGraph,
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
      dataGraph: validDataGraph,
      shapesGraph,
    }).someFocusNodePropertyShapes(propertyShape => {
      propertyShapes.push(propertyShape);
      return false;
    }, DataFactory.namedNode("urn:example:troy"));
    expect(propertyShapes).to.have.length(0);
  });

  it("should get the focus nodes for a shape", () => {
    const nodeShape = shapesGraph.nodeShapeByNode(
      DataFactory.namedNode("http://schema.org/PersonShape")
    );
    const focusNodes: FocusNode[] = [];
    new ShaclProcessor({
      dataGraph: validDataGraph,
      shapesGraph,
    }).someShapeFocusNodes(focusNode => {
      focusNodes.push(focusNode);
      return false;
    }, nodeShape);
    expect(focusNodes).to.have.length(1);
  });

  it("should validate a valid data graph", () => {
    const validationReport = new ShaclProcessor({
      dataGraph: validDataGraph,
      shapesGraph,
    }).validate();
    expect(validationReport.results).to.be.empty;
  });

  it("should validate an invalid data graph", () => {
    const validationReport = new ShaclProcessor({
      dataGraph: invalidDataGraph,
      shapesGraph,
    }).validate();
    expect(validationReport.results).to.have.length(2);
  });
});
