import {expect} from "chai";
import {DataGraph, FocusNode, PropertyShape, ShapesGraph} from "../src";
import {testShapesGraphTtl} from "./testShapesGraphTtl";
import {validTestDataGraphTtl} from "./validTestDataGraphTtl";
import {invalidTestDataGraphTtl} from "./invalidTestDataGraphTtl";
import {ShaclProcessor} from "../src/ShaclProcessor";
import {DataFactory} from "n3";

describe("ShaclProcessor", () => {
  let invalidDataGraph: DataGraph;
  let validDataGraph: DataGraph;
  let shapesGraph: ShapesGraph;

  before(() => {
    invalidDataGraph = DataGraph.parse(invalidTestDataGraphTtl);
    validDataGraph = DataGraph.parse(validTestDataGraphTtl);
    shapesGraph = ShapesGraph.parse(testShapesGraphTtl);
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
        propertyShape.path.equals(
          DataFactory.namedNode("http://schema.org/givenName")
        )
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
