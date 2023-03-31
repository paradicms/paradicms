import {PropertyValue} from "./PropertyValue";
import {NamedNode} from "@rdfjs/types";
import {dcmitype} from "@paradicms/vocabularies";

export class DcmiTypePropertyValue extends PropertyValue {
  constructor(readonly node: NamedNode) {
    super();
  }

  get label() {
    return this.node.value.slice(dcmitype[""].value.length);
  }

  get value() {
    return this.node.value;
  }
}
