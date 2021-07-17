import {RDF} from "./vocabularies";
import {ModelNode} from "./ModelNode";
import {LiteralWrapper} from "./LiteralWrapper";
import {RdfReaderException} from "./RdfReaderException";
import {NamedNode, Quad, Store} from "n3";

export abstract class ModelRdfReader<ModelT> {
  protected constructor(
    protected readonly node: ModelNode,
    protected readonly store: Store,
  ) {
  }

  protected indexNodeStatementsByPredicateUri(
    nodeStatements?: readonly Quad[],
  ): {[index: string]: readonly Quad[]} {
    if (!nodeStatements) {
      nodeStatements = this.store.getQuads(this.node, null, null, null);
    }

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
    type: NamedNode,
  ): ModelT[] {
    const models: ModelT[] = [];
    store.forSubjects(node => {
      switch (node.termType) {
        case "BlankNode":
        case "NamedNode":
          break;
        default:
          throw new RdfReaderException(
            `expected BlankNode or NamedNode, actual ${node.termType}`,
          );
      }
      models.push(readerFactory(node as ModelNode).read());
    }, RDF.type, type, null);
    return models;
  }

  protected readAllParentNamedNodes(
    childToParentProperty: NamedNode
  ): NamedNode[] {
    const parentNodes = this.store.getObjects(
      this.node,
      childToParentProperty,
      null,
    );
    if (parentNodes.length === 0) {
      return [];
    }
    return parentNodes
      .filter(node => node.termType === "NamedNode")
      .map(node => node as NamedNode);
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
}
