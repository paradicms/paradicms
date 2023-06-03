import {ModelIdentifier} from "./ModelIdentifier";
import invariant from "ts-invariant";

/**
 * Create an opaque Model.key from an array of model identifiers.
 */
export const modelIdentifiersToKey = (
  modelIdentifiers: readonly ModelIdentifier[]
) => {
  invariant(modelIdentifiers.length > 0);
  // Add extra characters at the beginning and end so it
  const modelIdentifierStrings = modelIdentifiers.map(
    modelIdentifier => `${modelIdentifier.termType}-${modelIdentifier.value}`
  );
  invariant(
    modelIdentifierStrings.length == new Set(modelIdentifierStrings).size
  );
  return "|" + modelIdentifierStrings.sort().join("|") + "|";
};
