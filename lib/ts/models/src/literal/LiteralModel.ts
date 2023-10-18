import {DataFactory} from "@paradicms/rdf";
import {DatasetCore, Literal, NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {Model} from "../Model";

export class LiteralModel implements Model {
  protected readonly literal: Literal;
  readonly label: string;

  constructor(kwds: {literal: Literal; label?: string | null}) {
    this.label = kwds.label ?? kwds.literal.value;
    this.literal = kwds.literal;
  }

  @Memoize()
  get iri(): NamedNode {
    return DataFactory.namedNode(
      `urn:paradicms:literal:${encodeURIComponent(this.literal.value)}`
    );
  }

  toRdf(addToDataset: DatasetCore) {}
}
