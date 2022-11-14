import {NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "./ShapesGraph";
import {rdfs} from "@paradicms/vocabularies";
import {Model} from "./Model";

export class PropertyGroup extends Model {
  constructor(kwds: {node: NamedNode; shapesGraph: ShapesGraph}) {
    super(kwds);
  }

  get label(): string | null {
    return this.findAndMapObject(rdfs.label, term =>
      term.termType === "Literal" ? term.value : null
    );
  }
}
