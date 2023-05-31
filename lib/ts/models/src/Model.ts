import {BlankNode, DatasetCore, NamedNode} from "@rdfjs/types";

export interface Model {
  /**
   * All identifiers of this model.
   *
   * A model may have multiple identifiers if it e.g., it's a facade for other models.
   */
  readonly identifiers: readonly (BlankNode | NamedNode)[];

  /**
   * String versions of the NamedNode identifiers.
   *
   * This convenience makes it easier to construct TypeScript-native maps.
   */
  readonly iris: readonly string[];

  /**
   * Convert the model to RDF by adding quads to the given dataset.
   */
  toRdf(addToDataset: DatasetCore): void;
}
