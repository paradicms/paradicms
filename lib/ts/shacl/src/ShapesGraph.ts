import {
  DefaultGraph,
  Literal,
  NamedNode,
  Parser,
  ParserOptions,
  Store,
  BlankNode,
  Variable,
} from "n3";
import {RDF, SH} from "@paradicms/vocabularies";
import * as SHACLValidator from "rdf-validate-shacl";
import * as ValidationReport from "rdf-validate-shacl/src/validation-report";
import {NodeShape} from "./NodeShape";
import {PropertyShape} from "./PropertyShape";

export class ShapesGraph {
  readonly graph: DefaultGraph | NamedNode;
  readonly nodeShapes: readonly NodeShape[];
  private nodeShapesByUri: {[index: string]: NodeShape} = {};
  readonly propertyShapes: readonly PropertyShape[];
  private propertyShapesByUri: {[index: string]: PropertyShape} = {};

  constructor(readonly store: Store) {
    this.graph = ShapesGraph.readGraph(store);
    const shapes = ShapesGraph.readShapes(this.graph, this, store);
    this.nodeShapes = shapes.nodeShapes;
    this.nodeShapesByUri = shapes.nodeShapesByUri;
    this.propertyShapes = shapes.propertyShapes;
    this.propertyShapesByUri = shapes.propertyShapesByUri;
  }

  nodeShapeByUri(nodeShapeUri: string): NodeShape {
    const nodeShape = this.nodeShapesByUri[nodeShapeUri];
    if (!nodeShape) {
      throw new RangeError("no such node shape " + nodeShapeUri);
    }
    return nodeShape;
  }

  static parse(input: string, options?: ParserOptions): ShapesGraph {
    return new ShapesGraph(ShapesGraph.parseIntoStore(input, options));
  }

  protected static parseIntoStore(
    input: string,
    options?: ParserOptions
  ): Store {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return store;
  }

  propertyShapeByUri(propertyShapeUri: string): PropertyShape {
    const propertyShape = this.propertyShapesByUri[propertyShapeUri];
    if (!propertyShape) {
      throw new RangeError("no such property shape " + propertyShapeUri);
    }
    return propertyShape;
  }

  private static readGraph(store: Store): DefaultGraph | NamedNode {
    const graphs = store.getGraphs(null, null, null);
    if (graphs.length !== 1) {
      throw new RangeError("expected a single graph");
    }
    switch (graphs[0].termType) {
      case "DefaultGraph":
      case "NamedNode":
        return graphs[0];
      default:
        throw new RangeError(
          `expected NamedNode or default graph, actual ${graphs[0].termType}`
        );
    }
  }

  private static readShapes(
    graph: DefaultGraph | NamedNode,
    shapesGraph: ShapesGraph,
    store: Store
  ): {
    nodeShapes: NodeShape[];
    nodeShapesByUri: {[index: string]: NodeShape};
    propertyShapes: PropertyShape[];
    propertyShapesByUri: {[index: string]: PropertyShape};
  } {
    const nodeShapes: NodeShape[] = [];
    const nodeShapesByUri: {[index: string]: NodeShape} = {};
    const propertyShapes: PropertyShape[] = [];
    const propertyShapesByUri: {[index: string]: PropertyShape} = {};

    // Collect the shape identifiers in sets
    const shapeBlankNodesByValue: {[index: string]: BlankNode} = {};
    const shapeNamedNodesByValue: {[index: string]: NamedNode} = {};

    // Utility function for doing the collection
    const addShapeNodeValue = (
      shapeNode: BlankNode | Literal | NamedNode | Variable
    ) => {
      switch (shapeNode.termType) {
        case "BlankNode":
          shapeBlankNodesByValue[shapeNode.value] = shapeNode;
          break;
        case "NamedNode":
          shapeNamedNodesByValue[shapeNode.value] = shapeNode;
          break;
      }
    };

    // Test each shape condition

    // Subject is a SHACL instance of sh:NodeShape
    store.forSubjects(addShapeNodeValue, RDF.type, SH.NodeShape, graph);

    // Subject is a SHACL instance of sh:PropertyShape
    store.forSubjects(addShapeNodeValue, RDF.type, SH.PropertyShape, graph);

    // Subject of a triple with sh:targetClass predicate
    store.forSubjects(addShapeNodeValue, SH.targetClass, null, graph);

    // Subject of a triple with sh:targetNode predicate
    store.forSubjects(addShapeNodeValue, SH.targetNode, null, graph);

    // Subject of a triple with sh:targetObjectsOf predicate
    store.forSubjects(addShapeNodeValue, SH.targetObjectsOf, null, graph);

    // Subject of a triple with sh:targetSubjectsOf predicate
    store.forSubjects(addShapeNodeValue, SH.targetSubjectsOf, null, graph);

    // TODO: Subject of a triple that has a parameter as predicate

    // Object of a shape-expecting, non-list-taking parameter such as sh:node
    // TODO: handle list-taking parameters
    store.forObjects(addShapeNodeValue, null, SH.node, graph);
    store.forObjects(addShapeNodeValue, null, SH.property, graph);

    const addShape = (shapeNode: BlankNode | NamedNode) => {
      if (store.some((quad) => true, shapeNode, SH.path, null, graph)) {
        // A property shape is a shape in the shapes graph that is the subject of a triple that has sh:path as its predicate. A shape has at most one value for sh:path. Each value of sh:path in a shape must be a well-formed SHACL property path. It is recommended, but not required, for a property shape to be declared as a SHACL instance of sh:PropertyShape. SHACL instances of sh:PropertyShape have one value for the property sh:path.
        const propertyShape = new PropertyShape({node: shapeNode, shapesGraph});
        propertyShapes.push(propertyShape);
        switch (propertyShape.node.termType) {
          case "NamedNode":
            propertyShapesByUri[propertyShape.node.value] = propertyShape;
            break;
        }
      } else {
        // A node shape is a shape in the shapes graph that is not the subject of a triple with sh:path as its predicate. It is recommended, but not required, for a node shape to be declared as a SHACL instance of sh:NodeShape. SHACL instances of sh:NodeShape cannot have a value for the property sh:path.
        const nodeShape = new NodeShape({node: shapeNode, shapesGraph});
        nodeShapes.push(nodeShape);
        switch (nodeShape.node.termType) {
          case "NamedNode":
            nodeShapesByUri[nodeShape.node.value] = nodeShape;
            break;
        }
      }
    };

    for (const shapeBlankNodeValue in shapeBlankNodesByValue) {
      addShape(shapeBlankNodesByValue[shapeBlankNodeValue]);
    }
    for (const shapeNamedNodeValue in shapeNamedNodesByValue) {
      addShape(shapeNamedNodesByValue[shapeNamedNodeValue]);
    }

    return {
      nodeShapes,
      nodeShapesByUri,
      propertyShapes,
      propertyShapesByUri,
    };
  }

  validate(dataGraph: Store): ValidationReport {
    const validator = new SHACLValidator(this.store);
    return validator.validate(dataGraph);
  }
}
