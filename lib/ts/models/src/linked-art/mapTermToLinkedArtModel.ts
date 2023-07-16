import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {LinkedArtModel} from "./LinkedArtModel";
import {ResourceBackedModelFactories} from "../ResourceBackedModelFactories";
import {LinkedArtLinguisticObject} from "./LinkedArtLinguisticObject";
import {crm} from "@paradicms/vocabularies";
import {mapTermToResourceBackedModel} from "../mapTermToResourceBackedModel";
import {LinkedArtRight} from "./LinkedArtRight";
import {LinkedArtProduction} from "./LinkedArtProduction";
import {LinkedArtPerson} from "./LinkedArtPerson";
import {LinkedArtLinguisticAppellation} from "./LinkedArtLinguisticAppellation";
import {LinkedArtTimeSpan} from "./LinkedArtTimeSpan";
import {LinkedArtVisualItem} from "./LinkedArtVisualItem";

const factories = new ResourceBackedModelFactories<LinkedArtModel>();
factories.register(crm.E12_Production, LinkedArtProduction);
factories.register(crm.E21_Person, LinkedArtPerson);
factories.register(crm.E30_Right, LinkedArtRight);
factories.register(
  crm.E33_E41_Linguistic_Appellation,
  LinkedArtLinguisticAppellation
);
factories.register(crm.E33_Linguistic_Object, LinkedArtLinguisticObject);
factories.register(crm.E36_Visual_Item, LinkedArtVisualItem);
factories.register(crm.E52_Time_Span, LinkedArtTimeSpan);

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
