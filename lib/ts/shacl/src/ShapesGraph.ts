import {
  BlankNode,
  DefaultGraph,
  NamedNode,
  Parser,
  ParserOptions,
  Store,
} from "n3";
import {ShapeParameters} from "./ShapeParameters";
import {RDF} from "@paradicms/vocabularies";
import * as SHACLValidator from "rdf-validate-shacl";
import * as ValidationReport from "rdf-validate-shacl/src/validation-report";

export class ShapesGraph {
  constructor(readonly store: Store) {}

  static parse(input: string, options?: ParserOptions): ShapesGraph {
    return new ShapesGraph(ShapesGraph.parseIntoStore(input, options));
  }

  protected static parseIntoStore(
    input: string,
    options?: ParserOptions
  ): Store {
    const parser = new Parser(options);
    const store = new Store();
    store.addQuads(parser.parse(input));
    return store;
  }

  protected readNamedShapes(
    callback: (kwds: ShapeParameters) => void,
    type: NamedNode
  ): void {
    this.store.forEach(
      (quad) => {
        switch (quad.graph.termType) {
          case "DefaultGraph":
          case "NamedNode":
            break;
          default:
            throw new RangeError(
              `expected NamedNode or default graph, actual ${quad.graph.termType}`
            );
        }

        switch (quad.subject.termType) {
          case "BlankNode":
          case "NamedNode":
            break;
          default:
            throw new RangeError(
              `expected BlankNode or NamedNode subject, actual ${quad.subject.termType}`
            );
        }

        callback({
          graphNode: quad.graph as DefaultGraph | NamedNode,
          node: quad.subject as BlankNode | NamedNode,
          shapesGraph: this,
        });
      },
      null,
      RDF.type,
      type,
      null
    );
  }

  validate(dataGraph: Store): ValidationReport {
    const validator = new SHACLValidator(this.store);
    return validator.validate(dataGraph);
  }
}
