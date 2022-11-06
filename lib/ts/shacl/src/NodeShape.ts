import {Shape} from "./Shape";
import {PropertyShape} from "./PropertyShape";
import {SH} from "@paradicms/vocabularies";
import {BlankNode, NamedNode} from "n3";

export class NodeShape extends Shape {
  get properties(): readonly PropertyShape[] {
    return this.getObjects(SH.property).flatMap(propertyObject => {
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
