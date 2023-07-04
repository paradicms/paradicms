import {WikibaseArticle, WikibaseItem, WikibaseStatement,} from "@paradicms/wikibase";
import {DatasetCore, Literal, NamedNode} from "@rdfjs/types";
import {ModelSet} from "../ModelSet";
import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {NamedModel} from "../NamedModel";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {RightsMixin} from "../RightsMixin";
import {License} from "../License";
import {RightsStatement} from "../RightsStatement";
import {AgentUnion} from "../AgentUnion";
import {Memoize} from "typescript-memoize";
import {wdt} from "@paradicms/vocabularies";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {Mixin} from "ts-mixer";

export abstract class WikidataModel
  extends Mixin(ResourceBackedNamedModel, OwlSameAsMixin)
  implements ImagesMixin, RightsMixin, NamedModel, WikibaseItem {
  private readonly wikibaseItem: WikibaseItem;

  constructor(kwds: {
    dataset: DatasetCore;
    modelSet: ModelSet;
    wikibaseItem: WikibaseItem;
  }) {
    super({
      dataset: kwds.dataset,
      graph: kwds.wikibaseItem.graph,
      identifier: kwds.wikibaseItem.identifier,
      modelSet: kwds.modelSet,
    });
    this.wikibaseItem = kwds.wikibaseItem;
  }

  get altLabels(): readonly string[] {
    return this.wikibaseItem.altLabels;
  }

  get articles(): readonly WikibaseArticle[] {
    return this.wikibaseItem.articles;
  }

  get contributors(): readonly AgentUnion[] {
    return [];
  }

  get creators(): readonly AgentUnion[] {
    return [];
  }

  protected findAndMapStatement<T>(
    directClaimProperty: NamedNode,
    callback: (statement: WikibaseStatement) => NonNullable<T> | null
  ): NonNullable<T> | null {
    for (const statement of this.statementsByDirectPropertyIri(
      directClaimProperty.value
    )) {
      const mappedObject: T | null = callback(statement);
      if (mappedObject !== null) {
        return mappedObject as NonNullable<T>;
      }
    }
    return null;
  }

  protected findAndMapStatementValue<T>(
    directClaimProperty: NamedNode,
    callback: (value: Literal | NamedNode) => NonNullable<T> | null
  ): NonNullable<T> | null {
    return this.findAndMapStatement(directClaimProperty, statement =>
      callback(statement.value)
    );
  }

  protected filterAndMapStatements<T>(
    directClaimProperty: NamedNode,
    callback: (statement: WikibaseStatement) => NonNullable<T> | null
  ): readonly NonNullable<T>[] {
    const mappedObjects: NonNullable<T>[] = [];
    for (const statement of this.statementsByDirectPropertyIri(
      directClaimProperty.value
    )) {
      const mappedObject: T | null = callback(statement);
      if (mappedObject !== null) {
        mappedObjects.push(mappedObject as NonNullable<T>);
      }
    }
    return mappedObjects;
  }

  protected filterAndMapStatementValues<T>(
    directClaimProperty: NamedNode,
    callback: (value: Literal | NamedNode) => NonNullable<T> | null
  ): readonly NonNullable<T>[] {
    return this.filterAndMapStatements(directClaimProperty, statement =>
      callback(statement.value)
    );
  }

  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapStatements(wdt["P18"], statement => {
      if (statement.value.termType !== "NamedNode") {
        return null;
      }
      // Here we've got a wdt:P18 <image URI> statement.
      // The image may not be in the model set if e.g., another thumbnail was selected, but we'll still have the wdt:P18
      // statement pointing out it.
      return this.modelSet.imageByIri(statement.value.value);
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

  get licenses(): readonly License[] {
    return [];
    // All structured data from the main, Property, Lexeme, and EntitySchema namespaces is available under the Creative Commons CC0 License; text in the other namespaces is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply.
    // return this.modelSet.licenseByIri(
    //   "http://creativecommons.org/licenses/by-sa/3.0/"
    // );
  }

  get requiresAttribution(): boolean {
    return true;
  }

  get rightsHolders(): readonly AgentUnion[] {
    return [];
  }

  get rightsStatements(): readonly RightsStatement[] {
    return [];
    // return this.modelSet.rightsStatementByIri(
    //   "http://rightsstatements.org/vocab/InC/1.0/"
    // );
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

  thumbnail(selector: ThumbnailSelector): Image | null {
    for (const image of this.images) {
      const thumbnail = image.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }

  override get wikidataConceptIri(): string | null {
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
