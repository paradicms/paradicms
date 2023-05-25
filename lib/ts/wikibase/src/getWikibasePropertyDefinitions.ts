import {Dataset, Literal, NamedNode} from "@rdfjs/types";
import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {rdf, rdfs} from "@tpluscode/rdf-ns-builders";
import {wikibase} from "./vocabularies";

const getWikibasePropertyDefinition = (
  dataset: Dataset,
  node: NamedNode
): WikibasePropertyDefinition => {
  const getWikibasePropertyLabels = (
    predicate: NamedNode
  ): readonly Literal[] => {
    const labels: Literal[] = [];
    for (const quad of dataset.match(node, predicate)) {
      if (quad.object.termType === "Literal") {
        labels.push(quad.object);
      }
    }
    return labels;
  };

  const getWikibasePropertyUri = (predicate: NamedNode): NamedNode | null => {
    for (const quad of dataset.match(node, predicate)) {
      if (quad.object.termType === "NamedNode") {
        return quad.object as NamedNode;
      }
    }
    return null;
  };

  return {
    claim: getWikibasePropertyUri(wikibase.claim),
    directClaim: getWikibasePropertyUri(wikibase.directClaim),
    directClaimNormalized: getWikibasePropertyUri(
      wikibase.directClaimNormalized
    ),
    labels: getWikibasePropertyLabels(rdfs.label),
    node,
    qualifier: getWikibasePropertyUri(wikibase.qualifier),
    qualifierValue: getWikibasePropertyUri(wikibase.qualifierValue),
    qualifierValueNormalized: getWikibasePropertyUri(
      wikibase.qualifierValueNormalized
    ),
    statementProperty: getWikibasePropertyUri(wikibase.statementProperty),
    statementValue: getWikibasePropertyUri(wikibase.statementValue),
    statementValueNormalized: getWikibasePropertyUri(
      wikibase.statementValueNormalized
    ),
  };
};

export const getWikibasePropertyDefinitions = (
  dataset: Dataset
): readonly WikibasePropertyDefinition[] => {
  const propertyDefinitionsByUri: {[index: string]: WikibasePropertyDefinition} = {};
  for (const quad of dataset.match(null, rdf.type, wikibase.Property)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    }
    if (propertyDefinitionsByUri[quad.subject.value]) {
      continue;
    }
    propertyDefinitionsByUri[
      quad.subject.value] =
      getWikibasePropertyDefinition(dataset, quad.subject);
  }
  return Object.values(propertyDefinitionsByUri);
};
