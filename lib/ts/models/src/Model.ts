import {DatasetCore} from "@rdfjs/types";
import {ModelIdentifier} from "./ModelIdentifier";

export interface Model {
  /**
   * All identifiers of this model. Must
   *
   * A model may have multiple identifiers if it e.g., it's a facade for other models.
   */
  readonly identifiers: readonly ModelIdentifier[];

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
