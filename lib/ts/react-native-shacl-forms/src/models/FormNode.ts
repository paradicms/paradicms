import {FormNodeType} from "./FormNodeType";
import {NamedNode, OTerm, Term} from "n3";
import {DataGraph, PropertyShape, ShapesGraph} from "@paradicms/shacl";
import {FormProperty} from "./FormProperty";
import {TermMap} from "@paradicms/shacl/dist/TermMap";
import {ShaclProcessor} from "@paradicms/shacl/dist/ShaclProcessor";
import {Model} from "./Model";

export class FormNode extends Model {
  readonly dataGraphNode: NamedNode;
  readonly type: FormNodeType;

  constructor(kwds: {dataGraphNode: NamedNode; type: FormNodeType}) {
    super();
    this.dataGraphNode = kwds.dataGraphNode;
    this.type = kwds.type;
  }

  delete(): void {
    const store = this.type.form.dataGraph.store;

    // Delete (s, p, o)
    // Recursively delete (blankNode, p, o) where (s, p, blankNode)
    const deleteQuadsWithSubject = (subject: Term) => {
      for (const quad of store.getQuads(
        subject,
        null as OTerm,
        null as OTerm,
        null as OTerm
      )) {
        if (quad.object.termType === "BlankNode") {
          deleteQuadsWithSubject(quad.object);
        }
        store.delete(quad);
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
          return (
            propertyShapesOrder(leftPropertyShapes) -
            propertyShapesOrder(rightPropertyShapes)
          );
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
      dataGraph: this.type.form.dataGraph,
      shapesGraph: this.type.form.shapesGraph,
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
