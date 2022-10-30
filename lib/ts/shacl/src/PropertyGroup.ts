import {NamedNode} from "n3";
import {ShapesGraph} from "./ShapesGraph";
import {RDFS} from "@paradicms/vocabularies";
import {Model} from "./Model";

export class PropertyGroup extends Model {
  constructor(kwds: {node: NamedNode; shapesGraph: ShapesGraph}) {
    super(kwds);
  }

  get label(): string | null {
    return (
      this.getObjects(RDFS.label).find((term) => term.termType === "Literal")
        ?.value ?? null
    );
  }
}
