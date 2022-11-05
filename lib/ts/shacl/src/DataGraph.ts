import {NamedNode, Parser, ParserOptions, Store} from "n3";
import {Shape} from "./Shape";
import {RDF, RDFS} from "@paradicms/vocabularies";
import {FocusNode} from "./FocusNode";

const deduplicateFocusNodes = (
  focusNodes: readonly FocusNode[]
): readonly FocusNode[] => {
  const uniqueFocusNodes: FocusNode[] = [];
  for (const term of focusNodes) {
    if (
      !uniqueFocusNodes.some((uniqueFocusNode) => term.equals(uniqueFocusNode))
    ) {
      uniqueFocusNodes.push(term);
    }
  }
  return uniqueFocusNodes;
};

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

  private shapeTargetClassFocusNodes(shape: Shape): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];
    for (const targetClass of shape.targetClasses) {
      focusNodes.push(...this.shapeClassFocusNodesRecursive(targetClass));
    }
    return focusNodes;
  }

  /**
   * Get instances of the targetClass or its sub-classes
   */
  private shapeClassFocusNodesRecursive(
    targetClass: NamedNode
  ): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];

    // Get instances of the targetClass
    this.store.forSubjects(
      (subject) => {
        switch (subject.termType) {
          case "BlankNode":
          case "NamedNode":
            focusNodes.push(subject);
            break;
        }
      },
      RDF.type,
      targetClass,
      null
    );

    // Recurse into targetClass's sub-classes
    this.store.forSubjects(
      (childClass) => {
        if (childClass.termType !== "NamedNode") {
          return;
        }
        focusNodes.push(...this.shapeClassFocusNodesRecursive(childClass));
      },
      RDFS.subClassOf,
      targetClass,
      null
    );

    return focusNodes;
  }

  private shapeImplicitClassFocusNodes(shape: Shape): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];

    // If the shape has an rdf:type of rdfs:Class or a sub-class of rdfs:Class,
    // all data graph instances of the shape or its sub-classes are focusNodes.
    for (const rdfType of shape.implicitClassTargets) {
      focusNodes.push(...this.shapeClassFocusNodesRecursive(rdfType));
    }
    return focusNodes;
  }

  private shapeTargetNodeFocusNodes(shape: Shape): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];
    // A node target is specified using the sh:targetNode predicate. Each value of sh:targetNode in a shape is either an IRI or a literal.
    for (const targetNode of shape.targetNodes) {
      switch (targetNode.termType) {
        case "Literal":
          focusNodes.push(targetNode);
          break;
        case "NamedNode":
          if (this.store.some(() => true, targetNode, null, null, null)) {
            focusNodes.push(targetNode);
          }
          break;
      }
    }
    return focusNodes;
  }

  private shapeTargetObjectsOfFocusNodes(shape: Shape): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];
    // If s is a shape in a shapes graph SG and s has value p for sh:targetObjectsOf in SG then the set of nodes in a data graph DG that are objects of triples in DG with predicate p is a target from DG for s in SG.
    for (const p of shape.targetObjectsOf) {
      focusNodes.push(
        ...this.store
          .getObjects(null, p, null)
          .filter((term) => {
            switch (term.termType) {
              case "BlankNode":
              case "Literal":
              case "NamedNode":
                return true;
              default:
                return false;
            }
          })
          .map((term) => term as FocusNode)
      );
    }
    return focusNodes;
  }

  private shapeTargetSubjectsOfFocusNodes(shape: Shape): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];
    // If s is a shape in a shapes graph SG and s has value p for sh:targetSubjectsOf in SG then the set of nodes in a data graph DG that are subjects of triples in DG with predicate p is a target from DG for s in SG.
    for (const p of shape.targetSubjectsOf) {
      focusNodes.push(
        ...this.store
          .getSubjects(p, null, null)
          .filter((term) => {
            switch (term.termType) {
              case "BlankNode":
              case "NamedNode":
                return true;
              default:
                return false;
            }
          })
          .map((term) => term as FocusNode)
      );
    }
    return focusNodes;
  }

  shapeFocusNodes(shape: Shape): readonly FocusNode[] {
    const focusNodes: FocusNode[] = [];
    focusNodes.push(...this.shapeTargetNodeFocusNodes(shape));
    focusNodes.push(...this.shapeTargetClassFocusNodes(shape));
    focusNodes.push(...this.shapeImplicitClassFocusNodes(shape));
    focusNodes.push(...this.shapeTargetSubjectsOfFocusNodes(shape));
    focusNodes.push(...this.shapeTargetObjectsOfFocusNodes(shape));
    return deduplicateFocusNodes(focusNodes);
  }
}
