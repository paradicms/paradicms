import {NamedNode} from "n3";
import {ModelMixin} from "./ModelMixin";

export abstract class NamedModelMixin extends ModelMixin {
  protected abstract readonly node: NamedNode;
  protected abstract readonly uri: string;
}
