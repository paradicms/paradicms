import {dcmitype} from "@paradicms/vocabularies";
import {DatasetCore, Quad_Graph, Term} from "@rdfjs/types";
import {AgentPropertyValue} from "./AgentPropertyValue";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {DcmiTypePropertyValue} from "./DcmiTypePropertyValue";
import {LiteralPropertyValue} from "./LiteralPropertyValue";
import {ModelSet} from "./ModelSet";
import {PropertyValue} from "./PropertyValue";
import {TextPropertyValue} from "./TextPropertyValue";
import {Property} from "./Property";
import {ModelGraphIdentifier} from "./ModelGraphIdentifier";
import {mapTermToText} from "./mapTermToText";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {mapTermToAgent} from "./mapTermToAgent";

export const createPropertyValueFromTerm = (kwds: {
  dataset: DatasetCore;
  modelSet: ModelSet;
  property: Property;
  term: Term;
  termGraph: Quad_Graph;
}): PropertyValue | null => {
  const {dataset, modelSet, property, term, termGraph} = kwds;

  const modelParameters: Omit<ResourceBackedModelParameters, "identifier"> = {
    dataset,
    graph: termGraph as ModelGraphIdentifier, // Blank node must be in the same graph as the current node
    modelSet,
  };

  if (term.termType === "BlankNode" || term.termType === "NamedNode") {
    const agent = mapTermToAgent(modelParameters, term);
    if (agent) {
      return new AgentPropertyValue(agent, property);
    }

    const text = mapTermToText(modelParameters, term);
    if (text) {
      return new TextPropertyValue(property, text);
    }

    if (term.termType === "NamedNode") {
      const concept = modelSet.conceptByIri(term.value);
      if (concept) {
        return new ConceptPropertyValue(concept, property);
      }

      if (term.value.startsWith(dcmitype[""].value)) {
        return new DcmiTypePropertyValue(term, property);
      }
    }
  } else if (term.termType === "Literal") {
    return new LiteralPropertyValue(term, property);
  }

  return null;
};
