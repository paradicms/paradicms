import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import {ResourceGraphIdentifier} from "./ResourceGraphIdentifier";
import {ResourceIdentifier} from "./ResourceIdentifier";

export abstract class Resource {
  abstract readonly dataset: DatasetCore;
  abstract readonly graph: ResourceGraphIdentifier;
  protected readonly _identifier: ResourceIdentifier;

  constructor(kwds: {identifier: ResourceIdentifier}) {
    this._identifier = kwds.identifier;
  }

  protected findAndMapObject<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): NonNullable<T> | null {
    for (const quad of this.dataset.match(
      this.identifier,
      property,
      null,
      this.graph
    )) {
      const mappedObject: T | null = callback(quad.object);
      if (mappedObject !== null) {
        return mappedObject as NonNullable<T>;
      }
    }
    return null;
  }

  protected filterAndMapObjects<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): readonly NonNullable<T>[] {
    const mappedObjects: NonNullable<T>[] = [];
    for (const quad of this.dataset.match(
      this.identifier,
      property,
      null,
      this.graph
    )) {
      const mappedObject: T | null = callback(quad.object);
      if (mappedObject !== null) {
        mappedObjects.push(mappedObject as NonNullable<T>);
      }
    }
    return mappedObjects;
  }

  get identifier(): ResourceIdentifier {
    return this._identifier;
  }

  get iri(): string | null {
    return this.identifier.termType === "NamedNode"
      ? this.identifier.value
      : null;
  }
}
