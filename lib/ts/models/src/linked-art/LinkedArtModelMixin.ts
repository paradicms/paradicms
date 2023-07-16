import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {LinkedArtModel} from "./LinkedArtModel";
import {NamedNode} from "@rdfjs/types";

export abstract class LinkedArtModelMixin extends ResourceBackedModelMixin {
  abstract readonly hasType: readonly NamedNode[];
  abstract readonly isReferredToBy: readonly LinkedArtModel[];
}
