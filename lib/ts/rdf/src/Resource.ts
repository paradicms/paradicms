import {BlankNode, Dataset, DefaultGraph, NamedNode, Term} from "@rdfjs/types";
import {xsd} from "@tpluscode/rdf-ns-builders";

export abstract class Resource {
  abstract readonly dataset: Dataset;
  abstract readonly graph: BlankNode | DefaultGraph | NamedNode;
  protected readonly _identifier: BlankNode | NamedNode;

  constructor(kwds: {identifier: BlankNode | NamedNode}) {
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

  protected hasObject(property: NamedNode): boolean {
    return (
      this.dataset.match(this.identifier, property, null, this.graph).size > 0
    );
  }

  get identifier(): BlankNode | NamedNode {
    return this._identifier;
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
}
