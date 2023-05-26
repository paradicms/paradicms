import {DatasetCore, Literal, NamedNode, Quad_Graph} from "@rdfjs/types";
import {WikibaseItem} from "./WikibaseItem";
import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {prov, rdf, rdfs, schema, skos} from "@tpluscode/rdf-ns-builders";
import {wikibase} from "./vocabularies";
import {WikibaseStatement} from "./WikibaseStatement";
import {WikibaseStatementQualifier} from "./WikibaseStatementQualifier";
import invariant from "ts-invariant";
import {WikibaseArticle} from "./WikibaseArticle";
import {BlankNode, DefaultGraph} from "n3";

const ignoreItemPredicateUris: Set<string> = new Set([
  schema.description.value,
  schema.name.value,
  rdf.type.value,
  rdfs.label.value,
]);
const ignoreStatementPredicateUris: Set<string> = new Set([
  prov.wasDerivedFrom.value,
  rdf.type.value,
  wikibase.rank.value,
]);

const getDirectClaimWikibaseStatement = (kwds: {
  dataset: DatasetCore;
  statementGraph: Quad_Graph;
  statementObject: Literal | NamedNode;
  statementPropertyDefinition: WikibasePropertyDefinition;
  statementSubject: NamedNode;
}): WikibaseStatement => {
  const {
    dataset,
    statementGraph,
    statementPropertyDefinition,
    statementSubject,
    statementObject,
  } = kwds;

  let normalizedValue: Literal | NamedNode | null = null;
  if (statementPropertyDefinition.directClaimNormalized !== null) {
    for (const valueQuad of dataset.match(
      statementSubject,
      statementPropertyDefinition.directClaimNormalized,
      null,
      statementGraph
    )) {
      switch (valueQuad.object.termType) {
        case "Literal":
        case "NamedNode":
          normalizedValue = valueQuad.object;
          break;
      }
      break;
    }
  }
  return {
    normalizedValue,
    propertyDefinition: statementPropertyDefinition,
    qualifiers: [],
    type: "Direct",
    value: statementObject,
  };
};

const getFullWikibaseStatement = (kwds: {
  propertyDefinitions: readonly WikibasePropertyDefinition[];
  dataset: DatasetCore;
  statementGraph: Quad_Graph;
  statementNode: NamedNode;
}): WikibaseStatement | null => {
  const {dataset, propertyDefinitions, statementGraph, statementNode} = kwds;

  const getValue = (
    predicate: NamedNode | null
  ): Literal | NamedNode | null => {
    if (predicate === null) {
      return null;
    }
    for (const valueQuad of dataset.match(
      statementNode,
      predicate,
      null,
      statementGraph
    )) {
      switch (valueQuad.object.termType) {
        case "Literal":
        case "NamedNode":
          return valueQuad.object;
      }
    }
    return null;
  };

  let normalizedValue: Literal | NamedNode | null = null;
  const qualifiers: WikibaseStatementQualifier[] = [];
  let value: Literal | NamedNode | null = null;
  let valuePropertyDefinition: WikibasePropertyDefinition | null = null;

  for (const statementQuad of dataset.match(
    statementNode,
    null,
    null,
    statementGraph
  )) {
    if (ignoreStatementPredicateUris.has(statementQuad.predicate.value)) {
      continue;
    }

    switch (statementQuad.object.termType) {
      case "Literal":
      case "NamedNode":
        break;
      default:
        continue;
    }

    for (const propertyDefinition of propertyDefinitions) {
      if (
        statementQuad.predicate.equals(propertyDefinition.statementProperty)
      ) {
        invariant(value === null);
        value = statementQuad.object;
        valuePropertyDefinition = propertyDefinition;

        const statementValue = getValue(propertyDefinition.statementValue);
        if (statementValue) {
          value = statementValue;
        }

        const statementValueNormalized = getValue(
          propertyDefinition.statementValueNormalized
        );
        if (statementValueNormalized) {
          normalizedValue = statementValueNormalized;
        }
        break;
      } else if (statementQuad.predicate.equals(propertyDefinition.qualifier)) {
        qualifiers.push({
          normalizedValue: getValue(
            propertyDefinition.qualifierValueNormalized
          ),
          propertyDefinition,
          value:
            getValue(propertyDefinition.qualifierValue) ?? statementQuad.object,
        });
        break;
      }
    }
  }

  if (!value) {
    return null;
  }
  invariant(
    valuePropertyDefinition,
    "value property definition must be set if value is"
  );
  return {
    normalizedValue,
    propertyDefinition: valuePropertyDefinition!,
    qualifiers,
    type: "Full",
    value,
  };
};

const getWikibaseItem = (kwds: {
  dataset: DatasetCore;
  graph: BlankNode | DefaultGraph | NamedNode;
  identifier: NamedNode;
  includeRedundantStatements?: boolean;
  propertyDefinitions: readonly WikibasePropertyDefinition[];
}): WikibaseItem | null => {
  const {
    dataset,
    graph,
    includeRedundantStatements,
    identifier,
    propertyDefinitions,
  } = kwds;

  const articles: WikibaseArticle[] = [];
  for (const aboutQuad of dataset.match(
    null,
    schema.about,
    identifier,
    graph
  )) {
    if (aboutQuad.subject.termType !== "NamedNode") {
      continue;
    }
    let inLanguage: string | undefined;
    let name: string | undefined;
    for (const articleQuad of dataset.match(
      aboutQuad.subject,
      null,
      null,
      graph
    )) {
      if (articleQuad.object.termType !== "Literal") {
        continue;
      }
      if (articleQuad.predicate.equals(schema.inLanguage)) {
        inLanguage = articleQuad.object.value;
      } else if (articleQuad.predicate.equals(schema.name)) {
        name = articleQuad.object.value;
      }
    }
    if (inLanguage && name) {
      articles.push({
        inLanguage,
        name,
        node: aboutQuad.subject,
      });
    }
  }

  const altLabels: string[] = [];
  let description: string | null = null;
  let prefLabel: string | null = null;
  const statementsByPropertyUri: {
    [index: string]: {[index: string]: WikibaseStatement[]};
  } = {};
  for (const propertyQuad of dataset.match(identifier, null, null, graph)) {
    switch (propertyQuad.object.termType) {
      case "Literal":
        if (propertyQuad.object.language !== "en") {
          // Ignore non-English literals
          continue;
        }

        if (propertyQuad.predicate.equals(skos.altLabel)) {
          altLabels.push(propertyQuad.object.value);
          continue;
        } else if (propertyQuad.predicate.equals(skos.prefLabel)) {
          prefLabel = propertyQuad.object.value;
          continue;
        } else if (propertyQuad.predicate.equals(schema.description)) {
          description = propertyQuad.object.value;
          continue;
        }
        break;
      case "NamedNode":
        break;
      default:
        continue;
    }

    if (ignoreItemPredicateUris.has(propertyQuad.predicate.value)) {
      continue;
    }

    for (const propertyDefinition of propertyDefinitions) {
      let statement: WikibaseStatement;
      if (propertyQuad.predicate.equals(propertyDefinition.claim)) {
        if (propertyQuad.object.termType === "NamedNode") {
          // Full statement
          const fullStatement = getFullWikibaseStatement({
            dataset,
            propertyDefinitions,
            statementGraph: propertyQuad.graph,
            statementNode: propertyQuad.object,
          });
          if (!fullStatement) {
            continue;
          }
          statement = fullStatement;
        } else {
          continue;
        }
      } else if (
        propertyQuad.predicate.equals(propertyDefinition.directClaim)
      ) {
        // Direct claim
        statement = getDirectClaimWikibaseStatement({
          dataset,
          statementGraph: propertyQuad.graph,
          statementObject: propertyQuad.object,
          statementPropertyDefinition: propertyDefinition,
          statementSubject: identifier,
        });
      } else {
        continue;
      }
      if (!statementsByPropertyUri[propertyDefinition.node.value]) {
        statementsByPropertyUri[propertyDefinition.node.value] = {};
      }
      if (
        !statementsByPropertyUri[propertyDefinition.node.value][statement.type]
      ) {
        statementsByPropertyUri[propertyDefinition.node.value][
          statement.type
        ] = [];
      }
      statementsByPropertyUri[propertyDefinition.node.value][
        statement.type
      ].push(statement);
    }
  }

  const statements: WikibaseStatement[] = [];
  // Direct claims often duplicate full statements
  // Only retain the full statement
  for (const propertyStatements of Object.values(statementsByPropertyUri)) {
    if (includeRedundantStatements) {
      for (const typeStatements of Object.values(propertyStatements)) {
        statements.push(...typeStatements);
      }
    } else {
      if (propertyStatements["Full"]) {
        statements.push(...propertyStatements["Full"]);
      } else {
        statements.push(...propertyStatements["Direct"]);
      }
    }
  }

  return {
    altLabels,
    articles,
    description,
    graph,
    identifier,
    prefLabel,
    statements,
  };
};

export const getWikibaseItems = (kwds: {
  dataset: DatasetCore;
  includeRedundantStatements?: boolean;
}): readonly WikibaseItem[] => {
  const {dataset, includeRedundantStatements} = kwds;
  const propertyDefinitions = getWikibasePropertyDefinitions(dataset);

  const itemsByUri: {[index: string]: WikibaseItem} = {};
  for (const quad of dataset.match(null, rdf.type, wikibase.Item)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    } else if (itemsByUri[quad.subject.value]) {
      continue;
    }

    const item = getWikibaseItem({
      dataset,
      graph: quad.graph as BlankNode | DefaultGraph | NamedNode,
      includeRedundantStatements,
      identifier: quad.subject,
      propertyDefinitions,
    });
    if (item !== null) {
      itemsByUri[item.identifier.value] = item;
    }
  }

  return Object.values(itemsByUri);
};

const getWikibasePropertyDefinition = (kwds: {
  dataset: DatasetCore;
  graph: Quad_Graph;
  node: NamedNode;
}): WikibasePropertyDefinition => {
  const {dataset, graph, node} = kwds;
  const getWikibasePropertyLabels = (
    predicate: NamedNode
  ): readonly Literal[] => {
    const labels: Literal[] = [];
    for (const quad of dataset.match(node, predicate, null, graph)) {
      if (quad.object.termType === "Literal") {
        labels.push(quad.object);
      }
    }
    return labels;
  };

  const getWikibasePropertyUri = (predicate: NamedNode): NamedNode | null => {
    for (const quad of dataset.match(node, predicate, null, graph)) {
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

const getWikibasePropertyDefinitions = (
  dataset: DatasetCore
): readonly WikibasePropertyDefinition[] => {
  const propertyDefinitionsByUri: {
    [index: string]: WikibasePropertyDefinition;
  } = {};
  for (const quad of dataset.match(null, rdf.type, wikibase.Property)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    }
    if (propertyDefinitionsByUri[quad.subject.value]) {
      continue;
    }
    propertyDefinitionsByUri[
      quad.subject.value
    ] = getWikibasePropertyDefinition({
      dataset,
      graph: quad.graph,
      node: quad.subject,
    });
  }
  return Object.values(propertyDefinitionsByUri);
};
