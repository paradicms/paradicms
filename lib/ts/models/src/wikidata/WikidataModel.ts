import { DataFactory } from "@paradicms/rdf";
import { wdt } from "@paradicms/vocabularies";
import { WikibaseArticle, WikibaseItem, WikibaseStatement, WikibaseStatementValue, } from "@paradicms/wikibase";
import { DatasetCore, Literal, NamedNode, Term } from "@rdfjs/types";
import invariant from "ts-invariant";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Image } from "../Image";
import { Model } from "../Model";
import { ModelSet } from "../ModelSet";
import { PropertyValue } from "../PropertyValue";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Text } from "../Text";
import { createPropertyValueFromTerm } from "../createPropertyValueFromTerm";
import { OwlSameAsMixin } from "../owl/OwlSameAsMixin";
import { WikibaseItemSet } from "../wikibase/WikibaseItemSet";
import { WikidataProperty } from "./WikidataProperty";
import { WikidataText } from "./WikidataText";

const ensureModelGraphIdentifier = (graph: Term) => {
  invariant(graph.termType === "NamedNode");
  return graph as NamedNode;
}

const DESCRIPTION_URI = DataFactory.namedNode("http://schema.org/description");

export abstract class WikidataModel
  extends Mixin(ResourceBackedModel, OwlSameAsMixin, SomeImageThumbnailMixin)
  implements Model, WikibaseItem {
  private readonly wikibaseItem: WikibaseItem;
  protected readonly wikibaseItemSet: WikibaseItemSet;
  protected readonly wikidataPropertiesByIri: {[index: string]: WikidataProperty};

  constructor(kwds: {
    dataset: DatasetCore;
    modelSet: ModelSet;
    wikibaseItem: WikibaseItem;
    wikibaseItemSet: WikibaseItemSet,
    wikidataPropertiesByIri: {[index: string]: WikidataProperty}
  }) {
    super({
      dataset: kwds.dataset,
      graph: ensureModelGraphIdentifier(kwds.wikibaseItem.graph),
      identifier: kwds.wikibaseItem.identifier,
      modelSet: kwds.modelSet,
    });
    this.wikibaseItem = kwds.wikibaseItem;
    this.wikibaseItemSet = kwds.wikibaseItemSet;
    this.wikidataPropertiesByIri = kwds.wikidataPropertiesByIri;
  }

  get altLabels(): readonly Literal[] {
    return this.wikibaseItem.altLabels;
  }

  get articles(): readonly WikibaseArticle[] {
    return this.wikibaseItem.articles;
  }

  override get dependencies(): readonly Model[] {
    return Object.values(this.wikidataPropertiesByIri);
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(
      DESCRIPTION_URI,
      term =>
        term.termType === "Literal"
          ? new WikidataText({literal: term, modelSet: this.modelSet})
          : null
    );
  }

  protected findAndMapStatementValue<T>(
      directClaimProperty: NamedNode,
      callback: (value: WikibaseStatementValue, statement: WikibaseStatement) => NonNullable<T> | null
  ): NonNullable<T> | null {
    for (const statement of this.statementsByDirectPropertyIri(
        directClaimProperty.value
    )) {
      for (const statementValue of statement.values) {
        const mappedObject = callback(statementValue, statement);
        if (mappedObject !== null) {
          return mappedObject;
        }
      }
    }
    return null;
  }

  protected filterAndMapStatementValues<T>(
    directClaimProperty: NamedNode,
    callback: (value: WikibaseStatementValue, statement: WikibaseStatement) => NonNullable<T> | null
  ): readonly NonNullable<T>[] {
    const result: NonNullable<T>[] = [];
    for (const statement of this.statementsByDirectPropertyIri(
        directClaimProperty.value
    )) {
      for (const statementValue of statement.values) {
        const mappedObject = callback(statementValue, statement);
        if (mappedObject !== null) {
          result.push(mappedObject);
        }
      }
    }
    return result;
  }

  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapStatementValues(wdt["P18"], statementValue => {
      if (statementValue.termType !== "NamedNode") {
        return null;
      }
      // Here we've got a wdt:P18 <image URI> statement.
      // The image may not be in the model set if e.g., another thumbnail was selected, but we'll still have the wdt:P18
      // statement pointing out it.
      return this.modelSet.imageByIri(statementValue.value);
    });
  }

  get label(): string {
    return this.prefLabel?.value ?? this.identifier.value;
  }

  get homepage(): string | null {
    return null;
  }

  get prefLabel(): Literal | null {
    return this.wikibaseItem.prefLabel;
  }

  @Memoize()
  override get propertyValues(): readonly PropertyValue[] {
    return Object.values(this.wikidataPropertiesByIri).flatMap(wikidataProperty => this.propertyValuesByWikidataProperty(wikidataProperty));
  }

  private propertyValuesByWikidataProperty(wikidataProperty: WikidataProperty): readonly PropertyValue[] {
    return this.statements.filter(statement => statement.property.node.equals(wikidataProperty.identifier)).flatMap(statement => statement.values.flatMap(statementValue => createPropertyValueFromTerm({
      dataset: this.dataset,
      modelSet: this.modelSet,
      property: wikidataProperty,
      term: statementValue,
      termGraph: this.graph
    }) ?? []));
  }

  @Memoize()
  override propertyValuesByPropertyIri(propertyIri: string): readonly PropertyValue[] {
    const wikidataProperty = this.wikidataPropertiesByIri[propertyIri];
    if (!wikidataProperty) {
      return [];
    }
    return this.propertyValuesByWikidataProperty(wikidataProperty);
  }

  get statements(): readonly WikibaseStatement[] {
    return this.wikibaseItem.statements;
  }

  @Memoize()
  private statementsByDirectPropertyIri(
    directClaimPropertyIri: string
  ): readonly WikibaseStatement[] {
    return this.statements.filter(
      statement =>
        statement.property.directClaim?.value ===
        directClaimPropertyIri
    );
  }

  override get wikidataConceptIri(): string {
    return this.identifier.value;
  }

  get wikipediaUrl(): string | null {
    return (
      this.articles.find(
        article =>
          article.inLanguage === "en" &&
          article.node.value.startsWith("https://en.wikipedia.org")
      )?.node.value ?? null
    );
  }
}
