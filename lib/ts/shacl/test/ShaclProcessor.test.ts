import {expect} from "chai";
import {DataGraph, FocusNode, ShapesGraph} from "../src";
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
