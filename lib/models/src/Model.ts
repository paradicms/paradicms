import {BlankNode, Literal, NamedNode, Store, Term} from "n3";
import {Dataset} from "./Dataset";
import {NamedModel} from "./NamedModel";
import {ModelParameters} from "./ModelParameters";
import {RDF} from "./vocabularies";

export class Model {
  readonly dataset: Dataset;
  readonly graphNode: NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: ModelParameters) {
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
  }

  protected hasRdfType(
    subject: BlankNode | NamedNode,
    rdfType: NamedNode
  ): boolean {
    return this.store.getQuads(subject, RDF.type, rdfType, null).length > 0;
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
