import {FormData} from "@paradicms/shacl-forms";
import {DataGraph} from "@paradicms/shacl";
import {NamedFormShape} from "./NamedFormShape";

export class NamedFormData extends FormData {
  readonly id: string;
  readonly label: string;

  constructor(kwds: {
    dataGraph: DataGraph;
    id: string;
    label: string;
    shape: NamedFormShape;
  }) {
    super({dataGraph: kwds.dataGraph, shape: kwds.shape});
    this.id = kwds.id;
    this.label = kwds.label;
  }

  get shape(): NamedFormShape {
    return this._shape as NamedFormShape;
  }
}
