import {Dataset, NamedNode} from "@rdfjs/types";
import {WikibaseItem} from "./WikibaseItem";
import {getWikibasePropertyDefinitions} from "./getWikibasePropertyDefinitions";
import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {rdf} from "@tpluscode/rdf-ns-builders";
import {wikibase} from "./vocabularies";
import {WikibaseValue} from "./WikibaseValue";

export const getWikibaseItem = (kwds: {
  excludeRedundantStatements?: boolean;
  dataset: Dataset;
  node: NamedNode;
  propertyDefinitions: readonly WikibasePropertyDefinition[];
}): WikibaseItem | null => {
  // const propertyDefinitions =
  //
  // return [];
  return null;
};

export const getWikibaseItems = (kwds: {
  dataset: Dataset;
  excludeRedundantStatements?: boolean;
}): readonly WikibaseItem[] => {
  const {dataset, excludeRedundantStatements} = kwds;
  const propertyDefinitions = getWikibasePropertyDefinitions(dataset);

  const itemsByUri: { [index: string]: WikibaseItem } = {};
  for (const quad of dataset.match(null, rdf.type, wikibase.Item)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    } else if (itemsByUri[quad.subject.value]) {
      continue;
    }

    const item = getWikibaseItem({
      excludeRedundantStatements,
      dataset,
      node: quad.subject,
      propertyDefinitions
    });
    if (item !== null) {
      itemsByUri[item.node.value] = item;
    }
  }

  // Make another pass on items, substituting a WikibaseItem instance for an (internal) URIRef to it
  const resolveItem = (value: WikibaseValue): WikibaseValue => {
    if (value.type !== "NamedNode") {
      return value;
    }
    const resolvedItem = itemsByUri[value.value.value];
    if (resolvedItem) {
      return {
        type: "WikibaseItem",
        value: resolvedItem
      }
    } else {
      return value;
    }
  }

  for (const item of Object.values(itemsByUri)) {
    for (const statement of item.statements) {
      statement.normalizedValue = statement.normalizedValue ? resolveItem(statement.normalizedValue) : null;
      statement.value = resolveItem(statement.value);
      for (const qualifier of statement.qualifiers) {
        qualifier.normalizedValue = resolveItem(qualifier.normalizedValue);
        qualifier.value = resolveItem(qualifier.value);
      }
    }
  }

  return Object.values(itemsByUri);
};
