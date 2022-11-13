import {BlankNode, NamedNode} from "n3";
import {Shape} from "./Shape";
import {rdf, RDFS} from "@paradicms/vocabularies";
import {FocusNode} from "./FocusNode";
import {DataGraph} from "./DataGraph";
import {ShapesGraph} from "./ShapesGraph";
import * as ValidationReport from "rdf-validate-shacl/src/validation-report";
import * as SHACLValidator from "rdf-validate-shacl";
import {TermSet} from "./TermSet";
import {PropertyShape} from "./PropertyShape";

type SomeFocusNodePropertyShapeCallback = (
  propertyShape: PropertyShape
) => boolean;
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

export class ShaclProcessor {
  private readonly dataGraph: DataGraph;
  private readonly shapesGraph: ShapesGraph;

  constructor(kwds: {dataGraph: DataGraph; shapesGraph: ShapesGraph}) {
    this.dataGraph = kwds.dataGraph;
    this.shapesGraph = kwds.shapesGraph;
  }

  someFocusNodePropertyShapes(
    callback: SomeFocusNodePropertyShapeCallback,
    focusNode: FocusNode
  ): boolean {
    const seenPropertyShapeNodeSet = new TermSet<BlankNode | NamedNode>();

    // Find node shapes that target the focus node, then look for their sh:properties's
    for (const nodeShape of this.shapesGraph.nodeShapes) {
      if (
        !this.someShapeFocusNodes(
          shapeFocusNode => shapeFocusNode.equals(focusNode),
          nodeShape
        )
      ) {
        continue;
      }

      // Node shape has the focusNode as a focus node

      // Pick up property shapes via sh:property
      for (const propertyShape of nodeShape.properties) {
        if (seenPropertyShapeNodeSet.add(propertyShape.node)) {
          if (callback(propertyShape)) {
            return true;
          }
        }
      }
    }

    // Pick up property shapes that target the focus node
    for (const propertyShape of this.shapesGraph.propertyShapes) {
      if (
        !this.someShapeFocusNodes(
          shapeFocusNode => shapeFocusNode.equals(focusNode),
          propertyShape
        )
      ) {
        continue;
      }

      // Property shape has the focusNode as a focus node

      if (seenPropertyShapeNodeSet.add(propertyShape.node)) {
        if (callback(propertyShape)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Get instances of the targetClass or its sub-classes
   */
  private someShapeClassFocusNodesRecursive(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    targetClass: NamedNode
  ): boolean {
    // Get instances of the targetClass
    if (
      this.dataGraph.store.some(
        quad => {
          switch (quad.subject.termType) {
            case "BlankNode":
            case "NamedNode":
              if (seenFocusNodeSet.add(quad.subject)) {
                return callback(quad.subject);
              }
            default:
              return false;
          }
        },
        null,
        rdf.type,
        targetClass,
        null
      )
    ) {
      return true;
    }

    // Recurse into targetClass's sub-classes
    return this.dataGraph.store.some(
      quad =>
        quad.subject.termType === "NamedNode" &&
        this.someShapeClassFocusNodesRecursive(
          callback,
          seenFocusNodeSet,
          quad.subject
        ),
      null,
      rdfs.subClassOf,
      targetClass,
      null
    );
  }

  private someShapeImplicitClassFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // If the shape has an rdf:type of rdfs:Class or a sub-class of rdfs:Class,
    // all data graph instances of the shape or its sub-classes are focusNodes.
    return shape.implicitClassTargets.some(rdfType =>
      this.someShapeClassFocusNodesRecursive(
        callback,
        seenFocusNodeSet,
        rdfType
      )
    );
  }

  private someShapeTargetClassFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    return shape.targetClasses.some(targetClass =>
      this.someShapeClassFocusNodesRecursive(
        callback,
        seenFocusNodeSet,
        targetClass
      )
    );
  }

  private someShapeTargetNodeFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // A node target is specified using the sh:targetNode predicate. Each value of sh:targetNode in a shape is either an IRI or a literal.
    return shape.targetNodes.some(targetNode => {
      switch (targetNode.termType) {
        case "Literal":
          return callback(targetNode);
        case "NamedNode":
          if (
            this.dataGraph.store.some(
              () => true,
              targetNode,
              null,
              null,
              null
            ) &&
            seenFocusNodeSet.add(targetNode)
          ) {
            return callback(targetNode);
          }
      }
      return false;
    });
  }

  private someShapeTargetObjectsOfFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // If s is a shape in a shapes graph SG and s has value p for sh:targetObjectsOf in SG then the set of nodes in a data graph DG that are objects of triples in DG with predicate p is a target from DG for s in SG.
    return shape.targetObjectsOf.some(p =>
      this.dataGraph.store.some(
        quad => {
          switch (quad.object.termType) {
            case "BlankNode":
            case "NamedNode":
              if (seenFocusNodeSet.add(quad.object)) {
                return callback(quad.object);
              }
            case "Literal":
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
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // If s is a shape in a shapes graph SG and s has value p for sh:targetSubjectsOf in SG then the set of nodes in a data graph DG that are subjects of triples in DG with predicate p is a target from DG for s in SG.
    return shape.targetSubjectsOf.some(p =>
      this.dataGraph.store.some(
        quad => {
          switch (quad.subject.termType) {
            case "BlankNode":
            case "NamedNode":
              if (seenFocusNodeSet.add(quad.subject)) {
                return callback(quad.subject);
              }
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

  someShapeFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    const seenFocusNodeSet = new TermSet<FocusNode>();
    for (const someShapeFocusNodesMethod of [
      this.someShapeTargetNodeFocusNodes,
      this.someShapeTargetClassFocusNodes,
      this.someShapeImplicitClassFocusNodes,
      this.someShapeTargetSubjectsOfFocusNodes,
      this.someShapeTargetObjectsOfFocusNodes,
    ]) {
      if (
        someShapeFocusNodesMethod.bind(this)(callback, seenFocusNodeSet, shape)
      ) {
        return true;
      }
    }
    return false;
  }

  validate(): ValidationReport {
    const validator = new SHACLValidator(this.shapesGraph.store);
    return validator.validate(this.dataGraph.store);
  }
}
