import {
  WikibaseArticle,
  WikibaseItem,
  WikibaseStatement,
  WikibaseValue,
} from "@paradicms/wikibase";
import {BlankNode, Dataset, DefaultGraph, NamedNode} from "@rdfjs/types";
import {ModelSet} from "../ModelSet";
import {RelationsMixin} from "../RelationsMixin";
import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {NamedModel} from "../NamedModel";
import {ModelToRdfTriple} from "../ModelToRdfTriple";
import {getGraphTriples} from "../getGraphTriples";

export abstract class WikidataModel
  implements ImagesMixin, RelationsMixin, NamedModel, WikibaseItem {
  private readonly dataset: Dataset;
  private readonly wikibaseItem: WikibaseItem;

  constructor(kwds: {
    dataset: Dataset;
    modelSet: ModelSet;
    wikibaseItem: WikibaseItem;
  }) {
    this.dataset = kwds.dataset;
    this.wikibaseItem = kwds.wikibaseItem;
  }

  get altLabels(): readonly string[] {
    return this.altLabels;
  }

  get articles(): readonly WikibaseArticle[] {
    return this.wikibaseItem.articles;
  }

  get description(): string | null {
    return this.wikibaseItem.description;
  }

  protected findAndMapStatement<T>(
    property: NamedNode,
    callback: (statement: WikibaseStatement) => NonNullable<T> | null
  ): NonNullable<T> | null {
    for (const statement of this.statements) {
      const mappedObject: T | null = callback(statement);
      if (mappedObject !== null) {
        return mappedObject as NonNullable<T>;
      }
    }
    return null;
  }

  protected findAndMapStatementValue<T>(
    property: NamedNode,
    callback: (value: WikibaseValue) => NonNullable<T> | null
  ): NonNullable<T> | null {
    return this.findAndMapStatement(property, statement =>
      callback(statement.value)
    );
  }

  protected filterAndMapStatements<T>(
    property: NamedNode,
    callback: (statement: WikibaseStatement) => NonNullable<T> | null
  ): readonly NonNullable<T>[] {
    const mappedObjects: NonNullable<T>[] = [];
    for (const statement of this.statements) {
      const mappedObject: T | null = callback(statement);
      if (mappedObject !== null) {
        mappedObjects.push(mappedObject as NonNullable<T>);
      }
    }
    return mappedObjects;
  }

  protected filterAndMapStatementValues<T>(
    property: NamedNode,
    callback: (value: WikibaseValue) => NonNullable<T> | null
  ): readonly NonNullable<T>[] {
    return this.filterAndMapStatements(property, statement =>
      callback(statement.value)
    );
  }

  get graph(): BlankNode | DefaultGraph | NamedNode {
    return this.wikibaseItem.graph;
  }

  get images(): readonly Image[] {
    return [];
  }

  get identifier(): NamedNode {
    return this.wikibaseItem.identifier;
  }

  get label(): string {
    return this.prefLabel ?? this.identifier.value;
  }

  protected mapStringStatementValue(value: WikibaseValue): string | null {
    if (value.type !== "Literal") {
      return null;
    }
    return value.value.value;
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.originalImageUri === null);
  }

  get page(): string | null {
    return null;
  }

  get prefLabel(): string | null {
    return this.prefLabel;
  }

  get statements(): readonly WikibaseStatement[] {
    return this.wikibaseItem.statements;
  }

  // @Memoize()
  // statementValues(property: NamedNode): readonly WikibaseValue[] {
  //   return this.wikibaseItem.statements
  //     .filter(
  //       statement => statement.propertyDefinition.node.value === property.value
  //     )
  //     .map(statement => statement.value);
  // }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  toRdf(): readonly ModelToRdfTriple[] {
    return getGraphTriples({
      dataset: this.dataset,
      graph: this.wikibaseItem.graph,
    });
  }

  get uri(): string {
    return this.identifier.value;
  }

  get wikidataConceptUri(): string | null {
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
