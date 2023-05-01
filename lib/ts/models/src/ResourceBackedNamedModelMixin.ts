import {NamedNode} from "@rdfjs/types";
import {ResourceBackedModelMixin} from "./ResourceBackedModelMixin";

export abstract class ResourceBackedNamedModelMixin extends ResourceBackedModelMixin {
  abstract readonly identifier: NamedNode;
  abstract readonly uri: string;
}
