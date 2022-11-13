import {Shape} from "./Shape";
import {PropertyShape} from "./PropertyShape";
import {sh} from "@paradicms/vocabularies";
import {BlankNode, NamedNode} from "@rdfjs/types";

export class NodeShape extends Shape {
  get properties(): readonly PropertyShape[] {
    return this.getObjects(sh.property).flatMap(propertyObject => {
      switch (propertyObject.termType) {
        case "BlankNode":
        case "NamedNode":
          return [
            this.shapesGraph.propertyShapeByNode(
              propertyObject as BlankNode | NamedNode
            ),
          ];
        default:
          return [];
      }
    });
  }
}
