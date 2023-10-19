import {NonNullable} from "@paradicms/utilities";
import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";

export abstract class ResourceBackedModelMixin {
  abstract readonly dataset: DatasetCore;
  abstract readonly graph: NamedNode;
  abstract readonly iri: NamedNode;
  abstract readonly modelSet: ModelSet;
  protected abstract filterAndMapObjects<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): readonly NonNullable<T>[];
  protected abstract findAndMapObject<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): NonNullable<T> | null;
}
