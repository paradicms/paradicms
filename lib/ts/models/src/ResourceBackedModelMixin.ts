import {BlankNode, NamedNode, Term} from "@rdfjs/types";
import {NonNullable} from "@paradicms/utilities";
import {ModelSet} from "./ModelSet";
import {Dataset} from "@rdfjs/types";

export abstract class ResourceBackedModelMixin {
  abstract readonly dataset: Dataset;
  abstract readonly modelSet: ModelSet;
  abstract readonly graphNode: NamedNode;
  protected abstract readonly _node: BlankNode | NamedNode;
  protected abstract filterAndMapObjects<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): readonly NonNullable<T>[];
  protected abstract findAndMapObject<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): NonNullable<T> | null;
  protected abstract hasObject(property: NamedNode): boolean;
  protected abstract mapStringObject(term: Term): string | null;
  protected abstract mapUriObject(term: Term): string | null;
}