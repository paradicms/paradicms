import {BlankNode, Dataset, DefaultGraph, NamedNode, Term} from "@rdfjs/types";
import {xsd} from "@tpluscode/rdf-ns-builders";

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

  protected mapBooleanObject(term: Term): boolean | null {
    if (term.termType !== "Literal") {
      return null;
    }
    if (!term.datatype || term.datatype.value !== xsd.boolean.value) {
      return null;
    }
    return term.value === "true" || term.value === "1";
  }

  protected mapFloatObject(term: Term): number | null {
    if (term.termType !== "Literal") {
      return null;
    }
    const parsedFloat = parseFloat(term.value);
    if (!isNaN(parsedFloat)) {
      return parsedFloat;
    } else {
      return null;
    }
  }

  protected mapIntObject(term: Term): number | null {
    if (term.termType !== "Literal") {
      return null;
    }
    if (!term.datatype || term.datatype.equals(xsd.integer)) {
      const parsedInt = parseInt(term.value);
      if (!isNaN(parsedInt)) {
        return parsedInt;
      } else {
        return null;
      }
    }
    return null;
  }

  protected mapStringObject(term: Term): string | null {
    if (term.termType !== "Literal") {
      return null;
    }
    return term.value;
  }

  protected mapUriObject(term: Term): string | null {
    if (term.termType !== "NamedNode") {
      return null;
    }
    return term.value;
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }
}
