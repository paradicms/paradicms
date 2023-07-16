import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {LinkedArtModel} from "./LinkedArtModel";
import {ResourceBackedModelFactories} from "../ResourceBackedModelFactories";
import {LinkedArtLinguisticObject} from "./LinkedArtLinguisticObject";
import {crm} from "@paradicms/vocabularies";
import {mapTermToResourceBackedModel} from "../mapTermToResourceBackedModel";
import {LinkedArtRight} from "./LinkedArtRight";
import {LinkedArtProduction} from "./LinkedArtProduction";

const factories = new ResourceBackedModelFactories<LinkedArtModel>();
factories.register(crm.E12_Production, LinkedArtProduction);
factories.register(crm.E30_Right, LinkedArtRight);
factories.register(crm.E33_Linguistic_Object, LinkedArtLinguisticObject);

/**
 * Map a term in a modelSet to a LinkedArtModel.
 */
export const mapTermToLinkedArtModel = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): LinkedArtModel | null => {
  if (term.termType !== "NamedNode") {
    return null;
  }
  return mapTermToResourceBackedModel({factories, term, modelParameters});
};
