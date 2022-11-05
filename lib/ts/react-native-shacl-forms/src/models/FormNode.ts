import {DataGraphNode} from "./DataGraphNode";
import {NodeShape} from "@paradicms/shacl";
import {Form} from "./Form";
import {NamedNode} from "n3";
import {RDF} from "@paradicms/vocabularies";
import {requireDefined} from "./requireDefined";

export class FormNode {
  readonly dataGraphNode: DataGraphNode;
  readonly form: Form;
  readonly shapes: readonly NodeShape[];

  constructor(kwds: {
    dataGraphNode: DataGraphNode;
    form: Form;
    shapes: readonly NodeShape[];
  }) {
    this.dataGraphNode = kwds.dataGraphNode;
    this.form = kwds.form;
    this.shapes = kwds.shapes;
  }

  // get properties(): readonly FormProperty[] {}

  get type(): NamedNode {
    return requireDefined(
      this.form.dataGraph.store
        .getObjects(this.dataGraphNode, RDF.type, null)
        .find((term) => term.termType === "NamedNode") as NamedNode | undefined
    );
  }
}
