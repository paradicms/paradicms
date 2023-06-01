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
  const modelIdentifierValues = modelIdentifiers.map(
    modelIdentifier => modelIdentifier.value
  );
  invariant(
    modelIdentifierValues.length == new Set(modelIdentifierValues).size
  );
  return "|" + modelIdentifierValues.sort().join("|") + "|";
};
