import {WikibaseArticle, WikibaseItem, WikibaseStatement, WikibaseStatementValue,} from "@paradicms/wikibase";
import {DatasetCore, NamedNode, Term} from "@rdfjs/types";
import {ModelSet} from "../ModelSet";
import {Image} from "../Image";
import {Memoize} from "typescript-memoize";
import {wdt} from "@paradicms/vocabularies";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {Mixin} from "ts-mixer";
import {WikibaseItemSet} from "../wikibase/WikibaseItemSet";
import {PropertyValue} from "../PropertyValue";
import {WikidataProperty} from "./WikidataProperty";
import {createPropertyValueFromTerm} from "../createPropertyValueFromTerm";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {Model} from "../Model";
import {ResourceBackedModel} from "../ResourceBackedModel";
import invariant from "ts-invariant";

const ensureModelGraphIdentifier = (graph: Term) => {
  invariant(graph.termType === "NamedNode");
  return graph as NamedNode;
}

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

  get altLabels(): readonly string[] {
    return this.wikibaseItem.altLabels;
  }

  get articles(): readonly WikibaseArticle[] {
    return this.wikibaseItem.articles;
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
    return this.prefLabel ?? this.identifier.value;
  }

  get homepage(): string | null {
    return null;
  }

  get prefLabel(): string | null {
    return this.wikibaseItem.prefLabel;
  }

  @Memoize()
  override get propertyValues(): readonly PropertyValue[] {
    return Object.values(this.wikidataPropertiesByIri).flatMap(wikidataProperty => this.propertyValuesByWikidataProperty(wikidataProperty));
  }

  private propertyValuesByWikidataProperty(wikidataProperty: WikidataProperty): readonly PropertyValue[] {
    return this.statements.filter(statement => statement.propertyDefinition.node.equals(wikidataProperty.identifier)).flatMap(statement => statement.values.flatMap(statementValue => createPropertyValueFromTerm({
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
        statement.propertyDefinition.directClaim?.value ===
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
