import {NamedNode} from "@rdfjs/types";
import {SameAsModelMixin} from "./SameAsModelMixin";
import {NamedModel} from "../NamedModel";

export abstract class SameAsNamedModelMixin<
  ModelT extends NamedModel
> extends SameAsModelMixin<ModelT> {
  abstract readonly identifier: NamedNode;
  abstract readonly iri: string;
}
