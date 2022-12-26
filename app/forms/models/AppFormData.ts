import {FormData} from "@paradicms/shacl-forms";
import {DataGraph} from "@paradicms/shacl";
import {AppFormShape} from "./AppFormShape";

export class AppFormData extends FormData {
  readonly id: string;
  readonly label: string;

  constructor(kwds: {
    dataGraph: DataGraph;
    id: string;
    label: string;
    shape: AppFormShape;
  }) {
    super({dataGraph: kwds.dataGraph, shape: kwds.shape});
    this.id = kwds.id;
    this.label = kwds.label;
  }

  get shape(): AppFormShape {
    return this._shape as AppFormShape;
  }
}
