import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {configuration, dcterms, rdf, xsd} from "@paradicms/vocabularies";
import {PropertyConfiguration} from "./PropertyConfiguration";

export const readPropertyConfiguration = (kwds: {
  graph: BlankNode | DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
  dataset: Dataset;
}): PropertyConfiguration => {
  const {graph, node, dataset} = kwds;

  const uri = dataset
    .match(node, rdf.predicate, null, graph)
    .toArray()
    .find(quad => quad.object.termType === "NamedNode")?.object.value;
  if (!uri) {
    throw new RangeError("property configuration has no rdf:predicate");
  }

  const label = dataset
    .match(node, dcterms.title, null, graph)
    .toArray()
    .find(quad => quad.object.termType === "Literal")?.object.value;
  if (!label) {
    throw new RangeError("property configuration has no dcterms:title");
  }

  const booleanValue = (propertyUri: NamedNode): boolean =>
    dataset
      .match(node, propertyUri, null, graph)
      .toArray()
      .map(quad => quad.object)
      .some(
        term =>
          term.termType === "Literal" &&
          term.datatype.value === xsd.boolean.value &&
          (term.value === "true" || term.value === "1")
      );

  return {
    filterable: booleanValue(configuration.filterable),
    hidden: booleanValue(configuration.hidden),
    label,
    searchable: booleanValue(configuration.searchable),
    uri,
  };
};
