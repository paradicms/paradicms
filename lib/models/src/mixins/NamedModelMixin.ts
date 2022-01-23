import {NamedNode} from "n3";
import {ModelMixin} from "./ModelMixin";

export abstract class NamedModelMixin extends ModelMixin {
  abstract readonly node: NamedNode;
  abstract readonly uri: string;
}
