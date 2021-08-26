import {PARADICMS, RDF} from "./vocabularies";
import {ModelNode} from "./ModelNode";
import {LiteralWrapper} from "./LiteralWrapper";
import {RdfReaderException} from "./RdfReaderException";
import {Literal, NamedNode, Quad, Store, Term} from "n3";
import {
  BooleanPropertyValue,
  NumberPropertyValue,
  Property,
  PropertyValue,
  StringPropertyValue,
  UriPropertyValue,
} from "@paradicms/models";

export abstract class ModelRdfReader<ModelT> {
  private static createIgnoredPropertyUris(): Set<string> {
    const result = new Set<string>();
    result.add(PARADICMS.collection.value);
    result.add(PARADICMS.institution.value);
    result.add(RDF.type.value);
    return result;
  }

  private static readonly IGNORED_PROPERTY_URIS = ModelRdfReader.createIgnoredPropertyUris();

  private _nodeStatements: readonly Quad[] | undefined;

  private _nodeStatementsByPredicateUri:
    | {[index: string]: readonly Quad[]}
    | undefined;

  protected constructor(
    protected readonly node: ModelNode,
    protected readonly store: Store
  ) {}

  private static indexNodeStatementsByPredicateUri(
    nodeStatements: readonly Quad[]
  ): {[index: string]: readonly Quad[]} {
    // Cache the node's statements from the store rather than doing multiple .each queries for each predicate
    return nodeStatements.reduce((nodeStatementsByPredicateUri, statement) => {
      if (statement.predicate.termType === "NamedNode") {
        const existing =
          nodeStatementsByPredicateUri[statement.predicate.value];
        if (existing) {
          nodeStatementsByPredicateUri[
            statement.predicate.value
          ] = existing.concat(statement);
        } else {
          nodeStatementsByPredicateUri[statement.predicate.value] = [statement];
        }
      }
      return nodeStatementsByPredicateUri;
    }, {} as {[index: string]: readonly Quad[]});
  }

  protected get nodeStatements(): readonly Quad[] {
    if (!this._nodeStatements) {
      this._nodeStatements = this.store.getQuads(this.node, null, null, null);
    }
    return this._nodeStatements;
  }

  protected get nodeStatementsByPredicateUri(): {
    [index: string]: readonly Quad[];
  } {
    if (!this._nodeStatementsByPredicateUri) {
      this._nodeStatementsByPredicateUri = ModelRdfReader.indexNodeStatementsByPredicateUri(
        this.nodeStatements
      );
    }
    return this._nodeStatementsByPredicateUri;
  }

  get nodeUri(): string {
    switch (this.node.termType) {
      case "BlankNode":
        throw new RdfReaderException("tried to get URI of blank node");
      case "NamedNode":
        return this.node.value;
      default:
        throw new EvalError();
    }
  }

  protected static _readAll<ModelT>(
    readerFactory: (node: ModelNode) => ModelRdfReader<ModelT>,
    store: Store,
    type: NamedNode
  ): ModelT[] {
    const models: ModelT[] = [];
    ModelRdfReader._readEach(
      model => models.push(model),
      readerFactory,
      store,
      type
    );
    return models;
  }

  protected readAllParentNamedNodes(
    childToParentProperty: NamedNode
  ): NamedNode[] {
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

  protected static _readEach<ModelT>(
    callback: (model: ModelT) => void,
    readerFactory: (node: ModelNode) => ModelRdfReader<ModelT>,
    store: Store,
    type: NamedNode
  ): void {
    store.forSubjects(
      node => {
        switch (node.termType) {
          case "BlankNode":
          case "NamedNode":
            break;
          default:
            throw new RdfReaderException(
              `expected BlankNode or NamedNode, actual ${node.termType}`
            );
        }
        callback(readerFactory(node as ModelNode).read());
      },
      RDF.type,
      type,
      null
    );
  }

  protected readOptionalLiteral(property: NamedNode): LiteralWrapper | null {
    const nodes = this.store.getObjects(this.node, property, null);
    if (nodes.length === 0) {
      return null;
    }
    for (const node of nodes) {
      if (node.termType === "Literal") {
        return new LiteralWrapper(node);
      }
    }
    return null;
  }

  protected readProperties(): readonly Property[] {
    const properties: Property[] = [];
    for (const nodeStatement of this.nodeStatements) {
      if (nodeStatement.predicate.termType !== "NamedNode") {
        continue;
      }
      const propertyUri = nodeStatement.predicate.value;
      if (ModelRdfReader.IGNORED_PROPERTY_URIS.has(propertyUri)) {
        continue;
      }
      const propertyValue = this.toPropertyValue(nodeStatement.object);
      if (!propertyValue) {
        continue;
      }
      properties.push({
        uri: propertyUri,
        value: propertyValue,
      });
    }
    return properties;
  }

  protected readPropertyValue(property: NamedNode): PropertyValue | null {
    const nodeStatements = this.nodeStatementsByPredicateUri[property.value];
    if (!nodeStatements) {
      return null;
    }

    for (const nodeStatement of nodeStatements) {
      const propertyValue = this.toPropertyValue(nodeStatement.object);
      if (propertyValue) {
        return propertyValue;
      }
    }

    return null;
  }

  protected readRequiredLiteral(property: NamedNode): LiteralWrapper {
    const literal = this.readOptionalLiteral(property);
    if (!literal) {
      throw new EvalError("missing required property " + property.value);
    }
    if (literal.isBlank()) {
      throw new EvalError("required property is blank " + property.value);
    }
    return literal;
  }

  protected readRequiredParentNamedNode(
    childToParentProperty: NamedNode
  ): NamedNode {
    const parentNamedNodes = this.readAllParentNamedNodes(
      childToParentProperty
    );
    if (parentNamedNodes.length === 0) {
      throw new RdfReaderException(
        `missing (<${this.node.value}>, <${childToParentProperty.value}>, <parent named node>) statement`
      );
    }
    return parentNamedNodes[0];
  }

  abstract read(): ModelT;

  protected toPropertyValue(term: Term): PropertyValue | null {
    switch (term.termType) {
      case "Literal":
        const literal = new LiteralWrapper(term as Literal);
        if (literal.isBoolean()) {
          const booleanValue: BooleanPropertyValue = {
            type: "boolean",
            value: literal.toBoolean(),
          };
          return booleanValue;
        } else if (literal.isInteger()) {
          const numberValue: NumberPropertyValue = {
            type: "number",
            value: literal.toInteger(),
          };
          return numberValue;
        } else if (literal.isString()) {
          const stringValue: StringPropertyValue = {
            type: "string",
            value: literal.toString(),
          };
          return stringValue;
        } else {
          console.warn("unknown literal datatype", literal.literal.datatype);
          return null;
        }
        throw new EvalError();
      case "NamedNode": {
        const uriValue: UriPropertyValue = {type: "uri", value: term.value};
        return uriValue;
      }
      default:
        return null;
    }
  }
}
