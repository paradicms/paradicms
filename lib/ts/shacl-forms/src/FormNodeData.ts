import {BlankNode, NamedNode, Term} from "@rdfjs/types";
import {
  DataGraph,
  NodeShape,
  PropertyShape,
  ShaclProcessor,
} from "@paradicms/shacl";
import {FormPropertyData} from "./FormPropertyData";
import TermMap from "@rdfjs/term-map";
import {getRdfNodeLabel} from "@paradicms/rdf";

export class FormNodeData {
  readonly dataGraph: DataGraph;
  readonly dataGraphNode: BlankNode | NamedNode;
  readonly shape: NodeShape;

  constructor(kwds: {
    dataGraph: DataGraph;
    dataGraphNode: BlankNode | NamedNode;
    shape: NodeShape;
  }) {
    this.dataGraph = kwds.dataGraph;
    this.dataGraphNode = kwds.dataGraphNode;
    this.shape = kwds.shape;
  }

  delete(): void {
    // Delete (s, p, o)
    // Recursively delete (blankNode, p, o) where (s, p, blankNode)
    const deleteQuadsWithSubject = (subject: Term) => {
      for (const quad of this.dataGraph.match(subject, null, null, null)) {
        if (quad.object.termType === "BlankNode") {
          deleteQuadsWithSubject(quad.object);
        }
        this.dataGraph.delete(quad);
      }
    };

    deleteQuadsWithSubject(this.dataGraphNode);
  }

  get id(): string {
    return this.dataGraphNode.value;
  }

  get label(): string {
    return (
      getRdfNodeLabel({dataset: this.dataGraph, node: this.dataGraphNode}) ??
      this.dataGraphNode.value
    );
  }

  get properties(): readonly FormPropertyData[] {
    return [...this.propertyShapesByPath.values()]
      .map(pathPropertyShapes => {
        switch (pathPropertyShapes.length) {
          case 0:
            throw new EvalError("should never happen");
          case 1:
            return pathPropertyShapes[0];
          default:
            throw new EvalError(
              "not implemented: synthesize a PropertyShape with sh:and the multiple shapes with the same sh:path"
            );
        }
      })
      .sort((leftPropertyShape, rightPropertyShape) => {
        // If present at property shapes, the recommended use of sh:order is to sort the property shapes in an ascending order,
        // for example so that properties with smaller order are placed above (or to the left) of properties with larger order.
        const orderDifference =
          (leftPropertyShape.order ?? 0) - (rightPropertyShape.order ?? 0);
        if (orderDifference !== 0) {
          return orderDifference;
        } else {
          // If the order is the same, sort by path
          return leftPropertyShape.path.value.localeCompare(
            rightPropertyShape.path.value
          );
        }
      })
      .map(
        propertyShape =>
          new FormPropertyData({
            formNode: this,
            shape: propertyShape,
          })
      );
  }

  private get propertyShapesByPath(): TermMap<NamedNode, PropertyShape[]> {
    const propertyShapesByPath = new TermMap<NamedNode, PropertyShape[]>();
    new ShaclProcessor({
      dataGraph: this.dataGraph,
      shapesGraph: this.shape.shapesGraph,
    }).someFocusNodePropertyShapes(propertyShape => {
      const existingPropertyShapes = propertyShapesByPath.get(
        propertyShape.path
      );
      if (existingPropertyShapes) {
        existingPropertyShapes.push(propertyShape);
      } else {
        propertyShapesByPath.set(propertyShape.path, [propertyShape]);
      }
      return false;
    }, this.dataGraphNode);
    return propertyShapesByPath;
  }
}
