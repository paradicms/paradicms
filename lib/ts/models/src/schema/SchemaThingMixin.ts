import {mapTermToString} from "@paradicms/rdf";
import {schema} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {ModelIdentifier} from "../ModelIdentifier";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {Text} from "../Text";
import {ThumbnailMixin} from "../ThumbnailMixin";
import {isWikidataConceptIri} from "../isWikidataConceptIri";
import {isWikipediaUrl} from "../isWikipediaUrl";
import {mapTermToImage} from "../mapTermToImage";
import {mapTermToText} from "../mapTermToText";

export abstract class SchemaThingMixin
  extends Mixin(ResourceBackedModelMixin, SomeImageThumbnailMixin)
  implements ImagesMixin, ThumbnailMixin {
  @Memoize()
  get alternateNames(): readonly string[] {
    return this.filterAndMapObjects(schema.alternateName, mapTermToString);
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(schema.description, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapObjects(schema.image, term =>
      mapTermToImage(this, term)
    );
  }

  get label(): string | null {
    return this.name;
  }

  @Memoize()
  get name(): string | null {
    return this.findAndMapObject(schema.name, mapTermToString);
  }

  @Memoize()
  get sameAsIdentifiers(): readonly ModelIdentifier[] {
    return this.filterAndMapObjects(schema.sameAs, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
          return term as ModelIdentifier;
        default:
          return null;
      }
    });
  }

  @Memoize()
  get urls(): readonly string[] {
    return this.filterAndMapObjects(schema.url, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }

  @Memoize()
  get wikidataConceptIri(): string | null {
    for (const p of [schema.sameAs, schema.url]) {
      const wikidataConceptIri = this.findAndMapObject(p, term =>
        term.termType === "NamedNode" && isWikidataConceptIri(term.value)
          ? term.value
          : null
      );
      if (wikidataConceptIri) {
        return wikidataConceptIri;
      }
    }
    return null;
  }

  @Memoize()
  get wikipediaUrl(): string | null {
    return this.urls.find(url => isWikipediaUrl(url)) ?? null;
  }
}
