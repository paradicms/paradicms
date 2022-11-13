import {
  BlankNode,
  Dataset,
  DefaultGraph,
  Literal,
  NamedNode,
  Parser,
  ParserOptions,
  Variable,
} from "n3";
import {rdf, sh} from "@paradicms/vocabularies";
import {NodeShape} from "./NodeShape";
import {PropertyShape} from "./PropertyShape";
import {PropertyGroup} from "./PropertyGroup";
import {TermMap} from "./TermMap";
import {TermSet} from "./TermSet";

export class ShapesGraph {
  readonly graph: DefaultGraph | NamedNode;
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

  constructor(readonly dataset: Dataset) {
    this.graph = ShapesGraph.readGraph(dataset);

    const {
      nodeShapes,
      nodeShapesByNode,
      propertyShapes,
      propertyShapesByNode,
    } = ShapesGraph.readShapes(this.graph, this, dataset);
    this.nodeShapes = nodeShapes;
    this.nodeShapesByNode = nodeShapesByNode;
    this.propertyShapes = propertyShapes;
    this.propertyShapesByNode = propertyShapesByNode;

    const {
      propertyGroups,
      propertyGroupsByNode,
    } = ShapesGraph.readPropertyGroups(this.graph, this, dataset);
    this.propertyGroups = propertyGroups;
    this.propertyGroupsByNode = propertyGroupsByNode;
  }

  nodeShapeByNode(nodeShapeNode: BlankNode | NamedNode): NodeShape {
    return this.nodeShapesByNode.get(nodeShapeNode);
  }

  static parse(input: string, options?: ParserOptions): ShapesGraph {
    return new ShapesGraph(ShapesGraph.parseIntoDataset(input, options));
  }

  private static parseIntoDataset(
    input: string,
    options?: ParserOptions
  ): Dataset {
    const parser = new Parser(options);
    const dataset = new Dataset();
    dataset.addQuads(parser.parse(input));
    return dataset;
  }

  propertyGroupByNode(propertyGroupNode: NamedNode): PropertyGroup {
    return this.propertyGroupsByNode.get(propertyGroupNode);
  }

  propertyShapeByNode(propertyShapeNode: BlankNode | NamedNode): PropertyShape {
    return this.propertyShapesByNode.get(propertyShapeNode);
  }

  private static readGraph(dataset: Dataset): DefaultGraph | NamedNode {
    const graphs = dataset.getGraphs(null, null, null);
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
    dataset: Dataset
  ): {
    propertyGroups: PropertyGroup[];
    propertyGroupsByNode: TermMap<NamedNode, PropertyGroup>;
  } {
    const propertyGroups: PropertyGroup[] = [];
    const propertyGroupsByNode: TermMap<
      NamedNode,
      PropertyGroup
    > = new TermMap();
    dataset.forSubjects(
      subject => {
        if (subject.termType !== "NamedNode") {
          return;
        }
        const propertyGroup = new PropertyGroup({node: subject, shapesGraph});
        propertyGroups.push(propertyGroup);
        propertyGroupsByNode.put(subject, propertyGroup);
      },
      rdf.type,
      sh.PropertyGroup,
      graph
    );
    return {propertyGroups, propertyGroupsByNode};
  }

  private static readShapes(
    graph: DefaultGraph | NamedNode,
    shapesGraph: ShapesGraph,
    dataset: Dataset
  ): {
    nodeShapes: NodeShape[];
    nodeShapesByNode: TermMap<BlankNode | NamedNode, NodeShape>;
    propertyShapes: PropertyShape[];
    propertyShapesByNode: TermMap<BlankNode | NamedNode, PropertyShape>;
  } {
    // Collect the shape identifiers in sets
    const shapeNodeSet = new TermSet<BlankNode | NamedNode>();

    // Utility function for doing the collection
    const addShapeNode = (
      shapeNode: BlankNode | Literal | NamedNode | Variable
    ) => {
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
      dataset.forSubjects(addShapeNode, rdf.type, rdfType, graph);
    }

    // Subject of a triple with sh:targetClass, sh:targetNode, sh:targetObjectsOf, or sh:targetSubjectsOf predicate
    for (const predicate of [
      sh.targetClass,
      sh.targetNode,
      sh.targetObjectsOf,
      sh.targetSubjectsOf,
    ]) {
      dataset.forSubjects(addShapeNode, predicate, null, graph);
    }

    // Subject of a triple that has a parameter as predicate
    // https://www.w3.org/TR/shacl/#constraints
    // https://www.w3.org/TR/shacl/#core-components
    for (const predicate of [
      sh.class_,
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
      sh.in_,
    ]) {
      dataset.forSubjects(addShapeNode, predicate, null, graph);
    }

    // Object of a shape-expecting, non-list-taking parameter such as sh:node
    // TODO: handle list-taking parameters
    for (const predicate of [sh.node, sh.property]) {
      dataset.forObjects(addShapeNode, null, predicate, graph);
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

    for (const shapeNode of shapeNodeSet.values) {
      if (dataset.some(quad => true, shapeNode, sh.path, null, graph)) {
        // A property shape is a shape in the shapes graph that is the subject of a triple that has sh:path as its predicate. A shape has at most one value for sh:path. Each value of sh:path in a shape must be a well-formed SHACL property path. It is recommended, but not required, for a property shape to be declared as a SHACL instance of sh:PropertyShape. SHACL instances of sh:PropertyShape have one value for the property sh:path.
        const propertyShape = new PropertyShape({
          node: shapeNode,
          shapesGraph,
        });
        propertyShapes.push(propertyShape);
        propertyShapesByNode.put(propertyShape.node, propertyShape);
      } else {
        // A node shape is a shape in the shapes graph that is not the subject of a triple with sh:path as its predicate. It is recommended, but not required, for a node shape to be declared as a SHACL instance of sh:NodeShape. SHACL instances of sh:NodeShape cannot have a value for the property sh:path.
        const nodeShape = new NodeShape({node: shapeNode, shapesGraph});
        nodeShapes.push(nodeShape);
        nodeShapesByNode.put(nodeShape.node, nodeShape);
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
