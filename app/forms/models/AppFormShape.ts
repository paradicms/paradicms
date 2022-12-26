import {FormShape} from "@paradicms/shacl-forms";
import {NamedNode} from "@rdfjs/types";
import {ShapesGraph} from "@paradicms/shacl";

export class AppFormShape extends FormShape {
  readonly id: string;
  readonly label: string;

  constructor(kwds: {
    id: string;
    label: string;
    nodeRdfTypes: readonly NamedNode[];
    shapesGraph: ShapesGraph;
  }) {
    super({nodeRdfTypes: kwds.nodeRdfTypes, shapesGraph: kwds.shapesGraph});
    this.id = kwds.id;
    this.label = kwds.label;
  }
}
