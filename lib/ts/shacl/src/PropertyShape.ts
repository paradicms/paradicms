import {Shape} from "./Shape";
import {NamedNode} from "n3";
import {SH} from "@paradicms/vocabularies";
import {requireDefined} from "@paradicms/models/dist/requireDefined";

export class PropertyShape extends Shape {
  get path(): NamedNode {
    return requireDefined(
      this.getObjects(SH.path).find(term => term.termType === "NamedNode")
    ) as NamedNode;
  }
}
