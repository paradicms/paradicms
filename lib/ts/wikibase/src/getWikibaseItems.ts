import {DatasetCore, Literal, NamedNode, Quad_Graph} from "@rdfjs/types";
import {prov, rdf, rdfs, schema, skos} from "@tpluscode/rdf-ns-builders";
import {BlankNode, DefaultGraph} from "n3";
import invariant from "ts-invariant";
import {WikibaseArticle} from "./WikibaseArticle";
import {WikibaseItem} from "./WikibaseItem";
import {WikibaseProperty} from "./WikibaseProperty";
import {WikibaseStatement} from "./WikibaseStatement";
import {WikibaseStatementQualifier} from "./WikibaseStatementQualifier";
import {WikibaseStatementValue} from "./WikibaseStatementValue";
import {wikibase} from "./vocabularies";

const ignoreItemPredicateIris: Set<string> = new Set([
  schema.description.value,
  schema.name.value,
  rdf.type.value,
  rdfs.label.value,
]);
const ignoreStatementPredicateIris: Set<string> = new Set([
  prov.wasDerivedFrom.value,
  rdf.type.value,
  wikibase.rank.value,
]);

const getDirectClaimWikibaseStatement = (kwds: {
  dataset: DatasetCore;
  statementGraph: Quad_Graph;
  statementObject: WikibaseStatementValue;
  statementProperty: WikibaseProperty;
  statementSubject: NamedNode;
}): WikibaseStatement => {
  const {
    dataset,
    statementGraph,
    statementProperty,
    statementSubject,
    statementObject,
  } = kwds;

  const normalizedValues: WikibaseStatementValue[] = [];
  if (statementProperty.directClaimNormalized !== null) {
    for (const valueQuad of dataset.match(
      statementSubject,
      statementProperty.directClaimNormalized,
      null,
      statementGraph
    )) {
      switch (valueQuad.object.termType) {
        case "Literal":
        case "NamedNode":
          normalizedValues.push(valueQuad.object);
          break;
      }
      break;
    }
  }
  return {
    normalizedValues,
    property: statementProperty,
    qualifiers: [],
    type: "Direct",
    values: [statementObject],
  };
};

const getFullWikibaseStatement = (kwds: {
  properties: readonly WikibaseProperty[];
  dataset: DatasetCore;
  statementGraph: Quad_Graph;
  statementNode: NamedNode;
}): WikibaseStatement | null => {
  const {dataset, properties, statementGraph, statementNode} = kwds;

  const getValues = (
    predicate: NamedNode | null
  ): readonly WikibaseStatementValue[] => {
    if (predicate === null) {
      return [];
    }
    const values: WikibaseStatementValue[] = [];
    for (const valueQuad of dataset.match(
      statementNode,
      predicate,
      null,
      statementGraph
    )) {
      switch (valueQuad.object.termType) {
        case "Literal":
        case "NamedNode":
          values.push(valueQuad.object);
      }
    }
    return values;
  };

  let normalizedValues: readonly WikibaseStatementValue[] = [];
  const qualifiers: WikibaseStatementQualifier[] = [];
  let values: readonly WikibaseStatementValue[] = [];
  let valueProperty: WikibaseProperty | null = null;

  for (const statementQuad of dataset.match(
    statementNode,
    null,
    null,
    statementGraph
  )) {
    if (ignoreStatementPredicateIris.has(statementQuad.predicate.value)) {
      continue;
    }

    switch (statementQuad.object.termType) {
      case "Literal":
      case "NamedNode":
        break;
      default:
        continue;
    }

    for (const property of properties) {
      if (statementQuad.predicate.equals(property.statementProperty)) {
        invariant(values.length === 0);
        values = [statementQuad.object];
        valueProperty = property;

        const statementValues = getValues(property.statementValue);
        if (statementValues.length > 0) {
          values = statementValues;
        }

        const statementValuesNormalized = getValues(
          property.statementValueNormalized
        );
        if (statementValuesNormalized.length > 0) {
          normalizedValues = statementValuesNormalized;
        }
        break;
      } else if (statementQuad.predicate.equals(property.qualifier)) {
        const qualifierValues = getValues(property.qualifierValue);
        qualifiers.push({
          normalizedValues: getValues(property.qualifierValueNormalized),
          property,
          values:
            qualifierValues.length > 0
              ? qualifierValues
              : [statementQuad.object as WikibaseStatementValue],
        });
        break;
      }
    }
  }

  if (values.length === 0) {
    return null;
  }
  invariant(valueProperty, "value property definition must be set if value is");
  return {
    normalizedValues,
    property: valueProperty!,
    qualifiers,
    type: "Full",
    values,
  };
};

const getWikibaseItem = (kwds: {
  dataset: DatasetCore;
  graph: BlankNode | DefaultGraph | NamedNode;
  identifier: NamedNode;
  includeRedundantStatements?: boolean;
  properties: readonly WikibaseProperty[];
}): WikibaseItem | null => {
  const {
    dataset,
    graph,
    includeRedundantStatements,
    identifier,
    properties,
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

  const altLabels: Literal[] = [];
  let prefLabel: Literal | null = null;
  const statementsByPropertyIri: {
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
          altLabels.push(propertyQuad.object);
          continue;
        } else if (propertyQuad.predicate.equals(skos.prefLabel)) {
          prefLabel = propertyQuad.object;
          continue;
        }
        // } else if (propertyQuad.predicate.equals(schema.description)) {
        //   description = propertyQuad.object.value;
        //   continue;
        // }
        break;
      case "NamedNode":
        break;
      default:
        continue;
    }

    if (ignoreItemPredicateIris.has(propertyQuad.predicate.value)) {
      continue;
    }

    for (const property of properties) {
      let statement: WikibaseStatement;
      if (propertyQuad.predicate.equals(property.claim)) {
        if (propertyQuad.object.termType === "NamedNode") {
          // Full statement
          const fullStatement = getFullWikibaseStatement({
            dataset,
            properties,
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
      } else if (propertyQuad.predicate.equals(property.directClaim)) {
        // Direct claim
        statement = getDirectClaimWikibaseStatement({
          dataset,
          statementGraph: propertyQuad.graph,
          statementObject: propertyQuad.object,
          statementProperty: property,
          statementSubject: identifier,
        });
      } else {
        continue;
      }
      if (!statementsByPropertyIri[property.node.value]) {
        statementsByPropertyIri[property.node.value] = {};
      }
      if (!statementsByPropertyIri[property.node.value][statement.type]) {
        statementsByPropertyIri[property.node.value][statement.type] = [];
      }
      statementsByPropertyIri[property.node.value][statement.type].push(
        statement
      );
    }
  }

  const statements: WikibaseStatement[] = [];
  // Direct claims often duplicate full statements
  // Only retain the full statement
  for (const propertyStatements of Object.values(statementsByPropertyIri)) {
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
    graph,
    identifier,
    prefLabel,
    statements,
  };
};

/**
 * Get the unique WikibaseItems in a given Dataset.
 */
export const getWikibaseItems = (kwds: {
  dataset: DatasetCore;
  includeRedundantStatements?: boolean;
}): {
  wikibaseItemsByIri: {[index: string]: WikibaseItem};
  wikibaseProperties: readonly WikibaseProperty[];
} => {
  const {dataset, includeRedundantStatements} = kwds;
  const wikibaseProperties = getWikibaseProperties(dataset);

  const wikibaseItemsByIri: {[index: string]: WikibaseItem} = {};
  for (const quad of dataset.match(null, rdf.type, wikibase.Item)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    } else if (wikibaseItemsByIri[quad.subject.value]) {
      continue;
    }

    const item = getWikibaseItem({
      dataset,
      graph: quad.graph as BlankNode | DefaultGraph | NamedNode,
      includeRedundantStatements,
      identifier: quad.subject,
      properties: wikibaseProperties,
    });
    if (item !== null) {
      wikibaseItemsByIri[item.identifier.value] = item;
    }
  }

  return {
    wikibaseItemsByIri,
    wikibaseProperties: wikibaseProperties,
  };
};

const getWikibaseProperty = (kwds: {
  dataset: DatasetCore;
  graph: Quad_Graph;
  node: NamedNode;
}): WikibaseProperty => {
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

  const getWikibasePropertyIri = (predicate: NamedNode): NamedNode | null => {
    for (const quad of dataset.match(node, predicate, null, graph)) {
      if (quad.object.termType === "NamedNode") {
        return quad.object as NamedNode;
      }
    }
    return null;
  };

  return {
    claim: getWikibasePropertyIri(wikibase.claim),
    directClaim: getWikibasePropertyIri(wikibase.directClaim),
    directClaimNormalized: getWikibasePropertyIri(
      wikibase.directClaimNormalized
    ),
    graph: graph as BlankNode | DefaultGraph | NamedNode,
    labels: getWikibasePropertyLabels(rdfs.label),
    node,
    qualifier: getWikibasePropertyIri(wikibase.qualifier),
    qualifierValue: getWikibasePropertyIri(wikibase.qualifierValue),
    qualifierValueNormalized: getWikibasePropertyIri(
      wikibase.qualifierValueNormalized
    ),
    statementProperty: getWikibasePropertyIri(wikibase.statementProperty),
    statementValue: getWikibasePropertyIri(wikibase.statementValue),
    statementValueNormalized: getWikibasePropertyIri(
      wikibase.statementValueNormalized
    ),
  };
};

const getWikibaseProperties = (
  dataset: DatasetCore
): readonly WikibaseProperty[] => {
  const propertiesByIri: {
    [index: string]: WikibaseProperty;
  } = {};
  for (const quad of dataset.match(null, rdf.type, wikibase.Property)) {
    if (quad.subject.termType !== "NamedNode") {
      continue;
    }
    if (propertiesByIri[quad.subject.value]) {
      continue;
    }
    propertiesByIri[quad.subject.value] = getWikibaseProperty({
      dataset,
      graph: quad.graph,
      node: quad.subject,
    });
  }
  return Object.values(propertiesByIri);
};
