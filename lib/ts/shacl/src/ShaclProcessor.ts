import {BlankNode, NamedNode} from "@rdfjs/types";
import {Shape} from "./Shape";
import {FocusNode} from "./FocusNode";
import {DataGraph} from "./DataGraph";
import {ShapesGraph} from "./ShapesGraph";
import * as ValidationReport from "rdf-validate-shacl/src/validation-report";
import SHACLValidator from "rdf-validate-shacl";
import {getRdfInstances, hasRdfSuperClass} from "@paradicms/rdf";
import TermSet from "@rdfjs/term-set";
import {PropertyShape} from "./PropertyShape";
import {NodeShape} from "./NodeShape";
import {NodeKind} from "./NodeKind";

type SomeShapeFocusNodeCallback = (focusNode: FocusNode) => boolean;

export class ShaclProcessor {
  private readonly dataGraph: DataGraph;
  private readonly shapesGraph: ShapesGraph;

  constructor(kwds: {dataGraph: DataGraph; shapesGraph: ShapesGraph}) {
    this.dataGraph = kwds.dataGraph;
    this.shapesGraph = kwds.shapesGraph;
  }

  /**
   * Some (existential quantification) method that traverses property shapes that have the given focus node in their set of focus nodes.
   */
  someFocusNodePropertyShapes(
    callback: (propertyShape: PropertyShape) => boolean,
    focusNode: FocusNode
  ): boolean {
    const seenPropertyShapeNodeSet = new TermSet<BlankNode | NamedNode>();

    // Find node shapes that target the focus node, then look for their sh:property's
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
   * Some (existential quantification) method that traverses node shapes that target the given rdf:type.
   */
  someRdfTypeNodeShapes(
    callback: (nodeShape: NodeShape) => boolean,
    rdfType: NamedNode
  ): boolean {
    const nodeShapeTargetsRdfType = (nodeShape: NodeShape): boolean => {
      if (
        nodeShape.nodeKind !== null &&
        nodeShape.nodeKind === NodeKind.LITERAL
      ) {
        return false;
      }

      for (const targetClass of nodeShape.targetClasses) {
        if (
          rdfType.equals(targetClass) ||
          hasRdfSuperClass({
            dataset: this.shapesGraph.dataset,
            subClass: rdfType,
            superClass: targetClass,
          })
        ) {
          return true;
        }
      }

      for (const targetClass of nodeShape.implicitClassTargets) {
        if (
          rdfType.equals(targetClass) ||
          hasRdfSuperClass({
            dataset: this.shapesGraph.dataset,
            subClass: rdfType,
            superClass: targetClass,
          })
        ) {
          return true;
        }
      }

      return false;
    };

    for (const nodeShape of this.shapesGraph.nodeShapes) {
      if (nodeShapeTargetsRdfType(nodeShape)) {
        if (callback(nodeShape)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Some (existential quantification) method that traverses focus nodes that are instances of the shape if the shape is
   * an rdfs:Class or a sub-class of rdfs:Class (implicit class targets).
   */
  private someShapeImplicitClassTargetFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // If the shape has an rdf:type of rdfs:Class or a sub-class of rdfs:Class,
    // all data graph instances of the shape or its sub-classes are focusNodes.
    return shape.implicitClassTargets.some(rdfType => {
      for (const focusNode of getRdfInstances({
        class_: rdfType,
        dataset: this.dataGraph,
      })) {
        if (seenFocusNodeSet.add(focusNode) && callback(focusNode)) {
          return true;
        }
      }
      return false;
    });
  }

  /**
   * Some (existential quantification) method that traverses focus nodes that are the objects of a property shape
   * with an sh:node constraint.
   */
  private someShapeShNodeFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    if (!(shape instanceof NodeShape)) {
      return false;
    }

    const nodeShape: NodeShape = shape;

    // Traverse all property shapes
    for (const propertyShape of this.shapesGraph.propertyShapes) {
      for (const propertyShapeNodeShape of propertyShape.nodeShapes) {
        // If a property shape has a sh:node referencing nodeShape
        if (!propertyShapeNodeShape.node.equals(nodeShape.node)) {
          continue;
        }
        // Then the objects of all quads with the property shape path are focus nodes of nodeShape
        // TODO: does the subject need to match nodeShape?
        for (const quad of this.dataGraph.match(
          null,
          propertyShape.path,
          null,
          null
        )) {
          switch (quad.object.termType) {
            case "BlankNode":
            case "NamedNode":
              const focusNode = quad.object as BlankNode | NamedNode;
              if (seenFocusNodeSet.add(focusNode) && callback(focusNode)) {
                return true;
              }
          }
        }
      }
    }

    return false;
  }

  /**
   * Some (existential quantification) method that traverses focus nodes that are instances of a target class
   * (sh:targetClass) for a shape.
   */
  private someShapeTargetClassFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    return shape.targetClasses.some(targetClass => {
      for (const focusNode of getRdfInstances({
        class_: targetClass,
        dataset: this.dataGraph,
      })) {
        if (seenFocusNodeSet.add(focusNode) && callback(focusNode)) {
          return true;
        }
      }
      return false;
    });
  }

  /**
   * Some (existential quantification) method that traverses focus nodes that are targeted by a shape via sh:targetNode.
   */
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
            this.dataGraph.match(targetNode, null, null, null).size > 0 &&
            seenFocusNodeSet.add(targetNode)
          ) {
            return callback(targetNode);
          }
      }
      return false;
    });
  }

  /**
   * Some (existential quantification) method that traverses focus nodes that are targeted by a shape via
   * sh:targetObjectsOf.
   */
  private someShapeTargetObjectsOfFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // If s is a shape in a shapes graph SG and s has value p for sh:targetObjectsOf in SG then the set of nodes in a data graph DG that are objects of triples in DG with predicate p is a target from DG for s in SG.
    return shape.targetObjectsOf.some(p => {
      for (const quad of this.dataGraph.match(null, p, null, null)) {
        switch (quad.object.termType) {
          case "BlankNode":
          case "NamedNode":
            if (seenFocusNodeSet.add(quad.object) && callback(quad.object)) {
              return true;
            }
            break;
          case "Literal":
            if (callback(quad.object)) {
              return true;
            }
          default:
            return false;
        }
      }
      return false;
    });
  }

  /**
   * Some (existential quantification) method that traverses focus nodes that are targeted by a shape via
   * sh:targetSubjectsOf.
   */
  private someShapeTargetSubjectsOfFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    seenFocusNodeSet: TermSet<FocusNode>,
    shape: Shape
  ): boolean {
    // If s is a shape in a shapes graph SG and s has value p for sh:targetSubjectsOf in SG then the set of nodes in a data graph DG that are subjects of triples in DG with predicate p is a target from DG for s in SG.
    return shape.targetSubjectsOf.some(p => {
      for (const quad of this.dataGraph.match(null, p, null, null)) {
        switch (quad.subject.termType) {
          case "BlankNode":
          case "NamedNode":
            if (seenFocusNodeSet.add(quad.subject) && callback(quad.subject)) {
              return true;
            }
            break;
          default:
            return false;
        }
      }
      return false;
    });
  }

  /**
   * Some (existential quantification) method that traverses focus nodes of a shape.
   */
  someShapeFocusNodes(
    callback: SomeShapeFocusNodeCallback,
    shape: Shape
  ): boolean {
    const seenFocusNodeSet = new TermSet<FocusNode>();

    // The set of focus nodes for a shape may be identified as follows:
    for (const someShapeFocusNodesMethod of [
      // specified in a shape using target declarations
      this.someShapeTargetNodeFocusNodes,
      this.someShapeTargetClassFocusNodes,
      this.someShapeImplicitClassTargetFocusNodes,
      this.someShapeTargetSubjectsOfFocusNodes,
      this.someShapeTargetObjectsOfFocusNodes,
      // specified in any constraint that references a shape in parameters of shape-expecting constraint parameters (e.g. sh:node)
      this.someShapeShNodeFocusNodes,
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
    const validator = new SHACLValidator(this.shapesGraph.dataset);
    return validator.validate(this.dataGraph);
  }
}
