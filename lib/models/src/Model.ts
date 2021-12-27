import {BlankNode, Literal, NamedNode, Quad, Store, Term} from "n3";
import {Dataset} from "./Dataset";
import {NamedModel} from "./NamedModel";
import {ModelParameters} from "./ModelParameters";
import {NamedValue} from "./NamedValue";
import {Text} from "./Text";
import {PARADICMS, RDF} from "./vocabularies";
import {PropertyValue} from "./PropertyValue";

export class Model {
  readonly dataset: Dataset;
  readonly graphNode: NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: ModelParameters) {
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
  }

  private forEachPropertyQuad(
    callback: (quad: Quad) => void,
    propertyUri: string
  ): void {
    this.store.forEach(
      callback,
      this.node,
      new NamedNode(propertyUri),
      null,
      this.graphNode
    );
  }

  private hasRdfType(node: BlankNode | NamedNode, rdfType: NamedNode): boolean {
    for (const object of this.store.getObjects(node, RDF.type, null)) {
      if (object.termType === "NamedNode" && object.value === rdfType.value) {
        return true;
      }
    }
    return false;
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }

  protected optionalLiteral(property: NamedNode): Literal | null {
    const nodes = this.store.getObjects(this.node, property, null);
    if (nodes.length === 0) {
      return null;
    }
    for (const node of nodes) {
      if (node.termType === "Literal") {
        return node as Literal;
      }
    }
    return null;
  }

  protected optionalModelOrString<ModelT extends NamedModel>(
    modelByUri: (uri: string) => ModelT,
    property: NamedNode
  ): ModelT | string | null {
    const objects = this.store.getObjects(this.node, property, null);
    for (const object of objects) {
      switch (object.termType) {
        case "Literal":
          return object.value;
        case "NamedNode":
          return modelByUri(object.value);
      }
    }
    return null;
  }

  protected optionalString(property: NamedNode): string | null {
    return this.optionalLiteral(property)?.value ?? null;
  }

  protected optionalStringOrUri(property: NamedNode): string | null {
    for (const object of this.store.getObjects(this.node, property, null)) {
      switch (object.termType) {
        case "Literal":
        case "NamedNode":
          return object.value;
      }
    }
    return null;
  }

  protected optionalStringOrText(property: NamedNode): string | Text | null {
    for (const object of this.store.getObjects(this.node, property, null)) {
      switch (object.termType) {
        case "BlankNode":
          if (this.hasRdfType(object as BlankNode, PARADICMS.Text)) {
            return new Text({
              dataset: this.dataset,
              graphNode: this.graphNode,
              node: object,
            });
          }
          break;
        case "Literal":
          return object.value;
      }
    }
    return null;
  }

  protected parentNamedNodes(childToParentProperty: NamedNode): NamedNode[] {
    const parentNodes = this.store.getObjects(
      this.node,
      childToParentProperty,
      null
    );
    if (parentNodes.length === 0) {
      return [];
    }
    return parentNodes
      .filter(node => node.termType === "NamedNode")
      .map(node => node as NamedNode);
  }

  protected _propertyNamedValues(propertyUri: string): readonly NamedValue[] {
    const result: NamedValue[] = [];
    this.forEachPropertyQuad(quad => {
      if (quad.object.termType !== "NamedNode") {
        return;
      }
      if (!this.hasRdfType(quad.object as NamedNode, PARADICMS.NamedValue)) {
        return;
      }
      result.push(
        new NamedValue({
          dataset: this.dataset,
          graphNode: quad.graph as NamedNode,
          node: quad.object,
        })
      );
    }, propertyUri);
    return result;
  }

  protected _propertyValues(propertyUri: string): readonly PropertyValue[] {
    const result: PropertyValue[] = [];
    this.forEachPropertyQuad(quad => {
      switch (quad.object.termType) {
        case "BlankNode":
          if (this.hasRdfType(quad.object as BlankNode, PARADICMS.Text)) {
            result.push(
              PropertyValue.fromText(
                new Text({
                  dataset: this.dataset,
                  graphNode: this.graphNode,
                  node: quad.object as BlankNode,
                })
              )
            );
          }
          break;
        case "Literal":
          result.push(PropertyValue.fromLiteral(quad.object as Literal));
          break;
        case "NamedNode":
          if (this.hasRdfType(quad.object as NamedNode, PARADICMS.NamedValue)) {
            result.push(
              PropertyValue.fromNamedValue(
                new NamedValue({
                  dataset: this.dataset,
                  graphNode: quad.graph as NamedNode,
                  node: quad.object as NamedNode,
                })
              )
            );
          }
          break;
      }
    }, propertyUri);
    return result;
  }

  protected requiredLiteral(property: NamedNode): Literal {
    const literal = this.optionalLiteral(property);
    if (!literal) {
      throw new EvalError(
        `missing (<${this.node.value}>, <${property.value}>, literal) statement`
      );
    }
    return literal;
  }

  protected requiredString(property: NamedNode): string {
    return this.requiredLiteral(property).value;
  }

  protected requiredParentNamedNode(
    childToParentProperty: NamedNode
  ): NamedNode {
    const parentNamedNodes = this.parentNamedNodes(childToParentProperty);
    if (parentNamedNodes.length === 0) {
      throw new EvalError(
        `missing (<${this.node.value}>, <${childToParentProperty.value}>, <parent named node>) statement`
      );
    }
    return parentNamedNodes[0];
  }

  protected requiredTerm(property: NamedNode): Term {
    for (const object of this.store.getObjects(this.node, property, null)) {
      return object;
    }
    throw new EvalError(
      `missing (<${this.node.value}>, <${property.value}>, *) statement`
    );
  }

  protected get store(): Store {
    return this.dataset.store;
  }
}
