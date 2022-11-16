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

  get properties(): readonly FormProperty[] {
    return this.propertyShapesByPath.values
      .concat()
      .sort(
        (
          leftPropertyShapes: PropertyShape[],
          rightPropertyShapes: PropertyShape[]
        ) => {
          const propertyShapesOrder = (
            propertyShapes: readonly PropertyShape[]
          ): number =>
            propertyShapes.find(propertyShape => propertyShape.order !== null)
              ?.order ?? 0;

          // If present at property shapes, the recommended use of sh:order is to sort the property shapes in an ascending order,
          // for example so that properties with smaller order are placed above (or to the left) of properties with larger order.
          const orderDifference =
            propertyShapesOrder(leftPropertyShapes) -
            propertyShapesOrder(rightPropertyShapes);
          if (orderDifference !== 0) {
            return orderDifference;
          } else {
            // If the order is the same, sort by path
            return leftPropertyShapes[0].path.value.localeCompare(
              rightPropertyShapes[0].path.value
            );
          }
        }
      )
      .map(
        propertyShapes =>
          new FormProperty({
            formNode: this,
            path: propertyShapes[0].path,
            shapes: propertyShapes,
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

  get shapesGraph(): ShapesGraph {
    return this.type.shapesGraph;
  }
}
