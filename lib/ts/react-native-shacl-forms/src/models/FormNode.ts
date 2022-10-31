import {DataGraphNode} from "./DataGraphNode";
import {NodeShape} from "@paradicms/shacl";
import {FormProperty} from "./FormProperty";
import {FormData} from "./FormData";

export class FormNode {
  readonly dataGraphNode: DataGraphNode;
  readonly formData: FormData;
  readonly shapes: readonly NodeShape[];

  constructor(kwds: {
    dataGraphNode: DataGraphNode;
    formData: FormData;
    shapes: readonly NodeShape[];
  }) {
    this.dataGraphNode = kwds.dataGraphNode;
    this.formData = kwds.formData;
    this.shapes = kwds.shapes;
  }

  get properties(): readonly FormProperty[] {}
}
