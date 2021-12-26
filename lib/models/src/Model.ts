import {BlankNode, Literal, NamedNode, Store, Term} from "n3";
import {Dataset} from "./Dataset";
import {NamedModel} from "./NamedModel";
import {ModelParameters} from "./ModelParameters";
import {NamedValue} from "./NamedValue";
import {Text} from "./Text";
import {PARADICMS, RDF} from "./vocabularies";

export class Model {
  readonly dataset: Dataset;
  readonly graphNode: NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: ModelParameters) {
    this.dataset = kwds.dataset;
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
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

  propertyValues(uri: string): readonly (NamedValue | Term | Text)[] {
    const result: (NamedValue | Term | Text)[] = [];
    this.store.forEach(
      quad => {
        switch (quad.object.termType) {
          case "BlankNode":
            if (this.hasRdfType(quad.object as BlankNode, PARADICMS.Text)) {
              result.push(
                new Text({
                  dataset: this.dataset,
                  graphNode: this.graphNode,
                  node: quad.object as BlankNode,
                })
              );
            } else {
              console.warn(
                "non-Text BlankNode property value:",
                JSON.stringify(quad)
              );
              result.push(quad.object);
            }
            break;
          case "Literal":
            result.push(quad.object);
            break;
          case "NamedNode":
            if (
              this.hasRdfType(quad.object as NamedNode, PARADICMS.NamedValue)
            ) {
              result.push(
                new NamedValue({
                  dataset: this.dataset,
                  graphNode: quad.graph as NamedNode,
                  node: quad.object as NamedNode,
                })
              );
            } else {
              console.warn(
                "non-NamedValue NamedNode property value:",
                JSON.stringify(quad)
              );
              result.push(quad.object);
            }
            break;
        }
      },
      this.node,
      new NamedNode(uri),
      null,
      this.graphNode
    );
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
