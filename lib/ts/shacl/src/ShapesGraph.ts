import {
  BlankNode,
  DatasetCore,
  DefaultGraph,
  NamedNode,
  Term,
} from "@rdfjs/types";
import {rdf, sh} from "@paradicms/vocabularies";
import {NodeShape} from "./NodeShape";
import {PropertyShape} from "./PropertyShape";
import {PropertyGroup} from "./PropertyGroup";
import TermMap from "@rdfjs/term-map";
import TermSet from "@rdfjs/term-set";
import {requireDefined} from "@paradicms/utilities";

export class ShapesGraph {
  readonly graphNode: BlankNode | DefaultGraph | NamedNode;
  readonly nodeShapes: readonly NodeShape[];
  // @ts-ignore
  private readonly nodeShapesByNode: TermMap<BlankNode | NamedNode, NodeShape>;
  readonly propertyGroups: readonly PropertyGroup[];
  // @ts-ignore
  private readonly propertyGroupsByNode: TermMap<NamedNode, PropertyGroup>;
  readonly propertyShapes: readonly PropertyShape[];
  // @ts-ignore
  private readonly propertyShapesByNode: TermMap<
    BlankNode | NamedNode,
    PropertyShape
  >;

  private constructor(readonly dataset: DatasetCore) {
    this.graphNode = ShapesGraph.readGraph(dataset);

    const {
      nodeShapes,
      nodeShapesByNode,
      propertyShapes,
      propertyShapesByNode,
    } = ShapesGraph.readShapes(dataset, this.graphNode, this);
    this.nodeShapes = nodeShapes;
    this.nodeShapesByNode = nodeShapesByNode;
    this.propertyShapes = propertyShapes;
    this.propertyShapesByNode = propertyShapesByNode;

    const {
      propertyGroups,
      propertyGroupsByNode,
    } = ShapesGraph.readPropertyGroups(dataset, this.graphNode, this);
    this.propertyGroups = propertyGroups;
    this.propertyGroupsByNode = propertyGroupsByNode;
  }

  static fromDataset(dataset: DatasetCore): ShapesGraph {
    return new ShapesGraph(dataset);
  }

  nodeShapeByNode(nodeShapeNode: BlankNode | NamedNode): NodeShape {
    return requireDefined(this.nodeShapesByNode.get(nodeShapeNode));
  }

  propertyGroupByNode(propertyGroupNode: NamedNode): PropertyGroup {
    return requireDefined(this.propertyGroupsByNode.get(propertyGroupNode));
  }

  propertyShapeByNode(propertyShapeNode: BlankNode | NamedNode): PropertyShape {
    return requireDefined(this.propertyShapesByNode.get(propertyShapeNode));
  }

  private static readGraph(
    dataset: DatasetCore
  ): BlankNode | DefaultGraph | NamedNode {
    const graphs = [
      ...dataset.reduce((termSet, quad) => {
        termSet.add(quad.graph);
        return termSet;
      }, new TermSet()),
    ];
    if (graphs.length !== 1) {
      throw new RangeError("expected a single graph");
    }
    switch (graphs[0].termType) {
      case "BlankNode":
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
    dataset: DatasetCore,
    graph: BlankNode | DefaultGraph | NamedNode,
    shapesGraph: ShapesGraph
  ): {
    propertyGroups: PropertyGroup[];
    propertyGroupsByNode: TermMap<NamedNode, PropertyGroup>;
  } {
    const propertyGroups: PropertyGroup[] = [];
    const propertyGroupsByNode: TermMap<
      NamedNode,
      PropertyGroup
    > = new TermMap();
    dataset.match(null, rdf.type, sh.PropertyGroup, graph).forEach(quad => {
      const subject = quad.subject;
      if (subject.termType !== "NamedNode") {
        return;
      } else if (propertyGroupsByNode.has(subject)) {
        return;
      }
      const propertyGroup = new PropertyGroup({node: subject, shapesGraph});
      propertyGroups.push(propertyGroup);
      propertyGroupsByNode.set(subject, propertyGroup);
    });
    return {propertyGroups, propertyGroupsByNode};
  }

  private static readShapes(
    dataset: DatasetCore,
    graph: BlankNode | DefaultGraph | NamedNode,
    shapesGraph: ShapesGraph
  ): {
    nodeShapes: NodeShape[];
    nodeShapesByNode: TermMap<BlankNode | NamedNode, NodeShape>;
    propertyShapes: PropertyShape[];
    propertyShapesByNode: TermMap<BlankNode | NamedNode, PropertyShape>;
  } {
    // Collect the shape identifiers in sets
    const shapeNodeSet = new TermSet<BlankNode | NamedNode>();

    // Utility function for doing the collection
    const addShapeNode = (shapeNode: Term) => {
      switch (shapeNode.termType) {
        case "BlankNode":
        case "NamedNode":
          shapeNodeSet.add(shapeNode);
          break;
      }
    };

    // Test each shape condition
    // https://www.w3.org/TR/shacl/#shapes

    // Subject is a SHACL instance of sh:NodeShape or sh:PropertyShape
    for (const rdfType of [sh.NodeShape, sh.PropertyShape]) {
      dataset
        .match(null, rdf.type, rdfType, graph)
        .forEach(quad => addShapeNode(quad.subject));
    }

    // Subject of a triple with sh:targetClass, sh:targetNode, sh:targetObjectsOf, or sh:targetSubjectsOf predicate
    for (const predicate of [
      sh.targetClass,
      sh.targetNode,
      sh.targetObjectsOf,
      sh.targetSubjectsOf,
    ]) {
      dataset
        .match(null, predicate, null, graph)
        .forEach(quad => addShapeNode(quad.subject));
    }

    // Subject of a triple that has a parameter as predicate
    // https://www.w3.org/TR/shacl/#constraints
    // https://www.w3.org/TR/shacl/#core-components
    for (const predicate of [
      sh.class,
      sh.datatype,
      sh.nodeKind,
      sh.minCount,
      sh.maxCount,
      sh.minExclusive,
      sh.minInclusive,
      sh.maxExclusive,
      sh.maxInclusive,
      sh.minLength,
      sh.maxLength,
      sh.pattern,
      sh.languageIn,
      sh.uniqueLang,
      sh.equals,
      sh.disjoint,
      sh.lessThan,
      sh.lessThanOrEquals,
      sh.not,
      sh.and,
      sh.or,
      sh.xone,
      sh.node,
      sh.property,
      sh.qualifiedValueShape,
      sh.qualifiedMinCount,
      sh.qualifiedMaxCount,
      sh.closed,
      sh.ignoredProperties,
      sh.hasValue,
      sh.in,
    ]) {
      dataset
        .match(null, predicate, null, graph)
        .forEach(quad => addShapeNode(quad.subject));
    }

    // Object of a shape-expecting, non-list-taking parameter such as sh:node
    // TODO: handle list-taking parameters
    for (const predicate of [sh.node, sh.property]) {
      dataset
        .match(null, predicate, graph)
        .forEach(quad => addShapeNode(quad.object));
    }

    // Separate shapes into node and property shapes.
    const nodeShapes: NodeShape[] = [];
    const nodeShapesByNode: TermMap<
      BlankNode | NamedNode,
      NodeShape
    > = new TermMap();
    const propertyShapes: PropertyShape[] = [];
    const propertyShapesByNode: TermMap<
      BlankNode | NamedNode,
      PropertyShape
    > = new TermMap();

    for (const shapeNode of shapeNodeSet) {
      if (dataset.match(shapeNode, sh.path, null, graph).size > 0) {
        // A property shape is a shape in the shapes graph that is the subject of a triple that has sh:path as its predicate. A shape has at most one value for sh:path. Each value of sh:path in a shape must be a well-formed SHACL property path. It is recommended, but not required, for a property shape to be declared as a SHACL instance of sh:PropertyShape. SHACL instances of sh:PropertyShape have one value for the property sh:path.
        const propertyShape = new PropertyShape({
          node: shapeNode,
          shapesGraph,
        });
        propertyShapes.push(propertyShape);
        propertyShapesByNode.set(propertyShape.node, propertyShape);
      } else {
        // A node shape is a shape in the shapes graph that is not the subject of a triple with sh:path as its predicate. It is recommended, but not required, for a node shape to be declared as a SHACL instance of sh:NodeShape. SHACL instances of sh:NodeShape cannot have a value for the property sh:path.
        const nodeShape = new NodeShape({node: shapeNode, shapesGraph});
        nodeShapes.push(nodeShape);
        nodeShapesByNode.set(nodeShape.node, nodeShape);
      }
    }

    return {
      nodeShapes,
      nodeShapesByNode,
      propertyShapes,
      propertyShapesByNode,
    };
  }
}
