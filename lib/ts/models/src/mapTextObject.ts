import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {LiteralText} from "./literal/LiteralText";
import {rdf} from "@paradicms/vocabularies";
import {textFactories} from "./textFactories";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTextObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Text | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null
      )) {
        if (rdfTypeQuad.object.termType !== "NamedNode") {
          continue;
        }
        const textFactory = textFactories.get(rdfTypeQuad.object);
        if (textFactory !== null) {
          return new textFactory({...modelParameters, identifier: term});
        }
      }
      throw new RangeError(
        "unable to determine Text type from blank/named node"
      );
    case "Literal":
      return new LiteralText(term);
    default:
      return null;
  }
};
