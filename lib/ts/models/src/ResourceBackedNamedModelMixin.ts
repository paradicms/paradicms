import {NamedNode} from "@rdfjs/types";
import {ResourceBackedModelMixin} from "./ResourceBackedModelMixin";

export abstract class ResourceBackedNamedModelMixin extends ResourceBackedModelMixin {
  abstract readonly node: NamedNode;
  abstract readonly uri: string;
}
