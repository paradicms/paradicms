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
import {PropertyGroup} from "./PropertyGroup";

export class ShapesGraph {
  readonly graph: DefaultGraph | NamedNode;
  readonly nodeShapes: readonly NodeShape[];
  private nodeShapesByUri: {[index: string]: NodeShape} = {};
  // @ts-ignore
  private propertyGroups: readonly PropertyGroup[];
  private propertyGroupsByUri: {[index: string]: PropertyGroup} = {};
  readonly propertyShapes: readonly PropertyShape[];
  private propertyShapesByUri: {[index: string]: PropertyShape} = {};

  constructor(readonly store: Store) {
    this.graph = ShapesGraph.readGraph(store);

    const {nodeShapes, nodeShapesByUri, propertyShapes, propertyShapesByUri} =
      ShapesGraph.readShapes(this.graph, this, store);
    this.nodeShapes = nodeShapes;
    this.nodeShapesByUri = nodeShapesByUri;
    this.propertyShapes = propertyShapes;
    this.propertyShapesByUri = propertyShapesByUri;

    const {propertyGroups, propertyGroupsByUri} =
      ShapesGraph.readPropertyGroups(this.graph, this, store);
    this.propertyGroups = propertyGroups;
    this.propertyGroupsByUri = propertyGroupsByUri;
  }

  get namedNodeShapes(): readonly NodeShape[] {
    return this.nodeShapes.filter(
      (nodeShape) => nodeShape.node.termType === "NamedNode"
    );
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

  private static parseIntoStore(input: string, options?: ParserOptions): Store {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return store;
  }

  propertyGroupByUri(propertyGroupUri: string): PropertyGroup {
    const propertyGroup = this.propertyGroupsByUri[propertyGroupUri];
    if (!propertyGroup) {
      throw new RangeError("no such property group " + propertyGroupUri);
    }
    return propertyGroup;
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

  private static readPropertyGroups(
    graph: DefaultGraph | NamedNode,
    shapesGraph: ShapesGraph,
    store: Store
  ): {
    propertyGroups: PropertyGroup[];
    propertyGroupsByUri: {[index: string]: PropertyGroup};
  } {
    const propertyGroups: PropertyGroup[] = [];
    const propertyGroupsByUri: {[index: string]: PropertyGroup} = {};
    store.forSubjects(
      (subject) => {
        if (subject.termType !== "NamedNode") {
          return;
        }
        const propertyGroup = new PropertyGroup({node: subject, shapesGraph});
        propertyGroups.push(propertyGroup);
        propertyGroupsByUri[subject.value] = propertyGroup;
      },
      RDF.type,
      SH.PropertyGroup,
      graph
    );
    return {propertyGroups, propertyGroupsByUri};
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
    // https://www.w3.org/TR/shacl/#shapes

    // Subject is a SHACL instance of sh:NodeShape or sh:PropertyShape
    for (const rdfType of [SH.NodeShape, SH.PropertyShape]) {
      store.forSubjects(addShapeNodeValue, RDF.type, rdfType, graph);
    }

    // Subject of a triple with sh:targetClass, sh:targetNode, sh:targetObjectsOf, or sh:targetSubjectsOf predicate
    for (const predicate of [
      SH.targetClass,
      SH.targetNode,
      SH.targetObjectsOf,
      SH.targetSubjectsOf,
    ]) {
      store.forSubjects(addShapeNodeValue, predicate, null, graph);
    }

    // Subject of a triple that has a parameter as predicate
    // https://www.w3.org/TR/shacl/#constraints
    // https://www.w3.org/TR/shacl/#core-components
    for (const predicate of [
      SH.class_,
      SH.datatype,
      SH.nodeKind,
      SH.minCount,
      SH.maxCount,
      SH.minExclusive,
      SH.minInclusive,
      SH.maxExclusive,
      SH.maxInclusive,
      SH.minLength,
      SH.maxLength,
      SH.pattern,
      SH.languageIn,
      SH.uniqueLang,
      SH.equals,
      SH.disjoint,
      SH.lessThan,
      SH.lessThanOrEquals,
      SH.not,
      SH.and,
      SH.or,
      SH.xone,
      SH.node,
      SH.property,
      SH.qualifiedValueShape,
      SH.qualifiedMinCount,
      SH.qualifiedMaxCount,
      SH.closed,
      SH.ignoredProperties,
      SH.hasValue,
      SH.in_,
    ]) {
      store.forSubjects(addShapeNodeValue, predicate, null, graph);
    }

    // Object of a shape-expecting, non-list-taking parameter such as sh:node
    // TODO: handle list-taking parameters
    for (const predicate of [SH.node, SH.property]) {
      store.forObjects(addShapeNodeValue, null, predicate, graph);
    }

    // Separate shapes into node and property shapes.
    const nodeShapes: NodeShape[] = [];
    const nodeShapesByUri: {[index: string]: NodeShape} = {};
    const propertyShapes: PropertyShape[] = [];
    const propertyShapesByUri: {[index: string]: PropertyShape} = {};

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
