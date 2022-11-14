import {BlankNode, Dataset, DefaultGraph, NamedNode, Term} from "@rdfjs/types";

export abstract class Resource {
  abstract readonly dataset: Dataset;
  abstract readonly graphNode: DefaultGraph | NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: {node: BlankNode | NamedNode}) {
    this._node = kwds.node;
  }

  protected findAndMapObject<T>(
    property: NamedNode,
    callback: (value: Term) => NonNullable<T> | null
  ): NonNullable<T> | null {
    for (const quad of this.dataset.match(
      this.node,
      property,
      null,
      this.graphNode
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
      this.node,
      property,
      null,
      this.graphNode
    )) {
      const mappedObject: T | null = callback(quad.object);
      if (mappedObject !== null) {
        mappedObjects.push(mappedObject as NonNullable<T>);
      }
    }
    return mappedObjects;
  }

  protected hasObject(property: NamedNode): boolean {
    return (
      this.dataset.match(this.node, property, null, this.graphNode).size > 0
    );
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }
}
