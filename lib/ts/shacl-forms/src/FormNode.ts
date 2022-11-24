import {FormNodeType} from "./FormNodeType";
import {NamedNode, Term} from "@rdfjs/types";
import {
  DataGraph,
  PropertyShape,
  ShaclProcessor,
  ShapesGraph,
} from "@paradicms/shacl";
import {FormProperty} from "./FormProperty";
import {Model} from "./Model";
import {TermMap} from "@paradicms/rdf";
import {rdfs} from "@paradicms/vocabularies";

export class FormNode extends Model {
  readonly dataGraphNode: NamedNode;
  readonly type: FormNodeType;

  constructor(kwds: {dataGraphNode: NamedNode; type: FormNodeType}) {
    super();
    this.dataGraphNode = kwds.dataGraphNode;
    this.type = kwds.type;
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

  get dataGraph(): DataGraph {
    return this.type.dataGraph;
  }

  get id(): string {
    return this.dataGraphNode.value;
  }

  get label(): string {
    return this.rdfsLabel ?? this.dataGraphNode.value;
  }

  get properties(): readonly FormProperty[] {
    return this.propertyShapesByPath.values
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
          new FormProperty({
            formNode: this,
            shape: propertyShape,
          })
      );
  }

  private get propertyShapesByPath(): TermMap<NamedNode, PropertyShape[]> {
    const propertyShapesByPath = new TermMap<NamedNode, PropertyShape[]>();
    new ShaclProcessor({
      dataGraph: this.dataGraph,
      shapesGraph: this.shapesGraph,
    }).someFocusNodePropertyShapes(propertyShape => {
      const existingPropertyShapes = propertyShapesByPath.getOptional(
        propertyShape.path
      );
      if (existingPropertyShapes) {
        existingPropertyShapes.push(propertyShape);
      } else {
        propertyShapesByPath.put(propertyShape.path, [propertyShape]);
      }
      return false;
    }, this.dataGraphNode);
    return propertyShapesByPath;
  }

  private get rdfsLabel(): string | null {
    for (const rdfsLabelQuad of this.dataGraph.match(
      this.dataGraphNode,
      rdfs.label,
      null,
      null
    )) {
      if (rdfsLabelQuad.object.termType === "Literal") {
        return rdfsLabelQuad.object.value;
      }
    }

    return null;
  }

  get shapesGraph(): ShapesGraph {
    return this.type.shapesGraph;
  }
}
