import {DatasetCore, NamedNode} from "@rdfjs/types";

export interface Model {
  /**
   * IRI identifying this node.
   */
  readonly iri: NamedNode;

  /**
   * Convert the model to RDF by adding quads to the given dataset.
   */
  toRdf(addToDataset: DatasetCore): void;
}
