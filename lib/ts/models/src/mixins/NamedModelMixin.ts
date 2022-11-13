import {NamedNode} from "@rdfjs/types";
import {ModelMixin} from "./ModelMixin";

export abstract class NamedModelMixin extends ModelMixin {
  abstract readonly node: NamedNode;
  abstract readonly uri: string;
}
