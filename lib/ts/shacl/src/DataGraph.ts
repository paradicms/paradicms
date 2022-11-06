import {NamedNode, Parser, ParserOptions, Store} from "n3";
import {Shape} from "./Shape";
import {RDF, RDFS} from "@paradicms/vocabularies";
import {FocusNode} from "./FocusNode";

type SomeShapeFocusNodeCallback = (focusNode: FocusNode) => boolean;

// const deduplicateFocusNodes = (
//   focusNodes: readonly FocusNode[]
// ): readonly FocusNode[] => {
//   const uniqueFocusNodes: FocusNode[] = [];
//   for (const term of focusNodes) {
//     if (
//       !uniqueFocusNodes.some((uniqueFocusNode) => term.equals(uniqueFocusNode))
//     ) {
//       uniqueFocusNodes.push(term);
//     }
//   }
//   return uniqueFocusNodes;
// };

export class DataGraph {
  constructor(readonly store: Store) {}

  static parse(input: string, options?: ParserOptions): DataGraph {
    return new DataGraph(DataGraph.parseIntoStore(input, options));
  }

  private static parseIntoStore(input: string, options?: ParserOptions): Store {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return store;
  }

  /**
   * Get instances of the targetClass or its sub-classes
   */
  private someShapeClassFocusNodesRecursive(
    callback: SomeShapeFocusNodeCallback,
    targetClass: NamedNode
  ): boolean {
    // Get instances of the targetClass
    if (
      this.store.some(
        (quad) => {
          switch (quad.subject.termType) {
            case "BlankNode":
            case "NamedNode":
              return callback(quad.subject);
            default:
              return false;
          }
        },
        null,
        RDF.type,
        targetClass,
        null
      )
    ) {
      return true;
    }

    // Recurse into targetClass's sub-classes
    return this.store.some(
      (quad) =>
        quad.subject.termType === "NamedNode" &&
        this.someShapeClassFocusNodesRecursive(callback, quad.subject),
      null,
      RDFS.subClassOf,
      targetClass,
      null
    );
  }

  private someShapeImplicitClassFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    // If the shape has an rdf:type of rdfs:Class or a sub-class of rdfs:Class,
    // all data graph instances of the shape or its sub-classes are focusNodes.
    return shape.implicitClassTargets.some((rdfType) =>
      this.someShapeClassFocusNodesRecursive(callback, rdfType)
    );
  }

  private someShapeTargetClassFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    return shape.targetClasses.some((targetClass) =>
      this.someShapeClassFocusNodesRecursive(callback, targetClass)
    );
  }

  private someShapeTargetNodeFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    // A node target is specified using the sh:targetNode predicate. Each value of sh:targetNode in a shape is either an IRI or a literal.
    return shape.targetNodes.some((targetNode) => {
      switch (targetNode.termType) {
        case "Literal":
          return callback(targetNode);
        case "NamedNode":
          if (this.store.some(() => true, targetNode, null, null, null)) {
            return callback(targetNode);
          }
      }
      return false;
    });
  }

  private someShapeTargetObjectsOfFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    // If s is a shape in a shapes graph SG and s has value p for sh:targetObjectsOf in SG then the set of nodes in a data graph DG that are objects of triples in DG with predicate p is a target from DG for s in SG.
    return shape.targetObjectsOf.some((p) =>
      this.store.some(
        (quad) => {
          switch (quad.object.termType) {
            case "BlankNode":
            case "Literal":
            case "NamedNode":
              return callback(quad.object);
            default:
              return false;
          }
        },
        null,
        p,
        null,
        null
      )
    );
  }

  private someShapeTargetSubjectsOfFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    // If s is a shape in a shapes graph SG and s has value p for sh:targetSubjectsOf in SG then the set of nodes in a data graph DG that are subjects of triples in DG with predicate p is a target from DG for s in SG.
    return shape.targetSubjectsOf.some((p) =>
      this.store.some(
        (quad) => {
          switch (quad.subject.termType) {
            case "BlankNode":
            case "NamedNode":
              return callback(quad.subject);
            default:
              return false;
          }
        },
        null,
        p,
        null,
        null
      )
    );
  }

  someShapeFocusNode(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    for (const someShapeFocusNodesMethod of [
      this.someShapeTargetNodeFocusNodes,
      this.someShapeTargetClassFocusNodes,
      this.someShapeImplicitClassFocusNodes,
      this.someShapeTargetSubjectsOfFocusNodes,
      this.someShapeTargetObjectsOfFocusNodes,
    ]) {
      if (someShapeFocusNodesMethod(callback, shape)) {
        return true;
      }
    }
    return false;
  }
}
