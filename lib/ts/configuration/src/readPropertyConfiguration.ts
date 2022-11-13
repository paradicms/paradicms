import {BlankNode, DefaultGraph, NamedNode, Store} from "n3";
import {CONFIGURATION, dcterms, rdf, xsd} from "@paradicms/vocabularies";
import {PropertyConfiguration} from "./PropertyConfiguration";

export const readPropertyConfiguration = (kwds: {
  graph: BlankNode | DefaultGraph | NamedNode;
  node: BlankNode | NamedNode;
  store: Store;
}): PropertyConfiguration => {
  const {graph, node, store} = kwds;

  const uri = store
    .getObjects(node, rdf.predicate, graph)
    .find(term => term.termType === "NamedNode")?.value;
  if (!uri) {
    throw new RangeError("property configuration has no rdf:predicate");
  }

  const label = store
    .getObjects(node, dcterms.title, graph)
    .find(term => term.termType === "Literal")?.value;
  if (!label) {
    throw new RangeError("property configuration has no dcterms:title");
  }

  const booleanValue = (propertyUri: NamedNode): boolean =>
    store
      .getObjects(node, propertyUri, graph)
      .some(
        term =>
          term.termType === "Literal" &&
          term.datatype.value === xsd.boolean_.value &&
          (term.value === "true" || term.value === "1")
      );

  return {
    filterable: booleanValue(CONFIGURATION.filterable),
    hidden: booleanValue(CONFIGURATION.hidden),
    label,
    searchable: booleanValue(CONFIGURATION.searchable),
    uri,
  };
};
