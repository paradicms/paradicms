import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {schema} from "@paradicms/vocabularies";
import {Text} from "../Text";
import {mapTermToImage} from "../mapTermToImage";
import {mapTermToText} from "../mapTermToText";
import {Memoize} from "typescript-memoize";
import {mapTermToString} from "@paradicms/rdf";
import {ModelIdentifier} from "../ModelIdentifier";
import {isWikidataConceptIri} from "../isWikidataConceptIri";
import {isWikipediaUrl} from "../isWikipediaUrl";

export abstract class SchemaThingMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
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

  thumbnail(selector: ThumbnailSelector): Image | null {
    for (const image of this.images) {
      const thumbnail = image.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }

  @Memoize()
  get urls(): readonly string[] {
    return this.filterAndMapObjects(schema.url, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }

  @Memoize()
  get wikipediaUrl(): string | null {
    return this.urls.find(url => isWikipediaUrl(url)) ?? null;
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
}
