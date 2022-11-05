import {PropertyShape} from "@paradicms/shacl";
import {NamedNode} from "n3";
import {FormNode} from "./FormNode";

export class FormProperty {
  readonly formNode: FormNode;
  readonly path: NamedNode;
  readonly shapes: readonly PropertyShape[];

  constructor(kwds: {
    formNode: FormNode;
    path: NamedNode;
    shapes: readonly PropertyShape[];
  }) {
    this.formNode = kwds.formNode;
    this.path = kwds.path;
    this.shapes = kwds.shapes;
  }
}
