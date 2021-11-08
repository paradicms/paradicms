import {BlankNode, Literal, NamedNode, Store, Term} from "n3";
import {Dataset} from "./Dataset";
import {DCTERMS, FOAF, PARADICMS, RDF} from "./vocabularies";
import {Property} from "./Property";
import {NamedModel} from "./NamedModel";

export class Model {
  readonly dataset: Dataset;
  protected readonly _node: BlankNode | NamedNode;

  private static createIgnoredPropertyUris(): Set<string> {
    const result = new Set<string>();
    // Ignore the rights properties
    result.add(DCTERMS.creator.value);
    result.add(DCTERMS.license.value);
    result.add(DCTERMS.rights.value);
    result.add(DCTERMS.rightsHolder.value);
    result.add(FOAF.page.value);
    result.add(PARADICMS.collection.value);
    result.add(PARADICMS.institution.value);
    result.add(RDF.type.value);
    return result;
  }

  private static readonly IGNORED_PROPERTY_URIS = Model.createIgnoredPropertyUris();

  constructor(kwds: {dataset: Dataset; node: BlankNode | NamedNode}) {
    this.dataset = kwds.dataset;
    this._node = kwds.node;
  }

  get node(): BlankNode | NamedNode {
    return this._node;
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

  protected get _properties(): readonly Property[] {
    const properties: Property[] = [];
    this.store.forEach(
      quad => {
        const propertyUri = quad.predicate.value;
        if (Model.IGNORED_PROPERTY_URIS.has(propertyUri)) {
          return;
        }
        properties.push(
          new Property({
            dataset: this.dataset,
            value: quad.object,
            uri: propertyUri,
          })
        );
      },
      this.node,
      null,
      null,
      null
    );
    return properties;
  }

  protected get _propertyUris(): readonly string[] {
    const propertyUris: string[] = [];
    this.store.forPredicates(
      predicate => {
        const propertyUri = predicate.value;
        if (Model.IGNORED_PROPERTY_URIS.has(propertyUri)) {
          return;
        }
        propertyUris.push(propertyUri);
      },
      this.node,
      null,
      null
    );
    return propertyUris;
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
