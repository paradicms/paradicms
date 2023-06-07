import {Term} from "@rdfjs/types";
import {AgentUnion} from "../AgentUnion";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {LiteralAgent} from "../literal/LiteralAgent";
import {cms, rdf} from "@paradicms/vocabularies";
import {CmsPerson} from "./CmsPerson";
import {CmsOrganization} from "./CmsOrganization";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapCmsAgentObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): AgentUnion | null => {
  switch (term.termType) {
    case "BlankNode":
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null
      )) {
        if (rdfTypeQuad.object.equals(cms.Organization)) {
          return new CmsOrganization({...modelParameters, identifier: term});
        } else if (rdfTypeQuad.object.equals(cms.Person)) {
          return new CmsPerson({...modelParameters, identifier: term});
        }
      }
      throw new RangeError("unable to determine agent type from blank node");
    case "Literal":
      return new LiteralAgent(term);
    case "NamedNode":
      return modelParameters.modelSet.agentByIri(term.value);
    default:
      return null;
  }
};
