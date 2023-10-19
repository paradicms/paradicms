import {dcmitype} from "@paradicms/vocabularies";
import {DatasetCore, Literal, NamedNode, Quad_Graph, Term} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {Property} from "./Property";
import {PropertyValue} from "./PropertyValue";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {mapTermToAgent} from "./mapTermToAgent";
import {mapTermToText} from "./mapTermToText";

export const createPropertyValueFromTerm = (kwds: {
  dataset: DatasetCore;
  modelSet: ModelSet;
  property: Property;
  term: Term;
  termGraph: Quad_Graph;
}): PropertyValue | null => {
  const {dataset, modelSet, property, term, termGraph} = kwds;

  if (termGraph.termType !== "NamedNode") {
    return null;
  }

  const modelParameters: Omit<ResourceBackedModelParameters, "iri"> = {
    dataset,
    graph: termGraph as NamedNode, // Blank node must be in the same graph as the current node
    modelSet,
  };

  if (term.termType === "BlankNode" || term.termType === "NamedNode") {
    const agent = mapTermToAgent(modelParameters, term);
    if (agent) {
      return {
        agent,
        property,
        label: agent.label,
        thumbnail: selector => agent.thumbnail(selector),
        type: "Agent",
        value: agent.iri.value,
      };
    }

    const text = mapTermToText(modelParameters, term);
    if (text) {
      return {
        property,
        label: text.value,
        text,
        thumbnail: _ => null,
        type: "Text",
        value: text.value,
      };
    }

    if (term.termType === "NamedNode") {
      const concept = modelSet.conceptByIri(term);
      if (concept) {
        return {
          concept,
          label: concept.label,
          property,
          thumbnail: selector => concept.thumbnail(selector),
          type: "Concept",
          value: concept.value.value,
        };
      }

      if (term.value.startsWith(dcmitype[""].value)) {
        return {
          node: term,
          label: term.value.slice(dcmitype[""].value.length),
          property,
          thumbnail: _ => null,
          type: "DcmiType",
          value: term.value,
        };
      }
    }
  } else if (term.termType === "Literal") {
    const literal: Literal = term;
    return {
      literal,
      label: literal.value,
      thumbnail: selector => null,
      property,
      type: "Literal",
      value: literal.value,
    };
  }

  return null;
};
