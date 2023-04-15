import {
  BlankNode,
  DefaultGraph,
  NamedNode,
  Quad_Graph,
  Term,
} from "@rdfjs/types";
import {cms, dcmitype, rdf} from "@paradicms/vocabularies";
import {PropertyValue} from "./PropertyValue";
import {TextPropertyValue} from "./TextPropertyValue";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {AgentPropertyValue} from "./AgentPropertyValue";
import {LiteralPropertyValue} from "./LiteralPropertyValue";
import {DcmiTypePropertyValue} from "./DcmiTypePropertyValue";
import {DatasetBackedModelSet} from "DatasetBackedModelSet";
import {CmsText} from "CmsText";

export const createPropertyValueFromTerm = (
  modelSet: DatasetBackedModelSet,
  term: Term,
  termGraph: Quad_Graph
): PropertyValue | null => {
  switch (term.termType) {
    case "BlankNode": {
      if (
        modelSet.dataset.match(term, rdf.type, cms.Text, termGraph).size === 0
      ) {
        return null;
      }
      return new TextPropertyValue(
        new CmsText({
          modelSet,
          graphNode: termGraph as BlankNode | DefaultGraph | NamedNode, // Blank node must be in the same graph as the current node
          node: term,
        })
      );
    }
    case "NamedNode": {
      // #78 index lookups take half as much time (amortized over multiple works)
      // as getting the rdf:type of the NamedNode and branching on its value.
      {
        const concept = modelSet.conceptByUriOptional(term.value);
        if (concept) {
          return new ConceptPropertyValue(concept);
        }
      }
      {
        const organization = modelSet.organizationByUriOptional(term.value);
        if (organization) {
          return new AgentPropertyValue(organization);
        }
      }
      {
        const person = modelSet.personByUriOptional(term.value);
        if (person) {
          return new AgentPropertyValue(person);
        }
      }
      {
        if (term.value.startsWith(dcmitype[""].value)) {
          return new DcmiTypePropertyValue(term);
        }
      }
      return null;
    }
    case "Literal":
      return new LiteralPropertyValue(term);
    default:
      return null;
  }
};
