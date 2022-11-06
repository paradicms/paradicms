import {DataGraphNode} from "./DataGraphNode";
import {FormNodeType} from "./FormNodeType";
import {OTerm, Term} from "n3";
import {PropertyShape} from "@paradicms/shacl";

export class FormNode {
  readonly dataGraphNode: DataGraphNode;
  readonly type: FormNodeType;

  constructor(kwds: {dataGraphNode: DataGraphNode; type: FormNodeType}) {
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

  // get properties(): readonly FormProperty[] {}

  // @ts-ignore
  private get propertyShapes(): readonly PropertyShape[] {
    // All applicable node shapes, and all their sh:properties
    // All applicable property shapes

    // const propertyShapes: PropertyShape[] = [];
    // for (const propertyShape of this.type.form.shapesGraph.propertyShapes) {
    //   if (
    //     this.type.form.dataGraph.someShapeFocusNode(
    //       focusNode => focusNode.equals(this.dataGraphNode),
    //       propertyShape
    //     )
    //   ) {
    //     propertyShapes.push(propertyShape);
    //   }
    // }

    return [];
  }
}
