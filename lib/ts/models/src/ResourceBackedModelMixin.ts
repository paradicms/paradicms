import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import {NonNullable} from "@paradicms/utilities";
import {ModelSet} from "./ModelSet";
import {ModelIdentifier} from "./ModelIdentifier";
import {ModelGraphIdentifier} from "./ModelGraphIdentifier";

export abstract class ResourceBackedModelMixin {
  abstract readonly dataset: DatasetCore;
  abstract readonly graph: ModelGraphIdentifier;
  protected abstract readonly _identifier: ModelIdentifier;
  abstract readonly modelSet: ModelSet;
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
  protected abstract mapIriObject(term: Term): string | null;
}
