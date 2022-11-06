import {
  BlankNode,
  DefaultGraph,
  Literal,
  NamedNode,
  Parser,
  ParserOptions,
  Store,
  Variable,
} from "n3";
import {RDF, SH} from "@paradicms/vocabularies";
import * as SHACLValidator from "rdf-validate-shacl";
import * as ValidationReport from "rdf-validate-shacl/src/validation-report";
import {NodeShape} from "./NodeShape";
import {PropertyShape} from "./PropertyShape";
import {PropertyGroup} from "./PropertyGroup";
import {DataGraph} from "./DataGraph";

type NodeShapesByNode = {
  [termType: string]: {[termValue: string]: NodeShape};
};
type PropertyShapesByNode = {
  [termType: string]: {[termValue: string]: PropertyShape};
};
type PropertyGroupsByNode = {
  [termValue: string]: PropertyGroup;
};

export class ShapesGraph {
  readonly graph: DefaultGraph | NamedNode;
  readonly nodeShapes: readonly NodeShape[];
  // @ts-ignore
  private readonly nodeShapesByNode: NodeShapesByNode;
  readonly propertyGroups: readonly PropertyGroup[];
  // @ts-ignore
  private readonly propertyGroupsByNode: PropertyGroupsByNode;
  readonly propertyShapes: readonly PropertyShape[];
  // @ts-ignore
  private readonly propertyShapesByNode: PropertyShapesByNode;

  constructor(readonly store: Store) {
    this.graph = ShapesGraph.readGraph(store);

    const {
      nodeShapes,
      nodeShapesByNode,
      propertyShapes,
      propertyShapesByNode,
    } = ShapesGraph.readShapes(this.graph, this, store);
    this.nodeShapes = nodeShapes;
    this.nodeShapesByNode = nodeShapesByNode;
    this.propertyShapes = propertyShapes;
    this.propertyShapesByNode = propertyShapesByNode;

    const {
      propertyGroups,
      propertyGroupsByNode,
    } = ShapesGraph.readPropertyGroups(this.graph, this, store);
    this.propertyGroups = propertyGroups;
    this.propertyGroupsByNode = propertyGroupsByNode;
  }

  nodeShapeByNode(nodeShapeNode: BlankNode | NamedNode): NodeShape {
    const nodeShape = (this.nodeShapesByNode[nodeShapeNode.termType] ?? {})[
      nodeShapeNode.value
    ];
    if (!nodeShape) {
      throw new RangeError(
        `no such node shape termType=${nodeShapeNode.termType} value=${nodeShapeNode.value}`
      );
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

  // propertyGroupByUri(propertyGroupUri: string): PropertyGroup {
  //   const propertyGroup = this.propertyGroupsByNode[propertyGroupUri];
  //   if (!propertyGroup) {
  //     throw new RangeError("no such property group " + propertyGroupUri);
  //   }
  //   return propertyGroup;
  // }

  propertyShapeByNode(propertyShapeNode: BlankNode | NamedNode): PropertyShape {
    const propertyShape = (this.propertyShapesByNode[
      propertyShapeNode.termType
    ] ?? {})[propertyShapeNode.value];
    if (!propertyShape) {
      throw new RangeError(
        `no such property shape termType=${propertyShapeNode.termType} value=${propertyShapeNode.value}`
      );
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
    propertyGroupsByNode: PropertyGroupsByNode;
  } {
    const propertyGroups: PropertyGroup[] = [];
    const propertyGroupsByNode: PropertyGroupsByNode = {};
    store.forSubjects(
      subject => {
        if (subject.termType !== "NamedNode") {
          return;
        }
        const propertyGroup = new PropertyGroup({node: subject, shapesGraph});
        propertyGroups.push(propertyGroup);
        propertyGroupsByNode[subject.value] = propertyGroup;
      },
      RDF.type,
      SH.PropertyGroup,
      graph
    );
    return {propertyGroups, propertyGroupsByNode};
  }

  private static readShapes(
    graph: DefaultGraph | NamedNode,
    shapesGraph: ShapesGraph,
    store: Store
  ): {
    nodeShapes: NodeShape[];
    nodeShapesByNode: NodeShapesByNode;
    propertyShapes: PropertyShape[];
    propertyShapesByNode: PropertyShapesByNode;
  } {
    // Collect the shape identifiers in sets
    const shapeNodesByNode: {
      [termType: string]: {[termValue: string]: BlankNode | NamedNode};
    } = {};

    // Utility function for doing the collection
    const addShapeNode = (
      shapeNode: BlankNode | Literal | NamedNode | Variable
    ) => {
      switch (shapeNode.termType) {
        case "BlankNode":
        case "NamedNode":
          if (!shapeNodesByNode[shapeNode.termType]) {
            shapeNodesByNode[shapeNode.termType] = {};
          }
          shapeNodesByNode[shapeNode.termType][shapeNode.value] = shapeNode;
          break;
      }
    };

    // Test each shape condition
    // https://www.w3.org/TR/shacl/#shapes

    // Subject is a SHACL instance of sh:NodeShape or sh:PropertyShape
    for (const rdfType of [SH.NodeShape, SH.PropertyShape]) {
      store.forSubjects(addShapeNode, RDF.type, rdfType, graph);
    }

    // Subject of a triple with sh:targetClass, sh:targetNode, sh:targetObjectsOf, or sh:targetSubjectsOf predicate
    for (const predicate of [
      SH.targetClass,
      SH.targetNode,
      SH.targetObjectsOf,
      SH.targetSubjectsOf,
    ]) {
      store.forSubjects(addShapeNode, predicate, null, graph);
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
      store.forSubjects(addShapeNode, predicate, null, graph);
    }

    // Object of a shape-expecting, non-list-taking parameter such as sh:node
    // TODO: handle list-taking parameters
    for (const predicate of [SH.node, SH.property]) {
      store.forObjects(addShapeNode, null, predicate, graph);
    }

    // Separate shapes into node and property shapes.
    const nodeShapes: NodeShape[] = [];
    const nodeShapesByNode: NodeShapesByNode = {};
    const propertyShapes: PropertyShape[] = [];
    const propertyShapesByNode: PropertyShapesByNode = {};

    for (const shapeNodeTermType in shapeNodesByNode) {
      for (const shapeNodeValue in shapeNodesByNode[shapeNodeTermType]) {
        const shapeNode = shapeNodesByNode[shapeNodeTermType][shapeNodeValue];
        if (store.some(quad => true, shapeNode, SH.path, null, graph)) {
          // A property shape is a shape in the shapes graph that is the subject of a triple that has sh:path as its predicate. A shape has at most one value for sh:path. Each value of sh:path in a shape must be a well-formed SHACL property path. It is recommended, but not required, for a property shape to be declared as a SHACL instance of sh:PropertyShape. SHACL instances of sh:PropertyShape have one value for the property sh:path.
          const propertyShape = new PropertyShape({
            node: shapeNode,
            shapesGraph,
          });
          propertyShapes.push(propertyShape);
          switch (propertyShape.node.termType) {
            case "BlankNode":
            case "NamedNode":
              if (!propertyShapesByNode[propertyShape.node.termType]) {
                propertyShapesByNode[propertyShape.node.termType] = {};
              }
              propertyShapesByNode[propertyShape.node.termType][
                propertyShape.node.value
              ] = propertyShape;
              break;
          }
        } else {
          // A node shape is a shape in the shapes graph that is not the subject of a triple with sh:path as its predicate. It is recommended, but not required, for a node shape to be declared as a SHACL instance of sh:NodeShape. SHACL instances of sh:NodeShape cannot have a value for the property sh:path.
          const nodeShape = new NodeShape({node: shapeNode, shapesGraph});
          nodeShapes.push(nodeShape);
          switch (nodeShape.node.termType) {
            case "BlankNode":
            case "NamedNode":
              if (!nodeShapesByNode[nodeShape.node.termType]) {
                nodeShapesByNode[nodeShape.node.termType] = {};
              }
              nodeShapesByNode[nodeShape.node.termType][
                nodeShape.node.value
              ] = nodeShape;
              break;
          }
        }
      }
    }

    return {
      nodeShapes,
      nodeShapesByNode,
      propertyShapes,
      propertyShapesByNode,
    };
  }

  validate(dataGraph: DataGraph): ValidationReport {
    const validator = new SHACLValidator(this.store);
    return validator.validate(dataGraph.store);
  }
}
