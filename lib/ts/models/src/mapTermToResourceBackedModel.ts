import {BlankNode, NamedNode} from "@rdfjs/types";
import {ResourceBackedModelFactories} from "./ResourceBackedModelFactories";
import {getNamedRdfTypes} from "@paradicms/rdf";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import log from "loglevel";

export const mapTermToResourceBackedModel = <ResourceBackedModelT>(kwds: {
  factories: ResourceBackedModelFactories<ResourceBackedModelT>;
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">;
  term: BlankNode | NamedNode;
}): ResourceBackedModelT | null => {
  const {factories, modelParameters, term} = kwds;
  const rdfTypes = getNamedRdfTypes({
    dataset: modelParameters.dataset,
    // Limiting to the model's graph only works for some cases
    // graph: modelParameters.graph,
    subject: term,
  });
  for (const rdfType of rdfTypes) {
    const factory = factories.get(rdfType);
    if (factory !== null) {
      return new factory({...modelParameters, identifier: term});
    } else {
      log.trace("no factory for rdf:type ", rdfType.value);
    }
  }
  log.trace(
    `no factories to map ${term.value} to RDF types: ${rdfTypes
      .map(rdfType => rdfType.value)
      .join(" ")}`
  );
  return null;
};
