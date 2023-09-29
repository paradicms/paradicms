import {DatasetCore} from "@rdfjs/types";
import {ModelIdentifier} from "./ModelIdentifier";

export interface Model {
  /**
   * Other models this model depends on. The ModelSetBuilder will ensure these are added.
   */
  readonly dependencies: readonly Model[];

  /**
   * All identifiers of this model. Must not be empty.
   *
   * A model may have multiple identifiers if it e.g., it's a facade for other models.
   */
  readonly identifiers: readonly ModelIdentifier[];

  /**
   * String versions of the NamedNode identifiers. May be empty.
   *
   * This convenience makes it easier to construct TypeScript-native maps.
   */
  readonly iris: readonly string[];

  /**
   * Opaque key for the model, usually constructed from the identifiers.
   */
  readonly key: string;

  /**
   * Eagerly invoke all memoized accessors.
   */
  preMemoize(): void;

  /**
   * Convert the model to RDF by adding quads to the given dataset.
   */
  toRdf(addToDataset: DatasetCore): void;
}
