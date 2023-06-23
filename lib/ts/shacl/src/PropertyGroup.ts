import {NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "./ShapesGraph";
import {rdfs} from "@paradicms/vocabularies";
import {ShaclModel} from "./ShaclModel";
import {mapTermToString} from "@paradicms/rdf";

export class PropertyGroup extends ShaclModel {
  constructor(kwds: {node: NamedNode; shapesGraph: ShapesGraph}) {
    super(kwds);
  }

  get label(): string | null {
    return this.findAndMapObject(rdfs.label, mapTermToString);
  }
}
