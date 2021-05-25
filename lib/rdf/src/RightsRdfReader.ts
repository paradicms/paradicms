import {IndexedFormula, Literal as rdflibLiteral} from "rdflib";
import {ModelRdfReader} from "./ModelRdfReader";
import {Rights, Value} from "@paradicms/models";
import {DCTERMS} from "./vocabularies";
import {NamedNode, Quad} from "rdflib/lib/tf-types";
import {LiteralWrapper} from "./LiteralWrapper";
import {ModelNode} from "ModelNode";

export class RightsRdfReader extends ModelRdfReader<Rights | null> {
  private readonly nodeStatementsByPredicateUri: {
    [index: string]: readonly Quad[];
  };

  constructor(
    node: ModelNode,
    store: IndexedFormula,
    nodeStatements?: readonly Quad[]
  ) {
    super(node, store);

    this.nodeStatementsByPredicateUri = this.indexNodeStatementsByPredicateUri(
      nodeStatements
    );
  }

  read(): Rights | null {
    const creator = this.readValue(DCTERMS.creator);
    const holder = this.readValue(DCTERMS.rightsHolder);
    const license = this.readValue(DCTERMS.license);
    const statement = this.readValue(DCTERMS.rights);

    if (creator || holder || license || statement) {
      return {
        creator,
        holder,
        license,
        statement,
      };
    } else {
      return null;
    }
  }

  private readValue(property: NamedNode): Value | null {
    // const nodes = this.store.each(this.node, property, undefined);
    // if (nodes.length === 0) {
    //   return undefined;
    // }

    const nodeStatements = this.nodeStatementsByPredicateUri[property.value];
    if (!nodeStatements) {
      return null;
    }

    for (const nodeStatement of nodeStatements) {
      const object = nodeStatement.object;

      switch (object.termType) {
        case "Literal":
          const literal = new LiteralWrapper(object as rdflibLiteral);
          if (literal.isString()) {
            const text = literal.toString().trim();
            if (text.length > 0) {
              return {type: "text", value: text};
            }
          }
          break;
        case "NamedNode":
          return {type: "uri", value: object.value};
      }
    }

    return null;
  }
}
