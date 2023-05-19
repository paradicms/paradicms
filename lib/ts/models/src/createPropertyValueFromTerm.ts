import {cms, dcmitype, rdf} from "@paradicms/vocabularies";
import {
  BlankNode,
  Dataset,
  DefaultGraph,
  NamedNode,
  Quad_Graph,
  Term,
} from "@rdfjs/types";
import {AgentPropertyValue} from "./AgentPropertyValue";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {DcmiTypePropertyValue} from "./DcmiTypePropertyValue";
import {LiteralPropertyValue} from "./LiteralPropertyValue";
import {ModelSet} from "./ModelSet";
import {PropertyValue} from "./PropertyValue";
import {TextPropertyValue} from "./TextPropertyValue";
import {CmsText} from "./cms/CmsText";
import {Property} from "./Property";

export const createPropertyValueFromTerm = (kwds: {
  dataset: Dataset;
  modelSet: ModelSet;
  property: Property;
  term: Term;
  termGraph: Quad_Graph;
}): PropertyValue | null => {
  const {dataset, modelSet, property, term, termGraph} = kwds;

  switch (term.termType) {
    case "BlankNode": {
      if (dataset.match(term, rdf.type, cms.Text, termGraph).size === 0) {
        return null;
      }
      return new TextPropertyValue(
        property,
        new CmsText({
          dataset,
          graph: termGraph as BlankNode | DefaultGraph | NamedNode, // Blank node must be in the same graph as the current node
          identifier: term,
          modelSet,
        })
      );
    }
    case "NamedNode": {
      // #78 index lookups take half as much time (amortized over multiple works)
      // as getting the rdf:type of the NamedNode and branching on its value.
      {
        const concept = modelSet.conceptByUriOptional(term.value);
        if (concept) {
          return new ConceptPropertyValue(concept, property);
        }
      }
      {
        const organization = modelSet.organizationByUriOptional(term.value);
        if (organization) {
          return new AgentPropertyValue(organization, property);
        }
      }
      {
        const person = modelSet.personByUriOptional(term.value);
        if (person) {
          return new AgentPropertyValue(person, property);
        }
      }
      {
        if (term.value.startsWith(dcmitype[""].value)) {
          return new DcmiTypePropertyValue(term, property);
        }
      }
      return null;
    }
    case "Literal":
      return new LiteralPropertyValue(term, property);
    default:
      return null;
  }
};
