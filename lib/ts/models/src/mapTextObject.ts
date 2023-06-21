import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {LiteralText} from "./literal/LiteralText";
import {CmsText} from "./cms/CmsText";
import {cms, rdf} from "@paradicms/vocabularies";

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
        if (rdfTypeQuad.object.equals(cms.Text)) {
          return new CmsText({...modelParameters, identifier: term});
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
